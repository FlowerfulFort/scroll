const { contextBridge } = require('electron');
const yaml = require('js-yaml');
const fs = require('fs');
console.log("preload.js loaded.");

contextBridge.exposeInMainWorld('load',
{
    loadData: () => {
        let rawdata = fs.readFileSync('./data/data.yml', 'utf8');
        return yaml.load(rawdata);
    }
});