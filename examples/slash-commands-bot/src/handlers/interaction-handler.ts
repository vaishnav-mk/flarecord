import type { Interaction, InteractionHelper } from "../types";
import { getCommandHandlers } from "../commands";

export class InteractionHandler {
  private handlers = getCommandHandlers();

  async handle(interaction: Interaction, helper: InteractionHelper): Promise<void> {
    if (interaction.type !== 2) {
      return;
    }

    const commandName = interaction.data?.name;
    if (!commandName) {
      return;
    }

    const handler = this.handlers[commandName as keyof typeof this.handlers];
    if (!handler) {
      await helper.respond(interaction.id, interaction.token, {
        type: 4,
        data: {
          content: `❌ Unknown command: ${commandName}`,
          flags: 64,
        },
      });
      return;
    }

    try {
      await handler.execute(interaction, helper);
    } catch (error) {
      console.error(`Error handling command ${commandName}:`, error);
      await helper.respond(interaction.id, interaction.token, {
        type: 4,
        data: {
          content: `❌ An error occurred while processing your command: ${error instanceof Error ? error.message : "Unknown error"}`,
          flags: 64,
        },
      });
    }
  }
}

