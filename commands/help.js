const Util = require('../utility')

module.exports = {
    name: 'help',
    description: "I'm trying!",
    execute(msg, args, discord) {
        let embed = new discord.MessageEmbed()

        if(args.length <= 0)
            return msg.channel.send(baseHelp(embed))
        else
            return msg.channel.send(specificHelp(embed, args[0]))
    }
}

function baseHelp(embed){
    embed.setColor(Util.Colors.green)
    .setTitle('Helping <3')
    .setDescription('Serve una mano?\n se ti servono info su un singolo comando, digita `|help <command>`')
    .addFields(
        { name: "add", value: "Crea una categoria e una serie di stanze per giocare.\n*Admin command*" },
        { name: "remove", value: "rimuove la categoria" },
        { name: "setdj", value: "Permette di ottenere i comandi da dj per 30 secondi.\n da usare per scacciare quel bot per niente fastidioso di nome rythm" },
        { name: "reaction", value: "Aggiunge le react a una campagna e avvisa il master quando il tavolo si riempie" },
        { name: "finish", value: "Chiude la campagna e rimuove il ruolo ad essa associata" },
        { name: "activetables", value: "Mostra una lista di tavoli (ruoli) attualmente utilizzabili" },
    )
    .setURL('https://github.com/alex313962/gidierre_builder')
    .setFooter('Per maggiori informazioni visitare questo link: https://github.com/alex313962/gidierre_builder')
    return embed
}

function specificHelp(embed, spec){
    let command = spec.toLowerCase()
    embed.setColor(Util.Colors.green)
    .setTitle(command)

    switch (command){
        case ('help'):
            embed.setDescription("Ci sto provando, ma tu non h e l p")
            break;
        case ('!help'):
            embed.setDescription("Forse intendevi |. con ! su sto bot non fai na sega, giusto per ricordartelo")
            break;
        case ('add'):
            embed.setDescription("Usa `|add <nome categoria>`\n")
            .addFields(
                { name: "nome categoria", value: "nome della categoria del tavolo e del canale vocale" }
                
            )
            break;
        
        case ('remove'):
            embed.setDescription("Usa `|remove <nome categoria>`\n")
            .addFields(
                { name: "nome categoria", value: "nome della categoria da eliminare" }
          
            )
            break;
        case ('setdj'):
            embed.setDescription("Niente da aggiungere *xoxo*")
            break;
        case ('reaction'):
            embed.setDescription("Joins the channel you are currently in, scares you and than leaves.")
            .addFields(
                { name: "max partecipanti al tavolo", value: "numero dei partecipanti massimi.\n Scrivete il numero come numero e non come testo (es 1 2 3 4)" },
                { name: "ruolo allegato al tavolo", value: "nome del ruolo che verrà assegnato a tutti i partecipanti al tavolo" }
            )
            break;
        case ('finish'):
            embed.setDescription("Usa `|finish <nome campagna>`\n")
            .addFields(
                { name: "nome campagna", value: "nome della categoria da eliminare. \nQuesto comando elimina pure il ruolo associato alla campagna" }
            )
            break;
        default:
            embed.setDescription("hei, qui non c'è niente!")
    }
    return embed
}