import BulletFactory, { BulletType } from "../bullet/bulletFactory"

const {ccclass, property} = cc._decorator

@ccclass
export class BulletBase extends cc.Component {

    /** 移动方向 */
    _moveDir: cc.Vec2 = new cc.Vec2(0, 0)
    get moveDir (): cc.Vec2 {
        return this._moveDir
    }
    set moveDir (dir: cc.Vec2) {
        this._moveDir.x = dir.x
        this._moveDir.y = dir.y
    }
    
    /** 移动速度 */
    _moveSpeed: number = 0
    get moveSpeed (): number {
        return this._moveSpeed
    }
    set moveSpeed (speed: number) {
        if (speed < 0) { return }
        this._moveSpeed = speed
    }

    /** 子弹类型标签 */
    private tag: BulletType | undefined = undefined

    /** 子弹工厂 */
    private bulletFactory: BulletFactory | undefined = undefined

    /** 从节点池取出时初始化属性 */
    reuse (bulletFactory: BulletFactory, dir: cc.Vec2, speed: number, tag: BulletType): void {
        this.bulletFactory = bulletFactory
        this.moveSpeed = speed
        this.tag = tag
        this.moveDir = dir
    }

    unuse (): void {
        // Util.log('回收成功')
    }

    /** 碰撞后回调 */
    onCollisionEnter (other: cc.Collider, self: cc.Collider): void {
        // Util.log('碰撞')
    }

    update (dt: number): void {
        if (this.moveSpeed === 0) { return }
        if (this.moveDir.x !== 0) {
            this.node.x += this.moveDir.x * this.moveSpeed * dt
        }
        if (this.moveDir.y !== 0) {
            this.node.y += this.moveDir.y * this.moveSpeed * dt
        }
        /** 边界回收 */
        if (Math.abs(this.node.x) > 360 || Math.abs(this.node.y) > 640) {
            // Util.log('边界回收')
            this.bulletFactory.bulletPools[this.tag].put(this.node)
        }
    }

}
