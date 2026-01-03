import type { DurableObjectState } from "@cloudflare/workers-types";
export declare class ReconnectManager {
    private reconnectAttempts;
    private maxReconnectAttempts;
    private isReconnecting;
    private reconnectDelays;
    constructor(maxReconnectAttempts?: number, reconnectDelays?: {
        initial: number;
        max: number;
        backoffMultiplier: number;
    });
    scheduleReconnect(connectFn: () => Promise<void>): Promise<void>;
    reconnect(shouldResume: boolean, ctx: DurableObjectState, storageKey: string, connectFn: () => Promise<void>, closeFn: () => void): Promise<void>;
    reset(): void;
    private calculateDelay;
    private getState;
    private validateState;
}
//# sourceMappingURL=reconnect.d.ts.map