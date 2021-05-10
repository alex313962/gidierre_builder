const Util = require('../utility')

module.exports = {
    name: 'remove',
    description: 'remove a category and all channel inside', // It isn't really, I just use this to try stuff.
    execute(msg, args, discord) {
        if (!msg.member.roles.cache.some(role => role.name == "Master Gidierre"))
            return msg.channel.send(Util.Reply.sendBaseEmbed("mi sa di no", "Non hai permessi sufficenti", Util.Colors.red));

        let catName = args.join(' ')
        let category = msg.guild.channels.cache.find(cat=> cat.name === catName);
        category.children.forEach(channel => channel.delete());
        category.delete();
    }
}