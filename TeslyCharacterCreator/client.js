import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as native from 'natives';
import { createPedEditCamera, destroyPedEditCamera, setFov, setZPos } from './camera'; // From Stuyk

let view = new alt.WebView("http://resources/TeslyCharacterCreator/html/index.html")

alt.on("PlayerData",(character,i) => {
    if(character.setCharacterModel == false) {
        alt.emitServer("CreatorSpawn",alt.getMeta('CharacterSex'))
    }
})
alt.onServer('StartView',() => {
    // alt.setCamFrozen(false)
    view.emit("openChacaterCreator")
    createPedEditCamera()
    setFov(50);
    setZPos(0.6);
    view.focus()
    // alt.toggleGameControls(false)
    alt.showCursor(true)
    native.setFollowPedCamViewMode(1)
    if(alt.getMeta("CharacterSex") == "male") {
        view.emit('sex',"male")
    }else if(alt.getMeta('CharacterSex') == "female") {
        view.emit('sex',"female")
    }else {
        return;
    }
})
view.on("OverlayOpactiy",(OverlayOpactiy) => {
    for(let i = 0; i < OverlayOpactiy.length;i++) {
        const overlay = OverlayOpactiy[i];
        native.setPedHeadOverlay(alt.Player.local.scriptID, overlay.id, overlay.value, parseFloat(overlay.opacity));
    }
})
view.on("family",(father,mother,Resemblance,Skintone) => {
    native.setPedHeadBlendData(
        alt.Player.local.scriptID,
        father,
        mother,
        0,
        Skintone,
        Skintone,
        0,
        parseFloat(Resemblance),
        parseFloat(Resemblance),
        0,
        false
    );
})
view.on('SetHair',(collection,overlay,value,colorOne,colorTwo) => {
    const collections = native.getHashKey(collection);
    const overlays = native.getHashKey(overlay);
    native.setPedHairColor(alt.Player.local.scriptID, collections, overlays);
    native.setPedComponentVariation(alt.Player.local.scriptID, 2, value, 0, 0);
    native.setPedHairColor(alt.Player.local.scriptID, colorOne, colorTwo);
})
view.on("Brow",(brow,browColorOne) => {
    native.setPedHeadOverlay(alt.Player.local.scriptID, 2, brow, 1);
    native.setPedHeadOverlayColor(alt.Player.local.scriptID, 2, 1, browColorOne,browColorOne);
})
view.on('Eyes',(eyes,EyeMakeUp) => {
    native.setPedEyeColor(alt.Player.local.scriptID, eyes);
    native.setPedHeadOverlay(alt.Player.local.scriptID,4,EyeMakeUp,1.0)

})
view.on('Nose',(NoseWidth,NoseHeight,NoseLength,NoseBoneHigh,NosePeakLowering,NoseBoneTwist) => {
    native.setPedFaceFeature(alt.Player.local.scriptID,1,parseFloat(NoseWidth))
    native.setPedFaceFeature(alt.Player.local.scriptID,2,parseFloat(NoseHeight))
    native.setPedFaceFeature(alt.Player.local.scriptID,3,parseFloat(NoseLength))
    native.setPedFaceFeature(alt.Player.local.scriptID,4,parseFloat(NoseBoneHigh))
    native.setPedFaceFeature(alt.Player.local.scriptID,5,parseFloat(NosePeakLowering))
    native.setPedFaceFeature(alt.Player.local.scriptID,6,parseFloat(NoseBoneTwist))
})
view.on('Cheek',(CheekBones,CheekBonesWidth,CheeksWidth) => {
    native.setPedFaceFeature(alt.Player.local.scriptID,9,parseFloat(CheekBones))
    native.setPedFaceFeature(alt.Player.local.scriptID,10,parseFloat(CheekBonesWidth))
    native.setPedFaceFeature(alt.Player.local.scriptID,11,parseFloat(CheeksWidth))
})
view.on('Lips',(Lips) => {
    native.setPedFaceFeature(alt.Player.local.scriptID,13,parseFloat(Lips))
})
view.on('Jaw',(JawBoneWidth,JawBackLengh) =>{
    native.setPedFaceFeature(alt.Player.local.scriptID,14,parseFloat(JawBoneWidth))
    native.setPedFaceFeature(alt.Player.local.scriptID,15,parseFloat(JawBackLengh))
})
view.on('Chin',(ChinProfile,ChinShape,ChimpBoneWidth,ChimpHole) => {
    native.setPedFaceFeature(alt.Player.local.scriptID,16,parseFloat(ChinProfile))
    native.setPedFaceFeature(alt.Player.local.scriptID,17,parseFloat(ChinShape))
    native.setPedFaceFeature(alt.Player.local.scriptID,18,parseFloat(ChimpBoneWidth))
    native.setPedFaceFeature(alt.Player.local.scriptID,19,parseFloat(ChimpHole))
})
view.on('MF',(MF) => {
    native.setPedHeadOverlay(alt.Player.local.scriptID,9,MF,1.0)
})
view.on('Blusher',(Blusher,BlusherColor) => {
    native.setPedHeadOverlay(alt.Player.local.scriptID,5,Blusher,1.0)
    native.setPedHeadOverlayColor(alt.Player.local.scriptID,5,2,BlusherColor,BlusherColor)
})
view.on('LiphStick',(LiphStick,LiphStickColor) => {
    native.setPedHeadOverlay(alt.Player.local.scriptID,8,LiphStick,1.0)
    native.setPedHeadOverlayColor(alt.Player.local.scriptID,8,2,LiphStickColor,LiphStickColor)
})
view.on('view',(arms,pants,shoes,shirt,torso) => {
    native.setPedComponentVariation(alt.Player.local.scriptID, 3, arms, 0, 0); // arms
    native.setPedComponentVariation(alt.Player.local.scriptID, 4, pants, 0, 0); // pants
    native.setPedComponentVariation(alt.Player.local.scriptID, 6, shoes, 0, 0); // shoes
    native.setPedComponentVariation(alt.Player.local.scriptID, 8, shirt, 0, 0); // shirt
    native.setPedComponentVariation(alt.Player.local.scriptID, 11, torso, 0, 0); // torso
})
view.on('Finish',(fatherid,motherid,Resemblance,Skintone,SettedHairColletion,SettedHairOverlay,SettedHairValue,SettedHairColorOne,SettedHairColorTwo,brow,browColorOne,Eyes,NoseWidth,NoseHeight,NoseLength,
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
    torso) => {
        alt.emitServer("FinishServer",
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
            alt.getMeta("selectedCharacter"),
            alt.getMeta("sessionUsername"))
    })
alt.onServer('destroyView',() => {
    view.destroy()
    destroyPedEditCamera()
    alt.showCursor(false)

})