const fs = require('fs');
const path = require('path');   
const {getUserInput} = require('./utils/getUserInput');

const {addSweet} = require('../src/controllers/sweetController');   

const filePath = path.join(__dirname, '../data/sweets.json');

describe('Sweet shop management system', () => {
    it('should add a valid sweet from simulated user input', () => {
        const sweet = getUserInput();
        const addedSweet = addSweet(sweet);

        expect(addedSweet.name).toBe("string");
        expect(addedSweet.category).toBe("string");
        expect(addedSweet.price).toBe("number");
        expect(addedSweet.quantity).toBe("number");
        expect(addedSweet.price).toBeGreaterThanOrEqual(10);
        expect(addedSweet.price).toBeLessThanOrEqual(110);
        expect(addedSweet.quantity).toBeGreaterThanOrEqual(1);
        expect(addedSweet.id).toBeDefined();
        expect(addedSweet.id).toBeGreaterThan(0);
    })
});
