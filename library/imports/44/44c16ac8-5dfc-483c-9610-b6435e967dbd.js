"use strict";
cc._RF.push(module, '44c16rIXfxIPJYQtkNeln29', 'moveEnemy');
// script/game/boss/moveEnemy.ts

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MoveEnemy = /** @class */ (function (_super) {
    __extends(MoveEnemy, _super);
    function MoveEnemy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 随机移动法，方向，速度 */
        _this.dir = new cc.Vec2(0, 0);
        _this.speed = 200;
        return _this;
    }
    MoveEnemy.prototype.start = function () {
        // 4 秒后开始运动，每 5 秒随机新方向
        this.schedule(this.randomDir, 5, cc.macro.REPEAT_FOREVER, 4);
    };
    MoveEnemy.prototype.randomDir = function () {
        var dir = util_1.Util.randomDir(0, 360);
        this.dir.x = dir.x;
        this.dir.y = dir.y;
    };
    MoveEnemy.prototype.update = function (dt) {
        if (this.dir.x !== 0) {
            this.node.x += this.speed * this.dir.x * dt;
        }
        if (this.dir.y !== 0) {
            this.node.y += this.speed * this.dir.y * dt;
        }
        // 边界回弹
        if (this.node.x < -300)
            this.dir.x = this.dir.x > 0 ? this.dir.x : -this.dir.x;
        if (this.node.x > 300)
            this.dir.x = this.dir.x < 0 ? this.dir.x : -this.dir.x;
        if (this.node.y > 580)
            this.dir.y = this.dir.y < 0 ? this.dir.y : -this.dir.y;
        if (this.node.y < 400)
            this.dir.y = this.dir.y > 0 ? this.dir.y : -this.dir.y;
    };
    MoveEnemy = __decorate([
        ccclass
    ], MoveEnemy);
    return MoveEnemy;
}(cc.Component));
exports.default = MoveEnemy;

cc._RF.pop();