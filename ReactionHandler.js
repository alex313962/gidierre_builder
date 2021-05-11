const Util = require('./utility')

exports.Fun = {
    completeTableMessage(impMsg, reactedMsg) {
        let embedToSend = Util.Reply.sendBaseEmbed(`Riguardo al tavolo ${impMsg.roleName} che hai creato`, `Hai raggiunto il numero di giocatori che aspettavi`, Util.Colors.green)
        embedToSend.addField("Lista di Giocatori", "ci vuole giocare?")
        reactedMsg.reactions.cache.get("✔").users.cache.forEach(e => {
            if (!e.bot)
                embedToSend.addField(e.username, "Vuole giocare!")
        })
        return embedToSend
    }
}