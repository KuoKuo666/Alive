(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/util.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4b76dIlS9dAjLYofDXCljLd', 'util', __filename);
// script/util.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    /** console.log封装，isDebug置为false跳过打印 */
    Util.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.isDebug)
            return;
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var item = args_1[_a];
            console.log(item);
        }
    };
    /**
     * 在 min 与 max 之间随机小数
     * @param {number} min
     * @param {number} max
     */
    Util.randomNumber = function (min, max) {
        return min + Math.random() * (max - min);
    };
    /**
     * 随机角度转化向量
     * @param minAngle 最小角度
     * @param maxAngle 最大角度
     */
    Util.randomDir = function (minAngle, maxAngle) {
        var angle = this.randomNumber(minAngle, maxAngle);
        var rad = cc.misc.degreesToRadians(angle);
        return cc.v2(Math.cos(rad), Math.sin(rad));
    };
    /** 是否开发模式 */
    Util.isDebug = true;
    return Util;
}());
exports.Util = Util;

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
        //# sourceMappingURL=util.js.map
        