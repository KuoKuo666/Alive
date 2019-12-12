"use strict";
cc._RF.push(module, 'bff645Q53hHG6uf1Qxgp7ng', 'bulletBase');
// script/bullet/bulletBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BulletBase = /** @class */ (function (_super) {
    __extends(BulletBase, _super);
    function BulletBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 移动方向 */
        _this.moveDir = undefined;
        /** 移动速度 */
        _this.moveSpeed = undefined;
        /** 标签 */
        _this.tag = undefined;
        return _this;
    }
    BulletBase.prototype.onLoad = function () {
        this.moveDir = new cc.Vec2(0, 0);
        this.moveSpeed = 0;
    };
    BulletBase.prototype.update = function (dt) {
        if (this.moveSpeed === 0)
            return;
        if (this.moveDir.x !== 0) {
            this.node.x += this.moveDir.x * this.moveSpeed;
        }
        if (this.moveDir.y !== 0) {
            this.node.y += this.moveDir.y * this.moveSpeed;
        }
    };
    BulletBase = __decorate([
        ccclass
    ], BulletBase);
    return BulletBase;
}(cc.Component));
exports.BulletBase = BulletBase;

cc._RF.pop();