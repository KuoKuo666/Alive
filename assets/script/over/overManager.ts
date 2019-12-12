const {ccclass, property} = cc._decorator;

@ccclass
export default class Over extends cc.Component {

    again () {
        cc.director.loadScene('game')
    }

}
