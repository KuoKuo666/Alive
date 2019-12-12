import BulletFactory, { BulletType } from "../bullet/bulletFactory";

const {ccclass, property} = cc._decorator

@ccclass
export default class ShootManager extends cc.Component {

    @property({
        type: BulletFactory
    })
    bulletFactory: BulletFactory | undefined = undefined
    @property({
        type: cc.Node
    })
    enemy: cc.Node | undefined = undefined

    /** 间隔时间 */
    timeCD: number = 1
    /** 间接变量 */
    timeTemp: number = 0

    shoot (): void {
        if (!this.bulletFactory) return
        let bullet: cc.Node = this.bulletFactory.createBullet(BulletType.R, 0, -1, 10)
        bullet.angle = 0
        bullet.setPosition(this.enemy.x, this.enemy.y)
    }

    update (dt: number): void {
        this.timeTemp += dt;
        if (this.timeTemp > this.timeCD) {
            this.timeTemp = 0
            this.shoot()
        }
    }

}
