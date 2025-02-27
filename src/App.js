import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Ensure you have a Navbar for navigation
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ContactPage from "./pages/Contact";
import Skills from "./pages/Skills";
import HomePage from "./pages/Home";
import AuthorsNote from "./pages/AuthorsNote";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Add Navbar for navigation */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/note" element={<AuthorsNote />} />
      </Routes>
    </Router>
  );
};

export default App;
