/** 
 *          AYUWOKI BOT 
 *      AUTHOR : wHITELOTUS 
 *      DATE   : 14-05-2021-01-44-00
 * 
*/

import * as Discord from 'discord.js'
import * as ytdl from 'ytdl-core'
import * as fs from 'fs'

const client = new Discord.Client();


/** Bloque de reaccion de respuesta del bot */
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

const items = [
  "Porque a esta hora sale el ayuwoki...xD",
  "Porque ya me tienen podrido con sus comandos",
  "Porque no dejan descansar...diosss"
]; 

/** Bloque random NFSW  del bot */
function random_image(itemx)
{
  
return itemx[Math.floor(Math.random()*itemx.length)];
     
}

const itemx = [
  "https://i.imgur.com/o9hA330.png",
  "https://i.imgur.com/VzVHTTG.gif",
  "https://img.wattpad.com/cover/81461955-512-k104018.jpg",
  "https://i.imgur.com/9DhvFAs.jpeg"
]; 



/** Bloque de reaccion de respuesta del bot */
client.on('ready', () => {
  setInterval(() => {
    var solitochannel = client.channels.cache.get('672441940675002407');
    const mention_init = '@everyone' 
    const text = 'NO SE HAGAN LA PAJA CHICOS QUE ESO ES MALO.....ATT: EDGAR';
    solitochannel.send(mention_init + text)
  }, 21600*1000);

  console.log(`Conectado como ${client.user.tag}!`);
});

/* Si el mensaje en el chat coincide con lo asignado dentro de la condicional el bot efectuará una respuesta hacia el usuario quien dijo el Keyword */
client.on('message', msg => {
  if (msg.content === 'ya duermanse' || msg.content === 'Ya duermanse' || msg.content === 'Ya Duermanse' || msg.content === 'YA DUERMANSE' || msg.content === 'ya duermase' || msg.content === 'Ya duermase' || msg.content === 'Ya Duermase' || msg.content === 'YA DUERMASE')  {
      msg.reply(random_item(items));
  }
});

client.on('message', async message => {
  if (!message.guild) return;
  if (message.content === 'unetenos ayuwoki') {
    if (message.member.voice.channel) {
      message.reply('No se que voy a hacer conectado contigo pero dale...xD');
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('Necesitas unirte a un canal de voz primero crack!');
    }
  }
});

client.on('message', async message => {
  if (!message.guild) return;
  if (message.content === 'sacate alv') {
    if (message.member.voice.channel) {
      message.reply('HE HE');
      const connection_leave = await message.member.voice.channel.leave();
    } else {
      message.reply('Al menos dimelo cuando estemos dentro del canal de voz');
    }
  }
});

client.on('message', message => {
  if (message.content === 'muestrame mi avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});


client.on('message', message => {
  if (message.content === 'Ayuwoki a ver saca algo de genshi impact') {
    const attachment = new Discord.MessageAttachment('https://i.imgur.com/o9hA330.png');
    message.reply('Hay te va');
    message.reply('Que opinas?');
    message.channel.send(attachment);
  } else if (message.content === 'Ayuwoki sacate algo de lo qu tu sabes....') {
      let url_pass = random_image(itemx);
      const attachment_nfsw = new Discord.MessageAttachment(url_pass);
      message.reply('Yo no se de que me estas hablando.....ahhh ya...... lo que sabemos');
      message.reply('Hay te va pues');
      message.channel.send(attachment_nfsw);  
  }
});


client.login();

