(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/player/colliderPlayer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '446b9RzJvtMIII1w6i++vno', 'colliderPlayer', __filename);
// script/game/player/colliderPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ColliderPlayer = /** @class */ (function (_super) {
    __extends(ColliderPlayer, _super);
    function ColliderPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColliderPlayer.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    ColliderPlayer.prototype.onCollisionEnter = function (other, self) {
        cc.director.loadScene('over');
    };
    ColliderPlayer = __decorate([
        ccclass
    ], ColliderPlayer);
    return ColliderPlayer;
}(cc.Component));
exports.default = ColliderPlayer;

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
        //# sourceMappingURL=colliderPlayer.js.map
        