Objective
Create a simple Sweet Shop Management System following TDD that allows users to
perform basic operations such as adding sweets, updating sweet details, deleting sweets,searching, sorting, and viewing available sweets.


## 📁 Folder Structure (Updated)

Sweet_Shop_Management_System/
├── src/
│   ├── controllers/
│   │   ├── sweetController.js
│   │   └── inventory/
│   │       └── inventoryController.js
│   ├── services/
│   │   └── sweetService.js
│   └── utils/
│       ├── fileUtils.js
├── test/
│   ├── add/
│   │   └── addSweet.test.js
│   ├── view/
│   │   └── viewSweets.test.js
│   ├── delete/
│   │   └── deleteSweet.test.js
│   ├── searchAndSort/
│   │   ├── searchSweets.test.js
│   │   └── sortSweets.test.js
│   ├── inventory/
│   │   └── inventoryController.test.js
│   └── utils/
│       └── getUserInput.js
├── data/
│   └── sweets.json
├── package.json
└── README.md


## ✅ Features Implemented (Updated)

### 🟢 Add Sweet
- Add a new sweet with:
  - Unique `id`
  - `name` (string)
  - `category` (e.g., chocolate, candy, pastry)
  - `price` (number ≥ 1)
  - `quantity` (number ≥ 1)

### 🟢 View All Sweets
- View a full list of all available sweets from the JSON data store.

### 🟢 Delete Sweet
- Delete a sweet by its `id`.
- Error handling if the sweet does not exist.

### 🟢 Search Sweets
- Search sweets by name or category.
- Filter sweets by price range.

### 🟢 Sort Sweets
- Sort sweets by price, name, or category (ascending/descending).

### 🟢 Inventory Management
- Purchase sweet (decrease quantity, error if not enough stock or invalid quantity).
- Restock sweet (increase quantity, error if sweet not found or invalid quantity).
---

## 🚀 How to Install and Run

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run all tests:**
   ```sh
   npx jest
   ```

3. **Run a specific test file:**
   ```sh
   npx jest test/searchAndSort/searchSweets.test.js
   npx jest test/searchAndSort/sortSweets.test.js
   npx jest test/inventory/inventoryController.test.js
   ```

4. **Use the implemented functions/controllers** in your own scripts or extend the CLI as needed.

---

## 🧪 Test-Driven Development (TDD)

- Tests written using **Jest**.
- Test files are organized by feature:
- 

## 📁 Test Folder Structure (Updated)

test/
├── add/
│   └── addSweet.test.js
├── view/
│   └── viewSweets.test.js
├── delete/
│   └── deleteSweet.test.js
├── searchAndSort/
│   ├── searchSweets.test.js
│   └── sortSweets.test.js
└── inventory/
    └── inventoryController.test.js

---

## 📄 Example Test File Content

### test/searchAndSort/searchSweets.test.js
```javascript
// ...your searchSweets.test.js code here...
```

### test/searchAndSort/sortSweets.test.js
```javascript
// ...your sortSweets.test.js code here...
```

### test/inventory/inventoryController.test.js
```javascript
// ...your inventoryController.test.js code here...
```

