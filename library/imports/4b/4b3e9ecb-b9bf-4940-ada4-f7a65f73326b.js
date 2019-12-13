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
    // 自旋转
    Bullet_2.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
        this.node.angle += 50 * dt;
    };
    Bullet_2 = __decorate([
        ccclass
    ], Bullet_2);
    return Bullet_2;
}(bulletBase_1.BulletBase));
exports.Bullet_2 = Bullet_2;

cc._RF.pop();