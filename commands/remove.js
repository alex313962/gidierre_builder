const Util = require('../utility')
const fs = require('fs')

module.exports = {
    name: 'remove',
    description: 'remove a category and all channel inside', // It isn't really, I just use this to try stuff.
    execute(msg, args, discord) {
        let setup = JSON.parse(fs.readFileSync('./data/setup.json'))
        if (!msg.member.roles.cache.some(role => role.name.toLowerCase() == setup[msg.guild.id].masterRole.toLowerCase()))
            return msg.channel.send(Util.Reply.sendBaseEmbed("Mi sa di no", "Non hai permessi sufficenti", Util.Colors.red));

        let catName = args.join(' ')
        let category = msg.guild.channels.cache.find(cat => cat.name.toLowerCase() === catName.toLowerCase());
        category.children.forEach(channel => {
            setTimeout(() => {
                channel.delete()
            }, 500)
        });
        setTimeout(() => {
            category.delete();
        }, 500)
    }
}