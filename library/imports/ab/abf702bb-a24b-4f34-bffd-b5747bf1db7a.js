"use strict";
cc._RF.push(module, 'abf70K7oktPNL/9tXR78dt6', 'bullet_1');
// script/game/bullet/bullet_1.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bulletBase_1 = require("./bulletBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet_1 = /** @class */ (function (_super) {
    __extends(Bullet_1, _super);
    function Bullet_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bullet_1.prototype.reuse = function (bulletFactory, dirX, dirY, speed, tag) {
        _super.prototype.reuse.call(this, bulletFactory, dirX, dirY, speed, tag);
    };
    Bullet_1.prototype.unuse = function () {
        _super.prototype.unuse.call(this);
    };
    /** 碰撞后回收子弹 */
    Bullet_1.prototype.onCollisionEnter = function (other, self) {
        _super.prototype.onCollisionEnter.call(this, other, self);
    };
    Bullet_1.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    Bullet_1 = __decorate([
        ccclass
    ], Bullet_1);
    return Bullet_1;
}(bulletBase_1.BulletBase));
exports.Bullet_1 = Bullet_1;

cc._RF.pop();