var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { dbMod } from "./dbMod";
let db = new dbMod();
export var poolList;
(function (poolList) {
    poolList[poolList["flypool"] = 0] = "flypool";
    poolList[poolList["antpool"] = 1] = "antpool";
    poolList[poolList["nicehash"] = 2] = "nicehash";
})(poolList || (poolList = {}));
export class settingsMod {
    constructor() {
        this.main();
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            let d = yield db.get("settings");
            if (d == null) {
                console.log("create your account");
                this.setup();
                console.log("miner ready");
            }
            else {
                console.log("all is ok");
                return (this.setting = d);
            }
            this.pickPool();
        });
    }
    pickPool() {
        switch (this.setting.miningPool) {
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
    update(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db.update("settings", obj);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            //   get all the input from form
            let val = Object.create(null);
            val.address = "t1MnfjAGPAACcPqPKx9Nw8R3jNpuDrwpAaw";
            val.rigName = "main";
            val.miningPool = poolList[0];
            val.autoStart = true;
            val.autoStartOnBoot = true;
            yield db.put("settings", val);
            console.log("setup completed");
        });
    }
}
let st = new settingsMod();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3NNb2QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kZXYtc3JjL3NldHRpbmdzTW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNoQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBRXJCLE1BQU0sQ0FBTixJQUFZLFFBSVg7QUFKRCxXQUFZLFFBQVE7SUFDbEIsNkNBQU8sQ0FBQTtJQUNQLDZDQUFPLENBQUE7SUFDUCwrQ0FBUSxDQUFBO0FBQ1YsQ0FBQyxFQUpXLFFBQVEsS0FBUixRQUFRLFFBSW5CO0FBRUQsTUFBTTtJQU1KO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVhLElBQUk7O1lBQ2hCLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUM7WUFFRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRVMsUUFBUTtRQUNoQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsK0JBQStCLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxlQUFlLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLElBQUksQ0FBQyxPQUFPO3FCQUNuRCxPQUFPLGVBQWUsQ0FBQztnQkFDMUIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLEtBQUssQ0FBQztZQUNSLEtBQUssVUFBVTtnQkFDYixLQUFLLENBQUM7UUFDVixDQUFDO0lBQ0gsQ0FBQztJQUNLLE1BQU0sQ0FBQyxHQUFHOztZQUNkLElBQUksQ0FBQztnQkFDSCxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLENBQUM7WUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUM7S0FBQTtJQUVlLEtBQUs7O1lBQ25CLGdDQUFnQztZQUNoQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLEdBQUcsQ0FBQyxPQUFPLEdBQUcscUNBQXFDLENBQUM7WUFDcEQsR0FBRyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDckIsR0FBRyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDckIsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFFM0IsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDakMsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxJQUFJLEVBQUUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDIn0=