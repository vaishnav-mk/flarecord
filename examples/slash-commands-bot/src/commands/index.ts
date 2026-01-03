import { pingCommand, pingHandler } from "./ping";
import { boopCommand, boopHandler } from "./boop";
import { pointsCommand, pointsHandler } from "./points";

export const commands = [
  { builder: pingCommand, handler: pingHandler },
  { builder: boopCommand, handler: boopHandler },
  { builder: pointsCommand, handler: pointsHandler },
];

export function getCommandHandlers() {
  return {
    ping: pingHandler,
    boop: boopHandler,
    points: pointsHandler,
  };
}

export function getCommandBuilders() {
  return commands.map((cmd) => cmd.builder);
}

