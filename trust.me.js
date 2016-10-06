const Discord = require("discord.js");
const config = require("./config.json");
const replies = require("./replies.json");
const bot = new Discord.Client();
const token = config["secret"];

bot.on("message", msg => {
  let prefix = "!";
  if(!msg.content.startsWith(prefix)) return;
  if(msg.author.bot) return;

  if (prefix + replies[msg.content]) {
    msg.channel.sendMessage(replies[msg.content]);
  }
});

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.login(token);
