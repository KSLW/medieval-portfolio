import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./../styles/BookLayout.css";
import useSound from "use-sound";
import pageFlipSound from "../assets/parchment-turn.wav";

const BookLayout = () => {
  const [play] = useSound(pageFlipSound, { volume: 0.3 });
  const location = useLocation();

  // Ensure only "/book/..." routes use the flipbook effect
  const isBookPage = location.pathname.startsWith("/book");

  return (
    <div className="layout-container">
      {isBookPage ? (
        <div className="flipbook-container">
          <HTMLFlipBook
            width={550}
            height={750}
            showCover={true}
            flippingTime={900}
            useMouseEvents={true}
            clickEventForward={true}
            swipeDistance={15}
            onFlip={(e) => {
              if (e.data !== 0) play();
            }}
          >
            {/* Cover Page */}
            <div className="book-page cover-page">
              <h1>My Portfolio</h1>
            </div>

            {/* Table of Contents */}
            <div className="book-page left-page">
              <Navbar />
            </div>

            {/* Dynamic Content Page (Now properly placed inside the book) */}
            <div className="book-page right-page">
              <Outlet />
            </div>

            {/* Extra Blank Page for Proper Flipping */}
            <div className="book-page blank-page"></div>
          </HTMLFlipBook>
        </div>
      ) : (
        <Outlet /> // Render non-book pages normally
      )}
    </div>
  );
};

export default BookLayout;
