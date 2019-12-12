import { BulletBase } from "./bulletBase"
import BulletFactory, { BulletType } from "./bulletFactory"
const {ccclass, property} = cc._decorator

@ccclass
export class Bullet_2 extends BulletBase {

    reuse (bulletFactory: BulletFactory, dirX: number, dirY: number, speed: number, tag: BulletType): void {
        super.reuse(bulletFactory, dirX, dirY, speed, tag)
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