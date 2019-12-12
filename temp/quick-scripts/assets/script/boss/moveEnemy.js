(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/boss/moveEnemy.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '44c16rIXfxIPJYQtkNeln29', 'moveEnemy', __filename);
// script/boss/moveEnemy.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MoveEnemy = /** @class */ (function (_super) {
    __extends(MoveEnemy, _super);
    function MoveEnemy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MoveEnemy.prototype.start = function () {
    };
    MoveEnemy = __decorate([
        ccclass
    ], MoveEnemy);
    return MoveEnemy;
}(cc.Component));
exports.default = MoveEnemy;

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
        //# sourceMappingURL=moveEnemy.js.map
        