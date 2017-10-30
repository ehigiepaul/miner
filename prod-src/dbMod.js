var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as pouchdb from "pouchdb";
let db = new pouchdb("./db");
export class dbMod {
    constructor() { }
    get(val) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let doc = yield db.get(val);
                return doc;
            }
            catch (error) {
                console.log("not existing");
            }
            // console.log(data);
            // return data;
        });
    }
    put(index, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            let value = yield Object.create(null);
            value._id = index;
            for (let i in obj) {
                value[i] = obj[i];
            }
            try {
                let res = yield db.put(value);
                //   console.log(res);
                console.log("document inserted");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(index, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let doc = yield db.get(index);
                let value = yield Object.create(null);
                value._id = doc._id;
                value._rev = doc._rev;
                for (let i in obj) {
                    value[i] = obj[i];
                }
                let res = yield db.put(value);
                console.log("document updated");
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
// let test = new dbMod();
// let me = {
//   name: "ehigiepaaul",
//   age: 30,
//   loc: "nigeria"
// };
// test.get("person");
// test.update("person", me);
// test.get("person");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJNb2QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kZXYtc3JjL2RiTW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDbkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFN0IsTUFBTTtJQUNKLGdCQUFlLENBQUM7SUFFVixHQUFHLENBQUMsR0FBVzs7WUFDbkIsSUFBSSxDQUFDO2dCQUNILElBQUksR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNiLENBQUM7WUFBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUNELHFCQUFxQjtZQUNyQixlQUFlO1FBQ2pCLENBQUM7S0FBQTtJQUVLLEdBQUcsQ0FBQyxLQUFhLEVBQUUsR0FBVzs7WUFDbEMsSUFBSSxLQUFLLEdBQUcsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQztZQUNELElBQUksQ0FBQztnQkFDSCxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLHNCQUFzQjtnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25DLENBQUM7WUFBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsQ0FBQztRQUNILENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxLQUFhLEVBQUUsR0FBVzs7WUFDckMsSUFBSSxDQUFDO2dCQUNILElBQUksR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxLQUFLLEdBQUcsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDdEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsQ0FBQztnQkFDRCxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNsQyxDQUFDO1lBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUM7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQUVELDBCQUEwQjtBQUUxQixhQUFhO0FBQ2IseUJBQXlCO0FBQ3pCLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIsS0FBSztBQUVMLHNCQUFzQjtBQUN0Qiw2QkFBNkI7QUFDN0Isc0JBQXNCIn0=