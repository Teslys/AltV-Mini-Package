setInterval(() => {
  let date = new Date()
  let hour = date.getHours();
  let minute = date.getMinutes()
  if(minute < 10) {
    minute = '0' + minute
  }
  if(hour < 10) {
    hour = '0' + hour
  }
  document.getElementById('time').innerHTML = '<b>'+hour+':'+minute+'</b>'
},350)
let activesecurescreen = false;
let mousemove = false;
document.getElementById('background').style.borderRadius = "20px"
document.getElementById('scbackground').style.borderRadius = "20px"
document.getElementById('openscreen').addEventListener('mousedown',(mouse) => {
  console.log(mouse.pageY)
  mousemove = true;
  document.getElementById('openscreen').style.pointerEvents = "none"
})
document.getElementById('phone').addEventListener('mousemove',(move) => {
  let top = 0
  if(mousemove == true) {
    top = -move.clientY + 510
    document.getElementById('securityscreen').style = `bottom:${top}px;`;
    document.getElementById('homepage').style = `bottom:${top + 10}px;`;
    document.getElementById('scbackground').style = "border-bottom-left-radius:0px;"
    document.getElementById('scbackground').style = "border-bottom-right-radius:0px;"
    document.getElementById('background').style = "border-top-left-radius:0px;"
    document.getElementById('background').style = "border-top-right-radius:0px;"
    activesecurescreen = true
  }
  if(top < -1) {
    document.getElementById('securityscreen').style = `bottom:0px;`;
    document.getElementById('homepage').style = `display:none;`;
  }
    if(top >= 360) {
      document.getElementById('securityscreen').style = "display:none;"
      document.getElementById('openscreen').style = "display:none;"
      document.getElementById('homepage').style = `bottom:0px`;
      document.getElementById('scbackground').style = "border-radius:22px;"
      document.getElementById('background').style = "border-radius:22px;"
      mousemove = false;
      activesecurescreen = false
    }
})
document.addEventListener('mouseup',(upped) => {
  mousemove = false;
  console.log(upped.clientY)
  if(activesecurescreen == true) {
    document.getElementById('securityscreen').style = `bottom:0px;`;
    document.getElementById('homepage').style = `display:none;`;
  }
  document.getElementById('openscreen').style.pointerEvents = "all"
})



