import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/HomePage.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="cover-container">
      <h1>My Coding Journey</h1>
      <p>Welcome! This book contains my skills, projects, and story.</p>
      <button className="open-book-btn" onClick={() => navigate("/book/about")}>
        Open Book 📖
      </button>
    </div>
  );
};

export default Home;
