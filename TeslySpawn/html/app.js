alt.on('ready',() => {
    document.getElementById('spawnbody').style = "display:block;"
})
document.getElementById('lastlocation').onclick = () => {
    alt.emit('location','lastlocation')
    document.getElementById('spawnbody').style = "display:none;"
}
document.getElementById('hospital').onclick = () => {
    let location = document.getElementById('hospitaldata').value.split(' ')
    alt.emit('location', location)
    document.getElementById('spawnbody').style = "display:none;"
}
document.getElementById('police').onclick = () => {
    let location = document.getElementById('policedata').value.split(' ')

    alt.emit('location', location)
    document.getElementById('spawnbody').style = "display:none;"
}
document.getElementById('motel').onclick = () => {
    let location = document.getElementById('motelodata').value.split(' ')

    alt.emit('location', location)
    document.getElementById('spawnbody').style = "display:none;"
}
document.getElementById('paleto').onclick = () => {
    let location = document.getElementById('paletodata').value.split(' ')

    alt.emit('location', location)
    document.getElementById('spawnbody').style = "display:none;"
}
document.getElementById('sandy').onclick = () => {
    let location = document.getElementById('sandydata').value.split(' ')

    alt.emit('location', location)
    document.getElementById('spawnbody').style = "display:none;"
}
document.getElementById('airport').onclick = () => {
    let location = document.getElementById('airportdata').value.split(' ')

    alt.emit('location', location)
    document.getElementById('spawnbody').style = "display:none;"
}