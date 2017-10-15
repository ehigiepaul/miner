import { spawn } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

"use strict";
export class miner {
  [x: string]: any;
  constructor(url, port, username, password, rig) {
    this.url = url;
    this.port = port;
    this.username = username;
    this.password = password;
    this.rig = rig;
  }
  protected setUp() {
    let config = `
[common]
cuda_devices 0 1 2 3 4 5 6 7
intensity    64 64 64 64 64 64 64 64
templimit    90
pec          1
boff         0
eexit        3
tempunits    c
log          2
logfile      miner.log
api          127.0.0.1:42000

[server]
server ${this.url}
port   ${this.port}
user   ${this.username}.${this.rig}
pass   ${this.password}
`;
    fs.writeFile("./config.cfg", config, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("configuration completed");
      }
    });
  }

  protected miner() {
    console.log("starting miner");
    let exe = spawn("./blob/miner.exe");

    exe.stderr.on("data", data => {
      console.log(data.toString());
    });
    // exe.stdout.on("data", data => {
    //   console.log(data.toString());
    // });
    exe.on("exit", code => {
      console.log(`${code} closed`);
    });
  }

  start() {
    let me = fs.readdirSync(path.join(__dirname, "blob")).indexOf("miner.cfg");
    me < 0 ? this.setUp() : this.miner();
  }
}
