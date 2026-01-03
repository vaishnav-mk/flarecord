export var GatewayOpcode;
(function (GatewayOpcode) {
    GatewayOpcode[GatewayOpcode["DISPATCH"] = 0] = "DISPATCH";
    GatewayOpcode[GatewayOpcode["HEARTBEAT"] = 1] = "HEARTBEAT";
    GatewayOpcode[GatewayOpcode["IDENTIFY"] = 2] = "IDENTIFY";
    GatewayOpcode[GatewayOpcode["PRESENCE_UPDATE"] = 3] = "PRESENCE_UPDATE";
    GatewayOpcode[GatewayOpcode["VOICE_STATE_UPDATE"] = 4] = "VOICE_STATE_UPDATE";
    GatewayOpcode[GatewayOpcode["RESUME"] = 6] = "RESUME";
    GatewayOpcode[GatewayOpcode["RECONNECT"] = 7] = "RECONNECT";
    GatewayOpcode[GatewayOpcode["REQUEST_GUILD_MEMBERS"] = 8] = "REQUEST_GUILD_MEMBERS";
    GatewayOpcode[GatewayOpcode["INVALID_SESSION"] = 9] = "INVALID_SESSION";
    GatewayOpcode[GatewayOpcode["HELLO"] = 10] = "HELLO";
    GatewayOpcode[GatewayOpcode["HEARTBEAT_ACK"] = 11] = "HEARTBEAT_ACK";
})(GatewayOpcode || (GatewayOpcode = {}));
export var GatewayEvent;
(function (GatewayEvent) {
    GatewayEvent["READY"] = "READY";
    GatewayEvent["RESUMED"] = "RESUMED";
    GatewayEvent["MESSAGE_CREATE"] = "MESSAGE_CREATE";
    GatewayEvent["MESSAGE_UPDATE"] = "MESSAGE_UPDATE";
    GatewayEvent["MESSAGE_DELETE"] = "MESSAGE_DELETE";
    GatewayEvent["INTERACTION_CREATE"] = "INTERACTION_CREATE";
    GatewayEvent["GUILD_CREATE"] = "GUILD_CREATE";
    GatewayEvent["GUILD_UPDATE"] = "GUILD_UPDATE";
    GatewayEvent["GUILD_DELETE"] = "GUILD_DELETE";
})(GatewayEvent || (GatewayEvent = {}));
/**
 * Discord Gateway Intents
 * @see https://discord.com/developers/docs/topics/gateway#gateway-intents
 */
export var GatewayIntents;
(function (GatewayIntents) {
    GatewayIntents[GatewayIntents["GUILDS"] = 1] = "GUILDS";
    GatewayIntents[GatewayIntents["GUILD_MEMBERS"] = 2] = "GUILD_MEMBERS";
    GatewayIntents[GatewayIntents["GUILD_MODERATION"] = 4] = "GUILD_MODERATION";
    GatewayIntents[GatewayIntents["GUILD_EMOJIS_AND_STICKERS"] = 8] = "GUILD_EMOJIS_AND_STICKERS";
    GatewayIntents[GatewayIntents["GUILD_INTEGRATIONS"] = 16] = "GUILD_INTEGRATIONS";
    GatewayIntents[GatewayIntents["GUILD_WEBHOOKS"] = 32] = "GUILD_WEBHOOKS";
    GatewayIntents[GatewayIntents["GUILD_INVITES"] = 64] = "GUILD_INVITES";
    GatewayIntents[GatewayIntents["GUILD_VOICE_STATES"] = 128] = "GUILD_VOICE_STATES";
    GatewayIntents[GatewayIntents["GUILD_PRESENCES"] = 256] = "GUILD_PRESENCES";
    GatewayIntents[GatewayIntents["GUILD_MESSAGES"] = 512] = "GUILD_MESSAGES";
    GatewayIntents[GatewayIntents["GUILD_MESSAGE_REACTIONS"] = 1024] = "GUILD_MESSAGE_REACTIONS";
    GatewayIntents[GatewayIntents["GUILD_MESSAGE_TYPING"] = 2048] = "GUILD_MESSAGE_TYPING";
    GatewayIntents[GatewayIntents["DIRECT_MESSAGES"] = 4096] = "DIRECT_MESSAGES";
    GatewayIntents[GatewayIntents["DIRECT_MESSAGE_REACTIONS"] = 8192] = "DIRECT_MESSAGE_REACTIONS";
    GatewayIntents[GatewayIntents["DIRECT_MESSAGE_TYPING"] = 16384] = "DIRECT_MESSAGE_TYPING";
    GatewayIntents[GatewayIntents["MESSAGE_CONTENT"] = 32768] = "MESSAGE_CONTENT";
    GatewayIntents[GatewayIntents["GUILD_SCHEDULED_EVENTS"] = 65536] = "GUILD_SCHEDULED_EVENTS";
    GatewayIntents[GatewayIntents["AUTO_MODERATION_CONFIGURATION"] = 1048576] = "AUTO_MODERATION_CONFIGURATION";
    GatewayIntents[GatewayIntents["AUTO_MODERATION_EXECUTION"] = 2097152] = "AUTO_MODERATION_EXECUTION";
    GatewayIntents[GatewayIntents["GUILD_MESSAGE_POLLS"] = 16777216] = "GUILD_MESSAGE_POLLS";
    GatewayIntents[GatewayIntents["DIRECT_MESSAGE_POLLS"] = 33554432] = "DIRECT_MESSAGE_POLLS";
})(GatewayIntents || (GatewayIntents = {}));
export var WebSocketCloseCode;
(function (WebSocketCloseCode) {
    WebSocketCloseCode[WebSocketCloseCode["NORMAL_CLOSURE"] = 1000] = "NORMAL_CLOSURE";
    WebSocketCloseCode[WebSocketCloseCode["GOING_AWAY"] = 1001] = "GOING_AWAY";
    WebSocketCloseCode[WebSocketCloseCode["PROTOCOL_ERROR"] = 1002] = "PROTOCOL_ERROR";
    WebSocketCloseCode[WebSocketCloseCode["UNSUPPORTED_DATA"] = 1003] = "UNSUPPORTED_DATA";
    WebSocketCloseCode[WebSocketCloseCode["NO_STATUS_RECEIVED"] = 1005] = "NO_STATUS_RECEIVED";
    WebSocketCloseCode[WebSocketCloseCode["ABNORMAL_CLOSURE"] = 1006] = "ABNORMAL_CLOSURE";
    WebSocketCloseCode[WebSocketCloseCode["INVALID_FRAME_PAYLOAD"] = 1007] = "INVALID_FRAME_PAYLOAD";
    WebSocketCloseCode[WebSocketCloseCode["POLICY_VIOLATION"] = 1008] = "POLICY_VIOLATION";
    WebSocketCloseCode[WebSocketCloseCode["MESSAGE_TOO_BIG"] = 1009] = "MESSAGE_TOO_BIG";
    WebSocketCloseCode[WebSocketCloseCode["MISSING_EXTENSION"] = 1010] = "MISSING_EXTENSION";
    WebSocketCloseCode[WebSocketCloseCode["INTERNAL_ERROR"] = 1011] = "INTERNAL_ERROR";
    WebSocketCloseCode[WebSocketCloseCode["SERVICE_RESTART"] = 1012] = "SERVICE_RESTART";
    WebSocketCloseCode[WebSocketCloseCode["TRY_AGAIN_LATER"] = 1013] = "TRY_AGAIN_LATER";
    WebSocketCloseCode[WebSocketCloseCode["BAD_GATEWAY"] = 1014] = "BAD_GATEWAY";
    WebSocketCloseCode[WebSocketCloseCode["TLS_HANDSHAKE"] = 1015] = "TLS_HANDSHAKE";
    WebSocketCloseCode[WebSocketCloseCode["UNAUTHENTICATED"] = 4000] = "UNAUTHENTICATED";
    WebSocketCloseCode[WebSocketCloseCode["INVALID_API_VERSION"] = 4001] = "INVALID_API_VERSION";
    WebSocketCloseCode[WebSocketCloseCode["INVALID_INTENTS"] = 4002] = "INVALID_INTENTS";
    WebSocketCloseCode[WebSocketCloseCode["DISALLOWED_INTENTS"] = 4003] = "DISALLOWED_INTENTS";
})(WebSocketCloseCode || (WebSocketCloseCode = {}));
export const RESUMEABLE_CLOSE_CODES = [
    WebSocketCloseCode.NORMAL_CLOSURE,
    WebSocketCloseCode.GOING_AWAY,
    WebSocketCloseCode.ABNORMAL_CLOSURE,
    WebSocketCloseCode.NO_STATUS_RECEIVED,
];
export const GATEWAY_BASE_URL = "https://discord.com/api/v10/gateway/bot";
export const GATEWAY_VERSION = 10;
export const GATEWAY_ENCODING = "json";
export const WEBSOCKET_READY_STATE_OPEN = 1;
export const DEFAULT_STORAGE_KEY = "gatewayState";
export const DEFAULT_MAX_RECONNECT_ATTEMPTS = 5;
export const DEFAULT_RECONNECT_DELAYS = {
    initial: 1000,
    max: 60000,
    backoffMultiplier: 2,
};
export const DEFAULT_IDENTIFY_PROPERTIES = {
    os: "cloudflare-workers",
    browser: "discord-gateway",
    device: "discord-gateway",
};
//# sourceMappingURL=constants.js.map