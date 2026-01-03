import {
  REST,
  Routes,
  EmbedBuilder,
  ActionRowBuilder,
  type RESTPostAPIChannelMessageJSONBody,
  type APIEmbed,
} from "discord.js";

type MessageContent =
  | string
  | EmbedBuilder
  | ActionRowBuilder<never>
  | RESTPostAPIChannelMessageJSONBody
  | (EmbedBuilder | ActionRowBuilder<never>)[];

interface NormalizedMessageBody {
  content?: string;
  embeds?: APIEmbed[];
  components?: unknown[];
  message_reference?: {
    message_id: string;
    channel_id: string;
    guild_id?: string;
  };
}

export class MessageHelper {
  private rest: REST;

  constructor(token: string) {
    this.rest = new REST().setToken(token);
  }

  async send(channelId: string, content: MessageContent): Promise<unknown> {
    const body = this.normalizeContent(content);
    return this.rest.post(Routes.channelMessages(channelId), { body });
  }

  async reply(
    channelId: string,
    messageId: string,
    guildId: string | undefined,
    content: MessageContent
  ): Promise<unknown> {
    const body = this.normalizeContent(content);
    const replyBody: RESTPostAPIChannelMessageJSONBody = {
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

  private normalizeContent(content: MessageContent): RESTPostAPIChannelMessageJSONBody {
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
      } as RESTPostAPIChannelMessageJSONBody;
    }

    if (Array.isArray(content)) {
      const embeds: APIEmbed[] = [];
      const components: unknown[] = [];

      for (const item of content) {
        if (item instanceof EmbedBuilder) {
          embeds.push(item.toJSON());
        } else if (item instanceof ActionRowBuilder) {
          components.push(item.toJSON());
        }
      }

      const result: NormalizedMessageBody = {};
      if (embeds.length > 0) {
        result.embeds = embeds;
      }
      if (components.length > 0) {
        result.components = components;
      }
      return result as RESTPostAPIChannelMessageJSONBody;
    }

    return content;
  }
}
