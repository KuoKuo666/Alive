import { BulletBase } from "./bulletBase"
import { BulletType } from "../bullet/bulletFactory"
const {ccclass, property} = cc._decorator

@ccclass
export class Bullet1 extends BulletBase {
    
    onLoad (): void {
        super.onLoad()
    }

    setSpeed (speed: number): void {
        this.moveSpeed = speed
    }

    setDir (dirX: number, dirY: number): void {
        this.moveDir.x = dirX
        this.moveDir.y = dirY
    }

    setTag (tag: BulletType): void {
        this.tag = tag
    }

    getTag (): BulletType {
        return this.tag
    }

    update (dt: number): void {
        super.update(dt)
    }

} 