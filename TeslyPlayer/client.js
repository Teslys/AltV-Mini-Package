import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as native from 'natives';
let intervalID = 0;
let view = new alt.WebView("http://resources/TeslyPlayer/html/index.html")
// alt.log(alt.Player.health)
let markerData = []
let crouch = null;
let boolCrouch = false;
let sessionUsername = null;
alt.on('loginSuccess',(username) => {
    sessionUsername = username
})
alt.on('PlayerData',(character,i) => {
    alt.emitServer('PlayerSetStats',sessionUsername,character,i)
})
alt.onServer('Player:health',(health,armour,food,water) => {
    view.emit('Player:health',health,armour,food,water)
})
alt.on("DrawMarker",(x,y,z,itemid) => {
    markerData.push({
        itemID:itemid,
        x:x,
        y:y,
        z:z
    })
})
alt.setInterval(() => {
    alt.emitServer('playerFoodAndWater',alt.Player.local.getSyncedMeta('food'),alt.Player.local.getSyncedMeta('water'))
    },30 * 1000)
alt.setInterval(() => {
    if(alt.Player.local.vehicle == null) {
        view.emit('Player:Stamina',parseInt(native.getPlayerSprintStaminaRemaining(alt.Player.local.scriptID)))
    }
},150)
alt.setInterval(() => {
    view.emit('Player:Oxygen',(parseInt(native.getPlayerUnderwaterTimeRemaining(alt.Player.local.scriptID)) * 10))
},100)
native.displayRadar(false)
alt.everyTick(() => {
    native.hideHudComponentThisFrame(14)
    native.hideHudComponentThisFrame(22)
    native.hideHudComponentThisFrame(21)
    native.hideHudComponentThisFrame(19)
    native.hideHudComponentThisFrame(20)
    native.disableControlAction(0,37,true)
})

alt.on('anyResourceStop', () => {
    native.displayRadar(true)
})
alt.on('resourceStart',() => {
    alt.emitServer('updatehud',alt.Player.local)

})
alt.on('keydown',(key) => {
    if(key == 17) {
         native.requestAnimSet("move_ped_crouched")
              crouch = alt.setInterval(() => {
                  native.setPedMovementClipset(alt.Player.local.scriptID,"move_ped_crouched",0.25)
              },10)
        }
  })
  alt.on('keyup',(key) => {
    if(key == 17) {
          native.resetPedMovementClipset(alt.Player.local.scriptID,0)
          alt.clearInterval(crouch)
      }
  })
