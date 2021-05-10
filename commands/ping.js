const Util = require('../utility')

module.exports = {
    name: 'ping',
    description: 'This is a F**KING PING PONG COMMAND BABY',
    execute(msg, args, discord) {
        console.log(msg)
        msg.channel.send(Util.Reply.sendBaseEmbed("Testing", "Oh look! It's working!"));
    }
}
