import { GatewayPayload } from "../types";
import type { WebSocket } from "@cloudflare/workers-types";
export declare class WebSocketManager {
    private _ws;
    get ws(): WebSocket | null;
    connect(gatewayUrl: string): Promise<void>;
    setupEventListeners(onMessage: (data: string | ArrayBuffer | ArrayBufferView) => void, onClose: (code: number, reason: string) => void, onError: (error: Error) => void): void;
    send(payload: GatewayPayload): void;
    close(): void;
    decodeMessage(data: string | ArrayBuffer | ArrayBufferView): string;
}
//# sourceMappingURL=websocket.d.ts.map