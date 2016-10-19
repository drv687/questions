const electron = require('electron')
const {app, BrowserWindow} = electron
var mainWindow = null;
//Quit when all the windows are closed.
app.on('window-all-closed', function(){
	if(process.platform !='darwin'){
		app.quit();
	}
});
app.on('ready', function(){
	//Create browser window.
	mainWindow = new BrowserWindow({ width:800, height:600});
	//Load index.html
	mainWindow.loadURL('file://' +__dirname + '/index.html');
mainWindow.openDevTools() //Opens dev tools
	mainWindow. on('closed', function(){
		mainWindow = null;
	});
});
