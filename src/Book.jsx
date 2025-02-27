import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";

const pages = [Home, About, Projects, Contact];

const flipSound = new Audio("/parchment-turn.wav");

const Book = () => {
  const savedPage = parseInt(localStorage.getItem("currentPage"), 10);
  const [currentPage, setCurrentPage] = useState(
    Number.isNaN(savedPage) ? 0 : savedPage
  );

  const CurrentPageComponent = pages[currentPage];

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const playFlipSound = () => {
    flipSound.pause();
    flipSound.currentTime = 0;
    flipSound
      .play()
      .catch((error) => console.warn("Audio playback failed", error));
  };

  const goToPage = (index) => {
    if (index !== currentPage) {
      playFlipSound();
      setCurrentPage(index);
    }
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextPage();
      } else if (event.key === "ArrowLeft") {
        prevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage]);

  return (
    <div className="book-container">
      {currentPage > 0 && (
        <button className="nav-button left" onClick={prevPage}>
          <FaArrowLeft />
        </button>
      )}

      <motion.div
        key={currentPage}
        initial={{ opacity: 0, rotateY: -90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 90 }}
        transition={{ duration: 0.6 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(event, info) => {
          if (info.offset.x > 50 && currentPage > 0) {
            prevPage();
          } else if (info.offset.x < -50 && currentPage < pages.length - 1) {
            nextPage();
          }
        }}
        className="page"
      >
        <CurrentPageComponent />
      </motion.div>

      {currentPage < pages.length - 1 && (
        <button className="nav-button right" onClick={nextPage}>
          <FaArrowRight />
        </button>
      )}

      {/* 📌 Clickable Progress Indicator */}
      <div className="progress-indicator">
        {pages.map((_, index) => (
          <span
            key={index}
            className={index === currentPage ? "active" : ""}
            onClick={() => goToPage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Book;
