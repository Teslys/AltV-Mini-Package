import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as mongo from 'Mongo-V'

alt.onClient('openRadialMenu',(player) => {
    console.log('geldi')
})
alt.onClient('engineON',(player) => {
    player.vehicle.engineOn = true;
})
alt.onClient('engineOFF',(player) => {
    player.vehicle.engineOn = false;
})
alt.onClient('door',(player,doorID) => {
    alt.emitClient(player,'RadialDoor',doorID,player.vehicle.getDoorState(doorID))
})