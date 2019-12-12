const {ccclass, property} = cc._decorator;

@ccclass
export default class ColliderPlayer extends cc.Component {

    onCollisionEnter (other: cc.Collider, self: cc.Collider) {
        cc.director.loadScene('over')
    }

}
