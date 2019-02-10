const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;


app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});