import * as fs from "fs";
import * as path from "path";
var appLocation = path.resolve(__dirname, "../../");

let watcher = fs.watch(appLocation, () => {
  nw.Window.get().showDevTools();
  watcher.close();
});
console.log("tessting");
