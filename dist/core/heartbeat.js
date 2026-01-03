import { GatewayOpcode } from "../types/constants";
export class HeartbeatManager {
    ctx;
    storageKey;
    sendFn;
    heartbeatInterval = null;
    sequence;
    constructor(ctx, storageKey, sequence, sendFn) {
        this.ctx = ctx;
        this.storageKey = storageKey;
        this.sendFn = sendFn;
        this.sequence = sequence;
    }
    setInterval(interval) {
        this.heartbeatInterval = interval;
    }
    async send() {
        if (!this.heartbeatInterval) {
            return;
        }
        const heartbeat = {
            op: GatewayOpcode.HEARTBEAT,
            d: this.sequence.value,
        };
        this.sendFn(heartbeat);
        const nextHeartbeat = Date.now() + this.heartbeatInterval;
        await this.ctx.storage.setAlarm(nextHeartbeat);
    }
    async cancel() {
        await this.ctx.storage.deleteAlarm().catch(() => { });
    }
    async updateAck() {
        const state = await this.getState();
        if (state) {
            await this.ctx.storage.put(this.storageKey, {
                ...state,
                lastHeartbeatAck: Date.now(),
            });
        }
    }
    async getState() {
        const state = await this.ctx.storage.get(this.storageKey);
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
//# sourceMappingURL=heartbeat.js.map