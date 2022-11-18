import { app, BrowserWindow } from 'electron';

app.whenReady().then(() => {
    const browserWindow = new BrowserWindow();

    browserWindow.webContents.on('before-input-event', (event, _input) => {
        const keys = [];
        for (const key in event) {
            keys.push(key);
        }
        console.log('before-input-event:keys:', keys); // should have defaultPrevented, stopPropagation, ...etc. but actually ['preventDefault', 'sender'].
        console.log('before-input-event:event.defaultPrevented:', event.defaultPrevented); // should be boolean but actually undefined.

        // Electron.Event documentation: https://github.com/electron/electron/blob/main/docs/api/structures/event.md
        // Node.js Event documentation: https://nodejs.org/api/events.html#class-event
        console.log('before-input-event:event:', event);
    });

    browserWindow.webContents.loadURL(
        'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit#gid=0' // Google Sheets: Example Spreadsheet
    );
});
