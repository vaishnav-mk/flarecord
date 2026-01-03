import { ReadyData, GatewayConfig, MessageData } from "../types";
import type { DurableObjectState, WebSocket } from "@cloudflare/workers-types";
export declare class DiscordGateway {
    private connection;
    constructor(token: string, intents: number, ctx: DurableObjectState, config?: Partial<GatewayConfig>);
    get ws(): WebSocket | null;
    get isConnected(): boolean;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    sendHeartbeat(): Promise<void>;
    onReady(callback: (data: ReadyData) => void): void;
    onMessage(callback: (data: MessageData) => void): void;
    onError(callback: (error: Error) => void): void;
}
//# sourceMappingURL=gateway.d.ts.map