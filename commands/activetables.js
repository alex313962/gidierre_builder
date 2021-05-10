const e = require('express');
const Util = require('../utility')

module.exports = {
    name: 'activetables',
    description: 'Lista dei tavoli aperti', // It isn't really, I just use this to try stuff.
    async execute(msg, args, discord, rMsg) {
        let serverRoles = rMsg.slice(0);
        serverRoles = serverRoles.filter(e => e.guildID = msg.guild.id)

        let embed = new discord.MessageEmbed()
        .setTitle("Lista dei tavoli attualmente aperti")

        if(serverRoles.length <= 0)
            embed.setDescription('Non ci sono tavoli aperti')

        for(let e of serverRoles){
            let curChat = msg.guild.channels.cache.get(e.channelID)
            let curMsg = await curChat.messages.fetch(e.msgID);
            let curPlayerCount = curMsg.reactions.cache.get("✔").count - 1

            if(curPlayerCount == Number(e.capMem) - 1)
                embed.addField(e.roleName, `Creato da ${e.authorName}\nTavolo Pieno`)
            else
                embed.addField(e.roleName, `Creato da ${e.authorName}\n${curPlayerCount}/${Number(e.capMem) - 1} posti prenotati`)
        }

        msg.channel.send(embed)
    }
}
