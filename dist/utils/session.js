import { GatewayOpcode } from "../types/constants";
export class SessionManager {
    token;
    ctx;
    storageKey;
    identifyProperties;
    sendFn;
    constructor(token, ctx, storageKey, identifyProperties, sendFn) {
        this.token = token;
        this.ctx = ctx;
        this.storageKey = storageKey;
        this.identifyProperties = identifyProperties;
        this.sendFn = sendFn;
    }
    async getResumeData() {
        const state = await this.getState();
        if (state?.sessionId && state.sequence !== null) {
            return { sessionId: state.sessionId, sequence: state.sequence };
        }
        return null;
    }
    sendResume(sessionId, sequence) {
        const resume = {
            op: GatewayOpcode.RESUME,
            d: {
                token: this.token,
                session_id: sessionId,
                seq: sequence,
            },
        };
        this.sendFn(resume);
    }
    sendIdentify(intents) {
        const identify = {
            op: GatewayOpcode.IDENTIFY,
            d: {
                token: this.token,
                properties: this.identifyProperties,
                intents: intents,
            },
        };
        this.sendFn(identify);
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
//# sourceMappingURL=session.js.map