# flarecord 🌥️

discord gateway client for cloudflare workers. built with typescript and optimized for durable objects.

## installation

```bash
npm install flarecord
```

## using source files directly

if you encounter bundling issues with the compiled version, you can import directly from the source files:

```typescript
// import from source (recommended for cloudflare workers)
import { DiscordClient, GatewayIntents, MessageHelper } from "flarecord/src";

// or import specific modules
import { DiscordClient } from "flarecord/src/core/client";
import { MessageHelper } from "flarecord/src/utils/message-helper";
```

**when to use source files:**
- cloudflare workers projects (handles typescript natively)
- when you need to avoid bundling issues
- when you want to use the latest source code

**when to use compiled version:**
- standard node.js projects
- when you prefer pre-compiled javascript

the source files are included in the npm package, so both options work without additional configuration.

## how it works

flarecord connects to discord's gateway api using websockets. it runs inside cloudflare durable objects which provide:

- persistent websocket connections
- automatic reconnection with exponential backoff
- session resumption after disconnections
- heartbeat management via durable object alarms
- state persistence across restarts

the library handles all the complexity of the discord gateway protocol automatically. you just provide a token and intents, and it manages connections, heartbeats, and reconnections.

## what it supports

- discord gateway v10 protocol
- all gateway intents
- automatic reconnection
- session resumption
- heartbeat management
- message events
- interaction events
- all discord gateway events
- typescript support
- discord.js compatible builders (embeds, buttons, etc)

## example

```typescript
import { DurableObject } from "cloudflare:workers";
import { DiscordClient, GatewayIntents, MessageHelper } from "flarecord";
import type { DurableObjectState } from "@cloudflare/workers-types";

export interface Env {
  DISCORD_BOT_TOKEN: string;
}

export class MyBot extends DurableObject<Env> {
  private client: DiscordClient;
  private messageHelper: MessageHelper | null = null;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.client = new DiscordClient(ctx, {
      token: env.DISCORD_BOT_TOKEN,
      intents: GatewayIntents.GUILDS | GatewayIntents.GUILD_MESSAGES | GatewayIntents.MESSAGE_CONTENT,
      onReady: (data) => {
        console.log(`bot ready: ${data.user.username}`);
        this.messageHelper = new MessageHelper(env.DISCORD_BOT_TOKEN);
      },
      onMessage: (data) => {
        if (data._gatewayMetadata?.event !== "MESSAGE_CREATE") return;
        
        const message = data as {
          author?: { bot?: boolean };
          content?: string;
          channel_id?: string;
        };

        if (message.author?.bot || !message.channel_id || !this.messageHelper) return;

        if (message.content === "!ping") {
          this.messageHelper.send(message.channel_id, "pong!");
        }
      },
    });
  }

  async fetch(request: Request): Promise<Response> {
    return this.client.fetch(request);
  }

  async alarm(): Promise<void> {
    return this.client.alarm();
  }
}
```

## configuration

```typescript
const client = new DiscordClient(ctx, {
  token: "your-bot-token",
  intents: GatewayIntents.GUILDS | GatewayIntents.GUILD_MESSAGES,
  storageKey: "gatewayState", // optional
  onReady: (data) => { /* handle ready */ },
  onMessage: (data) => { /* handle messages */ },
  onError: (error) => { /* handle errors */ },
  onDispatch: (event, data) => { /* handle all events */ },
});
```

## intents

use the `GatewayIntents` enum to specify which events you want:

```typescript
import { GatewayIntents } from "flarecord";

const intents = 
  GatewayIntents.GUILDS |
  GatewayIntents.GUILD_MESSAGES |
  GatewayIntents.MESSAGE_CONTENT;
```

available intents: GUILDS, GUILD_MEMBERS, GUILD_MODERATION, GUILD_EMOJIS_AND_STICKERS, GUILD_INTEGRATIONS, GUILD_WEBHOOKS, GUILD_INVITES, GUILD_VOICE_STATES, GUILD_PRESENCES, GUILD_MESSAGES, GUILD_MESSAGE_REACTIONS, GUILD_MESSAGE_TYPING, DIRECT_MESSAGES, DIRECT_MESSAGE_REACTIONS, DIRECT_MESSAGE_TYPING, MESSAGE_CONTENT, GUILD_SCHEDULED_EVENTS, AUTO_MODERATION_CONFIGURATION, AUTO_MODERATION_EXECUTION, GUILD_MESSAGE_POLLS, DIRECT_MESSAGE_POLLS.

## sending messages

use `MessageHelper` to send messages, embeds, buttons, and more:

```typescript
import { MessageHelper, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } from "flarecord";

const helper = new MessageHelper(token);

// send text
await helper.send(channelId, "hello!");

// send embed
const embed = new EmbedBuilder()
  .setTitle("title")
  .setDescription("description")
  .setColor(0x00ff00);
await helper.send(channelId, embed);

// send button
const button = new ButtonBuilder()
  .setCustomId("button_id")
  .setLabel("click me")
  .setStyle(ButtonStyle.Primary);
const row = new ActionRowBuilder().addComponents(button);
await helper.send(channelId, row);

// reply to message
await helper.reply(channelId, messageId, guildId, "reply text");
```

## requirements

- cloudflare workers runtime
- durable objects enabled
- discord bot token

## license

mit
