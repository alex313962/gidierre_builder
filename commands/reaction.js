//msg.reference.messageID || channelID || guildID
const Util = require('../utility')
//check messaggio nelle risposte è già nell'array
module.exports = {
    name: 'reaction',
    description: 'Setting Reaction', // It isn't really, I just use this to try stuff.
    execute(msg, args, discord, rMsgs) {
        const react = "✔";
        let memberCap = args.shift()
        let nameRole = args.join(' ')
        let authID = msg.author.id

        msg.channel.messages.fetch(msg.reference.messageID)
            .then(message => {
                if (message.author.id != authID)
                    return msg.channel.send(Util.Reply.sendBaseEmbed('Il messaggio non è tuo', 'Stai cercando di aggiungere reazioni a un messaggio non tuo', Util.Colors.red))//utile

                msg.guild.roles.create({
                    data:{
                        name: nameRole
                    },
                    reason: 'Partecipazione alla relativa campagna'
                }).catch(console.error)

                message.react(react).then(() => { 
                    msg.delete()
                    rMsgs.push({ msgID: message.id, capMem: Number(memberCap)+1, roleName: nameRole }) 
                });
            })
            .catch(console.error);

    }
}
