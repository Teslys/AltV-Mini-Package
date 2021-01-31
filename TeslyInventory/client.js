import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as native from 'natives';
let InventoryOpenned = false;
let view = new alt.WebView("http://resources/TeslyInventory/html/index.html")
let itemdatas = null;
let ıntervalID = [];
let droppedItemClient = []
let inventoryID = null;
let myInterval = null;
let fastdrop = false;

alt.onServer('getInventoryData',(itemdata,i,icon,itemKG,itemType,weapon) => {
    view.emit('İtemData',itemdata,i,icon,Number(itemKG),itemType,weapon)
    itemdatas = itemdata
})
view.on('updatedItemPosition',(i,position) => {
    alt.emitServer('setItemPosition',alt.getMeta("CharacterID"),i,position)
})
view.on('droppedItem',(droppedData) => {
    console.log(droppedData)
    if(droppedData != null) {
        alt.Player.all.forEach(player => {
            alt.emitServer('itemDropped',alt.Player.local.pos.x,alt.Player.local.pos.y,alt.Player.local.pos.z,player,droppedData)
        })
    }
   
})
alt.on('keydown',(key) => {
    if(key == 123) {
        alt.emit("registerInventory",alt.getMeta("CharacterID"))
        view.emit('InventoryRestart')
    }

})
alt.on('registerInventory',(inventoryid) => {
    alt.emitServer('setInventoryID',inventoryid)
    inventoryID = inventoryid
    alt.on('keydown',(key) => {
        if(key == 73) {
            if(InventoryOpenned == false) {
                alt.log(inventoryid)
                view.emit('openInventory')
                InventoryOpenned = true;
                view.focus()
                alt.showCursor(true)
                alt.toggleGameControls(false)
            }else {
                view.emit('closeInventory')
                InventoryOpenned = false;
                view.unfocus()
                alt.showCursor(false)
                alt.toggleGameControls(true)
            }
        }
        if(key == 16) {
            view.emit('shiftPressed',true)
        }
        if(key == 49) {
            view.emit('numberUse',1)
        }
        if(key == 50) {
            view.emit('numberUse',2)
        }
        if(key == 51) {
            view.emit('numberUse',3)
        }
        if(key == 52) {
            view.emit('numberUse',4)
        }
    })
    alt.on('keyup',(key) => {
        if(key == 16) {
            view.emit('shiftPressed',false)

        }
    })
   
})
let droppeditem = false;
alt.onServer('getDroppedItem',(x,y,z,droppedItemIntervalID,droppedData) => { 
    droppeditem = true;
    ıntervalID.push(alt.everyTick(() => {
        myInterval = droppedItemIntervalID
        native.drawMarker(2, x, y, z -0.9, 0, 0, 0, 0, 0, 0, 0.2, 0.2, 0.2, 255, 0, 0, 100, 0, 1, 1, 0, 0, 1, 0)
        native.drawRect(0,0,0,0,0,0,0,0,0)
        if(Math.floor(alt.Player.local.pos.x) === Math.floor(x) && Math.floor(alt.Player.local.pos.y) === Math.floor(y) && Math.floor(alt.Player.local.pos.z) === Math.floor(z)) {
            dropUpPressed(myInterval)
        }
    }))
    droppedItemClient.push({
        [droppedItemIntervalID]: droppedData
    })
    view.emit('droppedClear')
})
alt.onServer('deleteallDropp',(intervalID) => {
    alt.clearEveryTick(ıntervalID[intervalID])
})
view.on('give',(item) => {
    alt.log('give')
})
view.on('use',(item) => {
    if(item.itemName == "Ekmek"){
        alt.emitServer('food',20)
    }
    if(item.itemName == "Su") {
        alt.emitServer('water',20)
    }
})
view.on('Weapon',(item,bool) => {
    if(bool == true) {
        alt.emitServer('weapon',item.weapon)
    }else {
        alt.emitServer('clearweapon',item.weapon)
    }
    alt.log(item.weapon)
})
async function dropUpPressed(myInterval) {
        if(native.isControlPressed(0,38)) {
                alt.log(JSON.stringify(droppedItemClient[myInterval][myInterval][0]))
                view.emit('dropInventoryOpen',droppedItemClient[myInterval][myInterval][0])
                alt.showCursor(true)
                alt.toggleGameControls(false)
                view.focus()
                InventoryOpenned = true;
                alt.Player.all.forEach(player => {
                    alt.emitServer('deleteDropAllPlayer',player,myInterval)
                })
                alt.clearEveryTick(ıntervalID[myInterval])
        }
}
