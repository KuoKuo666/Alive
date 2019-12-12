import { BulletBase } from "./bulletBase"
import BulletFactory from "./bulletFactory"
const {ccclass, property} = cc._decorator

@ccclass
export class Bullet_3 extends BulletBase {
    
    onLoad (): void {
        super.onLoad()
    }

    reuse (bulletFactory: BulletFactory): void {
        super.reuse(bulletFactory)
    }

    unuse (): void {
        super.unuse()
    }

    /** 碰撞后回收子弹 */
    onCollisionEnter (other: cc.Collider, self: cc.Collider): void {
        super.onCollisionEnter(other, self)
    }

    update (dt: number): void {
        super.update(dt)
    }

} 