const {app, BrowserWindow} = require('electron')

let window

exports.start = (url) => {
  if (process.platform === 'darwin') {
    app.dock.hide()
  }

  app.once('ready', () => {
    window = new BrowserWindow({
      width: 800,
      height: 600,
      show: false
    })

    window.webContents.once('dom-ready', () => {
      console.log(Date.now())

      // Verify page had content
      window.webContents.executeJavaScript('document.body.textContent', true, (content) => {
        if (content.trim() === 'React v15.3.2, moment v2.15.2, d3 v4.3.0') {
          app.exit()
        } else {
          console.error('Page was different', content.trim())
          app.exit(1)
        }
      })
    })

    window.loadURL(url)
  })
}
