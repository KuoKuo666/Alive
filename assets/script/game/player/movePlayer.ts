const {ccclass, property} = cc._decorator

@ccclass
export default class MovePlayer extends cc.Component {

    @property(cc.Node)
    player: cc.Node | undefined = undefined

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
        this.player.x += delta.x
        this.player.y += delta.y
    }

    update (dt: number): void {
        // 边界限制
        if (this.player.x > 360) this.player.x = 360
        if (this.player.x < -360) this.player.x = -360
        if (this.player.y > 640) this.player.y = 640
        if (this.player.y < -640) this.player.y = -640
    }

}
