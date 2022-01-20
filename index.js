const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

const openMainWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            preload: path.resolve(__dirname, 'src', 'preload.js'),
        },
    });
    win.loadFile('dist/index.html');
    return win;
};

app.whenReady().then(() => {
    let window = openMainWindow();
    window.webContents.send('asyncMsg','this is message from back-end');
});

/* in macOS, call quit() manually */
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

/* if Program started at first time. */
try {
    if(!fs.existsSync('data')) { // if not exists 'data' directory
        fs.mkdirSync('data');
    }
    if(!fs.existsSync('data/data.yml')) {   // if not exists 'data/data.yml' file
        fs.writeFileSync('./data/data.yml', "");
    }
} catch (err) {
    console.error(err);
}
