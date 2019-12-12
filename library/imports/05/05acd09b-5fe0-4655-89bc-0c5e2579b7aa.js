"use strict";
cc._RF.push(module, '05acdCbX+BGVYm8DF4lebeq', 'bullet_3');
// script/game/bullet/bullet_3.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bulletBase_1 = require("./bulletBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet_3 = /** @class */ (function (_super) {
    __extends(Bullet_3, _super);
    function Bullet_3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bullet_3.prototype.reuse = function (bulletFactory, dirX, dirY, speed, tag) {
        _super.prototype.reuse.call(this, bulletFactory, dirX, dirY, speed, tag);
    };
    Bullet_3.prototype.unuse = function () {
        _super.prototype.unuse.call(this);
    };
    /** 碰撞后回收子弹 */
    Bullet_3.prototype.onCollisionEnter = function (other, self) {
        _super.prototype.onCollisionEnter.call(this, other, self);
    };
    Bullet_3.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    Bullet_3 = __decorate([
        ccclass
    ], Bullet_3);
    return Bullet_3;
}(bulletBase_1.BulletBase));
exports.Bullet_3 = Bullet_3;

cc._RF.pop();