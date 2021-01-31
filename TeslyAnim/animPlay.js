import alt from 'alt-client'
import * as game from 'natives'
let inter = null;
let isAnimationRunning = false;
export function requestAnimDictPromise(animDict) {
        return new Promise((resolve, reject) => {
            if (!game.doesAnimDictExist(animDict)) return resolve(false);
            game.requestAnimDict(animDict);
            inter = alt.setInterval(() => {
              if (game.hasAnimDictLoaded(animDict)) {
                alt.clearInterval(inter);
                return resolve(true);
              }
            }, 10);
          });    
}
  
export function applyAnimation(animDict, animName,prop,repeat) {
    requestAnimDictPromise(animDict).then((succ) => {
        alt.log(repeat)
      if (succ) {
            alt.log(succ)
            game.taskPlayAnim(
                alt.Player.local.scriptID,
                animDict,
                animName,
                8.0,
                -1,
                -1,
                repeat,
                0,
                false,
                false,
                false
              );
            
              if(prop != null || prop != undefined) {
                game.getPedPropTextureIndex(
                  alt.Player.local.scriptID,
                  prop
                )
              } 
              isAnimationRunning = true;
      }
    });
  }
  