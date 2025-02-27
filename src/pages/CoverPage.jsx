import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./CoverPage.css";

const CoverPage = ({ onOpen }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`cover-container ${darkMode ? "dark" : "light"}`}>
      <motion.div
        aria-label="Open Profile Book"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="cover-content"
      >
        <h1 className="title">Your Name</h1>
        <p className="tagline">Web Developer | Designer | Creator</p>
        <motion.button
          className="open-button"
          onClick={onOpen}
          aria-label="Open Book"
          whileHover={{ scale: 1.1, rotateY: 180 }}
          whileTap={{ scale: 0.9 }}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 180 }}
          transition={{ duration: 1 }}
        >
          Open Book
        </motion.button>
        <div className="theme-toggle">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </motion.div>
    </div>
  );
};

export default CoverPage;
