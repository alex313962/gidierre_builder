const Util = require('../utility')

module.exports = {
    name: 'finish',
    description: 'Finish Campaign',
    execute(msg, args, discord) {
        if(args <= 0)
            return msg.channel.send(Util.Reply.sendBaseEmbed('Argomenti non specificati', 'Usa `|help` per avere più informazioni', Util.Colors.red))
        
        let role = msg.guild.roles.cache.find(role => role.name === args.join(' '))
        if(role)
            role.delete();
    }
}
