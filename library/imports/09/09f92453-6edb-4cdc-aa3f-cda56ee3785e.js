"use strict";
cc._RF.push(module, '09f92RTbttM3Ko/zaVu43he', 'shootManager');
// script/game/boss/shootManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bulletFactory_1 = require("../bullet/bulletFactory");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShootManager = /** @class */ (function (_super) {
    __extends(ShootManager, _super);
    function ShootManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bulletFactory = undefined;
        _this.enemy = undefined;
        /** 间隔时间 */
        _this.timeCD = 1;
        /** 间接变量 */
        _this.timeTemp = 0;
        return _this;
    }
    ShootManager.prototype.shoot = function () {
        if (!this.bulletFactory)
            return;
        var bullet = this.bulletFactory.createBullet(bulletFactory_1.BulletType.R, 0, -1, 10);
        bullet.angle = 0;
        bullet.setPosition(this.enemy.x, this.enemy.y);
    };
    ShootManager.prototype.update = function (dt) {
        this.timeTemp += dt;
        if (this.timeTemp > this.timeCD) {
            this.timeTemp = 0;
            this.shoot();
        }
    };
    __decorate([
        property({
            type: bulletFactory_1.default
        })
    ], ShootManager.prototype, "bulletFactory", void 0);
    __decorate([
        property({
            type: cc.Node
        })
    ], ShootManager.prototype, "enemy", void 0);
    ShootManager = __decorate([
        ccclass
    ], ShootManager);
    return ShootManager;
}(cc.Component));
exports.default = ShootManager;

cc._RF.pop();