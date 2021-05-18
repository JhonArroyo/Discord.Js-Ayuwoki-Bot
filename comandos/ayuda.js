module.exports = {
    name: 'ayuda',
    description: 'Embeds!',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Comandos de Ayuwoki')
        .setURL('https://youtu.be/h_D3VFfhvs4?t=102')
        .setDescription('Clickea arriba y veras la referencia XD')
        .addFields(
            {name: '.yaduermanse', value: '_Te responde con un mensaje aleatorio_'},
            {name: '.avatar', value: '_Muestra tu imagen que esta siendo utilizado en tu perfil_'},
            {name: '.genshi', value: '_Muestra alguna imagen de genshi impact **En desarrollo**_'},
            {name: '.sorprendeme', value: '_Solo te puedo decir que si ingresas el comando alguna imagen te mostrará_'},
            {name: '.ping', value: '_Te respondera con un pong_'},
            {name: '.peepoping', value: '**Version mejorada** _Te respondera pong si le das el emoji relacionado con ping_'},
            {name: '.panties', value: '_Supongo que si pones un emoji de panties...¿Esperas al menos un gif? **En desarrollo**_'},
            {name: '.limpiar', value: '_**.limpiar <numero>:** Te permitira borrar una cantidad de mensajes **En Desarrollo**_'},
            {name: '.reproduce', value: '_**.reproduce <text o URL>:** Te permitira que pueda reproducirte algo en el canal de voz en el cual estas_'},
            {name: '.detente', value: '_Detiene la cancion que estoy reproduciendo dentro del canal de voz_'},
        )
        .setImage('https://i.pinimg.com/originals/6c/6f/f8/6c6ff8a7fd9016b39d2858fdf3bff4df.jpg')
        .setFooter('Derechos Reservados por AyuwokiBot & WhiteLotus');
        
        message.channel.send(newEmbed);
    }
}