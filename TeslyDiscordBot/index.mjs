import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as mongo from 'Mongo-V'
import * as bot from './bot/bot'
const TeslyBot = new bot.TeslyBot()


alt.on('BotAddLog',(user,message,logtype)=> {
    TeslyBot.botaddlog(user,message,logtype)     
})