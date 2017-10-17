"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
class api {
    constructor() {
        this.stats();
        setTimeout(() => {
            console.log(this.apiStats);
        }, 1000);
        this.myvar = setInterval(() => {
            console.log(this.apiStats);
        }, 60000);
    }
    stats() {
        request.get("http://127.0.0.1:42000/getstat", (err, data, body) => {
            return (this.apiStats = JSON.parse(body));
        });
    }
    resetReq() {
        clearTimeout(this.myvar);
        this.myvar;
    }
}
exports.api = api;
let start = new api();
//# sourceMappingURL=api.js.map