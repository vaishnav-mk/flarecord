import { GatewayOpcode, GatewayEvent } from "../types/constants";
import {
  GatewayPayload,
  HelloData,
  ReadyData,
  GatewayState,
  MessageData,
} from "../types";
import type { DurableObjectState } from "@cloudflare/workers-types";
import type { GatewayMessageCreateDispatchData } from "discord-api-types/v10";
import type { Logger } from "../utils/logger";

export class GatewayHandlers {
  constructor(
    private ctx: DurableObjectState,
    private storageKey: string,
    private sequence: { value: number | null },
    private onReady: (data: ReadyData) => void,
    private onMessage: (data: MessageData) => void,
    private onDispatch: ((event: string, data: unknown) => void) | undefined,
    private logger: Logger
  ) {}

  async handleHello(data: HelloData): Promise<void> {
    this.logger.debug("Handling HELLO", { heartbeatInterval: data.heartbeat_interval });
    const state = await this.getState();
    await this.ctx.storage.put(this.storageKey, {
      heartbeatInterval: data.heartbeat_interval,
      sequence: this.sequence.value,
      sessionId: state?.sessionId ?? null,
      reconnectAttempts: 0,
      shouldResume: state?.sessionId !== null && state?.sessionId !== undefined,
    } satisfies GatewayState);
  }

  async handleReady(data: ReadyData): Promise<void> {
    this.logger.info("Bot ready", { userId: data.user.id, username: data.user.username });
    const state = await this.getState();
    if (state) {
      await this.ctx.storage.put(this.storageKey, {
        ...state,
        sessionId: data.session_id,
        shouldResume: true,
        reconnectAttempts: 0,
      } satisfies GatewayState);
    }
    this.onReady(data);
  }

  handleResumed(): void {
    this.logger.info("Session resumed");
    this.ctx.storage.get(this.storageKey).then((state) => {
      const gatewayState = this.validateState(state);
      if (gatewayState) {
        this.ctx.storage.put(this.storageKey, {
          ...gatewayState,
          reconnectAttempts: 0,
        } satisfies GatewayState);
      }
    });
  }

  handleDispatch(payload: GatewayPayload): void {
    if (payload.s !== null && payload.s !== undefined) {
      this.sequence.value = payload.s;
      this.updateSequenceInStorage();
    }

    if (!payload.t) {
      return;
    }

    const event = payload.t;
    if (event === GatewayEvent.READY) {
      this.handleReady(payload.d as ReadyData);
    } else if (event === GatewayEvent.MESSAGE_CREATE) {
      this.handleMessageCreate(payload);
    } else if (event === GatewayEvent.RESUMED) {
      this.handleResumed();
    }

    if (this.onDispatch) {
      this.onDispatch(event, payload.d);
    }
  }

  private handleMessageCreate(payload: GatewayPayload): void {
    const messageData = payload.d as GatewayMessageCreateDispatchData;
    const opcodeName = this.getOpcodeName(payload.op);
    
    const enrichedMessage: MessageData = {
      ...messageData,
      _gatewayMetadata: {
        opcode: payload.op,
        opcodeName,
        event: payload.t ?? "UNKNOWN",
        sequence: payload.s ?? null,
      },
    };
    this.onMessage(enrichedMessage);
    }

  private getOpcodeName(opcode: number): string {
    const entry = Object.entries(GatewayOpcode).find(
      ([, value]) => value === opcode
    );
    return entry?.[0] ?? "UNKNOWN";
  }

  private async getState(): Promise<GatewayState | null> {
    const state = await this.ctx.storage.get(this.storageKey);
    return this.validateState(state);
  }

  private validateState(state: unknown): GatewayState | null {
    if (state === null || state === undefined) {
      return null;
    }
    if (typeof state === "object" && "heartbeatInterval" in state) {
      return state as GatewayState;
    }
    return null;
  }

  private updateSequenceInStorage(): void {
    this.ctx.storage.get(this.storageKey).then((state) => {
      const gatewayState = this.validateState(state);
      if (gatewayState) {
        this.ctx.storage.put(this.storageKey, {
          ...gatewayState,
          sequence: this.sequence.value,
        } satisfies GatewayState);
      }
    });
  }
}
