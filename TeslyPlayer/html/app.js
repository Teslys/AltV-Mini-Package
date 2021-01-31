'use strict';

alt.on('Player:health',(health,armour,food,water) => {
    let yhealth = health / 2;
    // console.log(armour)
    if(yhealth == 0) {
        return document.getElementById('setHealth').style = `width:100%; background-color:rgb(194, 43, 43);`
    }
    if(food > 100) {
        food = 100;
    }
     if(water > 100 ) {
        water = 100;
    }
    document.getElementById('setHealth').style = `width:${yhealth}%;`
    document.getElementById('setArmour').style = `width:${armour}%;`
    document.getElementById('setdrink').style = `width:${water}%;`
    document.getElementById('setfood').style = `width:${food}%;`
})
alt.on('Player:Stamina',(stamina) => {
    document.getElementById('setstamina').style = `width:${100 - stamina}%`
})
alt.on('Player:Oxygen',(oxygen) => {
    document.getElementById('setdive').style = `width:${oxygen}%`

})