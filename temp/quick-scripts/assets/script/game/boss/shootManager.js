(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/boss/shootManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '09f92RTbttM3Ko/zaVu43he', 'shootManager', __filename);
// script/game/boss/shootManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bulletFactory_1 = require("../bullet/bulletFactory");
var util_1 = require("../../util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShootManager = /** @class */ (function (_super) {
    __extends(ShootManager, _super);
    function ShootManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bulletFactory = undefined;
        _this.enemy = undefined;
        /** 月牙型子弹角度 */
        _this.typeMBulletAngle = 0;
        return _this;
    }
    ShootManager.prototype.start = function () {
        var _this = this;
        var deltaTime = 5;
        var startTime = 4;
        this.schedule(function () { return _this.shoot(bulletFactory_1.BulletType.R); }, 0.02, cc.macro.REPEAT_FOREVER, startTime);
        this.schedule(function () { return _this.shoot(bulletFactory_1.BulletType.M); }, 0.06, cc.macro.REPEAT_FOREVER, startTime + 1 * deltaTime);
        this.schedule(function () { return _this.shoot(bulletFactory_1.BulletType.F); }, 0.4, cc.macro.REPEAT_FOREVER, startTime + 2 * deltaTime);
        this.schedule(function () { return _this.shoot(bulletFactory_1.BulletType.R); }, 0.02, cc.macro.REPEAT_FOREVER, startTime + 3 * deltaTime);
        this.schedule(function () { return _this.shoot(bulletFactory_1.BulletType.B); }, 0.5, cc.macro.REPEAT_FOREVER, startTime + 4 * deltaTime);
        this.schedule(function () { return _this.shoot(bulletFactory_1.BulletType.M); }, 0.06, cc.macro.REPEAT_FOREVER, startTime + 5 * deltaTime);
        this.schedule(function () { return _this.shoot(bulletFactory_1.BulletType.R); }, 0.02, cc.macro.REPEAT_FOREVER, startTime + 6 * deltaTime);
        this.schedule(function () { return _this.shoot(bulletFactory_1.BulletType.F); }, 0.4, cc.macro.REPEAT_FOREVER, startTime + 7 * deltaTime);
    };
    ShootManager.prototype.shoot = function (type) {
        if (type === bulletFactory_1.BulletType.R) {
            // 随机型
            var bullet = this.bulletFactory.createBullet(bulletFactory_1.BulletType.R, util_1.Util.randomDir(0, 360), 800);
            bullet.setPosition(this.enemy.x, this.enemy.y);
        }
        else if (type === bulletFactory_1.BulletType.M) {
            // 轮盘型
            this.typeMBulletAngle += 30;
            if (this.typeMBulletAngle >= 360) {
                this.typeMBulletAngle = 0;
            }
            var rad = cc.misc.degreesToRadians(this.typeMBulletAngle);
            var bullet = this.bulletFactory.createBullet(bulletFactory_1.BulletType.M, cc.v2(Math.cos(rad), Math.sin(rad)), 650);
            bullet.angle = this.typeMBulletAngle + 90;
            bullet.setPosition(this.enemy.x, this.enemy.y);
        }
        else if (type === bulletFactory_1.BulletType.F) {
            // 花型
            for (var i = 0; i <= 360; i += 30) {
                var rad = cc.misc.degreesToRadians(i);
                var bullet = this.bulletFactory.createBullet(bulletFactory_1.BulletType.F, cc.v2(Math.cos(rad), Math.sin(rad)), 600);
                bullet.setPosition(this.enemy.x, this.enemy.y);
            }
        }
        else if (type === bulletFactory_1.BulletType.B) {
            var bullet = this.bulletFactory.createBullet(bulletFactory_1.BulletType.B, cc.v2(0, -1), 550);
            bullet.setPosition(this.enemy.x, this.enemy.y);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=shootManager.js.map
        