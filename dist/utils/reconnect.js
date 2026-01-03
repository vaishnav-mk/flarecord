import { DEFAULT_RECONNECT_DELAYS } from "../types/constants";
export class ReconnectManager {
    reconnectAttempts = 0;
    maxReconnectAttempts;
    isReconnecting = false;
    reconnectDelays;
    constructor(maxReconnectAttempts = 5, reconnectDelays = DEFAULT_RECONNECT_DELAYS) {
        this.maxReconnectAttempts = maxReconnectAttempts;
        this.reconnectDelays = reconnectDelays;
    }
    async scheduleReconnect(connectFn) {
        if (this.isReconnecting ||
            this.reconnectAttempts >= this.maxReconnectAttempts) {
            return;
        }
        this.isReconnecting = true;
        const delay = this.calculateDelay();
        await new Promise((resolve) => setTimeout(resolve, delay));
        this.reconnectAttempts++;
        this.isReconnecting = false;
        await connectFn();
    }
    async reconnect(shouldResume, ctx, storageKey, connectFn, closeFn) {
        if (this.isReconnecting) {
            return;
        }
        if (this.reconnectAttempts >= this.maxReconnectAttempts) {
            throw new Error("Max reconnect attempts reached");
        }
        this.isReconnecting = true;
        await ctx.storage.deleteAlarm().catch(() => { });
        closeFn();
        const state = await this.getState(ctx, storageKey);
        if (state) {
            await ctx.storage.put(storageKey, {
                ...state,
                shouldResume: shouldResume && state.sessionId !== null,
                reconnectAttempts: this.reconnectAttempts + 1,
            });
        }
        const delay = this.calculateDelay();
        await new Promise((resolve) => setTimeout(resolve, delay));
        this.reconnectAttempts++;
        this.isReconnecting = false;
        await connectFn();
    }
    reset() {
        this.reconnectAttempts = 0;
        this.isReconnecting = false;
    }
    calculateDelay() {
        return Math.min(this.reconnectDelays.initial *
            Math.pow(this.reconnectDelays.backoffMultiplier, this.reconnectAttempts), this.reconnectDelays.max);
    }
    async getState(ctx, storageKey) {
        const state = await ctx.storage.get(storageKey);
        return this.validateState(state);
    }
    validateState(state) {
        if (state === null || state === undefined) {
            return null;
        }
        if (typeof state === "object" && "heartbeatInterval" in state) {
            return state;
        }
        return null;
    }
}
//# sourceMappingURL=reconnect.js.map