module.exports = {
    name: 'ping',
    description: 'comando ping!',
    execute(message, args){
        //message.channel.send('pong');
        message.reply('**Permite y te hago el favor**');
        message.reply('<:PeepoPing:672448869661147186>');
        message.channel.send(`🏓 Tu latenia es de ${Date.now() - message.createdTimestamp}ms`);
        
    }
}