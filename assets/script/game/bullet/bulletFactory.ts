import { Bullet_0 } from "./bullet_0"
import { Bullet_1 } from "./bullet_1"
import { Bullet_2 } from "./bullet_2"
import { Bullet_3 } from "./bullet_3"

const {ccclass, property} = cc._decorator

export enum BulletType {
    /** R 型子弹，圆的 */
    R = 0,
    /** M 型子弹，月牙 */
    M = 1,
    /** F 型子弹，花型 */
    F = 2,
    /** B 型子弹，爆破 */
    B = 3
}

@ccclass
export default class BulletFactory extends cc.Component {

    @property({
        type: [cc.Prefab],
        tooltip: '子弹预制体'
    })
    bulletPrefab: cc.Prefab[] = []

    /** 子弹节点池 */
    bulletPools: cc.NodePool[] = []

    onLoad (): void {
        this.bulletPools[BulletType.R] = new cc.NodePool(Bullet_0)
        this.bulletPools[BulletType.M] = new cc.NodePool(Bullet_1)
        this.bulletPools[BulletType.F] = new cc.NodePool(Bullet_2)
        this.bulletPools[BulletType.B] = new cc.NodePool(Bullet_3)
        // 存入子弹
        for (let i = 0; i < 200; i++) {
            this.bulletPools[BulletType.R].put(cc.instantiate(this.bulletPrefab[BulletType.R]))
            this.bulletPools[BulletType.M].put(cc.instantiate(this.bulletPrefab[BulletType.M]))
            this.bulletPools[BulletType.F].put(cc.instantiate(this.bulletPrefab[BulletType.F]))
            this.bulletPools[BulletType.B].put(cc.instantiate(this.bulletPrefab[BulletType.B]))
        }
    }

    createBullet (type: BulletType, dirX: number, dirY: number, speed: number): cc.Node {
        let bullet: cc.Node | undefined = undefined
        if (this.bulletPools[type].size() < 0) {
            this.bulletPools[type].put(cc.instantiate(this.bulletPrefab[type]))
        }
        bullet = this.bulletPools[type].get(this, dirX, dirY, speed, type)
        this.node.addChild(bullet)
        return bullet
    }

}
