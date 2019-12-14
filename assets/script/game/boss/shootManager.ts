import BulletFactory, { BulletType } from "../bullet/bulletFactory"
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
        let deltaTime: number = 5
        let startTime: number = 4
        this.schedule(() => this.shoot(BulletType.R), 0.02, cc.macro.REPEAT_FOREVER, startTime)
        this.schedule(() => this.shoot(BulletType.M), 0.06, cc.macro.REPEAT_FOREVER, startTime + 1 * deltaTime)
        this.schedule(() => this.shoot(BulletType.F), 0.4, cc.macro.REPEAT_FOREVER, startTime + 2 * deltaTime)
        this.schedule(() => this.shoot(BulletType.R), 0.02, cc.macro.REPEAT_FOREVER, startTime + 3 * deltaTime)
        this.schedule(() => this.shoot(BulletType.B), 0.5, cc.macro.REPEAT_FOREVER, startTime + 4 * deltaTime)
        this.schedule(() => this.shoot(BulletType.M), 0.06, cc.macro.REPEAT_FOREVER, startTime + 5 * deltaTime)
        this.schedule(() => this.shoot(BulletType.R), 0.02, cc.macro.REPEAT_FOREVER, startTime + 6 * deltaTime)
        this.schedule(() => this.shoot(BulletType.F), 0.4, cc.macro.REPEAT_FOREVER, startTime + 7 * deltaTime)
    }

    shoot (type: BulletType): void {
        if (type === BulletType.R) {
            // 随机型
            let bullet: cc.Node = this.bulletFactory.createBullet(BulletType.R, Util.randomDir(0, 360),  800)
            bullet.setPosition(this.enemy.x, this.enemy.y)
        } else if (type === BulletType.M) {
            // 轮盘型
            this.typeMBulletAngle += 30
            if (this.typeMBulletAngle >= 360) {
                this.typeMBulletAngle = 0
            }
            let rad = cc.misc.degreesToRadians(this.typeMBulletAngle)
            let bullet: cc.Node = this.bulletFactory.createBullet(BulletType.M, cc.v2(Math.cos(rad), Math.sin(rad)), 650)
            bullet.angle = this.typeMBulletAngle + 90
            bullet.setPosition(this.enemy.x, this.enemy.y)
        } else if (type === BulletType.F) {
            // 花型
            for (let i = 0; i <= 360 ; i += 30) {
                let rad = cc.misc.degreesToRadians(i)
                let bullet: cc.Node = this.bulletFactory.createBullet(BulletType.F, cc.v2(Math.cos(rad), Math.sin(rad)), 600)
                bullet.setPosition(this.enemy.x, this.enemy.y)
            }
        } else if (type === BulletType.B) {
            let bullet: cc.Node = this.bulletFactory.createBullet(BulletType.B, cc.v2(0, -1), 550)
            bullet.setPosition(this.enemy.x, this.enemy.y)
        }
    }

}
