const {ccclass, property} = cc._decorator

@ccclass
export default class MusicManager extends cc.Component {

    @property({
        type: cc.AudioClip
    })
    bgm: cc.AudioClip | undefined = undefined

    start () {
        this.scheduleOnce(() => {
            cc.audioEngine.playMusic(this.bgm, true)
        }, 0.5)
    }

}
