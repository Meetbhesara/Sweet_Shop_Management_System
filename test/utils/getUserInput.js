const { name } = require("ejs");

function getUserInput()
{

    // 10 sweet names and 10 categories
    const names = [
    "Ladoo", "Barfi", "Jalebi", "Halwa", "Rasgulla",
    "Kaju Katli", "Soan Papdi", "Peda", "Gulab Jamun", "Cham Cham"
  ];

  const categories = [
    "pastry", "chocolate", "candy", "dry sweet", "milk sweet",
    "festival special", "seasonal", "bengali", "classic", "premium"
  ];

  return  {
    name: names[Math.floor(Math.random() * names.length)],
    category: categories[Math.floor(Math.random() * categories.length)],        
    price: (Math.random() * 100 + 10).toFixed(2), // Random price between 10 and 110
    quantity: Math.floor(Math.random() * 100) + 1, // Random quantity
  }
}

module.exports = {getUserInput};