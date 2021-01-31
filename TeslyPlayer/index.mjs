import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as mongo from 'Mongo-V'


alt.on('playerConnect',(player) => {
    alt.setTimeout(() => {
        alt.emitClient(player,'Player:health',player.health,player.armour)
    }, 300);

})
alt.onClient('PlayerSetStats',(player,sessionName,character,i) => {
    // console.log(sessionName,character,i)
    mongo.getDocuments('username',sessionName,'player',(data) => { 
        let datas = JSON.parse(data)
        console.log(datas[0].characters[i].health)
        player.health = datas[0].characters[i].health;
        player.armour = datas[0].characters[i].armour;
        player.setSyncedMeta('food',datas[0].characters[i].food)
        player.setSyncedMeta('water',datas[0].characters[i].water)
        alt.emitClient(player,'Player:health',player.health,player.armour,player.getSyncedMeta('food'),player.getSyncedMeta('water'))

    })
})


alt.on('updatehud',(player) => {
    alt.emitClient(player,'Player:health',player.health,player.armour,player.getSyncedMeta('food'),player.getSyncedMeta('water'))
})
alt.on('playerDamage',(player,attacker,weaponhash,damage) => {
    alt.emitClient(player,'Player:health',player.health,player.armour,player.getSyncedMeta('food'),player.getSyncedMeta('water'))
})
alt.onClient('updatehud',(player) => {
    alt.setTimeout(() => {
        alt.emitClient(player,'Player:health',player.health,player.armour,player.getSyncedMeta('food'),player.getSyncedMeta('water'))
    }, 500);
})
alt.onClient('playerFoodAndWater',(player,food,water) => {
    if(food == 0 || water == 0) {
        player.health -= 1
        return alt.emitClient(player,'Player:health',player.health,player.armour,player.getSyncedMeta('food'),player.getSyncedMeta('water'))
    }else {
        player.setSyncedMeta('food',food-1)
        player.setSyncedMeta('water',water-1)
        alt.emitClient(player,'Player:health',player.health,player.armour,player.getSyncedMeta('food'),player.getSyncedMeta('water'))
    }

})

