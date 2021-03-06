const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
	  name: 'play',
	  description: 'Reproduce musica atravez del canal de voz',
	  async execute(message, args) {
	    	const voiceChannel = message.member.voice.channel;
		
		    if(!voiceChannel) return message.channel.send('Necesitas estar un canal de voz primero crack!');
		    const permissions = voiceChannel.permissionsFor(message.client.user);
		    if(!permissions.has('CONNECT')) return message.channel.send('No tienes permiso!');
		    if(!permissions.has('SPEAK')) return message.channel.send('No tienes permiso!');
		    if(!args.length) return message.channel.send('A la espera del segundo argumento!');
		
		    const validarURL = (str) => {
			      var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
			      if(!regex.test(str)){
				        return false;
			      } else {
				        return true;
		    	  }
		     }
		
		     if(validarURL(args[0])){
			       message.channel.send('Ingresaste una URL correcta!');
			
			       const connection = await voiceChannel.join();
			       const stream = ytdl(args[0], {filter: 'audioonly'});
			
			       connection.play(stream, {seek: 0, volume: 1})
			       .on('finish', () => {
			  	       voiceChannel.leave();
				         message.channel.send('**HE HE! Dejando el canal de voz....**');
			         });
			
			       await message.reply(':thumbsup: Reproduciendo **Tu Link**')
			
			       return
		       }

		
		       const connection = await voiceChannel.join();
		
		       const videoFinder = async (query) => {
               const videoResult = await ytSearch(query);
			
               return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
		         }
		
		         const video = await videoFinder(args.join(' '));
		
		         if(video){
			           const stream = ytdl(video.url, {filter: 'audioonly'});
			           connection.play(stream, {seek: 0, volume: 1})
			           .on('finish', ()=> {
				             voiceChannel.leave();
                     message.channel.send('HE HE! Dejando el canal de voz....');
			             });
			
			             await message.reply(`:thumbsup: Ahora Reproduciendo ***${video.title}***`);
		           } else {
			             message.channel.send('No se ha encontrado ningun video');
		             }
	   }
}