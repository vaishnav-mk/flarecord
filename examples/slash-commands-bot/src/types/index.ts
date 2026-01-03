export interface Env {
  DISCORD_BOT_TOKEN: string;
  GUILD_ID?: string;
}

export interface Interaction {
  id: string;
  token: string;
  type: number;
  data?: {
    name?: string;
    options?: Array<{
      name: string;
      type: number;
      value?: unknown;
      options?: Array<{
        name: string;
        type: number;
        value?: unknown;
        options?: Array<{
          name: string;
          type: number;
          value?: unknown;
        }>;
      }>;
    }>;
  };
  member?: {
    user?: {
      id: string;
      username: string;
    };
  };
  user?: {
    id: string;
    username: string;
  };
}

export interface CommandHandler {
  execute(interaction: Interaction, helper: InteractionHelper): Promise<void>;
}

export interface InteractionHelper {
  respond(interactionId: string, interactionToken: string, data: InteractionResponseData): Promise<unknown>;
}

export interface InteractionResponseData {
  type: number;
  data?: {
    content?: string;
    embeds?: unknown[];
    components?: unknown[];
    flags?: number;
  };
}

