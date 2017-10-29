"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var child_process_1 = require("child_process");
var miner = /** @class */ (function () {
    function miner() {
        this.minerPath = path.resolve("app:/../blob/miner.exe");
    }
    miner.prototype.configSetting = function (setting) {
        this.config = Object.create(null);
        this.config.server = "";
        this.config.port = "";
        this.config.user = "";
        this.config.pass = "";
        this.config.eexit = 0;
    };
    miner.prototype.run = function () { };
    miner.prototype.miner = function () {
        var arg = [
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
        var miner = child_process_1.spawn(this.minerPath, arg);
        miner.stdout.on("data", function (data) {
            console.log(data.toString());
        });
        miner.on("close", function (data) {
            miner.kill();
        });
    };
    return miner;
}());
var t = new miner();
var d = ["--server", "ejjkgkl"];
console.log(d.toString());
// --server server.com --port 7777 --user name --pass secret --cuda_devices 0 1 2 3 --eexit 1
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluZXJNb2QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kZXYtc3JjL21pbmVyTW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkJBQTZCO0FBRTdCLCtDQUFzQztBQUN0QztJQUlFO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELDZCQUFhLEdBQWIsVUFBYyxPQUFPO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxtQkFBRyxHQUFILGNBQU8sQ0FBQztJQUVBLHFCQUFLLEdBQWI7UUFDRSxJQUFJLEdBQUcsR0FBRztZQUNSLFVBQVU7WUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDbEIsUUFBUTtZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUNoQixRQUFRO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ2hCLFFBQVE7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDaEIsd0JBQXdCO1lBQ3hCLFdBQVc7U0FDWixDQUFDO1FBRUYsSUFBSSxLQUFLLEdBQUcscUJBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFBLElBQUk7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUEsSUFBSTtZQUNwQixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQUVELElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUMxQiw2RkFBNkYifQ==