import { GatewayPayload, HelloData, ReadyData, MessageData } from "../types";
import type { DurableObjectState } from "@cloudflare/workers-types";
import type { Logger } from "../utils/logger";
export declare class GatewayHandlers {
    private ctx;
    private storageKey;
    private sequence;
    private onReady;
    private onMessage;
    private onDispatch;
    private logger;
    constructor(ctx: DurableObjectState, storageKey: string, sequence: {
        value: number | null;
    }, onReady: (data: ReadyData) => void, onMessage: (data: MessageData) => void, onDispatch: ((event: string, data: unknown) => void) | undefined, logger: Logger);
    handleHello(data: HelloData): Promise<void>;
    handleReady(data: ReadyData): Promise<void>;
    handleResumed(): void;
    handleDispatch(payload: GatewayPayload): void;
    private handleMessageCreate;
    private getOpcodeName;
    private getState;
    private validateState;
    private updateSequenceInStorage;
}
//# sourceMappingURL=handlers.d.ts.map