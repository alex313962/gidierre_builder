const Util = require('../utility')
const fs = require('fs')

module.exports = {
    name: 'showsetup',
    description: 'show setup',
    execute(msg, args, discord) {
        let content = JSON.parse(fs.readFileSync('./data/setup.json'))
        if (!content.hasOwnProperty(msg.guild.id))
            return msg.channel.send(Util.Reply.sendBaseEmbed('Manca il setp di questo server!', 'Impostalo con il comando `|setup`', Util.Colors.red))

        let setupServer = content[msg.guild.id]

        return msg.channel.send(Util.Reply.sendBaseEmbed("Ruolo per i master", `${setupServer.masterRole}`, Util.Colors.green))
    }
}
