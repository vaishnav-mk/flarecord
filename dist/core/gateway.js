import { GatewayConnection } from "./connection";
import { DEFAULT_IDENTIFY_PROPERTIES, } from "../types";
import { DEFAULT_RECONNECT_DELAYS, DEFAULT_STORAGE_KEY, DEFAULT_MAX_RECONNECT_ATTEMPTS, } from "../types/constants";
import { createLogger, LogLevel } from "../utils/logger";
export class DiscordGateway {
    connection;
    constructor(token, intents, ctx, config) {
        const storageKey = config?.storageKey || DEFAULT_STORAGE_KEY;
        const identifyProperties = config?.identifyProperties || DEFAULT_IDENTIFY_PROPERTIES;
        const maxReconnectAttempts = config?.maxReconnectAttempts || DEFAULT_MAX_RECONNECT_ATTEMPTS;
        const reconnectDelays = config?.reconnectDelays || DEFAULT_RECONNECT_DELAYS;
        const logger = config?.logger || createLogger({
            level: config?.debug ? LogLevel.DEBUG : LogLevel.INFO,
        });
        this.connection = new GatewayConnection(token, intents, ctx, {
            storageKey,
            identifyProperties,
            maxReconnectAttempts,
            reconnectDelays,
            onDispatch: config?.onDispatch,
            logger,
            debug: config?.debug,
        });
    }
    get ws() {
        return this.connection.ws;
    }
    get isConnected() {
        return this.connection.isConnected;
    }
    async connect() {
        await this.connection.connect();
    }
    async disconnect() {
        await this.connection.disconnect();
    }
    async sendHeartbeat() {
        await this.connection.sendHeartbeat();
    }
    onReady(callback) {
        this.connection.onReady(callback);
    }
    onMessage(callback) {
        this.connection.onMessage(callback);
    }
    onError(callback) {
        this.connection.onError(callback);
    }
}
//# sourceMappingURL=gateway.js.map