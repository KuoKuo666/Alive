(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/bullet/bulletBase.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'bff645Q53hHG6uf1Qxgp7ng', 'bulletBase', __filename);
// script/game/bullet/bulletBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BulletBase = /** @class */ (function (_super) {
    __extends(BulletBase, _super);
    function BulletBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 移动方向 */
        _this._moveDir = new cc.Vec2(0, 0);
        /** 移动速度 */
        _this._moveSpeed = 0;
        /** 子弹类型标签 */
        _this.tag = undefined;
        /** 子弹工厂 */
        _this.bulletFactory = undefined;
        return _this;
    }
    Object.defineProperty(BulletBase.prototype, "moveDir", {
        get: function () {
            return this._moveDir;
        },
        set: function (dir) {
            this._moveDir.x = dir.x;
            this._moveDir.y = dir.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletBase.prototype, "moveSpeed", {
        get: function () {
            return this._moveSpeed;
        },
        set: function (speed) {
            if (speed < 0) {
                return;
            }
            this._moveSpeed = speed;
        },
        enumerable: true,
        configurable: true
    });
    /** 从节点池取出时初始化属性 */
    BulletBase.prototype.reuse = function (bulletFactory, dir, speed, tag) {
        this.bulletFactory = bulletFactory;
        this.moveSpeed = speed;
        this.tag = tag;
        this.moveDir = dir;
    };
    BulletBase.prototype.unuse = function () {
        // Util.log('回收成功')
    };
    /** 碰撞后回调 */
    BulletBase.prototype.onCollisionEnter = function (other, self) {
        // Util.log('碰撞')
    };
    BulletBase.prototype.update = function (dt) {
        if (this.moveSpeed === 0)
            return;
        if (this.moveDir.x !== 0) {
            this.node.x += this.moveDir.x * this.moveSpeed * dt;
        }
        if (this.moveDir.y !== 0) {
            this.node.y += this.moveDir.y * this.moveSpeed * dt;
        }
        /** 边界回收 */
        if (Math.abs(this.node.x) > 360 || Math.abs(this.node.y) > 640) {
            // Util.log('边界回收')
            this.bulletFactory.bulletPools[this.tag].put(this.node);
        }
    };
    BulletBase = __decorate([
        ccclass
    ], BulletBase);
    return BulletBase;
}(cc.Component));
exports.BulletBase = BulletBase;

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
        //# sourceMappingURL=bulletBase.js.map
        