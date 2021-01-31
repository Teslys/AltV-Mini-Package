import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as mongo from 'Mongo-V'

let sex = null;
let CharacterViewData = null;

alt.onClient('selectedCharacter',(player,selected,id) => {
    // console.log(player.pos,selected,id)
})

alt.onClient('PlayerLocation',(player,location) => {
    if(location == "lastlocation") {
        mongo.getDocuments('username',player.getMeta('sessionUsername'),'player',(data) => { 
            let docs = JSON.parse(data)
            if(docs[0].characters[alt.getMeta('selectedCharacter')].sex == "male") {
                console.log('burası Çalıştı')
                player.model = 'mp_m_freemode_01';
            }else {
                player.model = 'mp_f_freemode_01';
            }
            chat.setupPlayer(player);
            let loc = docs[0].characters[alt.getMeta('selectedCharacter')].lastlocation.split(' ')
            player.spawn(loc[0], loc[1], loc[2], 1000)
            alt.emitClient(player,'CharacterView',CharacterViewData)

        })

    }else {
        mongo.getDocuments('username',player.getMeta('sessionUsername'),'player',(data) => {  
            let docs = JSON.parse(data)

        if(docs[0].characters[alt.getMeta('selectedCharacter')].sex == "male") {
            player.model = 'mp_m_freemode_01';
        }else {
            player.model = 'mp_f_freemode_01';
        }       
             chat.setupPlayer(player);
            player.spawn(location[0],location[1],location[2],1000)
            alt.emitClient(player,'CharacterView',CharacterViewData)

         })

    }
})

alt.onClient('PlayerData',(player,character,id) => {
    console.log(player.getMeta('sessionUsername'))
    mongo.getDocuments('username',player.getMeta('sessionUsername'),'player',(data) => {  
        let docs = JSON.parse(data)
        console.log(JSON.stringify(docs[0].characters[id].CharacterViewData))
        CharacterViewData = docs[0].characters[id].CharacterViewData;
    
    })
})
alt.on('playerDisconnect',(player) => {
    let position = `${player.pos.x} ${player.pos.y} ${player.pos.z}`
    mongo.getDocuments('username',player.getMeta('sessionUsername'),'player',(data) => {
        let docs = JSON.parse(data)
        if (docs.length <= 0)
            return new Error('No documents were found.');

            docs[0].characters[alt.getMeta('selectedCharacter')].lastlocation = position
            
            mongo.updateDocuments(JSON.stringify(docs),'player',(res) => {
                if (!res.success) {
                    console.log(res.docs); 
                    return new Error('Failed to update any documents.');
                }
            })
    })
})

