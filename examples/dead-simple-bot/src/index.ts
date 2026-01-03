import { TestBot } from "./bot";
import type { DurableObjectNamespace } from "@cloudflare/workers-types";

export interface Env {
  DISCORD_BOT_TOKEN: string;
  TEST_BOT: DurableObjectNamespace;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    if (url.pathname === "/bot" || url.pathname === "/") {
      const id = env.TEST_BOT.idFromName("test-bot-instance");
      const stub = env.TEST_BOT.get(id);
      return stub.fetch(request);
    }

    return new Response("Test bot worker - visit /bot to initialize", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};

export { TestBot };

