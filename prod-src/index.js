var win = nw.Window;
var app = nw.App;
var tray = new nw.Tray({
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
var trayMenu = new nw.Menu();
trayMenu.append(new nw.MenuItem({
    label: "Exit",
    click: function () {
        console.log("ending app");
        app.quit();
    }
}));
trayMenu.append(new nw.MenuItem({
    label: "Start mining",
    click: function () {
        console.log("started");
    }
}));
tray.menu = trayMenu;
app.on("close", function () {
    app.closeAllWindows();
    app.quit();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kZXYtc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7QUFDcEIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUNqQixJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDckIsSUFBSSxFQUFFLCtCQUErQjtJQUNyQyxPQUFPLEVBQUUsY0FBYztJQUN2QixPQUFPLEVBQUUsNEJBQTRCO0lBQ3JDLEtBQUssRUFBRSxTQUFTO0NBQ2pCLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7SUFDMUIsSUFBSSxFQUFFLCtCQUErQjtJQUNyQyxLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxHQUFHO0lBQ1gsU0FBUyxFQUFFLEtBQUs7SUFDaEIsS0FBSyxFQUFFLFNBQVM7Q0FDakIsQ0FBQyxDQUFDO0FBRUgsSUFBSSxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFN0IsUUFBUSxDQUFDLE1BQU0sQ0FDYixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFDZCxLQUFLLEVBQUUsTUFBTTtJQUNiLEtBQUssRUFBRTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQztDQUNGLENBQUMsQ0FDSCxDQUFDO0FBRUYsUUFBUSxDQUFDLE1BQU0sQ0FDYixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFDZCxLQUFLLEVBQUUsY0FBYztJQUNyQixLQUFLLEVBQUU7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Q0FDRixDQUFDLENBQ0gsQ0FBQztBQUVGLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBRXJCLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2QsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3RCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNiLENBQUMsQ0FBQyxDQUFDIn0=