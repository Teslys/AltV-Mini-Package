import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as mongo from 'Mongo-V'

alt.onClient("CreatorSpawn",(player,sex) => {
    if(sex == "male") {
        player.model = 'mp_m_freemode_01';

    }else {
        player.model = 'mp_f_freemode_01';
    }
    chat.setupPlayer(player);
    player.rot = {x:0,y:0,z:2.622116804122925}

    player.spawn(-606.5670166015625, -127.26593017578125, 38.001197265625)
    alt.setTimeout(() => {
        alt.emitClient(player,'StartView')

    }, 500);
})
alt.onClient('FinishServer',(player,
            fatherid,
            motherid,
            Resemblance,
            Skintone,
            SettedHairColletion,
            SettedHairOverlay,
            SettedHairValue,
            SettedHairColorOne,
            SettedHairColorTwo,
            brow,
            browColorOne,
            Eyes,
            NoseWidth,
            NoseHeight,
            NoseLength,
            NoseBoneHigh,
            NosePeakLowering,
            NoseBoneTwist,
            CheekBones,
            CheekBonesWidth,
            CheeksWidth,
            Lips,
            JawBoneWidth,
            JawBackLengh,
            ChinProfile,
            ChinShape,
            ChimpBoneWidth,
            ChimpHole,
            MF,
            EyeMakeUp,
            Blusher,
            BlusherColor,
            LiphStick,
            LiphStickColor,
            arms,
            pants,
            shoes,
            shirt,
            torso,
            selectedCharacter,
            sessionUsername
    ) => {
       mongo.getDocuments('username',sessionUsername,'player',(data) => { 
            let docs = JSON.parse(data)
            console.log(docs[0].characters[selectedCharacter].name)
            docs[0].characters[selectedCharacter].CharacterViewData = {
                "fatherid":fatherid,
                "motherid":motherid,
                "Resemblance":Resemblance,
                "Skintone":Skintone,
                "SettedHairColletion":SettedHairColletion,
                "SettedHairOverlay":SettedHairOverlay,
                "SettedHairValue":SettedHairValue,
                "SettedHairColorOne":SettedHairColorOne,
                "SettedHairColorTwo":SettedHairColorTwo,
                "brow":brow,
                "browColorOne":browColorOne,
                "Eyes":Eyes,
                "NoseWidth":NoseWidth,
                "NoseHeight":NoseHeight,
                "NoseLength":NoseLength,
                "NoseBoneHigh":NoseBoneHigh,
                "NosePeakLowering":NosePeakLowering,
                "NoseBoneTwist":NoseBoneTwist,
                "CheekBones":CheekBones,
                "CheekBonesWidth":CheekBonesWidth,
                "CheeksWidth":CheeksWidth,
                "Lips":Lips,
                "JawBoneWidth":JawBoneWidth,
                "JawBackLengh":JawBackLengh,
                "ChinProfile":ChinProfile,
                "ChinShape":ChinShape,
                "ChimpBoneWidth":ChimpBoneWidth,
                "ChimpHole":ChimpHole,
                "MF":MF,
                "EyeMakeUp":EyeMakeUp,
                "Blusher":Blusher,
                "BlusherColor":BlusherColor,
                "LiphStick":LiphStick,
                "LiphStickColor":LiphStickColor,
                "arms":arms,
                "pants":pants,
                "shoes":shoes,
                "shirt":shirt,
                "torso":torso,
            }
            docs[0].characters[selectedCharacter].setCharacterModel = true;
            mongo.updateDocuments(JSON.stringify(docs),'player',(res) => {
                if (!res.success) {
                    console.log(res.docs); 
                    return new Error('Failed to update any documents.');
                }
                alt.emitClient(player,'destroyView')
            })
    
        })
    })