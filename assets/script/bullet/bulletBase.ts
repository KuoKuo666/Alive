import { BulletType } from "../bullet/bulletFactory"

const {ccclass, property} = cc._decorator

@ccclass
export class BulletBase extends cc.Component {

    /** 移动方向 */
    moveDir: cc.Vec2 | undefined = undefined
    /** 移动速度 */
    moveSpeed: number | undefined = undefined
    /** 标签 */
    tag: BulletType | undefined = undefined

    onLoad (): void {
        this.moveDir = new cc.Vec2(0, 0)
        this.moveSpeed = 0
    }

    update (dt: number): void {
        if (this.moveSpeed === 0) return
        if (this.moveDir.x !== 0) {
            this.node.x += this.moveDir.x * this.moveSpeed
        }
        if (this.moveDir.y !== 0) {
            this.node.y += this.moveDir.y * this.moveSpeed
        }
    }

}
