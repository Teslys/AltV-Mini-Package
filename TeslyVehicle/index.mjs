import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'


// alt.on('playerEnteredVehicle',(player,vehicle,seat) => {
//     alt.Player.seat = 2;
alt.on('playerLeftVehicle',(player,vehicle,seat) => {
    alt.emitClient(player,'playerLeftVehicle',seat)
})
  alt.on('playerEnteredVehicle',(player,vehicle,seat) => {
    vehicle.engineOn = true
    alt.emitClient(player,'playerEnteredVehicle',vehicle,seat,vehicle.engineOn)
})
alt.on('playerChangedVehicleSeat', (player, vehicle, oldSeat, newSeat) => {
    alt.emitClient(player, 'playerChangedVehicleSeat', vehicle, newSeat,oldSeat);
  });

alt.onClient('vehicle',(player,vehicle) => {
  alt.emitClient(player,'vehicleHealth',vehicle.engineHealth,vehicle.bodyHealth)

})
alt.onClient('personalVehicle',(player,vehicle,personalVehicle) => {

    if(personalVehicle == undefined) {return}
    if(personalVehicle.id == vehicle.id) {
      if(vehicle.lockState == 2) {
        vehicle.lockState = 1;
      }else {
        vehicle.lockState = 2;
      }
    }
})
alt.onClient("CarFuel",(player,vehicle) => {
    if(player.vehicle.engineOn == false) {
      alt.emitClient(player,'vehicleStatus',false)
    }else {
      alt.emitClient(player,'vehicleStatus',true)

    }
})
alt.on('playerEnteredVehicle',(player,vehicle,seat) => {
  alt.emitClient(player,'playerEnteredVehicle',vehicle,seat)
})

alt.onClient('stopCar',(player,veh) => {
  veh.engineHealth = 0;
  veh.engineOn = false;
  veh.flamethrowerActive = true
  veh.manualEngineControl = false;
  veh.bodyHealth = 0;
})