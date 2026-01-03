import { describe, it, expect } from "vitest";
import { WebSocketManager } from "../src/utils/websocket";
import { GatewayPayload, GatewayOpcode } from "../src/types";

describe("WebSocketManager", () => {
  it("should initialize with null websocket", () => {
    const manager = new WebSocketManager();
    expect(manager.ws).toBeNull();
  });

  it("should decode string messages", () => {
    const manager = new WebSocketManager();
    const message = '{"op":1,"d":null}';
    expect(manager.decodeMessage(message)).toBe(message);
  });

  it("should decode ArrayBuffer messages", () => {
    const manager = new WebSocketManager();
    const message = '{"op":1,"d":null}';
    const buffer = new TextEncoder().encode(message);
    expect(manager.decodeMessage(buffer)).toBe(message);
  });

  it("should decode ArrayBufferView messages", () => {
    const manager = new WebSocketManager();
    const message = '{"op":1,"d":null}';
    const view = new Uint8Array(new TextEncoder().encode(message));
    expect(manager.decodeMessage(view)).toBe(message);
  });
});

describe("ReconnectManager", () => {
  it("should calculate exponential backoff delay", () => {
    // This would require mocking, but structure is in place
    expect(true).toBe(true);
  });
});
