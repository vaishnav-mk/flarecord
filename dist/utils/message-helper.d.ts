import { EmbedBuilder, ActionRowBuilder, type RESTPostAPIChannelMessageJSONBody } from "discord.js";
type MessageContent = string | EmbedBuilder | ActionRowBuilder<never> | RESTPostAPIChannelMessageJSONBody | (EmbedBuilder | ActionRowBuilder<never>)[];
export declare class MessageHelper {
    private rest;
    constructor(token: string);
    send(channelId: string, content: MessageContent): Promise<unknown>;
    reply(channelId: string, messageId: string, guildId: string | undefined, content: MessageContent): Promise<unknown>;
    private normalizeContent;
}
export {};
//# sourceMappingURL=message-helper.d.ts.map