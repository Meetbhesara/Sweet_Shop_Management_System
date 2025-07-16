const { readData , writeData } =require('../utils/fileUtils');

function addSweet(sweet){
    const sweets = readData();
    sweet.id = sweets.length ? sweets[sweets.length - 1].id + 1 : 1; // Assign an ID based on the current length
    sweets.push(sweet); // Add the new sweet to the array
    writeData(sweets);
    return sweet;
}

function viewAllSweets()
{
    return readData(); // Read and return all sweets from the file
}

module.exports = {
    addSweet,
    viewAllSweets
 };