import { GATEWAY_BASE_URL, WEBSOCKET_READY_STATE_OPEN } from "../types/constants";
import { GatewayPayload, ReadyData, MessageData } from "../types";
import { WebSocketManager } from "../utils/websocket";
import { GatewayHandlers } from "./handlers";
import { ReconnectManager } from "../utils/reconnect";
import { SessionManager } from "../utils/session";
import { HeartbeatManager } from "./heartbeat";
import { MessageHandler } from "./message-handler";
import { Logger, LogLevel, createLogger } from "../utils/logger";
import type { DurableObjectState, WebSocket } from "@cloudflare/workers-types";

export class GatewayConnection {
  private wsManager: WebSocketManager;
  private token: string;
  private ctx: DurableObjectState;
  private storageKey: string;
  private sequence: { value: number | null } = { value: null };
  private handlers: GatewayHandlers;
  private reconnectManager: ReconnectManager;
  private sessionManager: SessionManager;
  private heartbeatManager: HeartbeatManager;
  private messageHandler: MessageHandler;
  private onDispatch?: (event: string, data: unknown) => void;
  private logger: Logger;
  private isShuttingDown = false;

  private onReadyCallback: ((data: ReadyData) => void) | null = null;
  private onMessageCallback: ((data: MessageData) => void) | null = null;
  private onErrorCallback: ((error: Error) => void) | null = null;

  constructor(
    token: string,
    intents: number,
    ctx: DurableObjectState,
    config: {
      storageKey: string;
      identifyProperties: { os: string; browser: string; device: string };
      maxReconnectAttempts?: number;
      reconnectDelays?: {
        initial: number;
        max: number;
        backoffMultiplier: number;
      };
      onDispatch?: (event: string, data: unknown) => void;
      logger?: Logger;
      debug?: boolean;
    }
  ) {
    this.token = token;
    this.ctx = ctx;
    this.storageKey = config.storageKey;
    this.onDispatch = config.onDispatch;
    this.logger = config.logger || createLogger({
      level: config.debug ? LogLevel.DEBUG : LogLevel.INFO,
    });

    this.wsManager = new WebSocketManager();
    this.reconnectManager = new ReconnectManager(
      config.maxReconnectAttempts,
      config.reconnectDelays
    );
    this.sessionManager = new SessionManager(
      token,
      ctx,
      this.storageKey,
      config.identifyProperties,
      (p: GatewayPayload) => this.wsManager.send(p)
    );
    this.heartbeatManager = new HeartbeatManager(
      ctx,
      this.storageKey,
      this.sequence,
      (p: GatewayPayload) => this.wsManager.send(p)
    );
    this.handlers = new GatewayHandlers(
      ctx,
      this.storageKey,
      this.sequence,
      (data) => this.onReadyCallback?.(data),
      (data) => this.onMessageCallback?.(data),
      this.onDispatch,
      this.logger
    );
    this.messageHandler = new MessageHandler(
      this.handlers,
      this.sessionManager,
      this.heartbeatManager,
      (shouldResume) => this.reconnect(shouldResume),
      ctx,
      this.storageKey,
      intents,
      this.logger
    );
  }

  get ws(): WebSocket | null {
    return this.wsManager.ws;
  }

  get isConnected(): boolean {
    return this.wsManager.ws?.readyState === WEBSOCKET_READY_STATE_OPEN;
  }

  async connect(): Promise<void> {
    if (this.isShuttingDown) {
      this.logger.warn("Connection attempt blocked: shutdown in progress");
      return;
    }

    try {
      this.logger.debug("Fetching gateway URL");
      const gatewayUrl = await this.getGatewayUrl();
      this.logger.debug("Connecting to gateway", { url: gatewayUrl });
      await this.wsManager.connect(gatewayUrl);
      this.wsManager.setupEventListeners(
        (data: string | ArrayBuffer | ArrayBufferView) => this.handleMessage(data),
        async (code: number, reason: string) => await this.handleClose(code, reason),
        (error: Error) => this.handleWebSocketError(error)
      );
      this.reconnectManager.reset();
      this.logger.info("Gateway connection established");
    } catch (error) {
      const err = error instanceof Error ? error : new Error("Connection failed");
      this.logger.error("Failed to connect to gateway", err);
      this.onErrorCallback?.(err);
      if (!this.isShuttingDown) {
      await this.reconnectManager.scheduleReconnect(() => this.connect());
      }
    }
  }

  private async getGatewayUrl(): Promise<string> {
    const response = await fetch(GATEWAY_BASE_URL, {
      headers: { Authorization: `Bot ${this.token}` },
    });

    if (!response.ok) {
      throw new Error(`Failed to get Gateway URL: ${response.status}`);
    }

    const data = (await response.json()) as { url: string };
    const wsUrl = data.url.replace(/^wss:/, "https:");
    return `${wsUrl}?v=10&encoding=json`;
  }

  private async handleMessage(
    data: string | ArrayBuffer | ArrayBufferView
  ): Promise<void> {
    try {
      const text = this.wsManager.decodeMessage(data);
      const payload: GatewayPayload = JSON.parse(text);
      this.logger.debug("Received gateway payload", { op: payload.op, t: payload.t });
      await this.messageHandler.handle(payload);
    } catch (error) {
      const err = error instanceof Error ? error : new Error("Message handling failed");
      this.logger.error("Error handling gateway message", err);
      this.onErrorCallback?.(err);
    }
  }

  private async handleClose(code: number, reason: string): Promise<void> {
    this.logger.warn("WebSocket closed", { code, reason });
    await this.heartbeatManager.cancel();
    
    if (this.isShuttingDown) {
      this.logger.debug("Shutdown in progress, not reconnecting");
      return;
    }

    const shouldResume = this.messageHandler.shouldResume(code);
    this.logger.debug("Determining reconnect strategy", { shouldResume, code });
    await this.reconnect(shouldResume);
  }

  private handleWebSocketError(error: Error): void {
    this.logger.error("WebSocket error", error);
    this.onErrorCallback?.(error);
    
    if (!this.isShuttingDown && !this.isConnected) {
      this.logger.debug("Scheduling reconnect due to WebSocket error");
      this.reconnectManager.scheduleReconnect(() => this.connect()).catch((err) => {
        this.logger.error("Failed to schedule reconnect", err);
      });
    }
  }

  private async reconnect(shouldResume: boolean): Promise<void> {
    if (this.isShuttingDown) {
      this.logger.debug("Reconnect blocked: shutdown in progress");
      return;
    }

    try {
    await this.reconnectManager.reconnect(
      shouldResume,
      this.ctx,
      this.storageKey,
      () => this.connect(),
        () => {
          this.logger.debug("Closing WebSocket connection");
          this.wsManager.close();
        }
    );
    } catch (error) {
      const err = error instanceof Error ? error : new Error("Reconnect failed");
      this.logger.error("Reconnection failed", err);
      this.onErrorCallback?.(err);
    }
  }

  async disconnect(): Promise<void> {
    this.logger.info("Disconnecting from gateway");
    this.isShuttingDown = true;
    await this.heartbeatManager.cancel();
    this.wsManager.close();
    this.reconnectManager.reset();
  }

  onReady(callback: (data: ReadyData) => void): void {
    this.onReadyCallback = callback;
  }

  onMessage(callback: (data: MessageData) => void): void {
    this.onMessageCallback = callback;
  }

  onError(callback: (error: Error) => void): void {
    this.onErrorCallback = callback;
  }

  async sendHeartbeat(): Promise<void> {
    if (!this.isConnected) {
      await this.heartbeatManager.cancel();
      return;
    }
    await this.heartbeatManager.send();
  }
}
