import * as alt from 'alt';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as native from 'natives';

let view = new alt.WebView("http://resources/TeslySpawn/html/index.html")
let camera = null;
alt.on('characceptlogin',() => {
    view.emit('ready')
    alt.showCursor(true)
    view.focus()
    camera = native.createCamWithParams(
        'DEFAULT_SCRIPTED_CAMERA',
        -429.3758239746094,
        -642.11865234375,
        227.6578369140625,
        0,
        0,
        0,
        90,
        true,
        0
    );

    native.pointCamAtCoord(camera, -429.3758239746094, -642.11865234375, 100.6578369140625);
    native.setCamActive(camera, true);
    native.renderScriptCams(true, false, 0, true, false);
})
alt.on('destroySpawn',() => {
    view.destroy()
})
view.on('location',(location) => {
    alt.emit('disablefocus')
    alt.emitServer('PlayerLocation',location)
    alt.emit("registerInventory",alt.getMeta("CharacterID"))
    native.destroyAllCams(true);
    native.renderScriptCams(false, false, 0, false, false);
})
alt.on('disablefocus',() => {
    alt.showCursor(false)
    view.unfocus()
    view.destroy()
})
alt.on('PlayerData',(character,id) => {
    alt.emitServer('PlayerData',character,id)
})
alt.onServer('CharacterView',(CharacterView) => {
    // alt.log(CharacterView.fatherid)
    Famiy(CharacterView.fatherid,CharacterView.motherid,CharacterView.Resemblance,CharacterView.Skintone)
    Brow(CharacterView.brow,CharacterView.browColorOne)
    Eyes(CharacterView.Eyes,CharacterView.EyeMakeUp)
    Nose(CharacterView.NoseWidth,CharacterView.NoseHeight,CharacterView.NoseLength,CharacterView.NoseBoneHigh,CharacterView.NosePeakLowering,CharacterView.NoseBoneTwist)
    Cheek(CharacterView.CheekBones,CharacterView.CheekBonesWidth,CharacterView.CheeksWidth)
    Lips(CharacterView.Lips)
    Jaw(CharacterView.JawBoneWidth,CharacterView.JawBackLengh)
    Chin(CharacterView.ChinProfile,CharacterView.ChinShape,CharacterView.ChimpBoneWidth,CharacterView.ChimpHole)
    MF(CharacterView.MF)
    Blusher(CharacterView.Blusher,CharacterView.BlusherColor)
    LiphStick(CharacterView.LiphStick,CharacterView.LiphStickColor)
    viewChar(CharacterView.arms,CharacterView.pants,CharacterView.shoes,CharacterView.shirt,CharacterView.torso)
    SetHair(CharacterView.SettedHairColletion,CharacterView.SettedHairOverlay,CharacterView.SettedHairValue,CharacterView.SettedHairColorOne,CharacterView.SettedHairColorTwo)
})
view.on("OverlayOpactiy",(OverlayOpactiy) => {
    for(let i = 0; i < OverlayOpactiy.length;i++) {
        const overlay = OverlayOpactiy[i];
        native.setPedHeadOverlay(alt.Player.local.scriptID, overlay.id, overlay.value, parseFloat(overlay.opacity));
    }
})
function Famiy(father,mother,Resemblance,Skintone) {
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
    console.log('family')
}
function Brow(brow,browColorOne) {
    native.setPedHeadOverlay(alt.Player.local.scriptID, 2, brow, 1);
    native.setPedHeadOverlayColor(alt.Player.local.scriptID, 2, 1, browColorOne,browColorOne);
}
function Eyes(eyes,EyeMakeUp) {
    native.setPedEyeColor(alt.Player.local.scriptID, eyes);
    native.setPedHeadOverlay(alt.Player.local.scriptID,4,EyeMakeUp,1.0) 
}
function Nose(NoseWidth,NoseHeight,NoseLength,NoseBoneHigh,NosePeakLowering,NoseBoneTwist) {
    native.setPedFaceFeature(alt.Player.local.scriptID,1,parseFloat(NoseWidth))
    native.setPedFaceFeature(alt.Player.local.scriptID,2,parseFloat(NoseHeight))
    native.setPedFaceFeature(alt.Player.local.scriptID,3,parseFloat(NoseLength))
    native.setPedFaceFeature(alt.Player.local.scriptID,4,parseFloat(NoseBoneHigh))
    native.setPedFaceFeature(alt.Player.local.scriptID,5,parseFloat(NosePeakLowering))
    native.setPedFaceFeature(alt.Player.local.scriptID,6,parseFloat(NoseBoneTwist))
}
function Cheek(CheekBones,CheekBonesWidth,CheeksWidth) {
    native.setPedFaceFeature(alt.Player.local.scriptID,9,parseFloat(CheekBones))
    native.setPedFaceFeature(alt.Player.local.scriptID,10,parseFloat(CheekBonesWidth))
    native.setPedFaceFeature(alt.Player.local.scriptID,11,parseFloat(CheeksWidth))
}
function Lips(Lips) {
    native.setPedFaceFeature(alt.Player.local.scriptID,13,parseFloat(Lips))
}
function Jaw(JawBoneWidth,JawBackLengh) {
    native.setPedFaceFeature(alt.Player.local.scriptID,14,parseFloat(JawBoneWidth))
    native.setPedFaceFeature(alt.Player.local.scriptID,15,parseFloat(JawBackLengh))
}
function Chin(ChinProfile,ChinShape,ChimpBoneWidth,ChimpHole) {
    native.setPedFaceFeature(alt.Player.local.scriptID,16,parseFloat(ChinProfile))
    native.setPedFaceFeature(alt.Player.local.scriptID,17,parseFloat(ChinShape))
    native.setPedFaceFeature(alt.Player.local.scriptID,18,parseFloat(ChimpBoneWidth))
    native.setPedFaceFeature(alt.Player.local.scriptID,19,parseFloat(ChimpHole))
}
function MF(MF) {
    native.setPedHeadOverlay(alt.Player.local.scriptID,9,MF,1.0)
}
function Blusher(Blusher,BlusherColor) {
    native.setPedHeadOverlay(alt.Player.local.scriptID,5,Blusher,1.0)
    native.setPedHeadOverlayColor(alt.Player.local.scriptID,5,2,BlusherColor,BlusherColor)
}
function LiphStick(LiphStick,LiphStickColor) {
    native.setPedHeadOverlay(alt.Player.local.scriptID,8,LiphStick,1.0)
    native.setPedHeadOverlayColor(alt.Player.local.scriptID,8,2,LiphStickColor,LiphStickColor) 
}
function viewChar(arms,pants,shoes,shirt,torso) {
    native.setPedComponentVariation(alt.Player.local.scriptID, 3, arms, 0, 0); // arms
    native.setPedComponentVariation(alt.Player.local.scriptID, 4, pants, 0, 0); // pants
    native.setPedComponentVariation(alt.Player.local.scriptID, 6, shoes, 0, 0); // shoes
    native.setPedComponentVariation(alt.Player.local.scriptID, 8, shirt, 0, 0); // shirt
    native.setPedComponentVariation(alt.Player.local.scriptID, 11, torso, 0, 0); // torso
}
function SetHair(collection,overlay,value,colorOne,colorTwo) {
    const collections = native.getHashKey(collection);
    const overlays = native.getHashKey(overlay);
    native.setPedHairColor(alt.Player.local.scriptID, collections, overlays);
    native.setPedComponentVariation(alt.Player.local.scriptID, 2, value, 0, 0);
    native.setPedHairColor(alt.Player.local.scriptID, colorOne, colorTwo);
}