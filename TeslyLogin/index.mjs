
import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as mongo from 'Mongo-V'

alt.onClient('login',(player,username,pass) => {
    if(username == "" || pass == "") return;
    player.setMeta('sessionUsername',username)
    mongo.getDocuments('username',username,'player',(data) => {
        if(data == []) return alt.emitClient(player,'login',false);
        let datas = JSON.parse(data) 
        if(username = datas[0].username && pass == datas[0].password) {
            alt.emit('BotAddLog','Username: ' + datas[0].username,'Giriş Yaptı','login')
                return alt.emitClient(player,'login',true,datas[0].username);
        }
    })
})


