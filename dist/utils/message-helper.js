export class MessageHelper {
    token;
    baseUrl = "https://discord.com/api/v10";
    constructor(token) {
        this.token = token;
    }
    async send(channelId, content) {
        const body = this.normalizeContent(content);
        const url = `${this.baseUrl}/channels/${channelId}/messages`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bot ${this.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`Discord API error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }
    async reply(channelId, messageId, guildId, content) {
        const body = this.normalizeContent(content);
        const replyBody = {
            ...body,
            message_reference: {
                message_id: messageId,
                channel_id: channelId,
                ...guildId && { guild_id: guildId }
            }
        };
        const url = `${this.baseUrl}/channels/${channelId}/messages`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bot ${this.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(replyBody)
        });
        if (!response.ok) {
            throw new Error(`Discord API error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }
    normalizeContent(content) {
        if (typeof content === "string") {
            return { content };
        }
        if (this.isBuilder(content)) {
            const json = content.toJSON();
            if (this.isEmbedJSON(json)) {
                return { embeds: [json] };
            }
            return {
                components: [json]
            };
        }
        // Handle plain embed object
        if (this.isEmbedJSON(content)) {
            return { embeds: [content] };
        }
        // Handle plain component object
        if (this.isComponent(content)) {
            return { components: [content] };
        }
        if (Array.isArray(content)) {
            const embeds = [];
            const components = [];
            for (const item of content) {
                if (this.isBuilder(item)) {
                    const json = item.toJSON();
                    if (this.isEmbedJSON(json)) {
                        embeds.push(json);
                    }
                    else {
                        components.push(json);
                    }
                }
                else if (this.isEmbedJSON(item)) {
                    embeds.push(item);
                }
                else if (this.isComponent(item)) {
                    components.push(item);
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
        // If we get here, content should be MessageBody
        return content;
    }
    isBuilder(value) {
        return (typeof value === "object" &&
            value !== null &&
            "toJSON" in value &&
            typeof value.toJSON === "function");
    }
    isEmbedJSON(json) {
        return (typeof json === "object" &&
            json !== null &&
            !("type" in json && typeof json.type === "number") &&
            ("title" in json ||
                "description" in json ||
                "color" in json ||
                "fields" in json));
    }
    isComponent(value) {
        return (typeof value === "object" &&
            value !== null &&
            "type" in value &&
            typeof value.type === "number");
    }
}
//# sourceMappingURL=message-helper.js.map