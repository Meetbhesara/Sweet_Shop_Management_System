const { purchaseSweet, restockSweet } = require('../../src/controllers/inventory/inventoryController');
const { readData } = require('../../src/utils/fileUtils');

describe("Inventory Management", () => {
  it("should throw error if purchase quantity is zero or negative", () => {
    const sweets = readData();
    const sweet = sweets[0];
    expect(() => {
      purchaseSweet(sweet.id, 0);
    }).toThrow();
    expect(() => {
      purchaseSweet(sweet.id, -2);
    }).toThrow();
  });

  it("should throw error if restock quantity is zero or negative", () => {
    const sweets = readData();
    const sweet = sweets[0];
    expect(() => {
      restockSweet(sweet.id, 0);
    }).toThrow();
    expect(() => {
      restockSweet(sweet.id, -5);
    }).toThrow();
  });

  it("should throw error if purchase quantity is not an integer", () => {
    const sweets = readData();
    const sweet = sweets[0];
    expect(() => {
      purchaseSweet(sweet.id, 1.5);
    }).toThrow();
    expect(() => {
      purchaseSweet(sweet.id, 'two');
    }).toThrow();
  });

  it("should throw error if restock quantity is not an integer", () => {
    const sweets = readData();
    const sweet = sweets[0];
    expect(() => {
      restockSweet(sweet.id, 2.7);
    }).toThrow();
    expect(() => {
      restockSweet(sweet.id, 'five');
    }).toThrow();
  });
  it("should successfully purchase sweet if enough stock", () => {
    const sweets = readData();
    const sweet = sweets[0];
    const quantityToBuy = 1;

    if (sweet.quantity >= quantityToBuy) {
      const updated = purchaseSweet(sweet.id, quantityToBuy);
      expect(updated.quantity).toBe(sweet.quantity - quantityToBuy);
    }
  });

  it("should throw error if stock is insufficient", () => {
    const sweets = readData();
    const sweet = sweets[0];

    expect(() => {
      purchaseSweet(sweet.id, sweet.quantity + 10); // too much
    }).toThrow("Not enough stock");
  });

  it("should successfully restock a sweet", () => {
    const sweets = readData();
    const sweet = sweets[0];
    const quantityToAdd = 5;

    const updated = restockSweet(sweet.id, quantityToAdd);
    expect(updated.quantity).toBe(sweet.quantity + quantityToAdd);
  });

  it("should throw error if sweet not found", () => {
    expect(() => {
      purchaseSweet(9999, 1);
    }).toThrow("Sweet not found");

    expect(() => {
      restockSweet(9999, 1);
    }).toThrow("Sweet not found");
  });
});
