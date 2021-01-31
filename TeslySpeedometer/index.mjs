import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'



alt.on('playerEnteredVehicle',(player,vehicle,seat) => {
    alt.emitClient(player,'playerEnterVehicle',vehicle,seat)
})
alt.on('playerLeftVehicle',(player,vehicle,seat) => {
    alt.emitClient(player,'playerLeftVehicle',seat)
})
alt.on('playerChangedVehicleSeat', (player, vehicle, oldSeat, newSeat) => {
    alt.emitClient(player, 'playerChangedVehicleSeat', vehicle, newSeat);
  });