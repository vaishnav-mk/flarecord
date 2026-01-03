import { REST, Routes, EmbedBuilder, ActionRowBuilder, } from "discord.js";
export class MessageHelper {
    rest;
    constructor(token) {
        this.rest = new REST().setToken(token);
    }
    async send(channelId, content) {
        const body = this.normalizeContent(content);
        return this.rest.post(Routes.channelMessages(channelId), { body });
    }
    async reply(channelId, messageId, guildId, content) {
        const body = this.normalizeContent(content);
        const replyBody = {
            ...body,
            message_reference: {
                message_id: messageId,
                channel_id: channelId,
                ...(guildId && { guild_id: guildId }),
            },
        };
        return this.rest.post(Routes.channelMessages(channelId), {
            body: replyBody,
        });
    }
    normalizeContent(content) {
        if (typeof content === "string") {
            return { content };
        }
        if (content instanceof EmbedBuilder) {
            return { embeds: [content.toJSON()] };
        }
        if (content instanceof ActionRowBuilder) {
            const json = content.toJSON();
            return {
                components: [json],
            };
        }
        if (Array.isArray(content)) {
            const embeds = [];
            const components = [];
            for (const item of content) {
                if (item instanceof EmbedBuilder) {
                    embeds.push(item.toJSON());
                }
                else if (item instanceof ActionRowBuilder) {
                    components.push(item.toJSON());
                }
            }
            const result = {};
            if (embeds.length > 0) {
                result.embeds = embeds;
            }
            if (components.length > 0) {
                result.components = components;
            }
            return result;
        }
        return content;
    }
}
//# sourceMappingURL=message-helper.js.map