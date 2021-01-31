import alt from 'alt-client';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as game from 'natives'
import * as anim from './animPlay'


alt.onServer('TeslyAnim:play', (player) => {
    alt.log('tetiklendi anim')

  anim.applyAnimation("amb@world_human_smoking@male@male_a@enter","enter","null",true)
    // applyAnimation()

})
alt.on('PlayAnimation',(animDict,Anim,prop,repeat) => {
  anim.applyAnimation(animDict,Anim,prop,repeat)

})