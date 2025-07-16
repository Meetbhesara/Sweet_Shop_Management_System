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
    const price = Number(Math.floor(Math.random() * 100) + 10);     // Ensured number
  const quantity = Number(Math.floor(Math.random() * 20) + 1);    //  Ensured number
 // Random quantity between 1 and 100

  return  {
    name: names[Math.floor(Math.random() * names.length)],
    category: categories[Math.floor(Math.random() * categories.length)],  
    price,
    quantity      
    
  }
}

module.exports = {getUserInput};