const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
 
app.listen(3000, () => {
  console.log('server started');
});

const Discord = require('discord.js');

const client = new Discord.Client();


const mySecret = process.env['token']

const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./comandos/${file}`);
    
    client.commands.set(command.name, command);
    
}


client.once('ready', () => {
  /** Bloque interno de mencion @everyone por DREYG */
  setInterval(() => {
    // 774077217654702082 (general mi canal) 
    // 721181006752776283 (general solitos) *
    var solitochannel = client.channels.cache.get('721181006752776283');
    function frasesGen(frases_random) {
      return frases_random[Math.floor(Math.random()*frases_random.length)];
    }
    frases_random = [
      "https://media0.giphy.com/media/26n6Wb0bIuuWY0yXK/giphy.gif?cid=ecf05e47g7qy9hlq8c924w4gzlgw3rvshi6yx5ynum296ph8&rid=giphy.gif&ct=g",
      "https://media4.giphy.com/media/M9C8PHLkh0hQxraaLG/giphy.gif?cid=790b76116d3552c35e687c079332402cce2996100ccb9195&rid=giphy.gif&ct=g",
      "_NO SE HAGAN LA PAJA CHICOS QUE ESO ES MALO.....ATT: EDGAR_<:peepoPANTIES:672448870218989577>"
    ];
    const mention_init = '@everyone' 
    const text = frasesGen(frases_random);
    solitochannel.send(mention_init + text)
  }, 42600*1000);


  console.log(`Conectado como ${client.user.tag}!`);
  client.user.setActivity('lo que haces', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
  //console.log('Bot Enabled');
});

client.on('message', message => {
   if(!message.content.startsWith(prefix) || message.author.bot) return;
   
   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();
   
   if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
   }
   
   else if(command === 'comandos'){
       client.commands.get('ayuda').execute(message, args, Discord);
   }

   else if(command === 'yaduermanse'){
       client.commands.get('respuesta01').execute(message, args);
   }

   else if(command === 'peepoping'){
       client.commands.get('pemoji').execute(message, args);
   }
  
   else if(command === 'avatar'){
       client.commands.get('avatar').execute(message, args);
   }

   else if(command === 'genshi'){
       client.commands.get('genshi').execute(message, args, Discord);
   }
  
   else if(command === 'sorprendeme'){
       client.commands.get('respuesta02').execute(message, args, Discord);
   }

   else if(command === 'panties'){
       client.commands.get('special').execute(message, args, Discord);
   }

   else if(command === 'limpiar'){
       client.commands.get('clear').execute(message, args);
   }

   else if(command === 'reproduce'){
       client.commands.get('play').execute(message, args);
   }

   else if(command === 'detente'){
       client.commands.get('leave').execute(message, args);
   }

   else if(command === 'vscode'){
       client.commands.get('vscode').execute(message, args, Discord);
   }

});

client.login(mySecret);

