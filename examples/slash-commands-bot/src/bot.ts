import {
  DiscordClient,
  GatewayIntents,
  GatewayEvent,
  type ReadyData,
} from "flarecord";
import type { DurableObjectState } from "@cloudflare/workers-types";
import { DurableObject } from "cloudflare:workers";
import { InteractionHelper } from "./interaction-helper";
import { InteractionHandler } from "./handlers/interaction-handler";
import { getCommandBuilders } from "./commands";
import type { Env } from "./types";

export class SlashCommandsBot extends DurableObject<Env> {
  private client: DiscordClient;
  private interactionHelper: InteractionHelper | null = null;
  private interactionHandler: InteractionHandler;
  private applicationId: string | null = null;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.interactionHandler = new InteractionHandler();
    this.client = new DiscordClient(ctx, {
      token: env.DISCORD_BOT_TOKEN,
      intents:
        GatewayIntents.GUILDS |
        GatewayIntents.GUILD_MESSAGES |
        GatewayIntents.MESSAGE_CONTENT,
      onReady: (data) => this.onReady(data),
      onDispatch: (event, data) => this.onDispatch(event, data),
      onError: (error) => this.onError(error),
    });
  }

  async fetch(request: Request): Promise<Response> {
    return this.client.fetch(request);
  }

  async alarm(): Promise<void> {
    return this.client.alarm();
  }

  private async onReady(data: ReadyData) {
    this.applicationId = data.application.id;
    this.interactionHelper = new InteractionHelper(this.client.getToken());
    await this.registerCommands();
  }

  private async registerCommands() {
    if (!this.applicationId || !this.interactionHelper) {
      return;
    }

    const commands = getCommandBuilders().map((builder) => builder.toJSON());

    try {
      const guildId = this.env?.GUILD_ID;
      await this.interactionHelper.registerCommands(
        this.applicationId,
        commands,
        guildId
      );
    } catch (error) {
      console.error("Failed to register commands:", error);
    }
  }

  private async onDispatch(event: string, data: unknown) {
    if (event !== GatewayEvent.INTERACTION_CREATE) {
      return;
    }

    if (!this.interactionHelper) {
      return;
    }

    const interaction = data as import("./types").Interaction;
    await this.interactionHandler.handle(interaction, this.interactionHelper);
  }

  private onError(error: Error) {
    console.error("❌ Bot error:", error.message);
    if (error.stack) {
      console.error(error.stack);
    }
  }
}
