import { GatewayPayload } from "../types";
import type { DurableObjectState } from "@cloudflare/workers-types";
export declare class HeartbeatManager {
    private ctx;
    private storageKey;
    private sendFn;
    private heartbeatInterval;
    private sequence;
    constructor(ctx: DurableObjectState, storageKey: string, sequence: {
        value: number | null;
    }, sendFn: (payload: GatewayPayload) => void);
    setInterval(interval: number): void;
    send(): Promise<void>;
    cancel(): Promise<void>;
    updateAck(): Promise<void>;
    private getState;
    private validateState;
}
//# sourceMappingURL=heartbeat.d.ts.map