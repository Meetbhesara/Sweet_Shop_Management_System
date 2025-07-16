
const fs = require('fs');
const path = require('path');   
const {getUserInput} = require('../utils/getUserInput');

const {addSweet , viewAllSweets ,deleteSweetById } = require('../../src/controllers/sweetController');   

const filePath = path.join(__dirname, '../data/sweets.json');

describe('Sweet shop management system', () => {
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
          