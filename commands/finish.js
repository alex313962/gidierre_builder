const Util = require('../utility')

module.exports = {
    name: 'finish',
    description: 'Finish Campaign',
    execute(msg, args, discord) {
        msg.guild.roles.cache.find(role => role.name === args.join(' ')).delete();
    }
}
