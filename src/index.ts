import { app, BrowserWindow } from 'electron';

app.whenReady().then(() => {
    const browserWindow = new BrowserWindow();

    browserWindow.webContents.on('before-input-event', (event, _input) => {
        console.log('before-input-event:Object.keys(event):', Object.keys(event)); // should have defaultPrevented, stopPropagation, ...etc. but actually ['preventDefault', 'sender'].
        console.log('before-input-event:event.defaultPrevented:', event.defaultPrevented); // should be boolean but actually undefined.

        // Type definition: https://github.com/electron/electron/blob/main/typings/internal-electron.d.ts#L225
        // Electron.Event documentation: https://github.com/electron/electron/blob/main/docs/api/structures/event.md
        // Node.js Event documentation: https://nodejs.org/api/events.html#class-event
        console.log('before-input-event:event:', event);
    });

    browserWindow.webContents.loadURL(
        'https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit#gid=0' // Google Sheets: Example Spreadsheet
    );
});
