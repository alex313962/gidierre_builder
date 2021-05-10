require('dotenv').config()
const TOKEN = process.env.TOKEN
const discord = require('discord.js');
const client = new discord.Client();
const keepAlive = require('./server');
const pfx = '|';

const fs = require('fs');

client.commands = new discord.Collection();
const commandFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


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
        case ('remove'):
            client.commands.get('remove').execute(message, args, discord);
            break;
        case ('setdj'):
            client.commands.get('setdj').execute(message, args, discord)
    }
})

keepAlive();

client.login(TOKEN);

