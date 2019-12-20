(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/showTime.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '27748HNsMZAVp9/xdiGyun9', 'showTime', __filename);
// script/game/showTime.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShowTime = /** @class */ (function (_super) {
    __extends(ShowTime, _super);
    function ShowTime() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = undefined;
        // 向下取整，从 3 开始
        _this.time = 3.99;
        return _this;
    }
    ShowTime.prototype.onLoad = function () {
        this.label = this.node.getComponent(cc.Label);
    };
    ShowTime.prototype.update = function (dt) {
        if (this.time < -1) {
            return;
        }
        this.time -= dt;
        var show = Math.floor(this.time);
        if (show > 0) {
            this.label.string = show + "";
        }
        else if (show === 0) {
            this.label.string = "Go";
        }
        else {
            this.label.string = "";
        }
    };
    ShowTime = __decorate([
        ccclass
    ], ShowTime);
    return ShowTime;
}(cc.Component));
exports.default = ShowTime;

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
        //# sourceMappingURL=showTime.js.map
        