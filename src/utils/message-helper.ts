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

type NormalizedMessageBody = {
  content?: string;
  embeds?: APIEmbed[];
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

type MessageContent =
  | string
  | DiscordBuilder
  | MessageBody
  | DiscordBuilder[]
  | APIEmbed
  | Component
  | (APIEmbed | Component)[];

export class MessageHelper {
  private token: string;
  private readonly baseUrl = "https://discord.com/api/v10";

  constructor(token: string) {
    this.token = token;
  }

  async send(channelId: string, content: MessageContent): Promise<unknown> {
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
      throw new Error(
        `Discord API error: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  }

  async reply(
    channelId: string,
    messageId: string,
    guildId: string | undefined,
    content: MessageContent
  ): Promise<unknown> {
    const body = this.normalizeContent(content);
    const replyBody: MessageBody = {
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
      throw new Error(
        `Discord API error: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  }

  private normalizeContent(content: MessageContent): MessageBody {
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

    if (this.isEmbedJSON(content)) {
      return { embeds: [content as APIEmbed] };
    }

    if (this.isComponent(content)) {
      return { components: [content] };
    }

    if (Array.isArray(content)) {
      const embeds: APIEmbed[] = [];
      const components: unknown[] = [];

      for (const item of content) {
        if (this.isBuilder(item)) {
          const json = item.toJSON();
          if (this.isEmbedJSON(json)) {
            embeds.push(json as APIEmbed);
          } else {
            components.push(json);
          }
        } else if (this.isEmbedJSON(item)) {
          embeds.push(item as APIEmbed);
        } else if (this.isComponent(item)) {
          components.push(item);
        }
      }

      const result: NormalizedMessageBody = {};
      if (embeds.length > 0) {
        result.embeds = embeds;
      }
      if (components.length > 0) {
        result.components = components;
      }
      return result;
    }

    // If we get here, content should be MessageBody
    return content as MessageBody;
  }

  private isBuilder(value: unknown): value is DiscordBuilder {
    return (
      typeof value === "object" &&
      value !== null &&
      "toJSON" in value &&
      typeof (value as { toJSON: unknown }).toJSON === "function"
    );
  }

  private isEmbedJSON(json: unknown): boolean {
    return (
      typeof json === "object" &&
      json !== null &&
      !(
        "type" in json && typeof (json as { type: unknown }).type === "number"
      ) &&
      ("title" in json ||
        "description" in json ||
        "color" in json ||
        "fields" in json)
    );
  }

  private isComponent(value: unknown): value is Component {
    return (
      typeof value === "object" &&
      value !== null &&
      "type" in value &&
      typeof (value as { type: unknown }).type === "number"
    );
  }
}
