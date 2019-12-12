(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/boss/shootManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '09f92RTbttM3Ko/zaVu43he', 'shootManager', __filename);
// script/game/boss/shootManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShootManager = /** @class */ (function (_super) {
    __extends(ShootManager, _super);
    function ShootManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ShootManager.prototype.start = function () {
    };
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
        