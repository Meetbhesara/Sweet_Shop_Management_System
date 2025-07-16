const fs = require('fs');
const path = require('path');
const { sortSweets } = require('../../src/services/sweetService');
const filePath = path.join(__dirname, '../../data/sweets.json');

describe('Sort Sweets (from JSON)', () => {
  it('should sort sweets by category descending (Z-A)', () => {
    const result = sortSweets([...sweets], 'category', 'desc');
    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i].category.localeCompare(result[i + 1].category)).toBeGreaterThanOrEqual(0);
    }
  });
  let sweets;

  beforeAll(() => {
    const content = fs.readFileSync(filePath, 'utf-8');
    sweets = content ? JSON.parse(content) : [];
  });

  it('should sort sweets by price ascending', () => {
    const result = sortSweets([...sweets], 'price', 'asc');
    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i].price).toBeLessThanOrEqual(result[i + 1].price);
    }
  });

  it('should sort sweets by price descending', () => {
    const result = sortSweets([...sweets], 'price', 'desc');
    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i].price).toBeGreaterThanOrEqual(result[i + 1].price);
    }
  });

  it('should sort sweets by category ascending (A-Z)', () => {
    const result = sortSweets([...sweets], 'category', 'asc');
    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i].category.localeCompare(result[i + 1].category)).toBeLessThanOrEqual(0);
    }
  });

  it('should sort sweets by name ascending (A-Z)', () => {
    const result = sortSweets([...sweets], 'name', 'asc');
    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i].name.localeCompare(result[i + 1].name)).toBeLessThanOrEqual(0);
    }
  });

  it('should sort sweets by name descending (Z-A)', () => {
    const result = sortSweets([...sweets], 'name', 'desc');
    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i].name.localeCompare(result[i + 1].name)).toBeGreaterThanOrEqual(0);
    }
  });

  it('should return same list if field is invalid', () => {
    const result = sortSweets([...sweets], 'invalidField');
    expect(result.length).toBe(sweets.length);
  });
});
