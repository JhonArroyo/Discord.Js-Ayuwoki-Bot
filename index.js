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
    var solitochannel = client.channels.cache.get('672441940675002407');
    const mention_init = '@everyone' 
    const text = '_NO SE HAGAN LA PAJA CHICOS QUE ESO ES MALO.....ATT: EDGAR_<:peepoPANTIES:672448870218989577>';
    solitochannel.send(mention_init + text)
  }, 21600*1000);

  /** Bloque interno de mencion @everyone pora  recordar el uso del comando personalizado de help*/
  setInterval(() => {                                 
    var solitochannel_hep = client.channels.cache.get('843623327904956436');
    const mention_help = '@everyone' 
    const text_help = '_Si se te olvido de como pedirme ayuda para saber como hablarme tan solo escribeme el siguiente comando **.comandos** y yo te arrojaré el listado...ATT: OBO_';
    solitochannel_hep.send(mention_help + text_help)
  }, 1800*1000);

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

});

client.login(mySecret);