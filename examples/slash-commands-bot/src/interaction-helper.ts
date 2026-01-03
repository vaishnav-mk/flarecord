import type { InteractionHelper as IInteractionHelper, InteractionResponseData } from "./types";

export class InteractionHelper implements IInteractionHelper {
  private token: string;
  private readonly baseUrl = "https://discord.com/api/v10";

  constructor(token: string) {
    this.token = token;
  }

  async respond(
    interactionId: string,
    interactionToken: string,
    data: InteractionResponseData
  ): Promise<unknown> {
    const url = `${this
      .baseUrl}/interactions/${interactionId}/${interactionToken}/callback`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bot ${this.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(
        `Discord API error: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  }

  async followUp(
    interactionToken: string,
    data: FollowUpData
  ): Promise<unknown> {
    const url = `${this.baseUrl}/webhooks/@me/${interactionToken}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bot ${this.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(
        `Discord API error: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  }

  async registerCommands(
    applicationId: string,
    commands: unknown[],
    guildId?: string
  ): Promise<unknown> {
    const url = guildId
      ? `${this
          .baseUrl}/applications/${applicationId}/guilds/${guildId}/commands`
      : `${this.baseUrl}/applications/${applicationId}/commands`;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bot ${this.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commands)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Discord API error: ${response.status} ${response.statusText} - ${errorText}`
      );
    }
    return response.json();
  }
}

type FollowUpData = {
  content?: string;
  embeds?: unknown[];
  components?: unknown[];
};
