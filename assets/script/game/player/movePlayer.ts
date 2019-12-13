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

    update (dt: number): void {
        if (this.node.x > 360) this.node.x = 360
        if (this.node.x < -360) this.node.x = -360
        if (this.node.y > 640) this.node.y = 640
        if (this.node.y < -640) this.node.y = -640
    }

}
