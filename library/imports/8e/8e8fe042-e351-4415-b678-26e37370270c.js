"use strict";
cc._RF.push(module, '8e8feBC41FEFbZ4JuNzcCcM', 'overManager');
// script/over/overManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Over = /** @class */ (function (_super) {
    __extends(Over, _super);
    function Over() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Over.prototype.again = function () {
        cc.director.loadScene('game');
    };
    Over = __decorate([
        ccclass
    ], Over);
    return Over;
}(cc.Component));
exports.default = Over;

cc._RF.pop();