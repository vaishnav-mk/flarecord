type DiscordBuilder = {
    toJSON(): unknown;
};
type APIEmbed = {
    title?: string;
    description?: string;
    color?: number;
    fields?: unknown[];
    [key: string]: unknown;
};
type MessageBody = {
    content?: string;
    embeds?: unknown[];
    components?: unknown[];
    message_reference?: {
        message_id: string;
        channel_id: string;
        guild_id?: string;
    };
};
type Component = {
    type: number;
    style?: number;
    custom_id?: string;
    label?: string;
    components?: Component[];
    [key: string]: unknown;
};
type MessageContent = string | DiscordBuilder | MessageBody | DiscordBuilder[] | APIEmbed | Component | (APIEmbed | Component)[];
export declare class MessageHelper {
    private token;
    private readonly baseUrl;
    constructor(token: string);
    send(channelId: string, content: MessageContent): Promise<unknown>;
    reply(channelId: string, messageId: string, guildId: string | undefined, content: MessageContent): Promise<unknown>;
    private normalizeContent;
    private isBuilder;
    private isEmbedJSON;
    private isComponent;
}
export {};
//# sourceMappingURL=message-helper.d.ts.map