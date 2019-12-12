const {ccclass, property} = cc._decorator

@ccclass
export default class MovePlayer extends cc.Component {

    start (): void {
        this.openTouch()
    }

    openTouch (): void {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
    }

    closeTouch (): void {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
    }

    onTouchMove (event: cc.Touch): void {
        let delta = event.getDelta()
        this.node.x += delta.x
        this.node.y += delta.y
    }

}
