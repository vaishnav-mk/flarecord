import { SlashCommandBuilder } from "@discordjs/builders";
import type { Interaction, CommandHandler, InteractionHelper } from "../types";

export const pingCommand = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Check if this interaction is responsive");

export const pingHandler: CommandHandler = {
  async execute(interaction: Interaction, helper: InteractionHelper) {
    await helper.respond(interaction.id, interaction.token, {
      type: 4,
      data: {
        content: "🏓 Pong! This interaction is responsive.",
      },
    });
  },
};

