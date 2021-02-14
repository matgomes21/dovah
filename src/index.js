require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();

const PREFIX = process.env.BOT_PREFIX;

client.on('ready', () => {
  console.log(`${client.user.username} shouts FUS RO DAH`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content.startsWith(PREFIX)) {
    const [command, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

      switch(command){
        case 'hello':
        case 'shout':
          message.channel.send('FUS RO DAH');
        break;

        default:
          message.channel.send('I DO NOT KNOW THIS SHOUT');
      }
  }
});

client.login(process.env.BOT_TOKEN);
