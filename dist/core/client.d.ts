import { DiscordGateway } from "./gateway";
import type { DurableObjectState } from "@cloudflare/workers-types";
import type { ReadyData, MessageData } from "../types";
export interface DiscordClientOptions {
    token: string;
    intents: number;
    storageKey?: string;
    onReady?: (data: ReadyData) => void;
    onMessage?: (data: MessageData) => void;
    onError?: (error: Error) => void;
    onDispatch?: (event: string, data: unknown) => void;
}
export declare class DiscordClient {
    private ctx;
    private gateway;
    private initialized;
    private options;
    constructor(ctx: DurableObjectState, options: DiscordClientOptions);
    getGateway(): DiscordGateway | null;
    isConnected(): boolean;
    getToken(): string;
    fetch(_request: Request): Promise<Response>;
    alarm(): Promise<void>;
    private initialize;
}
//# sourceMappingURL=client.d.ts.map