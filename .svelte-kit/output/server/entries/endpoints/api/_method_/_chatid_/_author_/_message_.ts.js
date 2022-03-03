import { a as addDocument } from "../../../../../../chunks/firebase-5ee02f5a.js";
import { Bot } from "grammy";
import "firebase/app";
import "firebase/firestore";
const KEY = "5130846667:AAGRRd1zxyvR_eyPqj1-lzQmLu3ECEo3pZA";
const bot = new Bot(KEY);
bot.command("start", (ctx) => ctx.reply(`${ctx.chat.id}`));
bot.on("message", (ctx) => ctx.reply("Got another message!"));
bot.start();
async function post(request) {
  if (request.params.method === "1") {
    try {
      const response = await getData(request.params.chatid, request.params.author, request.params.message);
      const data = (await response.json()).data;
      return {
        status: 200,
        body: {
          data
        }
      };
    } catch (error) {
      addDocAndEmail(request.params.chatid, request.params.author, request.params.message);
      return {
        status: 400,
        body: { error }
      };
    }
  } else {
    addDocAndEmail(request.params.chatid, request.params.author, request.params.message);
    return {
      status: 400,
      body: { error: "Simulated error: Unable to fetch data" }
    };
  }
}
async function getData(chatid, author, message) {
  try {
    return fetch("https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
      headers: {
        "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c"
      }
    });
  } catch (err) {
    addDocAndEmail(chatid, author, message);
    throw new Error(err);
  }
}
function addDocAndEmail(chat_id, author, message) {
  addDocument({ ActionCode: "Simulate error", Error: message, Timezone: new Date().getTimezoneOffset(), Author: author, Date: new Date().toLocaleString() });
  bot.api.sendMessage(chat_id, `Hi ${author}, there was an error in your database:

${message}`);
}
export { post };
