module.exports = {
    name: 'special',
    description: 'Comando para que el bot te arroje un gif o imagen sobre panties!',
    execute(message, args, Discord){
        const newAttachmentP = new Discord.MessageAttachment()
        .setFile('https://hg1.funnyjunk.com/thumbnails/comments/Do+you+believe+in+panties+from+a+_4b543c7a2d434f96dac23190153d13c8.gif')
        message.reply('**Permite y te hago el favor**');
        message.reply('<:peepoPANTIES:672448870218989577>');
        message.reply(newAttachmentP);
    }
}