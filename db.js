"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pouchdb = require("pouchdb");
let _ = undefined;
class db {
    constructor() {
        this.db = new pouchdb("miner");
    }
    updateConfig(server, port, username, password, rigName) {
        this.db.get("config").then(doc => {
            this.db
                .put({
                _id: "config",
                _rev: doc._rev,
                server: server,
                port: port,
                username: username,
                password: password,
                rigName: rigName,
                fee: 0,
                eexit: 3,
                tempunits: "c",
                templimit: 90,
                api: "0.0.0.0:3000"
            })
                .then(data => {
                console.log("config updated");
            });
        });
    }
    setConfig(server, port, username, password, rigName) {
        this.db
            .put({
            _id: "config",
            server: server,
            port: port,
            username: username,
            password: password,
            rigName: rigName,
            fee: 0,
            eexit: 3,
            tempunits: "c",
            templimit: 90,
            api: "0.0.0.0:3000"
        })
            .then(data => {
            console.log("config updated");
        })
            .catch(err => {
            console.log(err);
        });
    }
    get(string) {
        this.db
            .get(string)
            .then(data => {
            console.log(data);
        })
            .catch(err => {
            console.log(err);
        });
    }
}
exports.db = db;
let start = new db();
// start.updateConfig(_, _, _, _, _);
start.get("config");
//# sourceMappingURL=db.js.map