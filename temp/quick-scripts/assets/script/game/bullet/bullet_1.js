(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/bullet/bullet_1.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'abf70K7oktPNL/9tXR78dt6', 'bullet_1', __filename);
// script/game/bullet/bullet_1.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bulletBase_1 = require("./bulletBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet_1 = /** @class */ (function (_super) {
    __extends(Bullet_1, _super);
    function Bullet_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bullet_1 = __decorate([
        ccclass
    ], Bullet_1);
    return Bullet_1;
}(bulletBase_1.BulletBase));
exports.Bullet_1 = Bullet_1;

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
        