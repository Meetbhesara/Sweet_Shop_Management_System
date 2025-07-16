const { readData , writeData } =require('../utils/fileUtils');

function addSweet(sweet){
    const sweets = readData();
    sweets.push(sweet);
    sweet.id = sweets.length ? sweets[sweets.length - 1].id + 1 : 1; // Assign an ID based on the current length
    writeData(sweets);
    return sweet;
}

module.exports = {
    addSweet };