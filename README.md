# 🚀 express-starter-kit

A minimal **Node.js + Express** boilerplate for quickly setting up REST APIs or web servers.  
Includes basic routing, error handling, and a simple folder structure — perfect for students and developers starting new Express projects.

---

## 🧱 Features
- Express server with sample routes (`GET /`)
- Centralized error handling
- Environment variable support (`.env`)
- Preconfigured scripts for development and production
- Ready-to-extend folder layout (`routes/`, `controllers/`, `middlewares/`)

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/express-starter-kit.git

# Move into the project directory
cd express-starter-kit

# Install dependencies
npm install
```

---

## 🧩 Usage

### Run in development
```bash
npm run dev
```

### Run in production
```bash
npm start
```

Then open:  
👉 http://localhost:3000

You should see:
```
Hello, Express Starter Kit!
```

---

## 🗂️ Project Structure
```
express-starter-kit/
├── package.json
├── app.js
├── .env.example
├── routes/
│   └── index.js
├── controllers/
│   └── helloController.js
├── middlewares/
│   └── errorHandler.js
└── README.md
```

---

## 🧪 Example Route
```js
// routes/index.js
import express from "express";
import { sayHello } from "../controllers/helloController.js";

const router = express.Router();
router.get("/", sayHello);
export default router;
```

```js
// controllers/helloController.js
export const sayHello = (req, res) => {
  res.json({ message: "Hello, Express Starter Kit!" });
};
```

---

## 🪄 License
MIT License © 2025 Your Name
