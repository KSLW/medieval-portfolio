import React from "react";
import "../styles/ProjectsPage.css";

const projects = [
  {
    title: "Project One",
    description: "A cool project that does amazing things.",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Project Two",
    description: "Another awesome project that solves problems.",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Project Three",
    description: "A discord bot written in python",
    githubLink: "https://github.com/KSLW/AllInOneBot",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
