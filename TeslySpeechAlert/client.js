import alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as native from 'natives';

let view = new alt.WebView("http://resources/TeslySpeechAlert/html/index.html")

alt.onServer('wrongCommand',() => {
    view.emit('wrongCommand')
})