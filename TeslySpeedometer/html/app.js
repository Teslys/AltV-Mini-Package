'use strict';
document.getElementById("meter").style = "display:none;"
let speed = null;
alt.on('carSpeed',(carspeed,fuel) => {
    speed = Math.floor(carspeed*3.6)
    document.getElementById("setSpeedNumber").innerHTML = speed + " KM/H";
    if(speed >= 100) {
        document.getElementById('setSpeed').style.width = `100%`
        if(speed >= 250) {
            document.getElementById('setSpeed').style.backgroundColor = `rgba(255, 2, 2, 0.493)`
            document.getElementById('setSpeed').style.width = `100%`

        }
        if(speed >= 150  && speed < 250) {
            document.getElementById('setSpeed').style.backgroundColor = `rgba(251, 255, 2, 0.452)`
            document.getElementById('setSpeed').style.width = `100%`

        }
    }else {
        document.getElementById('setSpeed').style.backgroundColor = "rgb(35, 131, 61)"
        document.getElementById('setSpeed').style.width = `${speed}%`
    }
    document.getElementById('fuelNumber').innerHTML = fuel + "%"
    document.getElementById('setFuel').style = `width:${fuel}%`
})
alt.on('showMeter',(bool) => {
    if(bool) {
        document.getElementById("meter").style = "display:block;"
        alt.emit('showmeter:loaded',true)
    }else {
        document.getElementById("meter").style = "display:none;"
        alt.emit('showmeter:loaded',false)

    }
})
alt.on('street',(boulevard,st) => {
    if(boulevard == "") {
        document.getElementById('street').innerHTML = `${st}`

    }else {
        document.getElementById('street').innerHTML = ` ${boulevard} | ${st}`
    }
})
