import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/book/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/book/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/book/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/book/skills"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Skills
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
