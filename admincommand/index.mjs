import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import { weaponList } from './weapon.mjs';
// import * as native from 'natives';



alt.on('resourceStop',() => {
    chat.unregistercmd("car")
    chat.unregistercmd("cardel")
    chat.unregistercmd("respawn")
    chat.unregistercmd("health")
    chat.unregistercmd("pos")
    chat.unregistercmd("tp")
    chat.unregistercmd("selectblip")
    chat.unregistercmd("giveweapon")
    chat.unregistercmd("carfix")
    chat.unregistercmd("door")
    chat.unregistercmd("cardeleteall")
    chat.unregistercmd("setTime")
    chat.unregistercmd("boost")
    chat.unregistercmd("seat")
    chat.unregistercmd("setped")
    chat.unregistercmd("e")
    chat.unregistercmd("kill")
    chat.unregistercmd("setArmour")
    chat.unregistercmd("carGetID")
    chat.unregistercmd("cardeldistance")
    chat.unregistercmd("rot")
    chat.unregistercmd('autopilot')
    chat.unregistercmd('anim')
    chat.unregistercmd('screenshot')
})
// chat.registerCmd('getWaypoint',(player,args) => {
// })
chat.registerCmd('anim',(player,args) => {
    alt.emit('Command:AnimStart',player)
})
chat.registerCmd('screenshot',(player,args) => {
    alt.emitClient(player,'Command:screenshot')
})
chat.registerCmd('rot',(player,rot) => {
    chat.send(player, `X: ${player.rot.x}, Y: ${player.rot.y}, Z: ${player.rot.z}`);
    console.log(`${rot[0]} => ${player.rot.x}, ${player.rot.y}, ${player.rot.z}`)
    
})
chat.registerCmd('autopilot',(player) => {
    alt.emitClient(player,'autoPilot')
})
chat.registerCmd('setTime',(player,time) => {
    alt.emitServer("setTime",time)
})
chat.registerCmd('e',(player,args) => {
    alt.emit('Command:AnimStart',player)
})
chat.registerCmd('cardeleteall', (player) => {
    let cars = [...alt.Vehicle.all]

    cars.forEach((vehicle,index)=> {
        if(!vehicle || !vehicle.valid) {
            return;
        }
        vehicle.destroy()
    })
})
chat.registerCmd('seat',(player,args) => {
    player.seat = args[0]
})
chat.registerCmd('setArmour',(player,args) => {
    player.armour = 100;
    alt.emit('updatehud',player)

})
chat.registerCmd('carfix',(player,args) => {
    alt.log(player.vehicle.wheelsCount)
    player.vehicle.engineHealth = 1000;
    player.vehicle.bodyHealth = 1000;

    alt.emitClient(player,'admincommand:carfix')
})
chat.registerCmd('boost',(player,args) => {
        alt.emitClient(player,'VehicleBoost',player)
})
chat.registerCmd('door',(player,doorid) => { 
    alt.emitClient(player,"DoorState", doorid,player.vehicle.getDoorState(doorid))
})
chat.registerCmd('pos', (player, args) => {
    chat.send(player, `X: ${player.pos.x}, Y: ${player.pos.y}, Z: ${player.pos.z}`);
    console.log(`${args[0]} => ${player.pos.x}, ${player.pos.y}, ${player.pos.z}`)
    
});
chat.registerCmd('setped',(player,args) => {
    console.log(args[0])
    player.model = args[0]
    player.spawn(player.pos.x, player.pos.y, player.pos.z)

})

chat.registerCmd('car',(player,args) => {

    if(!args) {
        return player.sendMessage('Bir Araç Girmediniz..')
    }
    if(player.personalVehicle !== undefined) {
        try {
            player.personalVehicle.destroy()
        } catch (error) {
            player.personalVehicle = undefined;
        }
    }
    const positionCar = extended.RandomPosAround(player.pos,3)
    try {
        let plate = Math.random().toString(36).toUpperCase().substring(2)
        let r = 255;
        let g = 0;
        let b = 10;
        player.personalVehicle = new alt.Vehicle(args[0],positionCar.x,positionCar.y,positionCar.z,0,0,0)
        player.personalVehicle.dimension = player.dimension;
        player.personalVehicle.numberPlateText = plate;
        player.personalVehicle.fuel = 50;
        player.personalVehicle.customPrimaryColor = new alt.RGBA(r, g, b,100)
        alt.setTimeout(() => {
            alt.emitClient(player, 'warpIntoVehicle', player.personalVehicle,player.personalVehicle.fuel)  
        }, 200);

    } catch (error) {
        player.personalVehicle = undefined;
    }
})
chat.registerCmd('cardeldistance',(player,args) => {
    alt.emitClient(player,'cardeldistance',args[0])
    alt.onClient('vehdeldistance',(player,vehicle) => {
        if(vehicle == "Yakınında Araç Yok") return chat.send(player,'Yakında Araç Yok..')
        if(vehicle == null) return;
         vehicle.destroy()
         return;
    })
})
chat.registerCmd('cardel',(player,args) => {
    // alt.log(player.vehicle)
    if(player.vehicle  == null) return;
        player.vehicle.destroy()
})
chat.registerCmd('respawn',(player,args) => {
    player.spawn(player.pos.x, player.pos.y, player.pos.z)
    player.health = 200;
    player.setSyncedMeta('food',100)
    player.setSyncedMeta('water',100)
    alt.emit('updatehud',player)
})
chat.registerCmd('kill',(player,args) => {
    player.health = 0;
})
chat.registerCmd('health',(player,args) => {
    if(args[0] !== undefined) {
        player.health = args[0]
        return alt.emit('updatehud',player)
    }
    player.health = 200;
    alt.emit('updatehud',player)

})
chat.registerCmd('carGetID', (player,args) => {
    console.log(player.vehicle.id)
})
chat.registerCmd('tp',(player,pos) => {
 
    if(pos[0] == undefined) {
    alt.emitClient(player,'twaypoint',player)
    alt.onClient('WaypointCoord', (player,data) => {
        if(player.vehicle != null) {
            return player.vehicle.pos = {x: data.coords.x, y: data.coords.y, z: data.coords.z + 1}
        }
        if(!data.coordStatus){ return chat.send(player,"Bir Waypoint belilemelisin Veya Bir Kordinat Girmelisin.") }
        return player.pos = {x: data.coords.x, y: data.coords.y, z: data.coords.z + 1}
    })
}else {
    player.pos = {x: pos[0], y: pos[1], z: pos[2]}
}

})
chat.registerCmd('giveweapon',(player,weapon) => {
    let weaponName = weapon[0].toLowerCase()
    if(!weaponList[weaponName]) {
        return chat.send(player,'Böyle Bir Silah Yok')
    }
    player.giveWeapon(weaponList[weaponName], 999, true);

})
alt.on('chatIntercept', (player, msg) => {
});