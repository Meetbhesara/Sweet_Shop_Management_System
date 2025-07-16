const fs= require('fs');
const path = require('path');   
const { searchSweets } = require('../../src/services/searchSortService');
const filePath = path.join(__dirname, '../../data/sweets.json');

describe("sweet search from json " , () => {
    let sweets;

  beforeAll(() => {
    const content = fs.readFileSync(filePath, 'utf-8');
    sweets = content ? JSON.parse(content) : [];
  });
    it("should search sweets by name", () => {
        const sweets = searchSweets("name", "Gulab Jamun");
        expect(Array.isArray(sweets)).toBe(true);
        sweets.forEach((sweet) => {
            expect(sweet.name).toContain("Gulab Jamun");
        });
    });

    it("should search sweets by category", () => {
        const sweets = searchSweets("category", "Dessert");
        expect(Array.isArray(sweets)).toBe(true);
        sweets.forEach((sweet) => {
            expect(sweet.category).toBe("Dessert");
        });
    });

    it("should return an empty array if no sweets match the search criteria", () => {
        const sweets = searchSweets("name", "Nonexistent Sweet");
        expect(sweets).toEqual([]);
    });

    it('should return sweets with price >= minPrice only', () => {
  const result = searchSweets(sweets, { minPrice: 40 });
  expect(Array.isArray(result)).toBe(true);
  result.forEach(sweet => {
    expect(sweet.price).toBeGreaterThanOrEqual(40);
  });
});

it('should return sweets with price <= maxPrice only', () => {
  const result = searchSweets(sweets, { maxPrice: 60 });
  expect(Array.isArray(result)).toBe(true);
  result.forEach(sweet => {
    expect(sweet.price).toBeLessThanOrEqual(60);
  });
});
});
