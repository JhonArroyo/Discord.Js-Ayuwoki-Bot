module.exports = {
    name: 'avatar',
    description: 'Comando para mostrar la imagen utilizada del client.user que efectuo el keyword',
    execute(message, args){
        message.reply(message.author.displayAvatarURL());
    }
}