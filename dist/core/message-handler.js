import { GatewayOpcode, RESUMEABLE_CLOSE_CODES, } from "../types/constants";
export class MessageHandler {
    handlers;
    sessionManager;
    heartbeatManager;
    reconnectFn;
    ctx;
    storageKey;
    intents;
    logger;
    constructor(handlers, sessionManager, heartbeatManager, reconnectFn, ctx, storageKey, intents, logger) {
        this.handlers = handlers;
        this.sessionManager = sessionManager;
        this.heartbeatManager = heartbeatManager;
        this.reconnectFn = reconnectFn;
        this.ctx = ctx;
        this.storageKey = storageKey;
        this.intents = intents;
        this.logger = logger;
    }
    async handle(payload) {
        const opcode = payload.op;
        if (opcode === GatewayOpcode.HELLO) {
            await this.handleHello(payload.d);
        }
        else if (opcode === GatewayOpcode.HEARTBEAT_ACK) {
            await this.heartbeatManager.updateAck();
        }
        else if (opcode === GatewayOpcode.DISPATCH) {
            this.handlers.handleDispatch(payload);
        }
        else if (opcode === GatewayOpcode.RECONNECT) {
            this.logger.warn("Received RECONNECT opcode");
            await this.reconnectFn(true);
        }
        else if (opcode === GatewayOpcode.INVALID_SESSION) {
            await this.handleInvalidSession(payload.d);
        }
        else {
            this.logger.warn("Unknown opcode received", { opcode });
        }
    }
    async handleHello(data) {
        this.logger.debug("Handling HELLO", { heartbeatInterval: data.heartbeat_interval });
        this.heartbeatManager.setInterval(data.heartbeat_interval);
        await this.handlers.handleHello(data);
        const resumeData = await this.sessionManager.getResumeData();
        const state = await this.getState();
        if (resumeData && state?.shouldResume) {
            this.logger.debug("Resuming session", { sessionId: resumeData.sessionId });
            this.sessionManager.sendResume(resumeData.sessionId, resumeData.sequence);
        }
        else {
            this.logger.debug("Identifying with new session");
            this.sessionManager.sendIdentify(this.intents);
        }
        await this.heartbeatManager.send();
    }
    async handleInvalidSession(resumable) {
        this.logger.warn("Invalid session", { resumable });
        if (resumable) {
            await this.reconnectFn(true);
        }
        else {
            const state = await this.getState();
            if (state) {
                await this.ctx.storage.put(this.storageKey, {
                    ...state,
                    shouldResume: false,
                    sessionId: null,
                });
            }
            await this.reconnectFn(false);
        }
    }
    shouldResume(code) {
        const isResumable = RESUMEABLE_CLOSE_CODES.includes(code);
        this.logger.debug("Checking if should resume", { code, isResumable });
        return isResumable;
    }
    async getState() {
        const state = await this.ctx.storage.get(this.storageKey);
        if (state === null || state === undefined) {
            return null;
        }
        if (typeof state === "object" && "heartbeatInterval" in state) {
            return state;
        }
        return null;
    }
}
//# sourceMappingURL=message-handler.js.map