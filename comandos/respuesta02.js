module.exports = {
	name: 'respuesta02',
	description: 'Comando para el bot te sorprenda con una imagen random',
	execute(message, args, Discord) {
		function random_imageX(itemx)
		{
		  
		return itemx[Math.floor(Math.random()*itemx.length)];
			 
		}

		const itemx = [
		  "https://i.imgur.com/o9hA330.png",
		  "https://i.imgur.com/VzVHTTG.gif",
		  "https://img.wattpad.com/cover/81461955-512-k104018.jpg",
		  "https://i.imgur.com/9DhvFAs.jpeg"
		]; 
		
		const newAttachmentX = new Discord.MessageAttachment()
		.setFile(random_imageX(itemx))
		message.reply('Yo no se de que me estas hablando.....ahhh ya...... lo que sabemos');
		message.reply('Hay te va pues');
		
		message.reply(newAttachmentX)
	}
}