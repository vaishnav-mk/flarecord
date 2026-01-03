import { ReadyData, MessageData } from "../types";
import { Logger } from "../utils/logger";
import type { DurableObjectState, WebSocket } from "@cloudflare/workers-types";
export declare class GatewayConnection {
    private wsManager;
    private token;
    private ctx;
    private storageKey;
    private sequence;
    private handlers;
    private reconnectManager;
    private sessionManager;
    private heartbeatManager;
    private messageHandler;
    private onDispatch?;
    private logger;
    private isShuttingDown;
    private onReadyCallback;
    private onMessageCallback;
    private onErrorCallback;
    constructor(token: string, intents: number, ctx: DurableObjectState, config: {
        storageKey: string;
        identifyProperties: {
            os: string;
            browser: string;
            device: string;
        };
        maxReconnectAttempts?: number;
        reconnectDelays?: {
            initial: number;
            max: number;
            backoffMultiplier: number;
        };
        onDispatch?: (event: string, data: unknown) => void;
        logger?: Logger;
        debug?: boolean;
    });
    get ws(): WebSocket | null;
    get isConnected(): boolean;
    connect(): Promise<void>;
    private getGatewayUrl;
    private handleMessage;
    private handleClose;
    private handleWebSocketError;
    private reconnect;
    disconnect(): Promise<void>;
    onReady(callback: (data: ReadyData) => void): void;
    onMessage(callback: (data: MessageData) => void): void;
    onError(callback: (error: Error) => void): void;
    sendHeartbeat(): Promise<void>;
}
//# sourceMappingURL=connection.d.ts.map