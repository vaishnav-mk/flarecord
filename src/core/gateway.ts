import { GatewayConnection } from "./connection";
import {
  ReadyData,
  GatewayConfig,
  DEFAULT_IDENTIFY_PROPERTIES,
  MessageData,
} from "../types";
import {
  DEFAULT_RECONNECT_DELAYS,
  DEFAULT_STORAGE_KEY,
  DEFAULT_MAX_RECONNECT_ATTEMPTS,
} from "../types/constants";
import { createLogger, LogLevel } from "../utils/logger";
import type { DurableObjectState, WebSocket } from "@cloudflare/workers-types";

export class DiscordGateway {
  private connection: GatewayConnection;

  constructor(
    token: string,
    intents: number,
    ctx: DurableObjectState,
    config?: Partial<GatewayConfig>
  ) {
    const storageKey = config?.storageKey || DEFAULT_STORAGE_KEY;
    const identifyProperties =
      config?.identifyProperties || DEFAULT_IDENTIFY_PROPERTIES;
    const maxReconnectAttempts =
      config?.maxReconnectAttempts || DEFAULT_MAX_RECONNECT_ATTEMPTS;
    const reconnectDelays =
      config?.reconnectDelays || DEFAULT_RECONNECT_DELAYS;
    const logger = config?.logger || createLogger({
      level: config?.debug ? LogLevel.DEBUG : LogLevel.INFO,
    });

    this.connection = new GatewayConnection(token, intents, ctx, {
      storageKey,
      identifyProperties,
      maxReconnectAttempts,
      reconnectDelays,
      onDispatch: config?.onDispatch,
      logger,
      debug: config?.debug,
    });
  }

  get ws(): WebSocket | null {
    return this.connection.ws;
  }

  get isConnected(): boolean {
    return this.connection.isConnected;
  }

  async connect(): Promise<void> {
    await this.connection.connect();
  }

  async disconnect(): Promise<void> {
    await this.connection.disconnect();
  }

  async sendHeartbeat(): Promise<void> {
    await this.connection.sendHeartbeat();
  }

  onReady(callback: (data: ReadyData) => void): void {
    this.connection.onReady(callback);
  }

  onMessage(callback: (data: MessageData) => void): void {
    this.connection.onMessage(callback);
  }

  onError(callback: (error: Error) => void): void {
    this.connection.onError(callback);
  }
}
