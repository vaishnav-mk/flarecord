import { GatewayOpcode, GatewayEvent } from "../types/constants";
export class GatewayHandlers {
    ctx;
    storageKey;
    sequence;
    onReady;
    onMessage;
    onDispatch;
    logger;
    constructor(ctx, storageKey, sequence, onReady, onMessage, onDispatch, logger) {
        this.ctx = ctx;
        this.storageKey = storageKey;
        this.sequence = sequence;
        this.onReady = onReady;
        this.onMessage = onMessage;
        this.onDispatch = onDispatch;
        this.logger = logger;
    }
    async handleHello(data) {
        this.logger.debug("Handling HELLO", { heartbeatInterval: data.heartbeat_interval });
        const state = await this.getState();
        await this.ctx.storage.put(this.storageKey, {
            heartbeatInterval: data.heartbeat_interval,
            sequence: this.sequence.value,
            sessionId: state?.sessionId ?? null,
            reconnectAttempts: 0,
            shouldResume: state?.sessionId !== null && state?.sessionId !== undefined,
        });
    }
    async handleReady(data) {
        this.logger.info("Bot ready", { userId: data.user.id, username: data.user.username });
        const state = await this.getState();
        if (state) {
            await this.ctx.storage.put(this.storageKey, {
                ...state,
                sessionId: data.session_id,
                shouldResume: true,
                reconnectAttempts: 0,
            });
        }
        this.onReady(data);
    }
    handleResumed() {
        this.logger.info("Session resumed");
        this.ctx.storage.get(this.storageKey).then((state) => {
            const gatewayState = this.validateState(state);
            if (gatewayState) {
                this.ctx.storage.put(this.storageKey, {
                    ...gatewayState,
                    reconnectAttempts: 0,
                });
            }
        });
    }
    handleDispatch(payload) {
        if (payload.s !== null && payload.s !== undefined) {
            this.sequence.value = payload.s;
            this.updateSequenceInStorage();
        }
        if (!payload.t) {
            return;
        }
        const event = payload.t;
        if (event === GatewayEvent.READY) {
            this.handleReady(payload.d);
        }
        else if (event === GatewayEvent.MESSAGE_CREATE) {
            this.handleMessageCreate(payload);
        }
        else if (event === GatewayEvent.RESUMED) {
            this.handleResumed();
        }
        if (this.onDispatch) {
            this.onDispatch(event, payload.d);
        }
    }
    handleMessageCreate(payload) {
        const messageData = payload.d;
        const opcodeName = this.getOpcodeName(payload.op);
        const enrichedMessage = {
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
    getOpcodeName(opcode) {
        const entry = Object.entries(GatewayOpcode).find(([, value]) => value === opcode);
        return entry?.[0] ?? "UNKNOWN";
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
    updateSequenceInStorage() {
        this.ctx.storage.get(this.storageKey).then((state) => {
            const gatewayState = this.validateState(state);
            if (gatewayState) {
                this.ctx.storage.put(this.storageKey, {
                    ...gatewayState,
                    sequence: this.sequence.value,
                });
            }
        });
    }
}
//# sourceMappingURL=handlers.js.map