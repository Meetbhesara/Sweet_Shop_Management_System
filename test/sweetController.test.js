const fs = require('fs');
const path = require('path');   
const {getUserInput} = require('./utils/getUserInput');

const {addSweet , viewAllSweets } = require('../src/controllers/sweetController');   
const e = require('express');

const filePath = path.join(__dirname, '../data/sweets.json');

describe('Sweet shop management system', () => {
    it('should add a valid sweet from simulated user input', () => {
        const sweet = getUserInput();
        const addedSweet = addSweet(sweet);

        expect(typeof addedSweet.name).toBe("string");
        expect(typeof addedSweet.category).toBe("string");
        expect(typeof addedSweet.price).toBe("number");
        expect(typeof addedSweet.quantity).toBe("number");
        expect(addedSweet.price).toBeGreaterThanOrEqual(10);
        expect(addedSweet.price).toBeLessThanOrEqual(110);
        expect(addedSweet.quantity).toBeGreaterThanOrEqual(1);
        expect(addedSweet.id).toBeDefined();
    })

// view all sweets from json file
    it("should view all sweets", () => {
        const sweets = viewAllSweets();
        if (sweets.length === 0) {
            expect(sweets).toEqual([]);
        }
        else {
            expect(Array.isArray(sweets)).toBe(true);
            expect(sweets.length).toBeGreaterThan(0);
            sweets.forEach((sweet) => {
            const keys = Object.keys(sweet);
            expect(keys.length).toBe(5); // Ensure there are 5 keys in each sweet object

            // Check for specific keys
            expect(keys).toContain("id");
            expect(keys).toContain("name");
            expect(keys).toContain("category");
            expect(keys).toContain("price");
            expect(keys).toContain("quantity");
        })
    }
});

    it('should delete a sweet by ID', () => {
        const sweets = viewAllSweets();
        if (sweets.length === 0) {
            expect(() => deleteSweetById(1)).toThrow("Sweet not found");
        }
        else {
            const  sweetTODelete = sweets[0];
            const deletedSweet = deleteSweetById(sweetTODelete.id);
            expect(deletedSweet.id).toEqual(sweetTODelete.id);

            const updatedSweets = viewAllSweets();
            expect(updatedSweets.length).toBe(sweets.length - 1);

            const exist = updatedSweets.some(sweet => sweet.id === sweetTODelete.id);
            expect(exist).toBe(false);
        }
});
});
          