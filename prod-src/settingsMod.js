"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dbMod_1 = require("./dbMod");
var db = new dbMod_1.dbMod();
var poolList;
(function (poolList) {
    poolList[poolList["flypool"] = 0] = "flypool";
    poolList[poolList["antpool"] = 1] = "antpool";
    poolList[poolList["nicehash"] = 2] = "nicehash";
})(poolList = exports.poolList || (exports.poolList = {}));
var settingsMod = /** @class */ (function () {
    function settingsMod() {
        this.main();
    }
    settingsMod.prototype.main = function () {
        return __awaiter(this, void 0, void 0, function () {
            var d;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db.get("settings")];
                    case 1:
                        d = _a.sent();
                        if (d == null) {
                            console.log("create your account");
                            this.setup();
                            console.log("miner ready");
                        }
                        else {
                            console.log("all is ok");
                            return [2 /*return*/, (this.setting = d)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    settingsMod.prototype.pickPool = function () {
        switch (this.setting.rigName) {
            case "flypool":
                this.poolUrl = "https://api-zcash.flypool.org";
                this.poolInfo = this.poolUrl + "/networkStats";
                this.poolMiner = this.poolUrl + "/miner/" + this.setting
                    .address + "/currentStats";
                break;
            case "antpool":
                break;
            case "nicehash":
                break;
        }
    };
    settingsMod.prototype.update = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, db.update("settings", obj)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    settingsMod.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var val;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        val = Object.create(null);
                        val.address = "t1MnfjAGPAACcPqPKx9Nw8R3jNpuDrwpAaw";
                        val.rigName = "main";
                        val.miningPool = poolList[0];
                        val.autoStart = true;
                        val.autoStartOnBoot = true;
                        return [4 /*yield*/, db.put("settings", val)];
                    case 1:
                        _a.sent();
                        console.log("setup completed");
                        return [2 /*return*/];
                }
            });
        });
    };
    return settingsMod;
}());
exports.settingsMod = settingsMod;
var st = new settingsMod();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3NNb2QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kZXYtc3JjL3NldHRpbmdzTW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFDaEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztBQUVyQixJQUFZLFFBSVg7QUFKRCxXQUFZLFFBQVE7SUFDbEIsNkNBQU8sQ0FBQTtJQUNQLDZDQUFPLENBQUE7SUFDUCwrQ0FBUSxDQUFBO0FBQ1YsQ0FBQyxFQUpXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBSW5CO0FBRUQ7SUFNRTtRQUNFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFSywwQkFBSSxHQUFWOzs7Ozs0QkFDVSxxQkFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBNUIsQ0FBQyxHQUFHLFNBQXdCO3dCQUVoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7NEJBQ25DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUM3QixDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBQ3pCLE1BQU0sZ0JBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFDO3dCQUM1QixDQUFDOzs7OztLQUNGO0lBRUQsOEJBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM3QixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRywrQkFBK0IsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBTSxJQUFJLENBQUMsT0FBTyxrQkFBZSxDQUFDO2dCQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFNLElBQUksQ0FBQyxPQUFPLGVBQVUsSUFBSSxDQUFDLE9BQU87cUJBQ25ELE9BQU8sa0JBQWUsQ0FBQztnQkFDMUIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLEtBQUssQ0FBQztZQUNSLEtBQUssVUFBVTtnQkFDYixLQUFLLENBQUM7UUFDVixDQUFDO0lBQ0gsQ0FBQztJQUNLLDRCQUFNLEdBQVosVUFBYSxHQUFHOzs7Ozs7O3dCQUVaLHFCQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxFQUFBOzt3QkFBaEMsU0FBZ0MsQ0FBQzs7Ozt3QkFFakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFHLENBQUMsQ0FBQzs7Ozs7O0tBRXBCO0lBRUssMkJBQUssR0FBWDs7Ozs7O3dCQUVNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM5QixHQUFHLENBQUMsT0FBTyxHQUFHLHFDQUFxQyxDQUFDO3dCQUNwRCxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzt3QkFDckIsR0FBRyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3dCQUNyQixHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQzt3QkFFM0IscUJBQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUE7O3dCQUE3QixTQUE2QixDQUFDO3dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Ozs7O0tBQ2hDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBekRELElBeURDO0FBekRZLGtDQUFXO0FBMkR4QixJQUFJLEVBQUUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDIn0=