import { GatewayPayload } from "../types";
import type { DurableObjectState } from "@cloudflare/workers-types";
export declare class SessionManager {
    private token;
    private ctx;
    private storageKey;
    private identifyProperties;
    private sendFn;
    constructor(token: string, ctx: DurableObjectState, storageKey: string, identifyProperties: {
        os: string;
        browser: string;
        device: string;
    }, sendFn: (payload: GatewayPayload) => void);
    getResumeData(): Promise<{
        sessionId: string;
        sequence: number;
    } | null>;
    sendResume(sessionId: string, sequence: number): void;
    sendIdentify(intents: number): void;
    private getState;
    private validateState;
}
//# sourceMappingURL=session.d.ts.map