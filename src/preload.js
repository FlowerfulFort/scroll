const { contextBridge } = require('electron');
const yaml = require('js-yaml');
const fs = require('fs');

function extrFromStyle(style) {     /* 20px -> Number(20) */
    return style.slice(0, style.length-2);
}
document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html');
    html.style.height = "-webkit-fill-available";
    
    const body = document.querySelector('body');
    const root = document.querySelector('#root');
    body.style.marginTop = "1px";
    body.style.marginBottom = "1px";
    body.style.height = `${html.clientHeight-extrFromStyle(body.style.marginTop)
        -extrFromStyle(body.style.marginBottom)}px`;

    let resizeTimer = null;
    window.addEventListener('resize', () => {
        clearInterval(resizeTimer);
        resizeTimer = setTimeout(() => {
            console.log('resize event');
            body.style.height = `${html.clientHeight-extrFromStyle(body.style.marginTop)
                -extrFromStyle(body.style.marginBottom)}px`;
        }, 50);
    });

    root.style["height"] = "100%";
    root.style["display"] = "flex";
    root.style["flexDirection"] = "column";
});
contextBridge.exposeInMainWorld('load',
{
    loadData: () => {   // send Object from yml file.
        let rawdata;
        try {
            rawdata = fs.readFileSync('./data/data.yml', 'utf8');
        } catch (err) {
            console.error(err);
        }
        return yaml.load(rawdata);
    }
});
contextBridge.exposeInMainWorld('write',
{
    writeData: (raw) => {   // write Object Data to yml file.
        let serialized = yaml.dump(raw);
        try {
            fs.writeFileSync('./data/data.yml', serialized, 'utf8');
        } catch (err) {
            console.error(err);
        }
    }
});

console.log("preload.js loaded.");
