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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluZXJNb2QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWluZXJNb2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQkFBNkI7QUFFN0IsK0NBQXNDO0FBQ3RDO0lBSUU7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsNkJBQWEsR0FBYixVQUFjLE9BQU87UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNELG1CQUFHLEdBQUgsY0FBTyxDQUFDO0lBRUEscUJBQUssR0FBYjtRQUNFLElBQUksR0FBRyxHQUFHO1lBQ1IsVUFBVTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUNsQixRQUFRO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ2hCLFFBQVE7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDaEIsUUFBUTtZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUNoQix3QkFBd0I7WUFDeEIsV0FBVztTQUNaLENBQUM7UUFFRixJQUFJLEtBQUssR0FBRyxxQkFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUEsSUFBSTtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQSxJQUFJO1lBQ3BCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzFCLDZGQUE2RiJ9