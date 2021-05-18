module.exports = {
    name: 'clear',
    description: "Comando para que limpie los mensajes dada una cantidad!",
   async  execute(message, args) {
        if (!args[0]) return message.reply("_Porfavor ingresa la cantidad de mensajes a borrar_");
 
        if(isNaN(args[0])) return message.reply("_Porfavor escribe un numero real_");
 
        if(args[0] > 100) return message.reply("Lo siento solo te puedo borrar 100 mensajes mas de hay no porque _**no soy tu puto mayordomo**_");
        
        if(args[0] < 1) return message.reply("_**Al menos tengo que borrar un mensaje pendejo o acaso voy a borrar numeros negativos_**");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
    }
}