const {app, BrowserWindow} = require('electron')

let window

if (process.platform === 'darwin') {
  app.dock.hide()
}

app.once('ready', () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    show: true,
    webPreferences: {
      nodeIntegration: false
    }
  })

  const startTime = Date.now()
  window.webContents.once('dom-ready', () => {
    console.log('dom-ready', Date.now() - startTime)
    // app.exit()
  })
  window.loadURL(`file://${__dirname}/index.html`)
})
