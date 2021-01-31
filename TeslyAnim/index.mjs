import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
// import * as native from 'natives';

alt.on('Command:AnimStart',(player) => {
    alt.log('tetiklendi.')
    alt.emitClient(player,'TeslyAnim:play',player)
})