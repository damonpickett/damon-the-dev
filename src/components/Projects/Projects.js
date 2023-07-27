import React, { useState } from "react";
import "./Projects.css";
import { projects } from "./projectsContent.js";

const Projects = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const handleMenuItemClick = (menuItem, index) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="projects">
      <div className="projects-main">
        <h2>{projects[selectedMenuItem].title}</h2>
        {projects[selectedMenuItem].description.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
        ;
        {projects[selectedMenuItem].code === "" ? null : (
          <a
            href={projects[selectedMenuItem].code}
            target="_blank"
            rel="noreferrer"
          >
            <button className="clipped">View Code</button>
          </a>
        )}
        {projects[selectedMenuItem].site === "" ? null : (
          <a
            href={projects[selectedMenuItem].site}
            target="_blank"
            rel="noreferrer"
          >
            <button className="clipped">View Site</button>
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
