const Util = require('../utility')

module.exports = {
    name: 'setdj',
    description: 'command that set the sender user able to pilot the rythm bot',
    execute(msg, args, discord) {
        if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.roles.cache.some(role => role.name.toLowerCase() === "dj"))
            return null
        
        let memID = msg.author.id
        var role = msg.guild.roles.cache.find(role => role.name.toLowerCase() === "dj");
        msg.member.roles.add(role);

        setTimeout(() => {
            msg.member.roles.remove(role)
        }, 30000);
    }
}