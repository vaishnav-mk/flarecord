import { SlashCommandBuilder } from "@discordjs/builders";
import type { Interaction, CommandHandler, InteractionHelper } from "../types";

export const boopCommand = new SlashCommandBuilder()
  .setName("boop")
  .setDescription("Boops the specified user, as many times as you want")
  .addUserOption((option) =>
    option
      .setName("user")
      .setDescription("The user to boop")
      .setRequired(true)
  )
  .addIntegerOption((option) =>
    option
      .setName("boop_amount")
      .setDescription("How many times should the user be booped (defaults to 1)")
  )
  .addIntegerOption((option) =>
    option
      .setName("boop_reminder")
      .setDescription("How often should we remind you to boop the user")
      .addChoices(
        { name: "Every day", value: 1 },
        { name: "Weekly", value: 7 }
      )
  );

export const boopHandler: CommandHandler = {
  async execute(interaction: Interaction, helper: InteractionHelper) {
    const options = interaction.data?.options || [];
    const userOption = options.find((opt) => opt.name === "user");
    const boopAmountOption = options.find((opt) => opt.name === "boop_amount");
    const boopReminderOption = options.find((opt) => opt.name === "boop_reminder");

    const userId = userOption?.value as string;
    const boopAmount = (boopAmountOption?.value as number) || 1;
    const boopReminder = boopReminderOption?.value as number | undefined;
    const boopText = `<@${userId}>`;
    const boops = "👆 ".repeat(Math.min(boopAmount, 10));

    let response = `${boops}${boopText} has been booped ${boopAmount} time${boopAmount !== 1 ? "s" : ""}!`;
    
    if (boopReminder) {
      const reminderText = boopReminder === 1 ? "every day" : "weekly";
      response += `\n\n🔔 Reminder set: ${reminderText}`;
    }

    await helper.respond(interaction.id, interaction.token, {
      type: 4,
      data: {
        content: response,
      },
    });
  },
};

