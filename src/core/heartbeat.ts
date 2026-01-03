import { GatewayOpcode } from "../types/constants";
import { GatewayPayload, GatewayState } from "../types";
import type { DurableObjectState } from "@cloudflare/workers-types";

export class HeartbeatManager {
  private heartbeatInterval: number | null = null;
  private sequence: { value: number | null };

  constructor(
    private ctx: DurableObjectState,
    private storageKey: string,
    sequence: { value: number | null },
    private sendFn: (payload: GatewayPayload) => void
  ) {
    this.sequence = sequence;
  }

  setInterval(interval: number): void {
    this.heartbeatInterval = interval;
  }

  async send(): Promise<void> {
    if (!this.heartbeatInterval) {
      return;
    }

    const heartbeat: GatewayPayload = {
      op: GatewayOpcode.HEARTBEAT,
      d: this.sequence.value,
    };
    this.sendFn(heartbeat);

    const nextHeartbeat = Date.now() + this.heartbeatInterval;
    await this.ctx.storage.setAlarm(nextHeartbeat);
  }

  async cancel(): Promise<void> {
    await this.ctx.storage.deleteAlarm().catch(() => {});
  }

  async updateAck(): Promise<void> {
    const state = await this.getState();
    if (state) {
      await this.ctx.storage.put(this.storageKey, {
        ...state,
        lastHeartbeatAck: Date.now(),
      } satisfies GatewayState);
    }
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
}
