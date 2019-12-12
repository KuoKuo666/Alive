(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/bullet/bullet_1.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'abf70K7oktPNL/9tXR78dt6', 'bullet_1', __filename);
// script/bullet/bullet_1.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bulletBase_1 = require("./bulletBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet1 = /** @class */ (function (_super) {
    __extends(Bullet1, _super);
    function Bullet1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bullet1.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Bullet1.prototype.setSpeed = function (speed) {
        this.moveSpeed = speed;
    };
    Bullet1.prototype.setDir = function (dirX, dirY) {
        this.moveDir.x = dirX;
        this.moveDir.y = dirY;
    };
    Bullet1.prototype.setTag = function (tag) {
        this.tag = tag;
    };
    Bullet1.prototype.getTag = function () {
        return this.tag;
    };
    Bullet1.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    Bullet1 = __decorate([
        ccclass
    ], Bullet1);
    return Bullet1;
}(bulletBase_1.BulletBase));
exports.Bullet1 = Bullet1;

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
        //# sourceMappingURL=bullet_1.js.map
        