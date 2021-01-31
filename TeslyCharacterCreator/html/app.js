alt.on("openChacaterCreator",() => {
    document.getElementById("body").style.display = "block"
    alt.emit("family",00,21,0,0)

})

const mother = [
    "21 Hannah",
    "22 Audrey",
    "23 Jasmine",
    "24 Giselle",
    "25 Amelia",
    "26 Isabella",
    "27 Zoe",
    "28 Ava",
    "29 Camilla",
    "30 Violet",
    "31 Sophia",
    "32 Eveline",
    "33 Nicole",
    "34 Ashley",
    "35 Grace",
    "36 Brianna",
    "37 Natalie",
    "38 Olivia",
    "39 Elizabeth",
    "40 Charlotte",
    "41 Emma",
    "45 Misty",
    
]
const Father = [
    "00 Benjamin ",
    "01 Daniel",
    "02 Joshua",
    "03 Noah",
    "04 Andrew",
    "05 Joan",
    "06 Alex",
    "07 Isaac",
    "08 Evan",
    "09 Ethan",
    "10 Vincent",
    "11 Angel",
    "12 Diego",
    "13 Adrian",
    "14 Gabriel",
    "15 Michael",
    "16 Santiago",
    "17 Kevin",
    "18 Louis",
    "19 Samuel",
    "20 Anthony",
    "42 John",
    "43 Niko",
    "44 Claude",

]
let Malehair = {
    0: { collection: 'mpbeach_overlays', overlay: 'FM_Hair_Fuzz' },
    1: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_001' },
    2: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_002' },
    3: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_003' },
    4: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_004' },
    5: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_005' },
    6: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_006' },
    7: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_007' },
    8: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_008' },
    9: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_009' },
    10: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_013' },
    11: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_002' },
    12: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_011' },
    13: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_012' },
    14: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_014' },
    15: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_015' },
    16: { collection: 'multiplayer_overlays', overlay: 'NGBea_M_Hair_000' },
    17: { collection: 'multiplayer_overlays', overlay: 'NGBea_M_Hair_001' },
    18: { collection: 'multiplayer_overlays', overlay: 'NGBus_M_Hair_000' },
    19: { collection: 'multiplayer_overlays', overlay: 'NGBus_M_Hair_001' },
    20: { collection: 'multiplayer_overlays', overlay: 'NGHip_M_Hair_000' },
    21: { collection: 'multiplayer_overlays', overlay: 'NGHip_M_Hair_001' },
    22: { collection: 'multiplayer_overlays', overlay: 'NGInd_M_Hair_000' },
    24: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_000' },
    25: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_001' },
    26: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_002' },
    27: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_003' },
    28: { collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_004' },
    29: { collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_005' },
    30: { collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_006' },
    31: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_000_M' },
    32: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_001_M' },
    33: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_M' },
    34: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_003_M' },
    35: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_004_M' },
    36: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_005_M' },
    37: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_001' },
    38: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_002' },
    39: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_003' },
    40: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_004' },
    41: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_005' },
    42: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_006' },
    43: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_007' },
    44: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_008' },
    45: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_009' },
    46: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_013' },
    47: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_002' },
    48: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_011' },
    49: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_012' },
    50: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_014' },
    51: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_015' },
    52: { collection: 'multiplayer_overlays', overlay: 'NGBea_M_Hair_000' },
    53: { collection: 'multiplayer_overlays', overlay: 'NGBea_M_Hair_001' },
    54: { collection: 'multiplayer_overlays', overlay: 'NGBus_M_Hair_000' },
    55: { collection: 'multiplayer_overlays', overlay: 'NGBus_M_Hair_001' },
    56: { collection: 'multiplayer_overlays', overlay: 'NGHip_M_Hair_000' },
    57: { collection: 'multiplayer_overlays', overlay: 'NGHip_M_Hair_001' },
    58: { collection: 'multiplayer_overlays', overlay: 'NGInd_M_Hair_000' },
    59: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_000' },
    60: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_001' },
    61: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_002' },
    62: { collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_003' },
    63: { collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_004' },
    64: { collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_005' },
    65: { collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_006' },
    66: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_000_M' },
    67: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_001_M' },
    68: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_M' },
    69: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_003_M' },
    70: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_004_M' },
    71: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_005_M' },
    72: {
        collection: 'mpgunrunning_overlays',
        overlay: 'MP_Gunrunning_Hair_M_000_M'
    },
    73: {
        collection: 'mpgunrunning_overlays',
        overlay: 'MP_Gunrunning_Hair_M_001_M'
    }
};
let FemaleHair =  {
    0: { collection: 'mpbeach_overlays', overlay: 'FM_Hair_Fuzz' },
    1: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_001' },
    2: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_002' },
    3: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_003' },
    4: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_004' },
    5: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_005' },
    6: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_006' },
    7: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_007' },
    8: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_008' },
    9: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_009' },
    10: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_010' },
    11: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_011' },
    12: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_012' },
    13: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_013' },
    14: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_014' },
    15: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_015' },
    16: { collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_000' },
    17: { collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_001' },
    18: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_007' },
    19: { collection: 'multiplayer_overlays', overlay: 'NGBus_F_Hair_000' },
    20: { collection: 'multiplayer_overlays', overlay: 'NGBus_F_Hair_001' },
    21: { collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_001' },
    22: { collection: 'multiplayer_overlays', overlay: 'NGHip_F_Hair_000' },
    23: { collection: 'multiplayer_overlays', overlay: 'NGInd_F_Hair_000' },
    25: { collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_000' },
    26: { collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_001' },
    27: { collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_002' },
    28: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_003' },
    29: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_003' },
    30: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_004' },
    31: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_006' },
    32: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_000_F' },
    33: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_001_F' },
    34: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_F' },
    35: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_003_F' },
    36: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_003' },
    37: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_006_F' },
    38: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_004_F' },
    39: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_001' },
    40: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_002' },
    41: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_003' },
    42: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_004' },
    43: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_005' },
    44: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_006' },
    45: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_007' },
    46: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_008' },
    47: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_009' },
    48: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_010' },
    49: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_011' },
    50: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_012' },
    51: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_013' },
    52: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_014' },
    53: { collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_015' },
    54: { collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_000' },
    55: { collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_001' },
    56: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_007' },
    57: { collection: 'multiplayer_overlays', overlay: 'NGBus_F_Hair_000' },
    58: { collection: 'multiplayer_overlays', overlay: 'NGBus_F_Hair_001' },
    59: { collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_001' },
    60: { collection: 'multiplayer_overlays', overlay: 'NGHip_F_Hair_000' },
    61: { collection: 'multiplayer_overlays', overlay: 'NGInd_F_Hair_000' },
    62: { collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_000' },
    63: { collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_001' },
    64: { collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_002' },
    65: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_003' },
    66: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_003' },
    67: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_004' },
    68: { collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_006' },
    69: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_000_F' },
    70: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_001_F' },
    71: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_F' },
    72: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_003_F' },
    73: { collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_003' },
    74: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_006_F' },
    75: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_004_F' },
    76: {
        collection: 'mpgunrunning_overlays',
        overlay: 'MP_Gunrunning_Hair_F_000_F'
    },
    77: {
        collection: 'mpgunrunning_overlays',
        overlay: 'MP_Gunrunning_Hair_F_001_F'
    }
};

let fatherid = 0;
let motherid = 0;
let Resemblance = 0.0;
let Skintone = 0;
let sex = null;
let SettedHairColletion = null;
let SettedHairOverlay = null;
let SettedHairValue = 0;
let SettedHairColorOne = 0;
let SettedHairColorTwo = 0;
let brow = 0;
let browColorOne = 0;
let Eyes = 0;
let NoseWidth = 0.0;
let NoseHeight = 0.0;
let NoseLength = 0.0;
let NoseBoneHigh = 0.0;
let NosePeakLowering = 0.0;
let NoseBoneTwist = 0.0;
let CheekBones = 0.0;
let CheekBonesWidth = 0.0;
let CheeksWidth = 0.0;
let Lips = 0.0;
let JawBoneWidth = 0.0
let JawBackLengh = 0.0;
let ChinProfile = 0.0;
let ChinShape = 0.0;
let ChimpBoneWidth = 0.0;
let ChimpHole = 0.0;
let MF = 0;
let EyeMakeUp = -1;
// let EyeMakeUpColor = 0;
let Blusher = 0;
let BlusherColor = 0;
let LiphStick = 0;
let LiphStickColor = 0;

let arms = 0;
let pants = 0;
let shoes = 0;
let shirt = 0
let torso = 0;

let SelectedInterval = null;

alt.on('sex',(type) => {
    sex = type;
})
let motherSplit = mother[0].split(" ")
document.getElementById("mother").setAttribute("data-id",0)
document.getElementById("mother").value = motherSplit[1]
let fatherSplit = Father[0].split(" ")
document.getElementById("father").setAttribute("data-id",0)
document.getElementById("father").value = fatherSplit[1]

document.getElementById('OnePageNext').onclick = () => {
    document.getElementById("characterselectFamily").style.display = "none"
    document.getElementById("charcreatorBody").style.display = "block"
}
document.getElementById("TwoLastPAge").onclick = () => {
    document.getElementById("characterselectFamily").style.display = "block"
    document.getElementById("charcreatorBody").style.display = "none"
}
document.getElementById("TwoPageNext").onclick = () => {
    document.getElementById("appearance").style.display = "block"
    document.getElementById("charcreatorBody").style.display = "none"
}
document.getElementById("ThreeLastPage").onclick = () => {
    document.getElementById("charcreatorBody").style.display = "block"
    document.getElementById("appearance").style.display = "none"
}
document.getElementById("ThreePageNext").onclick = () => {
    document.getElementById("apparel").style.display = "block"
    document.getElementById("appearance").style.display = "none"
}
document.getElementById("fourLastPage").onclick = () => {
    document.getElementById("apparel").style.display = "none"
    document.getElementById("appearance").style.display = "block"
}
document.getElementById('Finish').onclick = () => {
    console.log('Bitti')
    alt.emit('Finish',
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
    torso
    )
}

document.querySelectorAll("input").forEach(range => {
    if(range.type == "range") {
        document.getElementById(range.id).onmousedown = () => {
            SelectedInterval = setInterval(() => {
                if(range.id == "resamblance") {
                    Resemblance = document.getElementById("resamblance").value
                    return alt.emit("family",fatherid,motherid,Resemblance,Skintone)
                }
                if(range.id == "Nose") {
                            NoseWidth = document.getElementById("Nose").value
                            alt.emit("Nose",NoseWidth,NoseHeight,NoseLength,NoseBoneHigh,NosePeakLowering,NoseBoneTwist)
                    }
                    if(range.id == "NoseProfile") {
                            NoseHeight = document.getElementById("NoseProfile").value
                            alt.emit("Nose",NoseWidth,NoseHeight,NoseLength,NoseBoneHigh,NosePeakLowering,NoseBoneTwist)
                    }
                    if(range.id == "NoseTip") {
                            NoseLength = document.getElementById("NoseTip").value
                            alt.emit("Nose",NoseWidth,NoseHeight,NoseLength,NoseBoneHigh,NosePeakLowering,NoseBoneTwist)
                    }
                    if(range.id == "NoseBoneHigh") {
                            NoseBoneHigh = document.getElementById("NoseBoneHigh").value
                            alt.emit("Nose",NoseWidth,NoseHeight,NoseLength,NoseBoneHigh,NosePeakLowering,NoseBoneTwist)
                    }
                    if(range.id == "NosePeakLowering") {
                            NosePeakLowering = document.getElementById("NosePeakLowering").value
                            alt.emit("Nose",NoseWidth,NoseHeight,NoseLength,NoseBoneHigh,NosePeakLowering,NoseBoneTwist)
                    }
                    if(range.id == "NoseBoneTwist") {
                        NoseBoneTwist = document.getElementById("NoseBoneTwist").value
                        alt.emit("Nose",NoseWidth,NoseHeight,NoseLength,NoseBoneHigh,NosePeakLowering,NoseBoneTwist)
                    }
                    if(range.id == "CheekBones") {
                            CheekBones = document.getElementById("CheekBones").value
                            alt.emit("Cheek",CheekBones,CheekBonesWidth,CheeksWidth)
                    }
                    if(range.id == "Cheeks") {
                            CheekBonesWidth = document.getElementById("Cheeks").value
                            alt.emit("Cheek",CheekBones,CheekBonesWidth,CheeksWidth)
                    }
                    if(range.id == "CheeksWidth") {

                            CheeksWidth = document.getElementById("CheeksWidth").value
                            alt.emit("Cheek",CheekBones,CheekBonesWidth,CheeksWidth)
                    }
                    if(range.id == "Lips") {
                            Lips = document.getElementById(range.id).value
                            alt.emit("Lips",Lips)
                    }
                    if(range.id == "Jaw") {
                            JawBoneWidth = document.getElementById(range.id).value
                            alt.emit("Jaw",JawBoneWidth,JawBackLengh)
                    }
                    if(range.id == "JawBackLengh") {
                            JawBackLengh = document.getElementById(range.id).value
                            alt.emit("Jaw",JawBoneWidth,JawBackLengh)
                    }
                    if(range.id == "ChinProfile") {
                            ChinProfile = document.getElementById(range.id).value
                            alt.emit("Chin",ChinProfile,ChinShape,ChimpBoneWidth,ChimpHole)
                    }
                    if(range.id == "ChinShape") {
                            ChinShape = document.getElementById(range.id).value
                            alt.emit("Chin",ChinProfile,ChinShape,ChimpBoneWidth,ChimpHole)
                    }
                    if(range.id == "ChimpBoneWidth") {
                        ChimpBoneWidth = document.getElementById(range.id).value
                        alt.emit("Chin",ChinProfile,ChinShape,ChimpBoneWidth,ChimpHole)
                    }
                    if(range.id == "ChimpHole") {
                        ChimpHole = document.getElementById(range.id).value
                        alt.emit("Chin",ChinProfile,ChinShape,ChimpBoneWidth,ChimpHole)
                    }
                    if(range.id  == "MF") {
                        MF = document.getElementById(range.id).value
                        alt.emit("MF",MF)
                    }
                    if(range.id  == "EyeMakeUp") {
                        EyeMakeUp = document.getElementById(range.id).value
                        alt.emit("Eyes",Eyes,EyeMakeUp)
                    }
              
                    if(range.id  == "Blusher") {
                        Blusher = document.getElementById(range.id).value
                        alt.emit("Blusher",Blusher)
                    }
                    if(range.id  == "BlusherColor") {
                        BlusherColor = document.getElementById(range.id).value
                        alt.emit("Blusher",Blusher,BlusherColor)
                    }
                    if(range.id  == "LiphStick") {
                        LiphStick = document.getElementById(range.id).value
                        alt.emit("LiphStick",LiphStick)
                    }
                    if(range.id  == "LiphStickColor") {
                        LiphStickColor = document.getElementById(range.id).value
                        alt.emit("LiphStick",LiphStick,LiphStickColor)
                    }
                    // if(range.id  == "Arms") {
                    //     arms = document.getElementById(range.id).value
                    //     console.log(arms)
                    //     alt.emit("view",arms,pants,shoes,shirt,torso)
                    // }
                    if(range.id == "Hair") {
                        if(sex == null) return;
                        if(sex == "male") {
                            // if(document.getElementById(range.id).value == -1) {return alt.emit('SetHair',"","")}
                            SettedHairColletion = Malehair[document.getElementById(range.id).value].collection
                            SettedHairOverlay = Malehair[document.getElementById(range.id).value].overlay
                            SettedHairValue = document.getElementById(range.id).value
                            alt.emit('SetHair',SettedHairColletion,SettedHairOverlay, SettedHairValue,SettedHairColorOne,SettedHairColorTwo)
                        }else if(sex == "female") {
                            // if(document.getElementById(range.id).value == -1) {return alt.emit('SetHair',"","")}
                            SettedHairColletion = FemaleHair[document.getElementById(range.id).value].collection
                            SettedHairOverlay = FemaleHair[document.getElementById(range.id).value].overlay
                            SettedHairValue = document.getElementById(range.id).value
                            // console.log(SettedHairColletion = FemaleHair[document.getElementById(range.id).value].collection)
                            alt.emit('SetHair',SettedHairColletion,SettedHairOverlay, SettedHairValue,SettedHairColorOne,SettedHairColorTwo)                     
                           }
                    }


            },300)
                return alt.emit("family",fatherid,motherid,Resemblance,Skintone)
        }
        document.getElementById(range.id).onmouseup = () => {
            clearInterval(SelectedInterval)
        }    
    }
})

document.querySelectorAll(".selectorLeft").forEach(selectorLeft => {
    document.getElementById(selectorLeft.id).onclick = () => {
        let split = selectorLeft.id.split("Left")
        let value = document.getElementById(split[0]).value
            if(split[0] == "father" && document.getElementById("father").getAttribute("data-id") >= 0) {
                if(Number(document.getElementById("father").getAttribute("data-id")) == 0) {return}
                let fatherSplitLeft = Father[Number(document.getElementById("father").getAttribute("data-id")) - 1].split(" ")
                document.getElementById("father").setAttribute("data-id",Number(document.getElementById("father").getAttribute("data-id")) - 1)
                document.getElementById("father").value = fatherSplitLeft[1]
                fatherid = fatherSplitLeft[0]
                alt.emit("family",fatherid,motherid,Resemblance,Skintone)
            }else if (split[0] == "mother" && document.getElementById("mother").getAttribute("data-id") >= 0) {
                if(Number(document.getElementById("mother").getAttribute("data-id")) == 0) {return}
                let motherSplitLeft = mother[Number(document.getElementById("mother").getAttribute("data-id")) - 1].split(" ")
                document.getElementById("mother").setAttribute("data-id",Number(document.getElementById("mother").getAttribute("data-id")) - 1)    
                document.getElementById("mother").value = motherSplitLeft[1]
                motherid = motherSplitLeft[0]
                alt.emit("family",fatherid,motherid,Resemblance,Skintone)
            }else {
                if(document.getElementById(split[0]).value >= 0){
                    if(split[0] == "skintone") {
                        if(document.getElementById(split[0]).value > 0) {
                            document.getElementById(split[0]).value = Number(value) - 1
                            Skintone = document.getElementById(split[0]).value
                            return alt.emit("family",fatherid,motherid,Resemblance,Skintone)
                        }

                     }
                    //  if(split[0] == "Hair") {
                    //     document.getElementById(split[0]).value = Number(value) - 1 
                    //     console.log(sex)
                    //     if(sex == null) return;
                    //     if(sex == "male") {
                    //         if(document.getElementById(split[0]).value == -1) {return alt.emit('SetHair',"","")}
                    //         SettedHairColletion = Malehair[document.getElementById(split[0]).value].collection
                    //         SettedHairOverlay = Malehair[document.getElementById(split[0]).value].overlay
                    //         SettedHairValue = document.getElementById(split[0]).value
                    //         alt.emit('SetHair',SettedHairColletion,SettedHairOverlay, SettedHairValue,SettedHairColorOne,SettedHairColorTwo)
                    //     }else if(sex == "female") {
                    //         if(document.getElementById(split[0]).value == -1) {return}
                    //         SettedHairColletion = FemaleHair[document.getElementById(split[0]).value].collection
                    //         SettedHairOverlay = FemaleHair[document.getElementById(split[0]).value].overlay
                    //         SettedHairValue = document.getElementById(split[0]).value
                    //         console.log(SettedHairColletion = FemaleHair[document.getElementById(split[0]).value].collection)
                    //         alt.emit('SetHair',SettedHairColletion,SettedHairOverlay, SettedHairValue,SettedHairColorOne,SettedHairColorTwo)                     
                    //        }
                    //  }
                     if(split[0] == "HairColorOne") {
                        document.getElementById(split[0]).value = Number(value) - 1 
                        SettedHairColorOne = document.getElementById(split[0]).value 
                        alt.emit('SetHair',SettedHairColletion,SettedHairOverlay, SettedHairValue,SettedHairColorOne,SettedHairColorTwo)
        
                     }
                    if(split[0] == "HairColorTwo") {
                        console.log("geliyor")
                        document.getElementById(split[0]).value = Number(value) - 1 
                        SettedHairColorTwo = document.getElementById(split[0]).value 
                        alt.emit('SetHair',SettedHairColletion,SettedHairOverlay, SettedHairValue,SettedHairColorOne,SettedHairColorTwo)
        
                    }
                    if(split[0] == "Brow") {
                        document.getElementById(split[0]).value = Number(value) - 1 
                        brow = document.getElementById(split[0]).value
                        alt.emit("Brow",brow,browColorOne)
                    }
                 
                    if(split[0] == "BrowColorOne") {
                        document.getElementById(split[0]).value = Number(value) - 1 
                        browColorOne = document.getElementById(split[0]).value
                        alt.emit("Brow",brow,browColorOne)
                    }
                    if(split[0] == "Eyes") {
                        document.getElementById(split[0]).value = Number(value) - 1 
                        Eyes = document.getElementById(split[0]).value
                        alt.emit("Eyes",Eyes)
                    }
                    if(split[0] == "MF") {
                        document.getElementById(split[0]).value = Number(value) - 1 
                        MF = document.getElementById(split[0]).value
                        alt.emit("MF",SkinBlemishes)
                    }
                    if(split[0] == "Arms") {
                        // if(document.getElementById(split[0]).value < 82) {
                            document.getElementById(split[0]).value = Number(value) - 1 
                            arms = document.getElementById(split[0]).value
                            alt.emit("view",arms,pants,shoes,shirt,torso)
                        // }   
                    }
                    if(split[0] == "Pants") {
                        // if(document.getElementById(split[0]).value < 350) {
                            document.getElementById(split[0]).value = Number(value) - 1 
                            pants = document.getElementById(split[0]).value
                            alt.emit("view",arms,pants,shoes,shirt,torso)
                        // }   
                    }
                    if(split[0] == "Shoes") {
                        // if(document.getElementById(split[0]).value < 130) {
                            document.getElementById(split[0]).value = Number(value) - 1 
                            shoes = document.getElementById(split[0]).value
                            alt.emit("view",arms,pants,shoes,shirt,torso)
                        // }   
                    }
                    if(split[0] == "TShirt") {
                        // if(document.getElementById(split[0]).value < 350) {
                            document.getElementById(split[0]).value = Number(value) - 1 
                            shirt = document.getElementById(split[0]).value
                            alt.emit("view",arms,pants,shoes,shirt,torso)
                        // }   
                    }
                    if(split[0] == "Torso") {
                        // if(document.getElementById(split[0]).value < 350) {
                            document.getElementById(split[0]).value = Number(value) - 1 
                            torso = document.getElementById(split[0]).value
                            alt.emit("view",arms,pants,shoes,shirt,torso)
                        // }   
                    }
               
                }
                
            }
    }
})
document.querySelectorAll(".selectorRight").forEach(selectorRight => {
    document.getElementById(selectorRight.id).onclick = () => {
        let split = selectorRight.id.split("Right")
        let value = document.getElementById(split[0]).value
        if(split[0] == "father" && document.getElementById("father").getAttribute("data-id") < 23) {
            let fatherSplitLeft = Father[Number(document.getElementById("father").getAttribute("data-id")) + 1].split(" ")
            document.getElementById("father").setAttribute("data-id",Number(document.getElementById("father").getAttribute("data-id")) + 1)
            document.getElementById("father").value = fatherSplitLeft[1]
            fatherid = fatherSplitLeft[0]
            alt.emit("family",fatherid,motherid,Resemblance,Skintone)
        }else if (split[0] == "mother" && document.getElementById("mother").getAttribute("data-id") < 21) {
            let motherSplitLeft = mother[Number(document.getElementById("mother").getAttribute("data-id")) + 1].split(" ")
            document.getElementById("mother").setAttribute("data-id",Number(document.getElementById("mother").getAttribute("data-id")) + 1)
            document.getElementById("mother").value = motherSplitLeft[1]
            motherid = motherSplitLeft[0]
            alt.emit("family",fatherid,motherid,Resemblance,Skintone)
        } else {
            if(split[0] == "resamblance") {
                if(document.getElementById(split[0]).value < 1) {
                    document.getElementById(split[0]).value = Number(value) + 0.1
                    Resemblance = Number(document.getElementById(split[0]).value).toFixed(1)
                    return alt.emit("family",fatherid,motherid,Resemblance,Skintone)
                }
            }
            if(split[0] == "skintone") {
                if(document.getElementById(split[0]).value < 45) {
                    document.getElementById(split[0]).value = Number(value) + 1
                    Skintone = document.getElementById(split[0]).value
                    return alt.emit("family",fatherid,motherid,Resemblance,Skintone)
                }
             }
 
             if(split[0] == "HairColorOne") {
                document.getElementById(split[0]).value = Number(value) + 1 
                SettedHairColorOne = document.getElementById(split[0]).value 
                alt.emit('SetHair',SettedHairColletion,SettedHairOverlay, SettedHairValue,SettedHairColorOne,SettedHairColorTwo)
             }
            if(split[0] == "HairColorTwo") {
                document.getElementById(split[0]).value = Number(value) + 1 
                SettedHairColorTwo = document.getElementById(split[0]).value 
                alt.emit('SetHair',SettedHairColletion,SettedHairOverlay, SettedHairValue,SettedHairColorOne,SettedHairColorTwo)
            }
            if(split[0] == "Brow") {
                if(document.getElementById(split[0]).value < 32) {
                    document.getElementById(split[0]).value = Number(value) + 1 
                    brow = document.getElementById(split[0]).value
                    alt.emit("Brow",brow,browColorOne)
                }
            }
            if(split[0] == "BrowColorOne") {
                if(document.getElementById(split[0]).value < 63) {
                    document.getElementById(split[0]).value = Number(value) + 1 
                    browColorOne = document.getElementById(split[0]).value
                    alt.emit("Brow",brow,browColorOne)
                }
            }
            if(split[0] == "Eyes") {
                if(document.getElementById(split[0]).value < 32) {
                    document.getElementById(split[0]).value = Number(value) + 1 
                    Eyes = document.getElementById(split[0]).value
                    alt.emit("Eyes",Eyes,EyeMakeUp)
                }   
            }
            if(split[0] == "Arms") {
                if(document.getElementById(split[0]).value < 83) {
                    document.getElementById(split[0]).value = Number(value) + 1 
                    arms = document.getElementById(split[0]).value
                    alt.emit("view",arms,pants,shoes,shirt,torso)
                }   
            }
            if(split[0] == "Pants") {
                if(document.getElementById(split[0]).value < 130) {
                    document.getElementById(split[0]).value = Number(value) + 1 
                    pants = document.getElementById(split[0]).value
                    alt.emit("view",arms,pants,shoes,shirt,torso)
                }   
            }
            if(split[0] == "Shoes") {
                if(document.getElementById(split[0]).value < 95) {
                    document.getElementById(split[0]).value = Number(value) + 1 
                    shoes = document.getElementById(split[0]).value
                    alt.emit("view",arms,pants,shoes,shirt,torso)
                }   
            }
            if(split[0] == "TShirt") {
                if(document.getElementById(split[0]).value < 168) {
                    document.getElementById(split[0]).value = Number(value) + 1 
                    shirt = document.getElementById(split[0]).value
                    alt.emit("view",arms,pants,shoes,shirt,torso)
                }   
            }
            if(split[0] == "Torso") {
                if(document.getElementById(split[0]).value < 350) {
                    document.getElementById(split[0]).value = Number(value) + 1 
                    torso = document.getElementById(split[0]).value
                    alt.emit("view",arms,pants,shoes,shirt,torso)
                }   
            }
        }
     }
})
