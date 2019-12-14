const {ccclass, property} = cc._decorator

@ccclass
export default class ColliderPlayer extends cc.Component {

    onLoad (): void {
        cc.director.getCollisionManager().enabled = true
    }

    onCollisionEnter (other: cc.Collider, self: cc.Collider): void {
        cc.audioEngine.stopMusic()
        cc.director.loadScene('over')
    }

}
