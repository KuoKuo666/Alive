"use strict";
cc._RF.push(module, '446b9RzJvtMIII1w6i++vno', 'colliderPlayer');
// script/game/player/colliderPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ColliderPlayer = /** @class */ (function (_super) {
    __extends(ColliderPlayer, _super);
    function ColliderPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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