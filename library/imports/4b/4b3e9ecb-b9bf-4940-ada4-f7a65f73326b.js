"use strict";
cc._RF.push(module, '4b3e97Lub9JQK2k96ZfczJr', 'bullet_2');
// script/game/bullet/bullet_2.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bulletBase_1 = require("./bulletBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet_2 = /** @class */ (function (_super) {
    __extends(Bullet_2, _super);
    function Bullet_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bullet_2.prototype.reuse = function (bulletFactory, dirX, dirY, speed, tag) {
        _super.prototype.reuse.call(this, bulletFactory, dirX, dirY, speed, tag);
    };
    Bullet_2.prototype.unuse = function () {
        _super.prototype.unuse.call(this);
    };
    /** 碰撞后回收子弹 */
    Bullet_2.prototype.onCollisionEnter = function (other, self) {
        _super.prototype.onCollisionEnter.call(this, other, self);
    };
    Bullet_2.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    Bullet_2 = __decorate([
        ccclass
    ], Bullet_2);
    return Bullet_2;
}(bulletBase_1.BulletBase));
exports.Bullet_2 = Bullet_2;

cc._RF.pop();