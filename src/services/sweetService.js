function searchSweets(sweets, { name, category, minPrice, maxPrice }) {
  return sweets.filter((sweet) => {
    const nameMatch = name ? sweet.name.toLowerCase().includes(name.toLowerCase()) : true;
    const categoryMatch = category ? sweet.category.toLowerCase() === category.toLowerCase() : true;
    const priceMatch =
      (minPrice === undefined || sweet.price >= minPrice) &&
      (maxPrice === undefined || sweet.price <= maxPrice);
    return nameMatch && categoryMatch && priceMatch;
  });
}


function sortSweets(sweets, field, order = 'asc') {
  return sweets.sort((a, b) => {
    if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
    if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
    return 0;
  });
}

module.exports = { searchSweets, sortSweets };
