(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/player/movePlayer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b9f3eMVcjhEOb2eVFV6A8MJ', 'movePlayer', __filename);
// script/player/movePlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MovePlayer = /** @class */ (function (_super) {
    __extends(MovePlayer, _super);
    function MovePlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MovePlayer.prototype.start = function () {
        this.openTouch();
    };
    MovePlayer.prototype.openTouch = function () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    };
    MovePlayer.prototype.closeTouch = function () {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    };
    MovePlayer.prototype.onTouchMove = function (event) {
        var delta = event.getDelta();
        this.node.x += delta.x;
        this.node.y += delta.y;
    };
    MovePlayer = __decorate([
        ccclass
    ], MovePlayer);
    return MovePlayer;
}(cc.Component));
exports.default = MovePlayer;

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
        //# sourceMappingURL=movePlayer.js.map
        