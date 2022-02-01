require('dotenv').config();

const { Client } = require('discord.js');
const cron = require('node-cron');

const client = new Client();

const PREFIX = process.env.BOT_PREFIX;

cron.schedule('0 */2 * * *', () => {
  console.log('Entering CronJob...');

  const channelId = ['799797745778294784'];

  for (i in channelId) {
    const channel = client.channels.cache.find(channel => channel.id === channelId[i]);
    if (channel) {
      channel.send('🐲 TA NA HORA DO HIDRATUS', { files: ['https://i.imgur.com/9PvpmCu.jpg'] });
    }
    else {
      console.log(`Channel with id ${channelId[i]} not found.`);
    }
  }
});

client.on('ready', () => {
  console.log(`${client.user.username} shouts FUS RO DAH`);
});

client.on('message', (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(PREFIX)) {
    const [command, ...args] = message.content
      .trim()
      .toLowerCase()
      .substring(PREFIX.length)
      .split(/\s+/);

    switch (command) {
      case 'hello':
      case 'shout':
        message.channel.send('🐲 FUS RO DAH');
        break;

      case 'help':
      case 'ajuda':
        const embedMessage = {
          color: '#842bd7',
          author: {
            name: 'Dovah',
            icon_url: 'https://i.imgur.com/esA2MmC.png',
            url: 'https://discord.js.org/'
          },
          title: 'Convide para seu servidor!',
          url: 'https://discord.com/oauth2/authorize?client_id=810427321453772801&scope=bot',
          fields: [
            {
              name: `\u200B\n🇫 Memes`,
              value: `\u200B\n**$bob/boohbah**: Ataque dos Boohbas lokors\n**$f**: F apenas\n**$booba**: Booba... Oh Booba...\n**$mary**: Pode ser um pouco dura as vezes\n**$brasilchora/bc**: Chore se chorou\n**$apavore**: Seja apavorado pelo bonde dos zillas lokos 🐲🐲🐲\n**$chave/chaves**: Lá vem ele 🔑\n**$gloria**: GLORIA SENHOR`
            },
            {
              name: `\u200B\n\n📢 Chamados`,
              value: `\u200B\n**$crit/aviso**: Hoje a fome não será passada!\n\n**$dangas/monte**: É o dangas\n\n**$trocas**: Te vejo lá deputado\n\n**$kakers/kaker/kakera/diñero**: DIÑERO`
            },
            {
              name: `\u200B\n\n🎵 Músicas`,
              value: `\u200B\n
                **$funk**: Playlist de funk do iluminismo\n\n
                **$rock**: Playlist de rock do vinicorno\n\n
                **$foda**: Playlist do boo?bi?nha?\n\n
                **$antigas**: Playlist das antigas\n\n
                **$hero3**: Playlist Guitar Hero 3\n\n
                **$pneu**: Cheiro de playlist\n\n
                **$2021**: 2021 em uma música\n\n`
            },
          ],
          timestamp: new Date(),
          footer: {
            text: 'Dale dale na narguilera',
            icon_url: 'https://i.imgur.com/esA2MmC.png'
          },
        };
        message.channel.send({ embed: embedMessage });
        break;

      case 'comes':
        message.channel.send('🐲 TENHO PENA');
        break;

      case 'apavore':
        message.channel.send({ files: ['https://i.imgur.com/cXGRV4f.gif.gif'] });
        break;

      case 'bob':
      case 'boohbah':
        message.channel.send('HUMBAH', { files: ['https://media.discordapp.net/attachments/472313197836107780/745883204191387709/KC88hXW.png'] });
        message.channel.send('JINGBAH', { files: ['https://media.discordapp.net/attachments/472313197836107780/749091168192692234/nDdrHle.png'] });
        message.channel.send('JUMBAH', { files: ['https://media.discordapp.net/attachments/472313197836107780/747276506455212104/eTwdkqA.png'] });
        message.channel.send('ZING ZING ZINGBAH', { files: ['https://media.discordapp.net/attachments/472313197836107780/745399146047078400/dkiUPxg.png'] });
        message.channel.send('ZUMBAH', { files: ['https://media.discordapp.net/attachments/472313197836107780/745781991450083378/LGfvMC2.png'] });
        break;

      case 'brasilchora':
      case 'bc':
        message.channel.send({ files: ['https://i.imgur.com/cu6BMez.png'] });
        break;

      case 'f':
        message.channel.send('F\n⠀⠀⠀⢀⡤⢶⣶⣶⡄\n⠀⠀⢀⣠⣤⣤⣤⣿⣧⣀⣀⣀⣀⣀⣀⣀⣀⣤⡄\n⢠⣾⡟⠋⠁⠀⠀⣸⠇⠈⣿⣿⡟⠉⠉⠉⠙⠻⣿\n⢺⣿⡀⠀⠀⢀⡴⠋⠀⠀⣿⣿⡇⠙⠇\n⠈⠛⠿⠶⠚⠋⣀⣤⣤⣤⣿⣿⣇⣀⣀⣴⡆\n⠀⠀⠀⠀⠠⡞⠋⠀⠀⠀⣿⣿⡏⠉⠛⠻⣿⡀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠀⠀⠈⠁\n⠀⠀⣠⣶⣶⣶⣶⡄⠀⠀⣿⣿⡇\n⠀⢰⣿⠟⠉⠙⢿⡟⠀⠀⣿⣿⡇\n⠀⢸⡟⠀⠀⠀⠘⠀⠀⠀⣿⣿⠃\n⠀⠈⢿⡄⠀⠀⠀⠀⠀⣼⣿⠏\n⠀⠀⠀⠙⠷⠶⠶⠶⠿⠟⠉\n\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿\n⠀⠀⣶⠀⠀⣀⣤⣶⣤⣉⣿⣿⣤⣀\n⠤⣤⣿⣤⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣀\n⠀⠛⠿⠀⠀⠀⠀⠉⣿⣿⣿⣿⣿⠉⠛⠿⣿⣤\n⠀⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⠛⠀⠀⠀⣶⠿\n⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⣿⣿⣿⣤⠀⣿⠿\n⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⣿⣿⣿⣿⣿⣿\n⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⣿⣿⠿⠉⠉\n⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿⠿\n⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠉\n⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠉⠛⣿\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣉⠀⣶⠿\n⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⠿\n⠀⠀⠀⠀⠀⠀⠀⠛⠿⠛\n              VOCÊ FOI DEBASE');
        break;

      case 'trocas':
        message.channel.send({ files: ['https://cdn.discordapp.com/attachments/802066329334054933/802066759912914974/44522033_441922009665290_7550316820037632000_n.jpg'] });
        break;

      case 'aviso':
      case 'crit':
        message.channel.send('🐲 <@&808788414584455170> ALERTA DE CRIT',
          { files: ['https://cdn.discordapp.com/attachments/802066329334054933/802455593184788541/fome_zero.jpg'] });
        break;

      case 'kaker':
      case 'kakera':
      case 'kakers':
      case 'diñero':
        message.channel.send('🐲 <@&808788414584455170> ALERTA DE KAKERA BOM',
          { files: ['https://i.imgur.com/hUqRoBR.png'] });
        break;

      case 'monte':
      case 'dangas':
        message.channel.send('🐲 <@!466326888298577920> ALERTA DE DANGAS',
          { files: ['http://pm1.narvii.com/7390/3aabe53d9ba0b49ec58ea7078c159e100600666er1-845-845v2_uhq.jpg'] });
        break;

      case 'booba':
        message.channel.send('Booba, oh Booba... o que foi que eu fiz?\nOlhe só pra você, nem está consciente e continua empenhado em mostrar ao disc o que pode critar...\nSesp: Ele está nocauteado, tudo o que mantém de pé é o poder do casers acabando\nVocê já provou...Você é um grande melador!',
          { files: ['https://pm1.narvii.com/6268/b38420bb24fc71137d035a469e8c3d143b480330_hq.jpg'] });
        break;

      case 'mary':
        message.channel.send('A Mary pode ser um pouco dura as vezes\nTalvez você não saiba disso, mas a Mary também cresceu sem crit e nunca melou ninguem de nosso disc\nMesmo assim eu nunca vi ela comer crits, roubar wl ou não liberar o p\nEla está sempre ansiosa pelo $ha e quer melar de crits, é o sonho dela, e arriscaria o rolls por isso, sem hesitar\nMeu palpite é que ela se cansou de casar por dinheiro e decidiu gastar rolls',
          { files: ['https://i.imgur.com/lR3sf9C.png'] });
        break;

      case 'funk':
        message.channel.send('https://www.youtube.com/playlist?list=PLLhmrPO8y1X09H2k9jr8DFdLVW19x7_rZ');
        break;

      case 'rock':
        message.channel.send('https://open.spotify.com/playlist/5nM6PIAwhQRI5WCWQTtlgl?si=HwD1s1HLR9mmluMSV33_qQ');
        break;

      case 'foda':
        message.channel.send('https://www.youtube.com/playlist?list=PLmz1OE_6GMnbcaKnU6VlXCNQ_aG3yJao_');
        break;

      case 'antigas':
        message.channel.send('https://open.spotify.com/playlist/7leDfB0K4F9U2ggEp7MmR1?si=244cd69d75be4f5e');
        break;

      case 'hero3':
        message.channel.send('https://open.spotify.com/playlist/2ZONg885GRx1XlgcsNVzLk?si=2e6d566ba7de4c76');
        break;

      case 'pneu':
      case 'queimado':
      case 'cheiro':
        message.channel.send('https://www.youtube.com/playlist?list=PLLhmrPO8y1X1RN7ax8Im3ID_ONo9Ht-Nt');
        break;

      case '2021':
      case '2021musica':
        message.channel.send('https://youtu.be/X2mOfqeAH7c?t=126');
        break;

      case 'chave':
      case 'chaves':
        message.channel.send('Lá vem o Chaves, Chaves, Chaves,\nTodos atentos olhando pra TV\nLá vem o Chaves, Chaves, Chaves,\nCom uma historinha bem gostosa de se ver\n\n(Isso, isso, isso, isso..)\n\nLá vem o Chaves, Chaves, Chaves,\nTodos atentos olhando pra TV\nLá vem o Chaves, Chaves, Chaves,\nCom uma historinha bem gostosa de se ver\n\nA Chiquinha é uma gracinha,\nrelincha tanto quando vai chorar\n\nE Seu Madruga, sempre muito calado,\nNão abre a boca só pra não brigar\n\nO Professor Girafales e a Dona Florinda,\nSe gostam tanto mas casório, nada ainda.\n\nE tem o Quico com a bochecha toda inchada,\nE é claro o Chaves, o rei da palhaçada\nE é claro o Chaves, o rei da palhaçada\n\nLá vem o Chaves, Chaves, Chaves,\nTô chegando!\nLá vem o Chaves, Chaves, Chaves!\n\n',
          { files: ['https://64.media.tumblr.com/tumblr_m0c4w8mWZb1r1n91fo1_400.gif?w=580'] });
        break;

      case 'gloria':
      case 'gloriasenhor':
      case 'lucro':
        message.channel.send('GLORIA SENHOR!\nGLORIA SENHOR!\nNOSSO LUCRO É SUADO\nTRABALHAMOS POR AMOR!\nSE VOCÊ FICAR EM CASA, O LUCRO NÃO VEM NA MÃO\nSE FALHAR NA RESPONSA E ERRAR NA MISSÃO\nO LUCRO NÃO VEM NA MÃO (NÃO NÃO)\nLUCRO NÃO VEM NA MÃO\n\n',
          { files: ['https://cdn.discordapp.com/attachments/260933577917595649/860274142048419840/unknown.png'] });
        break;

      case 'madruga':
      case 'seumadruga':
        message.channel.send(
          { files: ['https://i.imgur.com/8pHYrmq.png'] });
        break;

      case 'vocenaotem':
      case 'vcnaotem':
      case 'vcntem':
        message.channel.send(
          { files: ['https://i.imgur.com/27RkfPC.png'] });
        break;

      case 'dice':
        message.channel.send(
          { files: ['https://i.imgur.com/FEicyjG.png'] });
        break;
    }
  }
});

client.login(process.env.BOT_TOKEN);
