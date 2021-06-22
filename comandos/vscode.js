module.exports = {
    name: 'vscode',
    description: 'command to display vscode domain',
    execute(message, args, Discord){
        const vscodeEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('**VSCode - Hosted by: Railway**')
        .setURL('https://deploy-code-server-production-sonv.up.railway.app/?folder=/home/coder/codes')
        .setDescription('Clickea arriba para acceder')
        .addFields(
            {name: 'Contraseña', value: '_vi52ikc9nrtubhnnh0d03lqixce4b6de_'}
        )
        .setFooter('Derechos Reservados por AyuwokiBot & WhiteLotus');
        message.channel.send(vscodeEmbed);
    }

}