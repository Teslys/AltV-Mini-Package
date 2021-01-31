document.onkeydown = (key) => {
    if(key.keyCode == 13) {
        login()
    }
}
function login() {
   let username =  document.getElementById("username").value
   let pass = document.getElementById("password").value
    alt.emit('login',username,pass)
}
alt.on('successed',(bool) => {
    console.log(bool)
    if(bool) {
        document.getElementById('success').style = "display:none;"
    }
})