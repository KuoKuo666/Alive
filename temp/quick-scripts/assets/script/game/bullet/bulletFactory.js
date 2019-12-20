(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/bullet/bulletFactory.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '07380uikSlEb7kTlYWa/2h3', 'bulletFactory', __filename);
// script/game/bullet/bulletFactory.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bullet_0_1 = require("./bullet_0");
var bullet_1_1 = require("./bullet_1");
var bullet_2_1 = require("./bullet_2");
var bullet_3_1 = require("./bullet_3");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BulletType;
(function (BulletType) {
    /** R 型子弹，圆的 */
    BulletType[BulletType["R"] = 0] = "R";
    /** M 型子弹，月牙 */
    BulletType[BulletType["M"] = 1] = "M";
    /** F 型子弹，花型 */
    BulletType[BulletType["F"] = 2] = "F";
    /** B 型子弹，爆破 */
    BulletType[BulletType["B"] = 3] = "B";
})(BulletType = exports.BulletType || (exports.BulletType = {}));
var BulletFactory = /** @class */ (function (_super) {
    __extends(BulletFactory, _super);
    function BulletFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bulletPrefab = [];
        /** 子弹节点池 */
        _this.bulletPools = [];
        return _this;
    }
    BulletFactory.prototype.onLoad = function () {
        this.bulletPools[BulletType.R] = new cc.NodePool(bullet_0_1.Bullet_0);
        this.bulletPools[BulletType.M] = new cc.NodePool(bullet_1_1.Bullet_1);
        this.bulletPools[BulletType.F] = new cc.NodePool(bullet_2_1.Bullet_2);
        this.bulletPools[BulletType.B] = new cc.NodePool(bullet_3_1.Bullet_3);
        // 存入子弹
        this.putBulletInPool(BulletType.R, 300);
        this.putBulletInPool(BulletType.M, 200);
        this.putBulletInPool(BulletType.F, 100);
        this.putBulletInPool(BulletType.B, 50);
    };
    BulletFactory.prototype.putBulletInPool = function (type, num) {
        for (var i = 0; i < num; i++) {
            this.bulletPools[type].put(cc.instantiate(this.bulletPrefab[type]));
        }
    };
    BulletFactory.prototype.createBullet = function (type, dir, speed) {
        var bullet = undefined;
        if (this.bulletPools[type].size() <= 0) {
            this.bulletPools[type].put(cc.instantiate(this.bulletPrefab[type]));
        }
        bullet = this.bulletPools[type].get(this, dir, speed, type);
        this.node.addChild(bullet);
        return bullet;
    };
    __decorate([
        property({
            type: [cc.Prefab],
            tooltip: "子弹预制体"
        })
    ], BulletFactory.prototype, "bulletPrefab", void 0);
    BulletFactory = __decorate([
        ccclass
    ], BulletFactory);
    return BulletFactory;
}(cc.Component));
exports.default = BulletFactory;

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
        //# sourceMappingURL=bulletFactory.js.map
        