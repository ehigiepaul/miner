let win = nw.Window;
let app = nw.App;
let tray = new nw.Tray({
  icon: "../app/img/Expensive_96px.png",
  tooltip: "Minemon Tray",
  alticon: "../app//img/Expensive_96px",
  title: "Minemon"
});

win.open("/app/index.html", {
  icon: "../app/img/Expensive_96px.png",
  width: 800,
  height: 530,
  resizable: false,
  title: "Minemon"
});

let trayMenu = new nw.Menu();

trayMenu.append(
  new nw.MenuItem({
    label: "Exit",
    click: () => {
      console.log("ending app");
      app.quit();
    }
  })
);

trayMenu.append(
  new nw.MenuItem({
    label: "Start mining",
    click: () => {
      console.log("started");
    }
  })
);

tray.menu = trayMenu;

app.on("close", () => {
  app.closeAllWindows();
  app.quit();
});
