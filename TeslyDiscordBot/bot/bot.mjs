// import * as discord from 'discord.js'
import botSettings from './botSettings.json'
import discord from 'discord.js'

// import MessageEmbed from 'discord.js'

// const discord = require('discord.js')
const bot = new discord.Client()
// const botSettings = require('./botSettings.json')
export class TeslyBot {
    
    constructor() {
        bot.login(botSettings.token)
        bot.on('ready',() => {
            bot.user.setActivity("Oyuncuları ", { type: "WATCHING"})
        })
     
    }
 
    botaddlog(user,message,logtype) {
        let channel = bot.channels.cache.get("762553900616122408")
        // console.log()
        let logMessage = new discord.MessageEmbed() 
        .setTitle(`${logtype}`)
        .setAuthor(user)
        .setColor(0x00AE86)
        .setDescription(message)
        .setFooter("TeslyALTV Discord Bot // 2020")
        
        channel.send(logMessage)
    }
}

