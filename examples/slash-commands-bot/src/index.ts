import { SlashCommandsBot } from "./bot";
import type { DurableObjectNamespace } from "@cloudflare/workers-types";
import type { Env as BotEnv } from "./types";

export interface Env extends BotEnv {
  SLASH_COMMANDS_BOT: DurableObjectNamespace;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    if (url.pathname === "/bot" || url.pathname === "/") {
      const id = env.SLASH_COMMANDS_BOT.idFromName("slash-commands-bot-instance");
      const stub = env.SLASH_COMMANDS_BOT.get(id);
      return stub.fetch(request);
    }

    return new Response("Slash Commands Bot worker - visit /bot to initialize", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};

export { SlashCommandsBot };

