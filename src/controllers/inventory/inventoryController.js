const { readData, writeData } = require('../../utils/fileUtils');

function purchaseSweet(id, quantity) {
  if (typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("Quantity must be a positive integer");
  }
  const sweets = readData();
  const index = sweets.findIndex(s => s.id === id);

  if (index === -1) {
    throw new Error("Sweet not found");
  }

  if (sweets[index].quantity < quantity) {
    throw new Error("Not enough stock");
  }

  sweets[index].quantity -= quantity;
  writeData(sweets);
  return sweets[index];
}

function restockSweet(id, quantity) {
  if (typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("Quantity must be a positive integer");
  }
  const sweets = readData();
  const index = sweets.findIndex(s => s.id === id);

  if (index === -1) {
    throw new Error("Sweet not found");
  }

  sweets[index].quantity += quantity;
  writeData(sweets);
  return sweets[index];
}

module.exports = {
  purchaseSweet,
  restockSweet
};
