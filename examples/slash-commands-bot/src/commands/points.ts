import { SlashCommandBuilder } from "@discordjs/builders";
import type { Interaction, CommandHandler, InteractionHelper } from "../types";

export const pointsCommand = new SlashCommandBuilder()
  .setName("points")
  .setDescription("Lists or manages user points")
  .addSubcommandGroup((group) =>
    group
      .setName("manage")
      .setDescription("Shows or manages points in the server")
      .addSubcommand((subcommand) =>
        subcommand
          .setName("user_points")
          .setDescription("Alters a user's points")
          .addUserOption((option) =>
            option
              .setName("user")
              .setDescription("The user whose points to alter")
              .setRequired(true)
          )
          .addStringOption((option) =>
            option
              .setName("action")
              .setDescription("What action should be taken with the users points?")
              .addChoices(
                { name: "Add points", value: "add" },
                { name: "Remove points", value: "remove" },
                { name: "Reset points", value: "reset" }
              )
              .setRequired(true)
          )
          .addIntegerOption((option) =>
            option
              .setName("points")
              .setDescription("Points to add or remove")
          )
      )
  )
  .addSubcommandGroup((group) =>
    group
      .setName("info")
      .setDescription("Shows information about points in the guild")
      .addSubcommand((subcommand) =>
        subcommand
          .setName("total")
          .setDescription("Tells you the total amount of points given in the guild")
      )
      .addSubcommand((subcommand) =>
        subcommand
          .setName("user")
          .setDescription("Lists a user's points")
          .addUserOption((option) =>
            option
              .setName("user")
              .setDescription("The user whose points to list")
              .setRequired(true)
          )
      )
  );

export const pointsHandler: CommandHandler = {
  async execute(interaction: Interaction, helper: InteractionHelper) {
    const options = interaction.data?.options || [];
    const subcommandGroup = options[0];

    if (!subcommandGroup || !subcommandGroup.options) {
      return;
    }

    const subcommand = subcommandGroup.options[0];
    const subcommandName = subcommand.name;
    const groupName = subcommandGroup.name;

    if (groupName === "manage" && subcommandName === "user_points") {
      const userOption = subcommand.options?.find((opt) => opt.name === "user");
      const actionOption = subcommand.options?.find((opt) => opt.name === "action");
      const pointsOption = subcommand.options?.find((opt) => opt.name === "points");

      const userId = userOption?.value as string;
      const action = actionOption?.value as string;
      const points = (pointsOption?.value as number) || 0;
      let response = `Points management for <@${userId}>:\nAction: ${action}\n`;
      if (action === "add" || action === "remove") {
        response += `Points: ${points}\n`;
      }
      response += `\n_Note: This is a demo. Points are not actually stored._`;

      await helper.respond(interaction.id, interaction.token, {
        type: 4,
        data: {
          content: response,
        },
      });
    } else if (groupName === "info") {
      if (subcommandName === "total") {
        await helper.respond(interaction.id, interaction.token, {
          type: 4,
          data: {
            content: "📊 Total points in the guild: 0\n\n_Note: This is a demo. Points are not actually stored._",
          },
        });
      } else if (subcommandName === "user") {
        const userOption = subcommand.options?.find((opt) => opt.name === "user");
        const userId = userOption?.value as string;
        await helper.respond(interaction.id, interaction.token, {
          type: 4,
          data: {
            content: `📊 Points for <@${userId}>: 0\n\n_Note: This is a demo. Points are not actually stored._`,
          },
        });
      }
    }
  },
};

