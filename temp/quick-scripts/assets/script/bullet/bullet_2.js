(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/bullet/bullet_2.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4b3e97Lub9JQK2k96ZfczJr', 'bullet_2', __filename);
// script/bullet/bullet_2.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bulletBase_1 = require("./bulletBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet2 = /** @class */ (function (_super) {
    __extends(Bullet2, _super);
    function Bullet2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bullet2.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Bullet2.prototype.setSpeed = function (speed) {
        this.moveSpeed = speed;
    };
    Bullet2.prototype.setDir = function (dirX, dirY) {
        this.moveDir.x = dirX;
        this.moveDir.y = dirY;
    };
    Bullet2.prototype.setTag = function (tag) {
        this.tag = tag;
    };
    Bullet2.prototype.getTag = function () {
        return this.tag;
    };
    Bullet2.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    Bullet2 = __decorate([
        ccclass
    ], Bullet2);
    return Bullet2;
}(bulletBase_1.BulletBase));
exports.Bullet2 = Bullet2;

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
        //# sourceMappingURL=bullet_2.js.map
        