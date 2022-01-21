const { contextBridge } = require('electron');
const yaml = require('js-yaml');
const fs = require('fs');
console.log("preload.js loaded.");

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