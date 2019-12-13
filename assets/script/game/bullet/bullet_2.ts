import { BulletBase } from "./bulletBase"
const {ccclass, property} = cc._decorator

@ccclass
export class Bullet_2 extends BulletBase {

    // 自旋转
    update (dt: number): void {
        super.update(dt)
        this.node.angle += 50 * dt
    }

} 