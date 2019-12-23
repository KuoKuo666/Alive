"use strict";
cc._RF.push(module, '75e36+btQZBd6Gt7J5SKB2d', 'musicManager');
// script/game/musicManager.ts

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