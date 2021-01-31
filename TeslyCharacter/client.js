import alt from 'alt-client';
import * as chat from 'chat';
import * as extended from 'altV-Extended'
import * as native from 'natives';

let view = new alt.WebView("http://resources/TeslyCharacter/html/index.html")

alt.on('isLogin', () => {
    alt.emitServer('sessionUsername',alt.getMeta('sessionUsername'))
})
alt.onServer('sessionData',(data) => {
    alt.log(JSON.stringify(data.characters[0]))
    view.emit('CharacterInfo',data.characters)
    alt.setMeta('sessionPlayerID',data._id)
    alt.showCursor(true)
    view.focus()
})
alt.onServer('newCharacter',(data) => {
    view.emit('CharacterInfo',data.characters)
})
view.on('NewCharacter',(CharName,CharSurname,date,MomName,FatherName,sex) => {
    alt.emitServer('NewCharacter',alt.getMeta('sessionUsername'),CharName,CharSurname,date,MomName,FatherName,sex)
})
view.on('CharacterLogin',(character,i) => {
    alt.showCursor(false)
    view.unfocus()
    alt.setMeta('CharacterName',character.name)
    alt.setMeta('CharacterSurname',character.surname)
    alt.setMeta('CharacterSex',character.sex)
    alt.setMeta('CharacterBankID',character.bankid)
    alt.setMeta('CharacterBankMoney',character.bankmoney)
    alt.setMeta('CharacterID',character.id)
    alt.setMeta('selectedCharacter',i)
    alt.emit('PlayerData',character,i)
    alt.emitServer('metas',character,i)
    if(character.setCharacterModel == true){
        acceptlogin()
    }else {
        alt.emit('destroySpawn')
    }
    view.destroy()
})
function acceptlogin(){
    alt.emit('characceptlogin')

}
export default {
    acceptlogin
}