import { DEFAULT_RECONNECT_DELAYS } from "../types/constants";
import { GatewayState } from "../types";
import type { DurableObjectState } from "@cloudflare/workers-types";

export class ReconnectManager {
  private reconnectAttempts = 0;
  private maxReconnectAttempts: number;
  private isReconnecting = false;
  private reconnectDelays: {
    initial: number;
    max: number;
    backoffMultiplier: number;
  };

  constructor(
    maxReconnectAttempts: number = 5,
    reconnectDelays = DEFAULT_RECONNECT_DELAYS
  ) {
    this.maxReconnectAttempts = maxReconnectAttempts;
    this.reconnectDelays = reconnectDelays;
  }

  async scheduleReconnect(connectFn: () => Promise<void>): Promise<void> {
    if (
      this.isReconnecting ||
      this.reconnectAttempts >= this.maxReconnectAttempts
    ) {
      return;
    }

    this.isReconnecting = true;
    const delay = this.calculateDelay();
    await new Promise((resolve) => setTimeout(resolve, delay));

    this.reconnectAttempts++;
    this.isReconnecting = false;
    await connectFn();
  }

  async reconnect(
    shouldResume: boolean,
    ctx: DurableObjectState,
    storageKey: string,
    connectFn: () => Promise<void>,
    closeFn: () => void
  ): Promise<void> {
    if (this.isReconnecting) {
      return;
    }
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      throw new Error("Max reconnect attempts reached");
    }

    this.isReconnecting = true;
    await ctx.storage.deleteAlarm().catch(() => {});
    closeFn();

    const state = await this.getState(ctx, storageKey);
    if (state) {
      await ctx.storage.put(storageKey, {
        ...state,
        shouldResume: shouldResume && state.sessionId !== null,
        reconnectAttempts: this.reconnectAttempts + 1,
      } satisfies GatewayState);
    }

    const delay = this.calculateDelay();
    await new Promise((resolve) => setTimeout(resolve, delay));

    this.reconnectAttempts++;
    this.isReconnecting = false;
    await connectFn();
  }

  reset(): void {
    this.reconnectAttempts = 0;
    this.isReconnecting = false;
  }

  private calculateDelay(): number {
    return Math.min(
      this.reconnectDelays.initial *
        Math.pow(
          this.reconnectDelays.backoffMultiplier,
          this.reconnectAttempts
        ),
      this.reconnectDelays.max
    );
  }

  private async getState(
    ctx: DurableObjectState,
    storageKey: string
  ): Promise<GatewayState | null> {
    const state = await ctx.storage.get(storageKey);
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
