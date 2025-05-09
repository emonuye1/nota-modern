const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'),
    },
  });

  win.loadFile('src/index.html');
}

app.on('ready', createWindow);