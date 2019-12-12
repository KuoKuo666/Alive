(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/bullet/bulletFactory.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '07380uikSlEb7kTlYWa/2h3', 'bulletFactory', __filename);
// script/boss/bulletFactory.ts

Object.defineProperty(exports, "__esModule", { value: true });
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
        this.bulletPools[BulletType.R] = new cc.NodePool();
        this.bulletPools[BulletType.M] = new cc.NodePool();
        this.bulletPools[BulletType.F] = new cc.NodePool();
        this.bulletPools[BulletType.B] = new cc.NodePool();
        // 存入子弹
        for (var i = 0; i < 200; i++) {
            this.bulletPools[BulletType.R].put(cc.instantiate(this.bulletPrefab[BulletType.R]));
            this.bulletPools[BulletType.M].put(cc.instantiate(this.bulletPrefab[BulletType.M]));
            this.bulletPools[BulletType.F].put(cc.instantiate(this.bulletPrefab[BulletType.F]));
            this.bulletPools[BulletType.B].put(cc.instantiate(this.bulletPrefab[BulletType.B]));
        }
    };
    BulletFactory.prototype.createBullet = function (type) {
        var bullet = undefined;
        if (this.bulletPools[type].size() > 0) {
            bullet = this.bulletPools[type].get();
        }
        else {
            bullet = cc.instantiate(this.bulletPrefab[type]);
        }
        this.node.addChild(bullet);
        return bullet;
    };
    __decorate([
        property({
            type: [cc.Prefab],
            tooltip: '子弹预制体'
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
        