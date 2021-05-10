const fs = require('fs');
const discord = require('discord.js');

/* COLORS */
const defColor = '#FA8F40'
const red = '#FA1444'
const green = '#6DFA46'

/* PERMISSIONS */
// complete list here https://discord.com/developers/docs/topics/permissions
const muteMembers = "MUTE_MEMBERS"
const moveMembers = "MOVE_MEMBERS"
const viewChannel = "VIEW_CHANNEL"
const sendMsg = "SEND_MESSAGES"
const sendTTSMsg = "SEND_TTS_MESSAGES"
const connectChannel = "CONNECT"
const speak = "SPEAK"

/**
 * Color list 
 */
exports.Colors = {
    defColor,
    red,
    green,
}

/**
 * Pex list
 */
 exports.Pex = {
    muteMembers,
    moveMembers,
    viewChannel,
    sendMsg,
    sendTTSMsg,
    connectChannel,
    speak,
}

exports.Utils = {
    getRoleID(guild, role) {
        return guild.roles.cache.find(r => r.name.toLowerCase() == role.toLowerCase()).id
    }
}

//ESEMPIO DI MODULO
exports.Check = {
    /**
     * Checks if the bot is in a vocal channel
     * @param {*} me bot member
     * @returns boolean
     */
    isInVoiceChannel(me) { return me.voice.channel ? true : false },
}


exports.Reply = {
    /**
     * Creates a basic embed
     * @param {*} title Message Title
     * @param {*} description Message content
     * @param {*} color Message color (hex or using the color list export)
     * @returns embed
     */
    sendBaseEmbed(title, description, color) {
        let hexColorReg = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/gm
        let col = hexColorReg.test(color) ? color : defColor

        let embed = new discord.MessageEmbed()
            .setColor(col)
            .setTitle(title)
            .setDescription(description)
        return embed
    },
}