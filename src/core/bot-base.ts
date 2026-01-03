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

export class DiscordClient {
  private ctx: DurableObjectState;
  private gateway: DiscordGateway | null = null;
  private initialized = false;
  private options: DiscordClientOptions;

  constructor(ctx: DurableObjectState, options: DiscordClientOptions) {
    this.ctx = ctx;
    this.options = options;
  }

  getGateway(): DiscordGateway | null {
    return this.gateway;
  }

  isConnected(): boolean {
    return this.gateway?.isConnected ?? false;
  }

  getToken(): string {
    return this.options.token;
  }

  async fetch(_request: Request): Promise<Response> {
    if (!this.initialized) {
      await new Promise(resolve => setTimeout(resolve, 100));
      await this.initialize();
      this.initialized = true;
    }
    return new Response("Bot is running!", {
      headers: { "Content-Type": "text/plain" },
    });
  }

  async alarm(): Promise<void> {
    if (this.gateway?.isConnected) {
      await this.gateway.sendHeartbeat();
    }
  }

  private async initialize(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 200));

    this.gateway = new DiscordGateway(
      this.options.token,
      this.options.intents,
      this.ctx,
      {
        storageKey: this.options.storageKey || "gatewayState",
        onDispatch: (event, data) => {
          this.options.onDispatch?.(event, data);
        },
      }
    );

    this.gateway.onReady((data) => {
      this.options.onReady?.(data);
    });

    this.gateway.onMessage((data) => {
      this.options.onMessage?.(data);
    });

    this.gateway.onError((error) => {
      this.options.onError?.(error);
    });

    try {
      await this.gateway.connect();
    } catch (error) {
      this.options.onError?.(
        error instanceof Error ? error : new Error("Failed to connect")
      );
    }
  }
}
