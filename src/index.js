require('dotenv').config();

const { Client } = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Client();

const PREFIX = process.env.BOT_PREFIX;


let servers = {};
let waCooldown = 11;

client.on('ready', () => {
  console.log(`${client.user.username} shouts FUS RO DAH`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content.startsWith(PREFIX)) {
    const [command, ...args] = message.content
      .trim()
      .toLowerCase()
      .substring(PREFIX.length)
      .split(/\s+/);

      switch(command){
        case 'hello':
        case 'shout':
          message.channel.send('🐲 FUS RO DAH');
        break;

        // case 'play':

        //   function play(connection, message){
        //     let server = servers[message.guild.id];

        //     console.log(servers);
        //     console.log(server.queue[0]);

        //     console.log(connection.play);

        //     server.dispatcher = connection.play(ytdl(server.queue[0],{filter: 'audioonly'}));

        //     console.log(dispatcher);

        //     server.queue.shift();

        //     server.dispatcher.on('end', function(){
        //       if(server.queue[0]){
        //         play(connection, message);
        //       } else{
        //         connection.disconnect();
        //       }
        //     })
        //   }

        //   if(!args){
        //     message.channel.send('🐲 YOU MUST FEED ME WITH A LINK');
        //     return;
        //   }
        //   if(!message.member.voice.channel){
        //     message.channel.send('🐲 YOU MUST BE IN A CHANNEL');
        //     return;
        //   }

        //   if(!servers[message.guild.id])
        //     servers[message.guild.id] = {
        //       queue: []
        //     }

        //   let server = servers[message.guild.id];

        //   server.queue.push(args[0]);

        //   if(!message.guild.voiceConnection)
        //     message.member.voice.channel.join().then(function(connection){
        //       play(connection, message);
        //     })

        // break;

        case 'comes':
          message.channel.send('🐲 TENHO PENA');
        break;

        case 'apavore':
          message.channel.send({files: ['https://i.imgur.com/cXGRV4f.gif.gif']});
        break;

        case 'bob':
        case 'boohbah':
          message.channel.send('HUMBAH',{files: ['https://media.discordapp.net/attachments/472313197836107780/745883204191387709/KC88hXW.png']});
          message.channel.send('JINGBAH',{files: ['https://media.discordapp.net/attachments/472313197836107780/749091168192692234/nDdrHle.png']});
          message.channel.send('JUMBAH',{files: ['https://media.discordapp.net/attachments/472313197836107780/747276506455212104/eTwdkqA.png']});
          message.channel.send('ZING ZING ZINGBAH',{files: ['https://media.discordapp.net/attachments/472313197836107780/745399146047078400/dkiUPxg.png']});
          message.channel.send('ZUMBAH',{files: ['https://media.discordapp.net/attachments/472313197836107780/745781991450083378/LGfvMC2.png']});
        break;

        case 'brasilchora':
        case 'bc':
          message.channel.send({files: ['https://i.imgur.com/cu6BMez.png']});
        break;

        case 'f':
          message.channel.send('F F F F F F\nF\nF F F F\nF\nF\n\n');
        break;

        case 'trocas':
          message.channel.send({files: ['https://cdn.discordapp.com/attachments/802066329334054933/802066759912914974/44522033_441922009665290_7550316820037632000_n.jpg']});
        break;

        case 'wa':
          waCooldown++;
          if(waCooldown===12){
            waCooldown=0;
            message.channel.send('🐲 SÓ USA WA QUEM NÃO SE GARANTE NO H');
          }
        break;

        case 'wg':
        case 'hg':
          message.channel.send('🐲 SEM MISERICÓRDIA COM OS FAMINTOS HEIN?');
        break;

        case 'aviso':
        case 'crit':
          message.channel.send('🐲 <@&808788414584455170> ALERTA DE CRIT');
          message.channel.send({files: ['https://cdn.discordapp.com/attachments/802066329334054933/802455593184788541/fome_zero.jpg']});
        break;
      }
  }
});

client.login(process.env.BOT_TOKEN);
