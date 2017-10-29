import { dbMod } from "./dbMod";
let db = new dbMod();

export enum poolList {
  flypool,
  antpool,
  nicehash
}

export class settingsMod {
  setting;
  poolUrl;
  poolInfo;
  poolMiner;

  constructor() {
    this.main();
  }

  async main() {
    let d = await db.get("settings");

    if (d == null) {
      console.log("create your account");
      this.setup();
      console.log("miner ready");
    } else {
      console.log("all is ok");
      return (this.setting = d);
    }
  }

  pickPool() {
    switch (this.setting.rigName) {
      case "flypool":
        this.poolUrl = "https://api-zcash.flypool.org";
        this.poolInfo = `${this.poolUrl}/networkStats`;
        this.poolMiner = `${this.poolUrl}/miner/${this.setting
          .address}/currentStats`;
        break;
      case "antpool":
        break;
      case "nicehash":
        break;
    }
  }
  async update(obj) {
    try {
      await db.update("settings", obj);
    } catch (err) {
      console.log(err);
    }
  }

  async setup() {
    //   get all the input from form
    let val = Object.create(null);
    val.address = "t1MnfjAGPAACcPqPKx9Nw8R3jNpuDrwpAaw";
    val.rigName = "main";
    val.miningPool = poolList[0];
    val.autoStart = true;
    val.autoStartOnBoot = true;

    await db.put("settings", val);
    console.log("setup completed");
  }
}

let st = new settingsMod();
