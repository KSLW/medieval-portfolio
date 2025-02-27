import React from "react";
import "../styles/SkillsPage.css";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaWind,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaFlask,
} from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="skill-icon react" /> },
  { name: "Node.js", icon: <FaNodeJs className="skill-icon nodejs" /> },
  { name: "JavaScript", icon: <SiJavascript className="skill-icon js" /> },
  { name: "Python", icon: <FaPython className="skill-icon python" /> },
  { name: "MongoDB", icon: <SiMongodb className="skill-icon mongodb" /> },
  { name: "Tailwind", icon: <FaWind className="skill-icon tailwind" /> },
  { name: "SQL", icon: <FaDatabase className="skill-icon sql" /> },
  { name: "Html5", icon: <FaHtml5 className="skill-icon html5" /> },
  { name: "Css3", icon: <FaCss3 className="skill-icon css3" /> },
  { name: "Flask", icon: <FaFlask className="skill-icon flask" /> },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills & Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
