const {ccclass, property} = cc._decorator

@ccclass
export default class ShowTime extends cc.Component {

    label: cc.Label | undefined = undefined
    // 向下取整
    time: number = 3.99

    onLoad (): void {
        this.label = this.node.getComponent(cc.Label)
    }

    update (dt: number): void {  
        if (this.time < -1) {
            return
        }
        this.time -= dt
        let show = Math.floor(this.time)
        if (show > 0) {
            this.label.string = show + ''
        } else if (show === 0) {
            this.label.string = 'Go'
        } else {
            this.label.string = ''
        }
    }

}
