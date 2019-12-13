import BulletFactory, { BulletType } from "../bullet/bulletFactory";
import { Util } from "../../util";

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

    /** 月牙型子弹角度 */
    typeMBulletAngle: number = 0

    start (): void {
        this.schedule(() => this.shoot(BulletType.R), 0.02, cc.macro.REPEAT_FOREVER, 0)
        this.schedule(() => this.shoot(BulletType.M), 0.06, cc.macro.REPEAT_FOREVER, 5)
        this.schedule(() => this.shoot(BulletType.F), 0.4, cc.macro.REPEAT_FOREVER, 10)
        this.schedule(() => this.shoot(BulletType.R), 0.02, cc.macro.REPEAT_FOREVER, 15)
        this.schedule(() => this.shoot(BulletType.B), 0.5, cc.macro.REPEAT_FOREVER, 20)
        this.schedule(() => this.shoot(BulletType.M), 0.06, cc.macro.REPEAT_FOREVER, 25)
        this.schedule(() => this.shoot(BulletType.R), 0.02, cc.macro.REPEAT_FOREVER, 30)
        this.schedule(() => this.shoot(BulletType.F), 0.4, cc.macro.REPEAT_FOREVER, 35)
    }

    shoot (type: BulletType): void {
        if (type === BulletType.R) {
            // 随机型
            let bullet: cc.Node = this.bulletFactory.createBullet(BulletType.R, Util.randomDir(0, 360),  500)
            bullet.setPosition(this.enemy.x, this.enemy.y)
        } else if (type === BulletType.M) {
            // 轮盘型
            this.typeMBulletAngle += 30
            if (this.typeMBulletAngle >= 360) {
                this.typeMBulletAngle = 0
            }
            let rad = cc.misc.degreesToRadians(this.typeMBulletAngle)
            let bullet: cc.Node = this.bulletFactory.createBullet(BulletType.M, cc.v2(Math.cos(rad), Math.sin(rad)), 700)
            bullet.angle = this.typeMBulletAngle + 90
            bullet.setPosition(this.enemy.x, this.enemy.y)
        } else if (type === BulletType.F) {
            // 花型
            for (let i = 0; i <= 360 ; i += 30) {
                let rad = cc.misc.degreesToRadians(i)
                let bullet: cc.Node = this.bulletFactory.createBullet(BulletType.F, cc.v2(Math.cos(rad), Math.sin(rad)), 500)
                bullet.setPosition(this.enemy.x, this.enemy.y)
            }
        } else if (type === BulletType.B) {
            let bullet: cc.Node = this.bulletFactory.createBullet(BulletType.B, cc.v2(0, -1), 500)
            bullet.setPosition(this.enemy.x, this.enemy.y)
        }
    }

}
