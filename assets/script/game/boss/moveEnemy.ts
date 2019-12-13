import { Util } from "../../util"

const {ccclass, property} = cc._decorator

@ccclass
export default class MoveEnemy extends cc.Component {

    /** 随机移动法，方向，速度 */
    dir: cc.Vec2 = new cc.Vec2(0, 0)
    speed: number = 200

    start (): void {
        this.schedule(this.randomDir, 5, cc.macro.REPEAT_FOREVER, 2)
    }

    randomDir (): void {
        let dir = Util.randomDir(0, 360)
        this.dir.x = dir.x
        this.dir.y = dir.y
    }

    update (dt: number): void {
        if (this.dir.x !== 0) {
            this.node.x += this.speed * this.dir.x * dt
        }
        if (this.dir.y !== 0) {
            this.node.y += this.speed * this.dir.y * dt
        }
        // 边界回弹
        if (this.node.x < -300) this.dir.x = this.dir.x > 0 ? this.dir.x : -this.dir.x
        if (this.node.x > 300) this.dir.x = this.dir.x < 0 ? this.dir.x : -this.dir.x
        if (this.node.y > 580) this.dir.y = this.dir.y < 0 ? this.dir.y : -this.dir.y
        if (this.node.y < 400) this.dir.y = this.dir.y > 0 ? this.dir.y : -this.dir.y
    }

}
