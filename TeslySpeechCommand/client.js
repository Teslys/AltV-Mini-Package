import alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as native from 'natives';



let view = new alt.WebView("http://resources/TeslySpeechCommand/html/index.html")

view.on('pushClient',(speechToText) => {
    console.log('buraya Veri geliyor')
})
alt.on('keydown', (key) => {
    if(key == 77) {
        view.emit('microphoneON')
        alt.log('mikrofon Çalıştı')
    }
});
