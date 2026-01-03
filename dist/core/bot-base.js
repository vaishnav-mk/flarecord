import { DiscordGateway } from "./gateway";
export class DiscordClient {
    ctx;
    gateway = null;
    initialized = false;
    options;
    constructor(ctx, options) {
        this.ctx = ctx;
        this.options = options;
    }
    getGateway() {
        return this.gateway;
    }
    isConnected() {
        return this.gateway?.isConnected ?? false;
    }
    getToken() {
        return this.options.token;
    }
    async fetch(_request) {
        if (!this.initialized) {
            await new Promise(resolve => setTimeout(resolve, 100));
            await this.initialize();
            this.initialized = true;
        }
        return new Response("Bot is running!", {
            headers: { "Content-Type": "text/plain" },
        });
    }
    async alarm() {
        if (this.gateway?.isConnected) {
            await this.gateway.sendHeartbeat();
        }
    }
    async initialize() {
        await new Promise(resolve => setTimeout(resolve, 200));
        this.gateway = new DiscordGateway(this.options.token, this.options.intents, this.ctx, {
            storageKey: this.options.storageKey || "gatewayState",
            onDispatch: (event, data) => {
                this.options.onDispatch?.(event, data);
            },
        });
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
        }
        catch (error) {
            this.options.onError?.(error instanceof Error ? error : new Error("Failed to connect"));
        }
    }
}
//# sourceMappingURL=bot-base.js.map