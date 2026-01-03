export class WebSocketManager {
    _ws = null;
    get ws() {
        return this._ws;
    }
    async connect(gatewayUrl) {
        const response = await fetch(gatewayUrl, {
            headers: { Upgrade: "websocket" },
        });
        const wsResponse = response;
        if (!wsResponse.webSocket) {
            throw new Error("Server did not accept WebSocket connection");
        }
        this._ws = wsResponse.webSocket;
        this._ws.accept();
    }
    setupEventListeners(onMessage, onClose, onError) {
        if (!this._ws) {
            return;
        }
        this._ws.addEventListener("message", (event) => {
            onMessage(event.data);
        });
        this._ws.addEventListener("close", (event) => {
            onClose(event.code, event.reason);
        });
        this._ws.addEventListener("error", () => {
            onError(new Error("WebSocket error"));
        });
    }
    send(payload) {
        if (!this._ws) {
            throw new Error("WebSocket not connected");
        }
        try {
            this._ws.send(JSON.stringify(payload));
        }
        catch (error) {
            throw new Error(`Failed to send payload: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
    }
    close() {
        if (this._ws) {
            try {
                this._ws.close();
            }
            catch (error) {
                // Ignore errors during close
            }
            this._ws = null;
        }
    }
    decodeMessage(data) {
        if (typeof data === "string") {
            return data;
        }
        if (data instanceof ArrayBuffer) {
            return new TextDecoder().decode(data);
        }
        const view = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        return new TextDecoder().decode(view);
    }
}
//# sourceMappingURL=websocket.js.map