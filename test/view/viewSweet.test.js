const fs = require('fs');
const path = require('path');   
const {getUserInput} = require('../utils/getUserInput');

const {addSweet , viewAllSweets ,deleteSweetById } = require('../../src/controllers/sweetController');   

const filePath = path.join(__dirname, '../data/sweets.json');

describe('Sweet shop management system', () => {
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
})
});