import { GatewayPayload } from "../types";
import type { WebSocket } from "@cloudflare/workers-types";

interface WebSocketResponse {
  webSocket: WebSocket | null;
}

export class WebSocketManager {
  private _ws: WebSocket | null = null;

  get ws(): WebSocket | null {
    return this._ws;
  }

  async connect(gatewayUrl: string): Promise<void> {
    const response = await fetch(gatewayUrl, {
      headers: { Upgrade: "websocket" },
    });

    const wsResponse = response as unknown as WebSocketResponse;

    if (!wsResponse.webSocket) {
      throw new Error("Server did not accept WebSocket connection");
    }

    this._ws = wsResponse.webSocket;
    this._ws.accept();
  }

  setupEventListeners(
    onMessage: (data: string | ArrayBuffer | ArrayBufferView) => void,
    onClose: (code: number, reason: string) => void,
    onError: (error: Error) => void
  ): void {
    if (!this._ws) {
      return;
    }

    this._ws.addEventListener("message", (event: MessageEvent) => {
      onMessage(event.data);
    });

    this._ws.addEventListener("close", (event: CloseEvent) => {
      onClose(event.code, event.reason);
    });

    this._ws.addEventListener("error", () => {
      onError(new Error("WebSocket error"));
    });
  }

  send(payload: GatewayPayload): void {
    if (!this._ws) {
      throw new Error("WebSocket not connected");
    }
    try {
    this._ws.send(JSON.stringify(payload));
    } catch (error) {
      throw new Error(
        `Failed to send payload: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  close(): void {
    if (this._ws) {
      try {
      this._ws.close();
      } catch (error) {
        // Ignore errors during close
      }
      this._ws = null;
    }
  }

  decodeMessage(data: string | ArrayBuffer | ArrayBufferView): string {
    if (typeof data === "string") {
      return data;
    }
    if (data instanceof ArrayBuffer) {
      return new TextDecoder().decode(data);
    }
    const view = new Uint8Array(
      data.buffer,
      data.byteOffset,
      data.byteLength
    );
    return new TextDecoder().decode(view);
  }
}
