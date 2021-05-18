module.exports = {
	name: 'leave',
	description: 'Expulsa al bot deteniendo la reproduccion de la  musica atravez del canal de voz',
	async execute(message, args) {
		const voiceChannel = message.member.voice.channel;
		
		if(!voiceChannel) return message.channel.send('Debes estar en el canal de voz para detener la reproduccion de la musica');
		await voiceChannel.leave();
		await message.channel.send('HE HE! :smiling_face_with_tear:')
  }
}