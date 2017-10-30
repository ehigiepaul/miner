import * as path from "path";
import { spawn } from "child_process";
class miner {
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
    run() { }
    miner() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluZXJNb2QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kZXYtc3JjL21pbmVyTW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRTdCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEM7SUFJRTtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCxhQUFhLENBQUMsT0FBTztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsR0FBRyxLQUFJLENBQUM7SUFFQSxLQUFLO1FBQ1gsSUFBSSxHQUFHLEdBQUc7WUFDUixVQUFVO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQ2xCLFFBQVE7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDaEIsUUFBUTtZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUNoQixRQUFRO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ2hCLHdCQUF3QjtZQUN4QixXQUFXO1NBQ1osQ0FBQztRQUVGLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDdkIsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDMUIsNkZBQTZGIn0=