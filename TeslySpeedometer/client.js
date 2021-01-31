import alt from 'alt-client';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as native from 'natives';
let view = new alt.WebView("http://resources/TeslySpeedoMeter/html/index.html")
let showmeter = false;
let playervehicle = false;
let playerpos = null
let street = null;
let st = null;
let boulevard = null;
let SpeedoMeterInterval = null;
let navigateInterval = null;
view.on('showmeter:loaded',(bool) => {
    if(bool) {
        showmeter = true;
    }else {
        showmeter = false;
    }
})
alt.onServer('playerEnterVehicle',(vehicle,seat) => {
    playervehicle = vehicle;
    if(seat == 1) {
        if(!showmeter) {
            view.emit('showMeter',true)
            SpeedoMeterInterval = alt.setInterval(() => {
                if(!playervehicle) return;
                if(showmeter) {
                    view.emit('carSpeed',native.getEntitySpeed(playervehicle.scriptID),playervehicle.getMeta('personalVehicleFuel'))
                }
            }, 100);
        }
    }
    navigateInterval = alt.setInterval(() => {
        playerpos = alt.Player.local.pos
        street = native.getStreetNameAtCoord(playerpos.x,playerpos.y,playerpos.z,0,0)
        st = native.getStreetNameFromHashKey(street[1])
        boulevard = native.getStreetNameFromHashKey(street[2])
        view.emit('street',boulevard,st)
    },3000)
})
alt.onServer('playerLeftVehicle',(seat) => {
    playervehicle = false;
    if(seat == 1) {
        view.emit('showMeter',false)
        if(SpeedoMeterInterval !== null) {
            alt.clearInterval(SpeedoMeterInterval)
            alt.clearInterval(navigateInterval)
        }
    }
})
alt.onServer('playerChangedVehicleSeat', (vehicle,seat) => {
    playervehicle = vehicle;
    if(seat == 1) {
        if(!showmeter) {
            view.emit('showMeter',true)
        }
    }
})