# Flipbook Web App

This is a **Flipbook Web App** built using **React** and **React Router** to provide an interactive book-like experience. The project follows a mobile-first approach with a responsive design.

## 🚀 Features
- 📖 Interactive flipbook layout
- 📌 Fixed & responsive navigation bar
- 🌐 React Router for seamless navigation
- 🎨 Themed with **MedievalSharp** font for an aesthetic book-like feel

## 📂 Project Structure
```
📦 flipbook-app
├── 📂 public
│   ├── index.html
│   ├── manifest.json
│   ├── assets/
├── 📂 src
│   ├── 📂 components
│   │   ├── Navbar.jsx
│   │   ├── BookLayout.jsx
│   ├── 📂 styles
│   │   ├── main.css
│   │   ├── navbar.css
│   │   ├── flipbook.css
│   │   ├── layout.css
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
```

## 🛠️ Technologies Used
- **React** (Frontend framework)
- **React Router** (Navigation)
- **CSS3** (Styling with modular imports)

## 📦 Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/KSLW/medieval-portfolio.git
cd flipbook-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm start
```

The app will be available at `http://localhost:3000/`

## 🎨 Styling
All CSS files are imported into `main.css`, which is linked in the HTML. The global font style is set using:
```css
@import url('https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap');

* {
  font-family: 'MedievalSharp', serif;
  overflow: hidden;
}
```

## 🚧 Known Issues
- **React Router Future Flag Warnings** → May need updates for React Router v7.
- **Manifest.json Syntax Error** → Ensure the JSON file is correctly formatted.

## 📌 To-Do
- 📱 Improve mobile responsivenes
- 🖼️ Enhance styling for book pages

## 📜 License
This project is open-source under the **MIT License**.

---
Happy coding! 🚀📖

