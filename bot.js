
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

var pog_count = 0

client.on('message', msg => {
  if (msg.content === 'pog') {
    pog_count++;
  }
});

client.on('message', msg => {
  if (msg.content === 'pogger') {
    pog_count++;
  }
});

client.on('message', msg => {
  if (msg.content === 'p-pog') {
    msg.reply(pog_count + " pogs");
  }
});

client.login(process.env.BOT_TOKEN);