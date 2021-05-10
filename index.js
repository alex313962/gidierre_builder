require('dotenv').config()
const TOKEN = process.env.TOKEN
const discord = require('discord.js');
const client = new discord.Client();
const keepAlive = require('./server');
const pfx = '|';

const fs = require('fs');

client.commands = new discord.Collection();
const commandFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

let reactedMessages = []

//INIT
/* creates the list of usable commands */
for (file of commandFile) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//STARTIN
client.once('ready', () => {
    console.log('GiDiErre is online');
})

client.on('message', message => {
    if (!message.content.startsWith(pfx) || message.author.bot) return;

    const args = message.content.slice(pfx.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        case ('ping'):
            client.commands.get('ping').execute(message, args, discord);
            break;
        case ('add'):
            client.commands.get('add').execute(message, args, discord);
            break;
        case ('finish'):
            client.commands.get('finish').execute(message, args, discord);
            break;
        case ('remove'):
            client.commands.get('remove').execute(message, args, discord);
            break;
        case ('setdj'):
            client.commands.get('setdj').execute(message, args, discord);
            break;
        case ('reaction'):
            client.commands.get('reaction').execute(message, args, discord, reactedMessages);
            break;
    }
})


client.on('messageReactionAdd', async (reaction, user) => {
    if (reactedMessages.some(e => e.msgID == reaction.message.id) && !user.bot) {
        let impMessage = reactedMessages.find(e => e.msgID == reaction.message.id)
        if (reaction.emoji.name == "✔") {
            if (reaction.message.reactions.cache.get("✔").count <= impMessage.capMem) {
                let role = reaction.message.guild.roles.cache.find(role => role.name === impMessage.roleName);
                await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            }
            else{
                reaction.message.reactions.resolve("✔").users.remove(user.id)
            }
        }
    }
})
client.on('messageReactionRemove', async (reaction, user) => {
    if (reactedMessages.some(e => e.msgID == reaction.message.id) && !user.bot) {
        let impMessage = reactedMessages.find(e => e.msgID == reaction.message.id);
        let role = reaction.message.guild.roles.cache.find(role => role.name == impMessage.roleName);
        await reaction.message.guild.members.cache.get(user.id).roles.remove(role);
    }
})

keepAlive();

client.login(TOKEN);