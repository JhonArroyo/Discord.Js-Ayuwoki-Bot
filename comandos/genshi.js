module.exports = {
    name: 'genshi',
    description: 'ping mejorado!',
    execute(message, args, Discord){
        const newAttachmentG = new Discord.MessageAttachment()
        .setFile('https://i.imgur.com/o9hA330.png')
        message.reply('Hay te va');
        message.reply('Que opinas?');
        message.reply(newAttachmentG);

    }
}