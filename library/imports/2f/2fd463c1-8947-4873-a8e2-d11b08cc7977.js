"use strict";
cc._RF.push(module, '2fd46PBiUdIc6ji0RsIzHl3', 'bullet_0');
// script/game/bullet/bullet_0.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bulletBase_1 = require("./bulletBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet_0 = /** @class */ (function (_super) {
    __extends(Bullet_0, _super);
    function Bullet_0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bullet_0.prototype.reuse = function (bulletFactory, dirX, dirY, speed, tag) {
        _super.prototype.reuse.call(this, bulletFactory, dirX, dirY, speed, tag);
    };
    Bullet_0.prototype.unuse = function () {
        _super.prototype.unuse.call(this);
    };
    /** 碰撞后回收子弹 */
    Bullet_0.prototype.onCollisionEnter = function (other, self) {
        _super.prototype.onCollisionEnter.call(this, other, self);
    };
    Bullet_0.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    Bullet_0 = __decorate([
        ccclass
    ], Bullet_0);
    return Bullet_0;
}(bulletBase_1.BulletBase));
exports.Bullet_0 = Bullet_0;

cc._RF.pop();