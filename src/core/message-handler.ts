import {
  GatewayOpcode,
  RESUMEABLE_CLOSE_CODES,
  WebSocketCloseCode,
} from "../types/constants";
import { GatewayPayload, HelloData, GatewayState } from "../types";
import { GatewayHandlers } from "./handlers";
import { SessionManager } from "../utils/session";
import { HeartbeatManager } from "./heartbeat";
import type { DurableObjectState } from "@cloudflare/workers-types";
import type { Logger } from "../utils/logger";

export class MessageHandler {
  constructor(
    private handlers: GatewayHandlers,
    private sessionManager: SessionManager,
    private heartbeatManager: HeartbeatManager,
    private reconnectFn: (shouldResume: boolean) => Promise<void>,
    private ctx: DurableObjectState,
    private storageKey: string,
    private intents: number,
    private logger: Logger
  ) {}

  async handle(payload: GatewayPayload): Promise<void> {
    const opcode = payload.op;
    
    if (opcode === GatewayOpcode.HELLO) {
        await this.handleHello(payload.d as HelloData);
    } else if (opcode === GatewayOpcode.HEARTBEAT_ACK) {
        await this.heartbeatManager.updateAck();
    } else if (opcode === GatewayOpcode.DISPATCH) {
        this.handlers.handleDispatch(payload);
    } else if (opcode === GatewayOpcode.RECONNECT) {
      this.logger.warn("Received RECONNECT opcode");
        await this.reconnectFn(true);
    } else if (opcode === GatewayOpcode.INVALID_SESSION) {
        await this.handleInvalidSession(payload.d as boolean);
    } else {
      this.logger.warn("Unknown opcode received", { opcode });
    }
  }

  private async handleHello(data: HelloData): Promise<void> {
    this.logger.debug("Handling HELLO", { heartbeatInterval: data.heartbeat_interval });
    this.heartbeatManager.setInterval(data.heartbeat_interval);
    await this.handlers.handleHello(data);

    const resumeData = await this.sessionManager.getResumeData();
    const state = await this.getState();

    if (resumeData && state?.shouldResume) {
      this.logger.debug("Resuming session", { sessionId: resumeData.sessionId });
      this.sessionManager.sendResume(resumeData.sessionId, resumeData.sequence);
    } else {
      this.logger.debug("Identifying with new session");
      this.sessionManager.sendIdentify(this.intents);
    }

    await this.heartbeatManager.send();
  }

  private async handleInvalidSession(resumable: boolean): Promise<void> {
    this.logger.warn("Invalid session", { resumable });
    if (resumable) {
      await this.reconnectFn(true);
    } else {
      const state = await this.getState();
      if (state) {
        await this.ctx.storage.put(this.storageKey, {
          ...state,
          shouldResume: false,
          sessionId: null,
        } satisfies GatewayState);
      }
      await this.reconnectFn(false);
    }
  }

  shouldResume(code: number): boolean {
    const isResumable = RESUMEABLE_CLOSE_CODES.includes(code as WebSocketCloseCode);
    this.logger.debug("Checking if should resume", { code, isResumable });
    return isResumable;
  }

  private async getState(): Promise<GatewayState | null> {
    const state = await this.ctx.storage.get(this.storageKey);
    if (state === null || state === undefined) {
      return null;
    }
    if (typeof state === "object" && "heartbeatInterval" in state) {
      return state as GatewayState;
    }
    return null;
  }
}
