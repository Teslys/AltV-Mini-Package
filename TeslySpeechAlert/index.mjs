import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'


alt.on('WrongCommand',(player) => {
    alt.emitClient(player,'wrongCommand')
})