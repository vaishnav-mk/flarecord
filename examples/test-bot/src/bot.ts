import {
  DiscordClient,
  GatewayIntents,
  MessageHelper,
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
  Colors,
} from "flarecord";
import type { ReadyData, MessageData } from "flarecord";
import type { DurableObjectState } from "@cloudflare/workers-types";
import { DurableObject } from "cloudflare:workers";

export interface Env {
  DISCORD_BOT_TOKEN: string;
}

export class TestBot extends DurableObject<Env> {
  private client: DiscordClient;
  private messageHelper: MessageHelper | null = null;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.client = new DiscordClient(ctx, {
      token: env.DISCORD_BOT_TOKEN,
      intents:
        GatewayIntents.GUILDS |
        GatewayIntents.GUILD_MESSAGES |
        GatewayIntents.MESSAGE_CONTENT,
      onReady: (data) => this.onReady(data),
      onMessage: (data) => this.onMessage(data),
      onError: (error) => this.onError(error),
    });
  }

  async fetch(request: Request): Promise<Response> {
    return this.client.fetch(request);
  }

  async alarm(): Promise<void> {
    return this.client.alarm();
  }

  private onReady(data: ReadyData) {
    console.log(`✅ Bot ready: ${data.user.username}#${data.user.discriminator}`);
    console.log(`   Bot ID: ${data.user.id}`);
    console.log(`   Session ID: ${data.session_id}`);
    this.messageHelper = new MessageHelper(this.client.getToken());
  }

  private onMessage(data: MessageData) {
    if (data._gatewayMetadata?.event !== "MESSAGE_CREATE") {
      return;
    }

    const message = data as {
      author?: { id: string; username: string; bot?: boolean };
      content?: string;
      channel_id?: string;
      guild_id?: string;
      id?: string;
    };

    if (message.author?.bot) {
      return;
    }

    const content = message.content || "";
    const channelId = message.channel_id;
    const messageId = message.id;
    const guildId = message.guild_id;

    if (!channelId || !this.messageHelper) {
      return;
    }

    if (content === "!ping") {
      this.messageHelper.send(channelId, "Pong! 🏓");
    } else if (content === "!test") {
      const embed = new EmbedBuilder()
        .setTitle("Test Bot")
        .setDescription("Everything is working correctly!")
        .setColor(Colors.Green)
        .setTimestamp();
      this.messageHelper.send(channelId, embed);
    } else if (content === "!button") {
      const button = new ButtonBuilder()
        .setCustomId("test_button")
        .setLabel("Click Me!")
        .setStyle(ButtonStyle.Primary);
      const row = new ActionRowBuilder().addComponents(button);
      this.messageHelper.send(channelId, row);
    } else if (content === "!combined") {
      const embed = new EmbedBuilder()
        .setTitle("Combined Test")
        .setDescription("Embed + Button working!")
        .setColor(Colors.Purple);
      const button = new ButtonBuilder()
        .setCustomId("combined_test")
        .setLabel("Test Button")
        .setStyle(ButtonStyle.Success);
      const row = new ActionRowBuilder().addComponents(button);
      this.messageHelper.send(channelId, [embed, row]);
    } else if (content === "!help") {
      const embed = new EmbedBuilder()
        .setTitle("Test Bot Commands")
        .setDescription("Available commands:")
        .addFields(
          { name: "!ping", value: "Test basic message", inline: true },
          { name: "!test", value: "Test embed", inline: true },
          { name: "!button", value: "Test button", inline: true },
          { name: "!combined", value: "Test embed + button", inline: true },
          { name: "!help", value: "Show this help", inline: true }
        )
        .setColor(Colors.Blue)
        .setTimestamp();
      this.messageHelper.send(channelId, embed);
    } else if (content.startsWith("!reply") && messageId) {
      const embed = new EmbedBuilder()
        .setTitle("Reply Test")
        .setDescription("This is a reply!")
        .setColor(Colors.Orange);
      this.messageHelper.reply(channelId, messageId, guildId, embed);
    }
  }

  private onError(error: Error) {
    console.error("❌ Bot error:", error.message);
    if (error.stack) {
      console.error(error.stack);
    }
  }

}
