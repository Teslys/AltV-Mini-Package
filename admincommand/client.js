import alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as native from 'natives';
import { drawText3d, drawText2d} from './drawtext.mjs';

let autopilotActive = false;

alt.onServer('warpIntoVehicle',(veh,fuel) => {
    veh.setMeta('personalVehicle',veh)
    veh.setMeta('personalVehicleFuel',fuel)
    alt.setTimeout(() => {
        native.setPedIntoVehicle(alt.Player.local.scriptID,veh.scriptID,-1)
    }, 100);
})
alt.onServer('twaypoint', (player)=> {
    const waypoint = native.getFirstBlipInfoId(8);
    if(native.doesBlipExist(waypoint)) {
        const coords = native.getBlipInfoIdCoord(waypoint)
        return alt.emitServer('WaypointCoord',{coordStatus:true,coords:coords})
    }    
     return alt.emitServer('WaypointCoord',{coordStatus:false})
})
alt.onServer('autoPilot',() => {
    const waypoint = native.getFirstBlipInfoId(8);
    if(alt.Player.local.vehicle != null) {
        if(native.doesBlipExist(waypoint)) {
            if(autopilotActive == false) {
            const coords = native.getBlipInfoIdCoord(waypoint)
            native.taskVehicleDriveToCoordLongrange(alt.Player.local.scriptID,alt.Player.local.vehicle.scriptID,coords.x,coords.y,coords.z,100.0,447,2.0)
            }
        }

        }else {
            // native.taskVehicleDriveToCoordLongrange(alt.Player.local.scriptID,alt.Player.local.vehicle.scriptID,alt.Player.local.pos.x,alt.Player.local.pos.y,alt.Player.local.pos.z,0.0,1,0.0)
            autopilotActive = true
        }
      
})
alt.on('chatOpened', () => {
    alt.log('Chat was opened!');
});

alt.on('chatClosed', () => {
    alt.log('Chat was closed!');
});

alt.on('messageSent', (msg) => {
    alt.log(msg);
});
alt.onServer('admincommand:carfix',() => {
    alt.log('tetiklendi')
    native.setVehicleFixed(alt.Player.local.vehicle.scriptID)
})
 alt.onServer('DoorState',(doorid,state)=> {
    if(state > 0) return native.setVehicleDoorShut(alt.Player.local.vehicle.scriptID,doorid,false); 
        native.setVehicleDoorOpen(alt.Player.local.vehicle.scriptID,doorid,false,false)
 })   
 alt.onServer('cardeldistance',(distance) => {
    let vehicle = Distance3D(distance,"vehicle")
    alt.emitServer('vehdeldistance',vehicle)

 })
function DestroyShowID(id) {
    alt.on('destroyID', () => {
        alt.clearEveryTick(id)
    })
    

}
alt.on('keydown',key => {
    
    if(key == "66") {
        if(alt.Player.local.vehicle !== null) {
            let boost = native.getEntitySpeed(alt.Player.local.vehicle.scriptID) + 10.0;
            native.setVehicleBoostActive(alt.Player.local.vehicle.scriptID,true)
            native.setVehicleForwardSpeed(alt.Player.local.vehicle.scriptID,boost)
            native.animpostfxPlay("RaceTurbo",0,false)
        }
        

    }
    if(key == "73") {
        const id = alt.everyTick(() => {
            drawText3d(`${alt.Player.local.id}`, alt.Player.local.pos.x, alt.Player.local.pos.y, alt.Player.local.pos.z, 0.3, 4, 150, 9, 9, 255);
        })
        DestroyShowID(id)
    }
   
})

alt.on('keyup',(key) => {
    if(key == "73") {
        alt.emit('destroyID')
    }
})
alt.onServer("Command:screenshot",() => {
    Screenshot()
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
    // alt.log(all)
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

var chatHiddenStatus = chat.isChatHidden();
var chatOpenStatus = chat.isChatOpen();