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
        this.bulletPools[BulletType.R] = new cc.NodePool()
        this.bulletPools[BulletType.M] = new cc.NodePool()
        this.bulletPools[BulletType.F] = new cc.NodePool()
        this.bulletPools[BulletType.B] = new cc.NodePool()
        // 存入子弹
        for (let i = 0; i < 200; i++) {
            this.bulletPools[BulletType.R].put(cc.instantiate(this.bulletPrefab[BulletType.R]))
            this.bulletPools[BulletType.M].put(cc.instantiate(this.bulletPrefab[BulletType.M]))
            this.bulletPools[BulletType.F].put(cc.instantiate(this.bulletPrefab[BulletType.F]))
            this.bulletPools[BulletType.B].put(cc.instantiate(this.bulletPrefab[BulletType.B]))
        }
    }

    createBullet (type: BulletType): cc.Node {
        let bullet = undefined
        if (this.bulletPools[type].size() > 0) {
            bullet = this.bulletPools[type].get()
        } else {
            bullet = cc.instantiate(this.bulletPrefab[type])
        }
        this.node.addChild(bullet)
        return bullet
    }

}
