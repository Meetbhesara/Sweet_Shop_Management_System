Objective
Create a simple Sweet Shop Management System following TDD that allows users to
perform basic operations such as adding sweets, updating sweet details, deleting sweets,searching, sorting, and viewing available sweets.

## 📁 Folder Structure (Part 1 - Add, View, Delete)

Sweet_Shop_Management_System/
├── src/
│ ├── controllers/
│ │ └── sweetController.js
│ ├── services/
│ │ └── sweetService.js
│ └── utils/
│ ├── fileUtils.js
│ └── getUserInput.js
├── test/
│ ├── add/
│ │ └── addSweet.test.js
│ ├── view/
│ │ └── viewSweets.test.js
│ └── delete/
│ └── deleteSweet.test.js
├── data/
│ └── sweets.json
├── package.json
└── README.md

## ✅ Features Implemented (Part 1)

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

---

## 🧪 Test-Driven Development (TDD)

- Tests written using **Jest**.
- Test files are organized by feature:
- 
## 📁 Test Folder Structure (Part 1 - Add, View, Delete)

test/
├── add/
│ └── addSweet.test.js
├── view/
│ └── viewSweets.test.js
└── delete/
└── deleteSweet.test.js

