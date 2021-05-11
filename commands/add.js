const Util = require('../utility')
const fs = require('fs');

module.exports = {
    name: 'add',
    description: 'Create stuff',
    execute(msg, args, discord) {
        let setup = JSON.parse(fs.readFileSync('./data/setup.json'))

        if (!msg.member.hasPermission('ADMINISTRATOR') && !msg.member.roles.cache.some(role => role.name.toLowerCase() == setup[msg.guild.id].masterRole.toLowerCase())){
            return msg.channel.send(Util.Reply.sendBaseEmbed("Mi sa di no", "Non hai permessi sufficenti", Util.Colors.red));
        }

        if(args.length <= 0)
            return msg.channel.send(Util.Reply.sendBaseEmbed('Argomenti non specificati', 'Usa `|help` per avere più informazioni', Util.Colors.red))

        addCathegory(msg.guild, args.join(' '), setup[msg.guild.id].masterRole);
    }
}

function addCathegory(guild, name, masterRole) {
    let onlyMaster = [{ id: Util.Utils.getRoleID(guild, masterRole), allow: [Util.Pex.sendMsg] }, { id: Util.Utils.getRoleID(guild, '@everyone'), deny: [Util.Pex.sendMsg] }];
    
    guild.channels.create(name, {
        type: "category",
    }).then(e => {
        let cat = guild.channels.cache.find(c => c.name.toLowerCase() == name.toLowerCase());
        addChannel(guild, cat, name,        "text",     null);
        addChannel(guild, cat, "Regole",    "text",     onlyMaster);
        addChannel(guild, cat, "Materiale", "text",     onlyMaster);
        addChannel(guild, cat, name,        "voice",    null);
    })
}

function addChannel(guild, category, name, chanType, options) {
    guild.channels.create(name, {
        type: chanType,
        permissionOverwrites: options
    }).then(createdChan => {
        if (!category) throw new Error("Errore durante la creazione");
        createdChan.setParent(category.id,  { lockPermissions: false });
    }).catch(console.error);

}