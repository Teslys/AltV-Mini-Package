import alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as native from 'natives';
// import {animPlay} from 'TeslyAnim'

let speedInterval = 0;
let personalVehicle = null;
let entered = 0;
let stopFuelCar = 0;
let locked = 2;
let seatbelt = false;
let seatbeltInterval = null;

alt.onServer('playerChangedVehicleSeat',(veh,newseat,oldseat) => {
    if(oldseat == 2) {
        native.setPedIntoVehicle(alt.Player.local.scriptID,alt.Player.local.vehicle.scriptID,0)
    }
})

alt.setInterval(() => {
    if(alt.Player.local.vehicle !== null) {
        alt.emitServer('vehicle',alt.Player.local.vehicle)
    }
}, 400);

alt.onServer('playerLeftVehicle',seat => {
    native.displayRadar(false)
    let vehicle = Distance3D(2,"vehicle")
    seatbeltOFF()
    seatbelt = false
    stopFuel()
})
alt.onServer('playerEnteredVehicle',(vehicle,seat,engineon)=> {
    native.displayRadar(true)
    personalVehicle = vehicle
    if(seat == 1) {
        entered++
        if(entered == 2) {
            startFuel()
            entered = 0
        }
    }

})

alt.on('engineONVehicle',() => {
    startFuel()
})
alt.on('engineOFFVehicle',() => {
    stopFuel()
})
alt.onServer('vehicleHealth',(EngineHealth,bodyHealth) => {
    if(bodyHealth < 500 || EngineHealth < 400) {
        alt.log(EngineHealth,bodyHealth)
        native.explodeVehicle(alt.Player.local.vehicle.scriptID,true,true)
    }
})
alt.on('keydown',(key) => {
if(key == 76) {
    if(alt.Player.local.vehicle == null) {
        let dict = "anim@mp_player_intmenu@key_fob@"
        let vehicle = Distance3D(4,"vehicle")
        if(vehicle == undefined) { return }
        if(vehicle.id != undefined) {
                alt.emitServer("personalVehicle",vehicle,vehicle.getMeta('personalVehicle'))
                alt.emit('PlayAnimation',dict,"fob_click_fp",null,false)
            }
    }
}
    if(key == 75) {
        if(alt.Player.local.vehicle == undefined) {return}
        if(seatbelt == false) {
            seatbeltON()
        }else {
            seatbeltOFF()
        }
    }
})


function Distance3D(dis, type) {
    let localplayer = alt.Player.local.pos;
    let data = undefined;
    let closest = dis;
    let all = undefined;

    if(type == "player") {
        all = alt.Player.all
    }else if(type == "vehicle") {
        all = alt.Vehicle.all
    }
    all.forEach((target) => {
        if(localplayer != target) {
            let difference = new alt.Vector3(localplayer.x - target.pos.x, localplayer.y - target.pos.y, localplayer.z - target.pos.z)
            let distance = Math.sqrt(Math.pow(difference.x,2.0) + Math.pow(difference.y,2.0) + Math.pow(difference.z, 2.0))
            if(distance < closest) {
                closest = distance;
                data = target
            }
        }

    })
    
    if(data == undefined) {
        if(type == "vehicle") {
            return "Yakınında Araç Yok"
        }else if(type == "player") {
            return "Yakınında Kullanıcı Yok"
        }
    }
    return data;
}
function startFuel() {
    speedInterval = alt.setInterval(() => {
        if(personalVehicle.getMeta('personalVehicleFuel') == 0) {
           stopCar()
        }else {
            let GetMetaFuel = personalVehicle.getMeta('personalVehicleFuel')  - 1
            personalVehicle.deleteMeta("personalVehicleFuel")
            personalVehicle.setMeta('personalVehicleFuel', GetMetaFuel)
        }

    },30 * 1000)
}

function stopFuel() {
    alt.clearInterval(speedInterval)
}
function stopCar() {
    alt.emitServer('stopCar',personalVehicle)
}
function seatbeltON() {
    seatbeltInterval = alt.setInterval(() => {
        native.disableControlAction(0, 75, true)
        native.disableControlAction(27, 75, true)
    },10)
    alt.log('kemer Takıldı')
    seatbelt = true
}
function seatbeltOFF() {
    if(seatbeltInterval == null) { return;}
    alt.clearInterval(seatbeltInterval)

    alt.log('kemer Çıkarıldı')
    seatbeltInterval = null;
    seatbelt = false

}