//msg.reference.messageID || channelID || guildID
const Util = require('../utility')
//check messaggio nelle risposte è già nell'array
module.exports = {
    name: 'reaction',
    description: 'Setting Reaction', // It isn't really, I just use this to try stuff.
    execute(msg, args, discord, rMsgs) {
        if (args.length <= 0)
            return msg.channel.send(Util.Reply.sendBaseEmbed('Argomenti non specificati', 'Usa `|help` per avere più informazioni', Util.Colors.red))

        const react = "✔";

        let memberCap = args.shift()
        if (Number.isNaN(Number(memberCap)) || memberCap <= 0)
            return msg.channel.send(Util.Reply.sendBaseEmbed('Non è un numero valido', 'Stai cercando di aggiungere un testo o un numero negativo al posto del numero di partecipanti al tavolo ', Util.Colors.red))//utile

        if (args.length <= 0)
            return msg.channel.send(Util.Reply.sendBaseEmbed('Manca ancora qualcosa', 'Usa `|help` per avere più informazioni', Util.Colors.red))

        let nameRole = args.join(' ')
        let authID = msg.author.id

        msg.channel.messages.fetch(msg.reference.messageID)
            .then(message => {
                if (message.author.id != authID)
                    return msg.channel.send(Util.Reply.sendBaseEmbed('Il messaggio non è tuo', 'Stai cercando di aggiungere reazioni a un messaggio non tuo', Util.Colors.red))//utile

                msg.guild.roles.create({
                    data: {
                        name: nameRole
                    },
                    reason: 'Partecipazione alla relativa campagna'
                }).catch(console.error)

                message.react(react).then(() => {
                    msg.delete()
                    rMsgs.push({ guildID: msg.guild.id, msgID: message.id, capMem: Number(memberCap) + 1, roleName: nameRole, authorName: msg.author.username })
                });
            })
            .catch(console.error);

    }
}
