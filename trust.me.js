const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "MjMzMjQ1MjE3NDU1NzM0Nzg1.CtbZ1g.-7wXTC-5dGyYJ7oiSo4JGXtGolQ";

bot.on("message", msg => {
  if (msg.content.startsWith("ping")) {
    msg.channel.sendMessage("pong!");
  }
});

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.login(token);
