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
var pouchdb = require("pouchdb");
var db = new pouchdb("./db");
var dbMod = /** @class */ (function () {
    function dbMod() {
    }
    dbMod.prototype.get = function (val) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, db.get(val)];
                    case 1:
                        doc = _a.sent();
                        return [2 /*return*/, doc];
                    case 2:
                        error_1 = _a.sent();
                        console.log("not existing");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    dbMod.prototype.put = function (index, obj) {
        return __awaiter(this, void 0, void 0, function () {
            var value, i, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object.create(null)];
                    case 1:
                        value = _a.sent();
                        value._id = index;
                        for (i in obj) {
                            value[i] = obj[i];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, db.put(value)];
                    case 3:
                        res = _a.sent();
                        //   console.log(res);
                        console.log("document inserted");
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    dbMod.prototype.update = function (index, obj) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, value, i, res, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, db.get(index)];
                    case 1:
                        doc = _a.sent();
                        return [4 /*yield*/, Object.create(null)];
                    case 2:
                        value = _a.sent();
                        value._id = doc._id;
                        value._rev = doc._rev;
                        for (i in obj) {
                            value[i] = obj[i];
                        }
                        return [4 /*yield*/, db.put(value)];
                    case 3:
                        res = _a.sent();
                        console.log("document updated");
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return dbMod;
}());
exports.dbMod = dbMod;
// let test = new dbMod();
// let me = {
//   name: "ehigiepaaul",
//   age: 30,
//   loc: "nigeria"
// };
// test.get("person");
// test.update("person", me);
// test.get("person");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJNb2QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kZXYtc3JjL2RiTW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBbUM7QUFDbkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFN0I7SUFDRTtJQUFlLENBQUM7SUFFVixtQkFBRyxHQUFULFVBQVUsR0FBVzs7Ozs7Ozt3QkFFUCxxQkFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFBOzt3QkFBdkIsR0FBRyxHQUFHLFNBQWlCO3dCQUMzQixzQkFBTyxHQUFHLEVBQUM7Ozt3QkFFWCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7S0FJL0I7SUFFSyxtQkFBRyxHQUFULFVBQVUsS0FBYSxFQUFFLEdBQVc7Ozs7OzRCQUN0QixxQkFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBakMsS0FBSyxHQUFHLFNBQXlCO3dCQUNyQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQzt3QkFDbEIsR0FBRyxDQUFDLENBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ2xCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLENBQUM7Ozs7d0JBRVcscUJBQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXpCLEdBQUcsR0FBRyxTQUFtQjt3QkFDN0Isc0JBQXNCO3dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Ozs7d0JBRWpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLENBQUM7Ozs7OztLQUV0QjtJQUVLLHNCQUFNLEdBQVosVUFBYSxLQUFhLEVBQUUsR0FBVzs7Ozs7Ozt3QkFFekIscUJBQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXpCLEdBQUcsR0FBRyxTQUFtQjt3QkFDakIscUJBQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQWpDLEtBQUssR0FBRyxTQUF5Qjt3QkFDckMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO3dCQUNwQixLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7d0JBQ3RCLEdBQUcsQ0FBQyxDQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixDQUFDO3dCQUNTLHFCQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUF6QixHQUFHLEdBQUcsU0FBbUI7d0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7Ozt3QkFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFHLENBQUMsQ0FBQzs7Ozs7O0tBRXBCO0lBQ0gsWUFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksc0JBQUs7QUE4Q2xCLDBCQUEwQjtBQUUxQixhQUFhO0FBQ2IseUJBQXlCO0FBQ3pCLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIsS0FBSztBQUVMLHNCQUFzQjtBQUN0Qiw2QkFBNkI7QUFDN0Isc0JBQXNCIn0=