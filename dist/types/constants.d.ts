export declare enum GatewayOpcode {
    DISPATCH = 0,
    HEARTBEAT = 1,
    IDENTIFY = 2,
    PRESENCE_UPDATE = 3,
    VOICE_STATE_UPDATE = 4,
    RESUME = 6,
    RECONNECT = 7,
    REQUEST_GUILD_MEMBERS = 8,
    INVALID_SESSION = 9,
    HELLO = 10,
    HEARTBEAT_ACK = 11
}
export declare enum GatewayEvent {
    READY = "READY",
    RESUMED = "RESUMED",
    MESSAGE_CREATE = "MESSAGE_CREATE",
    MESSAGE_UPDATE = "MESSAGE_UPDATE",
    MESSAGE_DELETE = "MESSAGE_DELETE",
    INTERACTION_CREATE = "INTERACTION_CREATE",
    GUILD_CREATE = "GUILD_CREATE",
    GUILD_UPDATE = "GUILD_UPDATE",
    GUILD_DELETE = "GUILD_DELETE"
}
/**
 * Discord Gateway Intents
 * @see https://discord.com/developers/docs/topics/gateway#gateway-intents
 */
export declare enum GatewayIntents {
    GUILDS = 1,
    GUILD_MEMBERS = 2,
    GUILD_MODERATION = 4,
    GUILD_EMOJIS_AND_STICKERS = 8,
    GUILD_INTEGRATIONS = 16,
    GUILD_WEBHOOKS = 32,
    GUILD_INVITES = 64,
    GUILD_VOICE_STATES = 128,
    GUILD_PRESENCES = 256,
    GUILD_MESSAGES = 512,
    GUILD_MESSAGE_REACTIONS = 1024,
    GUILD_MESSAGE_TYPING = 2048,
    DIRECT_MESSAGES = 4096,
    DIRECT_MESSAGE_REACTIONS = 8192,
    DIRECT_MESSAGE_TYPING = 16384,
    MESSAGE_CONTENT = 32768,
    GUILD_SCHEDULED_EVENTS = 65536,
    AUTO_MODERATION_CONFIGURATION = 1048576,
    AUTO_MODERATION_EXECUTION = 2097152,
    GUILD_MESSAGE_POLLS = 16777216,
    DIRECT_MESSAGE_POLLS = 33554432
}
export declare enum WebSocketCloseCode {
    NORMAL_CLOSURE = 1000,
    GOING_AWAY = 1001,
    PROTOCOL_ERROR = 1002,
    UNSUPPORTED_DATA = 1003,
    NO_STATUS_RECEIVED = 1005,
    ABNORMAL_CLOSURE = 1006,
    INVALID_FRAME_PAYLOAD = 1007,
    POLICY_VIOLATION = 1008,
    MESSAGE_TOO_BIG = 1009,
    MISSING_EXTENSION = 1010,
    INTERNAL_ERROR = 1011,
    SERVICE_RESTART = 1012,
    TRY_AGAIN_LATER = 1013,
    BAD_GATEWAY = 1014,
    TLS_HANDSHAKE = 1015,
    UNAUTHENTICATED = 4000,
    INVALID_API_VERSION = 4001,
    INVALID_INTENTS = 4002,
    DISALLOWED_INTENTS = 4003
}
export declare const RESUMEABLE_CLOSE_CODES: WebSocketCloseCode[];
export declare const GATEWAY_BASE_URL = "https://discord.com/api/v10/gateway/bot";
export declare const GATEWAY_VERSION = 10;
export declare const GATEWAY_ENCODING = "json";
export declare const WEBSOCKET_READY_STATE_OPEN = 1;
export declare const DEFAULT_STORAGE_KEY = "gatewayState";
export declare const DEFAULT_MAX_RECONNECT_ATTEMPTS = 5;
export declare const DEFAULT_RECONNECT_DELAYS: {
    initial: number;
    max: number;
    backoffMultiplier: number;
};
export declare const DEFAULT_IDENTIFY_PROPERTIES: {
    os: string;
    browser: string;
    device: string;
};
//# sourceMappingURL=constants.d.ts.map