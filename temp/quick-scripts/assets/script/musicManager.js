(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/musicManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '75e36+btQZBd6Gt7J5SKB2d', 'musicManager', __filename);
// script/musicManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MusicManager = /** @class */ (function (_super) {
    __extends(MusicManager, _super);
    function MusicManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = undefined;
        return _this;
    }
    MusicManager.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () {
            cc.audioEngine.playMusic(_this.bgm, true);
        }, 0.5);
    };
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], MusicManager.prototype, "bgm", void 0);
    MusicManager = __decorate([
        ccclass
    ], MusicManager);
    return MusicManager;
}(cc.Component));
exports.default = MusicManager;

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
        //# sourceMappingURL=musicManager.js.map
        