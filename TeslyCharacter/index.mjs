import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as mongo from 'Mongo-V'
function randomHex(len) {
    var maxlen = 8,
        min = Math.pow(16,Math.min(len,maxlen)-1),
        max = Math.pow(16,Math.min(len,maxlen)) - 1,
        n   = Math.floor( Math.random() * (max-min+1) ) + min,
        r   = n.toString(16);
    while ( r.length < len ) {
       r = r + randomHex( len - maxlen );
    }
    return r;
  };
alt.onClient('NewCharacter',(player,sessionUsername,CharName,CharSurname,date,MomName,FatherName,sex) => {
    mongo.getDocuments('username',sessionUsername,'player',(data) => { 
        let docs = JSON.parse(data)
        // console.log(docs)
        for(let i = 0; i <= 4;i++){
            if(docs[0].characters[i] == undefined) {
                console.log(sessionUsername,CharName,CharSurname,date,MomName,FatherName)
                let setdata = {
                        "name": CharName,
                        "surname": CharSurname,
                        "CharacterViewData": {
                            "fatherid": "0",
                            "motherid": "0",
                            "Resemblance": "0.0",
                            "Skintone": "0",
                            "SettedHairColletion": "mpbeach_overlays",
                            "SettedHairOverlay": "FM_Hair_Fuzz",
                            "SettedHairValue": "0",
                            "SettedHairColorOne": "0",
                            "SettedHairColorTwo": "0",
                            "brow": "0",
                            "browColorOne": "0",
                            "Eyes": "0",
                            "NoseWidth": "0.0",
                            "NoseHeight": "0.0",
                            "NoseLength": "0.0",
                            "NoseBoneHigh": "0.0",
                            "NosePeakLowering": "0.0",
                            "NoseBoneTwist": "0.0",
                            "CheekBones": "0.0",
                            "CheekBonesWidth": "0.0",
                            "CheeksWidth": "0.0",
                            "Lips": "0.0",
                            "JawBoneWidth": "0.0",
                            "JawBackLengh": "0.0",
                            "ChinProfile": "0.0",
                            "ChinShape": "0.0",
                            "ChimpBoneWidth": "0.0",
                            "ChimpHole": "0.0",
                            "MF": "0",
                            "EyeMakeUp": "0",
                            "Blusher": "0",
                            "BlusherColor": "0",
                            "LiphStick": "0",
                            "LiphStickColor": "0",
                            "arms": "0",
                            "pants": "0",
                            "shoes": "0",
                            "shirt": "0",
                            "torso": "0"
                        },
                        "sex": sex,
                        "bankid": `LS-${randomHex(16).toUpperCase()}`,
                        "bankmoney": "5000",
                        "lastlocation": "",
                        "health": "200",
                        "armour": "0",
                        "food": "50",
                        "water": "50",
                        "isAdmin": false,
                        "isDead": false,
                        "birthdate": date,
                        "setCharacterModel": false,
                        "MomName": MomName,
                        "FatherName": FatherName,
                        "id":`${randomHex(24)}`
                        
            }
            
             docs[0].characters[i] = setdata
                return mongo.updateDocuments(JSON.stringify(docs),'player',(res) => {
                    if (!res.success) {
                        console.log(res.docs); 
                        return new Error('Failed to update any documents.');
                    }
                    alt.emitClient(player,'newCharacter',docs[0])
                })
            }else if(i == 4 && docs[0].characters[i] !== undefined) {
                return console.log('Bundan Fazla Karakter Oluşturamazsın..')
            }
        }


    })
    // console.log(sessionUsername,CharName,CharSurname,date,MomName,FatherName)
})
alt.onClient('sessionUsername',(player,username) => {
    mongo.getDocuments('username',username,'player',(data) => {
        let datas = JSON.parse(data) 
        alt.emitClient(player,'sessionData',datas[0])
        characterdata(datas[0])
        alt.emit('updatehud',player)
    })
})
alt.onClient('metas',(player,character,i) => {
    player.setMeta('CharacterName',character.name)
    player.setMeta('CharacterSurname',character.surname)
    player.setMeta('CharacterBankID',character.bankid)
    player.setMeta('CharacterBankMoney',character.bankmoney)
    player.setMeta('CharacterID',character.id)
    alt.setMeta('selectedCharacter',i)
})
function characterdata(datas) {
    alt.emit('chardata',datas)

}
export default {
    characterdata
}