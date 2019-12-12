(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/bullet/bulletBase.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'bff645Q53hHG6uf1Qxgp7ng', 'bulletBase', __filename);
// script/bullet/bulletBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BulletBase = /** @class */ (function (_super) {
    __extends(BulletBase, _super);
    function BulletBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 移动方向 */
        _this.moveDir = undefined;
        /** 移动速度 */
        _this.moveSpeed = undefined;
        /** 标签 */
        _this.tag = undefined;
        /** 子弹工厂 */
        _this.bulletFactory = undefined;
        return _this;
    }
    BulletBase.prototype.onLoad = function () {
        this.moveDir = new cc.Vec2(0, 0);
        this.moveSpeed = 0;
    };
    BulletBase.prototype.reuse = function (bulletFactory) {
        this.bulletFactory = bulletFactory;
    };
    BulletBase.prototype.unuse = function () {
    };
    /** 碰撞后回收子弹 */
    BulletBase.prototype.onCollisionEnter = function (other, self) {
        this.bulletFactory.bulletPools[this.getTag()].put(this.node);
    };
    BulletBase.prototype.setSpeed = function (speed) {
        this.moveSpeed = speed;
    };
    BulletBase.prototype.setDir = function (dirX, dirY) {
        this.moveDir.x = dirX;
        this.moveDir.y = dirY;
    };
    BulletBase.prototype.setTag = function (tag) {
        this.tag = tag;
    };
    BulletBase.prototype.getTag = function () {
        return this.tag;
    };
    BulletBase.prototype.update = function (dt) {
        if (this.moveSpeed === 0)
            return;
        if (this.moveDir.x !== 0) {
            this.node.x += this.moveDir.x * this.moveSpeed;
        }
        if (this.moveDir.y !== 0) {
            this.node.y += this.moveDir.y * this.moveSpeed;
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
        