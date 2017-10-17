import * as pouchdb from "pouchdb";
let _ = undefined;
export class db {
  protected db = new pouchdb("miner");

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

let start = new db();
// start.updateConfig(_, _, _, _, _);
start.get("config");
