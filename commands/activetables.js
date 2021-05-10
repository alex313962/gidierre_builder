const Util = require('../utility')

module.exports = {
    name: 'activetables',
    description: 'Lista dei tavoli aperti', // It isn't really, I just use this to try stuff.
    execute(msg, args, discord, rMsg) {
        let serverRoles = rMsg.slice(0);
        serverRoles = serverRoles.filter(e => e.guildID = msg.guild.id)

        let embed = new discord.MessageEmbed()
        .setTitle("Lista dei tavoli attualmente aperti")

        if(serverRoles.length <= 0)
            embed.setDescription('Non ci sono tavoli aperti')
        for(e of serverRoles){
            embed.addField(e.roleName, `Creato da ${e.authorName}`)
        }

        msg.channel.send(embed)
    }
}
