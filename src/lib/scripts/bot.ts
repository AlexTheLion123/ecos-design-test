import { Bot } from "grammy";

const KEY = import.meta.env.VITE_BOT_TOKEN;

// Create an instance of the `Bot` class and pass your authentication token to it.
export const bot = new Bot(KEY as string); // <-- put your authentication token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply(`${ctx.chat.id}`));
// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();