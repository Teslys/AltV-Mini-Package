import alt from 'alt-client';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as native from 'natives';

let view = new alt.WebView("http://resources/TeslyLogin/html/index.html")
alt.showCursor(true)
view.focus()
view.on('login',(username,pass) => {
    alt.emitServer('login',username,pass)
    
})
alt.onServer('login',(bool,username) => {
    view.emit('successed',bool)    
    if(bool) {
        alt.showCursor(false)
        view.unfocus()
        loadedloginchat(bool)
        alt.setMeta('sessionUsername',username)
        alt.emit('loginSuccess',username)
        isLogin()
        view.destroy()
    }
    
})
function loadedloginchat(bool) {
    return alt.emit('Loginchat',bool)
    
}
function isLogin() {
    alt.emit('isLogin')

}
export default {
    loadedloginchat,
    isLogin
}