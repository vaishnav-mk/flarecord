import { GatewayPayload } from "../types";
import { GatewayHandlers } from "./handlers";
import { SessionManager } from "../utils/session";
import { HeartbeatManager } from "./heartbeat";
import type { DurableObjectState } from "@cloudflare/workers-types";
import type { Logger } from "../utils/logger";
export declare class MessageHandler {
    private handlers;
    private sessionManager;
    private heartbeatManager;
    private reconnectFn;
    private ctx;
    private storageKey;
    private intents;
    private logger;
    constructor(handlers: GatewayHandlers, sessionManager: SessionManager, heartbeatManager: HeartbeatManager, reconnectFn: (shouldResume: boolean) => Promise<void>, ctx: DurableObjectState, storageKey: string, intents: number, logger: Logger);
    handle(payload: GatewayPayload): Promise<void>;
    private handleHello;
    private handleInvalidSession;
    shouldResume(code: number): boolean;
    private getState;
}
//# sourceMappingURL=message-handler.d.ts.map