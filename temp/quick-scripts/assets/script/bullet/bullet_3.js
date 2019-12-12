(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/bullet/bullet_3.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '05acdCbX+BGVYm8DF4lebeq', 'bullet_3', __filename);
// script/bullet/bullet_3.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bulletBase_1 = require("./bulletBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet3 = /** @class */ (function (_super) {
    __extends(Bullet3, _super);
    function Bullet3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bullet3.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Bullet3.prototype.setSpeed = function (speed) {
        this.moveSpeed = speed;
    };
    Bullet3.prototype.setDir = function (dirX, dirY) {
        this.moveDir.x = dirX;
        this.moveDir.y = dirY;
    };
    Bullet3.prototype.setTag = function (tag) {
        this.tag = tag;
    };
    Bullet3.prototype.getTag = function () {
        return this.tag;
    };
    Bullet3.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    Bullet3 = __decorate([
        ccclass
    ], Bullet3);
    return Bullet3;
}(bulletBase_1.BulletBase));
exports.Bullet3 = Bullet3;

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
        //# sourceMappingURL=bullet_3.js.map
        