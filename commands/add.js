const Util = require('../utility')

module.exports = {
    name: 'add',
    description: 'Create stuff',
    execute(msg, args, discord) {
        if (!msg.member.roles.cache.some(role => role.name == "Master Gidierre"))
            return msg.channel.send(Util.Reply.sendBaseEmbed("mi sa di no", "Non hai permessi sufficenti", Util.Colors.red));

        addCathegory(msg.guild, args.join(' '));
    }
}

function addCathegory(guild, name) {
    let onlyMaster = [{ id: Util.Utils.getRoleID(guild, 'Master Gidierre'), allow: [Util.Pex.sendMsg] }, { id: Util.Utils.getRoleID(guild, '@everyone'), deny: [Util.Pex.sendMsg] }];
    
    guild.channels.create(name, {
        type: "category",
    }).then(e => {
        let cat = guild.channels.cache.find(c => c.name == name);
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