import type {
  GatewayHelloData,
  GatewayIdentifyData,
  GatewayResumeData,
  GatewayReadyDispatchData,
} from "discord-api-types/v10";
import type { Logger } from "../utils/logger";

export interface GatewayPayload {
  op: number;
  d?: unknown;
  s?: number | null;
  t?: string | null;
}

export type HelloData = GatewayHelloData;
export type IdentifyData = GatewayIdentifyData;
export type ResumeData = GatewayResumeData;
export type ReadyData = GatewayReadyDispatchData;

export interface MessageData extends Record<string, unknown> {
  _gatewayMetadata?: {
    opcode: number;
    opcodeName: string;
    event: string;
    sequence: number | null;
  };
}

export interface GatewayState {
  heartbeatInterval: number;
  sequence: number | null;
  sessionId: string | null;
  lastHeartbeat?: number;
  lastHeartbeatAck?: number;
  reconnectAttempts: number;
  shouldResume: boolean;
}

export interface GatewayConfig {
  token: string;
  intents: number;
  storageKey?: string;
  identifyProperties?: {
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
}

export const DEFAULT_IDENTIFY_PROPERTIES = {
  os: "cloudflare-workers",
  browser: "discord-gateway",
  device: "discord-gateway",
} as const;

