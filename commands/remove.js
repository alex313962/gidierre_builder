const Util = require('../utility')

module.exports = {
    name: 'remove',
    description: 'This is a F**KING PING PONG COMMAND BABY', // It isn't really, I just use this to try stuff.
    execute(msg, args, discord) {
        if (!msg.member.roles.cache.some(role => role.name == "Master Gidierre"))
            return msg.channel.send(Util.Reply.sendBaseEmbed("mi sa di no", "Non hai permessi sufficenti", Util.Colors.red));

        removeCategory(msg.guild, args.join(' '));
    }
}

function removeCategory(guild, catName) {

    //console.log(guild.channels);
    let category = guild.channels.cache.find(cat=> cat.name === catName);
    //console.log(category);
    category.children.forEach(channel => channel.delete());
    category.delete();
}

