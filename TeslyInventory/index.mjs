import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as mongo from 'Mongo-V'
import * as items from './itemdata'
import  {weaponList} from './weapon'

alt.onClient('setInventoryID',(player,inventoryid) => {
    mongo.getDocuments('CharacterID',inventoryid,'Inventories',(data) => {
        let docs = JSON.parse(data)
        for(let i = 1;i <= 20; i++) {
            if(docs[0].items[i] !== undefined) {
                let itemIcon = items['default'][docs[0].items[i].itemID]['icon']
                let itemKG = items['default'][docs[0].items[i].itemID]['kg']
                let itemType = items['default'][docs[0].items[i].itemID]['type']
                let weapon = items['default'][docs[0].items[i].itemID]['weapon']
                alt.emitClient(player,'getInventoryData',docs[0].items[i],i,itemIcon,itemKG,itemType,weapon)
            }
        }
    })
})
alt.onClient('weapon',(player,weapon) => {
    player.giveWeapon(weaponList[weapon],999,true)
})
alt.onClient('clearweapon', (player,weapon) => {
    player.removeWeapon(weaponList[weapon])
})
alt.onClient('setItemPosition',(player,inventoryid,i,position) => {
    mongo.getDocuments('CharacterID',inventoryid,'Inventories',(data) => {
        let docs = JSON.parse(data)
        docs[0].items[i].itemPosition = `${position}`
        mongo.updateDocuments(JSON.stringify(docs),'Inventories',(res) => {
            if (!res.success) {
                console.log(res.docs); 
                return new Error('Failed to update any documents.');
            }
        })
    })
})
let droppedItemIntervalID = 0;
alt.onClient('itemDropped',(player,x,y,z,allplayer,droppedData) => {
    alt.emitClient(allplayer,'getDroppedItem',x,y,z,droppedItemIntervalID,droppedData)
    droppedItemIntervalID++
})
alt.onClient('deleteDropAllPlayer',(player,allPlayer,intervalID) => {
    alt.emitClient(allPlayer,'deleteallDropp',intervalID)
})
alt.onClient('food',(player,food) => {
    if(player.getSyncedMeta('food') > 100) {
        return player.setSyncedMeta('food',100)
    }
    player.setSyncedMeta('food',(player.getSyncedMeta('food') + food))
    alt.emit('updatehud',player)
})
alt.onClient('water',(player,water) => {
    if(player.getSyncedMeta('water') > 100) {
        return player.setSyncedMeta('water',100)
    }
    player.setSyncedMeta('water',(player.getSyncedMeta('water') + water))
    alt.emit('updatehud',player)
})