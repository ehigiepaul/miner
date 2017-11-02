let win = nw.Window;
let app = nw.App;
let tray = new nw.Tray({
  icon: "./app/img/Expensive_96px.png",
  tooltip: "Minemon Tray",
  title: "ehigiepaul"
});

win.open("./app/index.html", {
  icon: "./app/img/Expensive_96px.png",
  width: 800,
  height: 530,
  resizable: false
});

let menu = new nw.Menu({ type: "menubar" });
menu.append(new nw.MenuItem({ label: "about us" }));
menu.append(new nw.MenuItem({ label: "start" }));
menu.append(new nw.MenuItem({ label: " us" }));
menu.append(new nw.MenuItem({ label: "about " }));

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
win.get().menu = menu;

nw.Window.get().showDevTools();

app.on("close", () => {
  nw.Window.get().closeDevTools();
  app.closeAllWindows();
  app.quit();
});
