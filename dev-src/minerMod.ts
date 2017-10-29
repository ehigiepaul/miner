import * as path from "path";
import * as url from "url";
import { spawn } from "child_process";
class miner {
  config;
  minerPath;

  constructor() {
    this.minerPath = path.resolve("app:/../blob/miner.exe");
  }
  configSetting(setting) {
    this.config = Object.create(null);
    this.config.server = "";
    this.config.port = "";
    this.config.user = "";
    this.config.pass = "";
    this.config.eexit = 0;
  }
  run() {}

  private miner() {
    let arg = [
      "--server",
      this.config.server,
      "--port",
      this.config.port,
      "--user",
      this.config.user,
      "--pass",
      this.config.pass,
      "--cuda_devices 0 1 2 3",
      "--eexit 0"
    ];

    let miner = spawn(this.minerPath, arg);
    miner.stdout.on("data", data => {
      console.log(data.toString());
    });
    miner.on("close", data => {
      miner.kill();
    });
  }
}

let t = new miner();
let d = ["--server", "ejjkgkl"];
console.log(d.toString());
// --server server.com --port 7777 --user name --pass secret --cuda_devices 0 1 2 3 --eexit 1
