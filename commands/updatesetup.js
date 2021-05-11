const Util = require('../utility')
const fs = require('fs')

module.exports = {
    name: 'updatesetup',
    description: 'SettingUp the bot',
    execute(msg, args, discord) {
        if(!msg.member.hasPermission('ADMINISTRATOR'))
            return msg.channel.send(Util.Reply.sendBaseEmbed("Mi sa di no", "Non hai permessi sufficenti", Util.Colors.red));

        let content = JSON.parse(fs.readFileSync('./data/setup.json'))

        if(!content.hasOwnProperty(msg.guild.id))
            return msg.channel.send(Util.Reply.sendBaseEmbed('Manca il setp di questo server!', 'Impostalo con il comando `|setup`', Util.Colors.red))

        if(args.length <= 0)
            return msg.channel.send(Util.Reply.sendBaseEmbed('Mancano argomenti', 'Devi specificare il ruolo che rappresenta i tuoi master!', Util.Colors.red))
        
        let desRole = args.join(' ')

        if(!msg.guild.roles.cache.some(r => r.name.toLowerCase() == desRole.toLowerCase()))
            return msg.channel.send(Util.Reply.sendBaseEmbed('Ruolo mancante', 'Devi prima creare il ruolo che desideri utilizzare!', Util.Colors.red))
        
        let settings = {masterRole:desRole}
        content[msg.guild.id] = settings
        fs.writeFileSync('./data/setup.json', JSON.stringify(content))
        return msg.channel.send(Util.Reply.sendBaseEmbed('Impostazioni salvate!', 'Puoi vederle con il comando `|showsetup` o modificarle con il comando `|updatesetup`', Util.Colors.green))
        }
}
