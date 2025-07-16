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


// delete the sweets

function deleteSweetById(id) {
    const sweets=readData();
    const index= sweets.findIndex(sweet=> sweet.id=== id);
    if(index===-1)
    throw new Error("Sweet not found");
    
    const deletedSweet = sweets.splice(index, 1)[0]; // Remove the sweet from the array
    writeData(sweets); // Write the updated array back to the file
    return deletedSweet; // Return the deleted sweet
}


module.exports = {
    addSweet,
    viewAllSweets,
    deleteSweetById
 };