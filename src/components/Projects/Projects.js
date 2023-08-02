import React, { useState, useEffect } from "react";
import "./Projects.css";
import { projects } from "./projectsContent.js";

const Projects = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const [showSlideIn, setShowSlideIn] = useState(false);

  const handleMenuItemClick = (menuItem, index) => {
    setSelectedMenuItem(menuItem);
    setShowSlideIn(true);
  };

  useEffect(() => {
    if (showSlideIn) {
      const timeout = setTimeout(() => {
        setShowSlideIn(false);
      }, 500); // Replace 500 with the duration of your slide-in animation in milliseconds
      return () => clearTimeout(timeout);
    }
  }, [showSlideIn]);
  

  return (
    <div className="projects fade-in">
      <div className={`projects-main ${showSlideIn ? "slide-in" : ""}`}>
        <h2>{projects[selectedMenuItem].title}</h2>
        {projects[selectedMenuItem].description.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
        ;
        {projects[selectedMenuItem].stack === "" ? null : (
          <p><span className="stack">Stack</span>: <span className="tech">{projects[selectedMenuItem].stack}</span></p>
        )}
        {projects[selectedMenuItem].code === "" ? null : (
          <a
            href={projects[selectedMenuItem].code}
            target="_blank"
            rel="noreferrer"
          >
            <button className="clipped view">View Code</button>
          </a>
        )}
        {projects[selectedMenuItem].site === "" ? null : (
          <a
            href={projects[selectedMenuItem].site}
            target="_blank"
            rel="noreferrer"
          >
            <button className="clipped view">View Site</button>
          </a>
        )}
      </div>
      <div className="projects-nav">
        <h1>Projects</h1>
        <ul className="projects-ul">
          {projects.map((p, i) => {
            return (
              <li
                className={selectedMenuItem === p.id ? "selected" : ""}
                onClick={() => handleMenuItemClick(p.id)}
              >
                {p.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
