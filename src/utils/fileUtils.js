const fs =require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../data/sweets.json');

function readData() {
    const content= fs.readFileSync(filePath, 'utf-8');
    if (!content) { 
        return []; //handle case where file is empty
    }
    return JSON.parse(content); // Parse the JSON content
}

function writeData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = {
    readData,
    writeData
};