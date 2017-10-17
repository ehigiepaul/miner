"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var powerLoc;
(function (powerLoc) {
    powerLoc[powerLoc["Enugu"] = 0] = "Enugu";
    powerLoc[powerLoc["Kano"] = 1] = "Kano";
    powerLoc[powerLoc["Yola"] = 2] = "Yola";
    powerLoc[powerLoc["Jos"] = 3] = "Jos";
    powerLoc[powerLoc["Kaduna"] = 4] = "Kaduna";
    powerLoc[powerLoc["Abuja"] = 5] = "Abuja";
    powerLoc[powerLoc["Port_Harcourt"] = 6] = "Port_Harcourt";
    powerLoc[powerLoc["Benin"] = 7] = "Benin";
    powerLoc[powerLoc["Ikeja"] = 8] = "Ikeja";
    powerLoc[powerLoc["Ibadan"] = 9] = "Ibadan";
    powerLoc[powerLoc["Eko"] = 10] = "Eko";
})(powerLoc || (powerLoc = {}));
class powerCalc {
    constructor(unit) {
        this.unit = unit;
        console.log(this.cost());
    }
    cost() {
        return `N${this.unit * 24.75}`;
    }
}
exports.powerCalc = powerCalc;
let start = new powerCalc(266);
//# sourceMappingURL=calcPower.js.map