import { BulletBase } from "./bulletBase"
const {ccclass, property} = cc._decorator

@ccclass
export class Bullet_3 extends BulletBase {

    /** 收缩方向 */
    private scaleDir: number = 1

    // 收缩
    update (dt: number): void {
        super.update(dt)
        if (this.node.scaleX > 1.3) {
            this.scaleDir = -1
        } else if (this.node.scaleX < 1) {
            this.scaleDir = 1
        }
        this.node.scale += this.scaleDir * 5 * dt
    }

} 