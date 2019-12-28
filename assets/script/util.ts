export class Util {
    
    /** 是否开发模式 */
    static isDebug: boolean = true

    /** console.log封装，isDebug置为false跳过打印 */
    static log (...args: any[]): void {
        if (!this.isDebug) { return }
        for (let item of args) {
            console.log(item)
        }
    }
    
    /**
     * 在 min 与 max 之间随机小数
     * @param {number} min 
     * @param {number} max 
     */
    static randomNumber (min: number, max: number): number {
        return min + Math.random() * (max - min)
    }

    /**
     * 随机角度转化向量
     * @param minAngle 最小角度
     * @param maxAngle 最大角度
     */
    static randomDir (minAngle: number, maxAngle: number): cc.Vec2 {
        let angle = this.randomNumber(minAngle, maxAngle)
        let rad = cc.misc.degreesToRadians(angle)
        return cc.v2(Math.cos(rad), Math.sin(rad))
    }

}
