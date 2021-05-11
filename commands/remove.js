const Util = require('../utility')
const fs = require('fs')

module.exports = {
    name: 'remove',
    description: 'remove a category and all channel inside', // It isn't really, I just use this to try stuff.
    async execute(msg, args, discord) {
        const botTag = 'gidierre_bot#4155'
        let setup = JSON.parse(fs.readFileSync('./data/setup.json'))
        if (!msg.member.hasPermission('ADMINISTRATOR') && !msg.member.roles.cache.some(role => role.name.toLowerCase() == setup[msg.guild.id].masterRole.toLowerCase()))
            return msg.channel.send(Util.Reply.sendBaseEmbed("Mi sa di no", "Non hai permessi sufficenti", Util.Colors.red));

        let catName = args.join(' ')

        if (!msg.guild.channels.cache.find(chan => chan.name.toLowerCase() == catName.toLowerCase()))
            return msg.channel.send(Util.Reply.sendBaseEmbed("Categoria specificata inesistente", "Devi scrivere il nome di una categoria esistente", Util.Colors.red));

        let category = msg.guild.channels.cache.find(cat => cat.name.toLowerCase() === catName.toLowerCase());

        if(category.type != 'category')
            return msg.channel.send(Util.Reply.sendBaseEmbed("Categoria specificata inesistente", "Devi scrivere il nome di una categoria esistente", Util.Colors.red));

        const AuditLogFetch = await category.guild.fetchAuditLogs({ limit: 1, type: "CHANNEL_CREATE" });
        if (botTag == AuditLogFetch.entries.first().executor.tag) {
            category.children.forEach(channel => {
                setTimeout(() => {
                    channel.delete()
                }, 500)
            });
            setTimeout(() => {
                category.delete();
            }, 500)
        }
        else{
            return msg.channel.send(Util.Reply.sendBaseEmbed('Non si può', 'Si possono cancellare solo stanze e categorie create dal bot stesso', Util.Colors.red))
        }
    }
}