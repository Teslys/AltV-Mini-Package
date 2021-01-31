import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as native from 'natives';

let view = new alt.WebView("http://resources/TeslyRadialMenu/html/index.html")
let openmenu = false;
view.on('ClickedCloseItem',() => {
    openmenu = false;
    view.unfocus()
    alt.toggleGameControls(true)
    alt.showCursor(false)
})
view.on('engineON',() => {
    alt.log('Motor Açıldı')
    alt.emitServer('engineON')
    alt.emit('engineONVehicle')
    native.setVehicleEngineOn(alt.Player.local.vehicle.scriptID,true,true,false)
})
view.on('door',(doorid) => {
    alt.emitServer('door',doorid)

})
alt.onServer('RadialDoor',(doorid,state) => {
    if(state > 0) return native.setVehicleDoorShut(alt.Player.local.vehicle.scriptID,doorid,false); 
    native.setVehicleDoorOpen(alt.Player.local.vehicle.scriptID,doorid,false,false)
})
view.on('engineOFF',() => {
    alt.log('Motor Kapandı')
    alt.emitServer('engineOFF')
    native.setVehicleEngineOn(alt.Player.local.vehicle.scriptID,false,false,true)
    alt.emit('engineOFFVehicle')

})
alt.on('keydown', (key) => {
    if(key == 114) {
        if(openmenu == false){
            view.emit('openRadialMenu')
            view.focus()
            alt.toggleGameControls(false)
            alt.showCursor(true)
            openmenu = true
        }else {
            if(openmenu == true){
                view.emit('closeRadialMenu')
                view.unfocus()
                alt.toggleGameControls(true)
                alt.showCursor(false)
                openmenu = false    
            }
        }
    }
});
