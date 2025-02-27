import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookLayout from "./components/BookLayout";
import Home from "./pages/HomePage";
import About from "./pages/AboutMe";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";
import Skills from "./pages/SkillsPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Book Cover */}
        <Route path="/book" element={<BookLayout />}>
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
