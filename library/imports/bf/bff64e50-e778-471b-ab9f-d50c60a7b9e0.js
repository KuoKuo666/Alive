"use strict";
cc._RF.push(module, 'bff645Q53hHG6uf1Qxgp7ng', 'bulletBase');
// script/game/bullet/bulletBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BulletBase = /** @class */ (function (_super) {
    __extends(BulletBase, _super);
    function BulletBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 移动方向 */
        _this.moveDir = new cc.Vec2(0, 0);
        /** 移动速度 */
        _this.moveSpeed = 0;
        /** 标签 */
        _this.tag = undefined;
        /** 子弹工厂 */
        _this.bulletFactory = undefined;
        return _this;
    }
    BulletBase.prototype.reuse = function (bulletFactory, dirX, dirY, speed, tag) {
        this.bulletFactory = bulletFactory;
        this.setDir(dirX, dirY);
        this.setSpeed(speed);
        this.setTag(tag);
    };
    BulletBase.prototype.unuse = function () {
        // console.log('回收成功')
    };
    /** 碰撞后回收子弹 */
    BulletBase.prototype.onCollisionEnter = function (other, self) {
        console.log('碰撞');
    };
    BulletBase.prototype.setSpeed = function (speed) {
        this.moveSpeed = speed;
    };
    BulletBase.prototype.setDir = function (dirX, dirY) {
        this.moveDir.x = dirX;
        this.moveDir.y = dirY;
    };
    BulletBase.prototype.setTag = function (tag) {
        this.tag = tag;
    };
    BulletBase.prototype.getTag = function () {
        return this.tag;
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
        /** 边界回收 */
        if (Math.abs(this.node.x) > 360 || Math.abs(this.node.y) > 640) {
            console.log('回收');
            this.bulletFactory.bulletPools[this.getTag()].put(this.node);
        }
    };
    BulletBase = __decorate([
        ccclass
    ], BulletBase);
    return BulletBase;
}(cc.Component));
exports.BulletBase = BulletBase;

cc._RF.pop();