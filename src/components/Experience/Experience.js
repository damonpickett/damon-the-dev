import React, { useState, useEffect } from "react";
import "./Exp.css";
import experienceContent from "./experienceContent.json"; // Import the JSON content

const Experience = (props) => {
  // State to track the selected menu item
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    "software-development"
  );

  // State to track triangle bullet points
  const [selectedTri, setSelectedTri] = useState(1);

  const [showSlideIn, setShowSlideIn] = useState(false);

  // Function to handle menu item click and update selectedMenuItem state
  const handleMenuItemClick = (menuItem, index) => {
    setSelectedMenuItem(menuItem);
    setSelectedTri(index);
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
    <div className="experience fade-in">
      <div className={`exp-main ${showSlideIn ? "slide-in" : ""}`}>
        <h2>{experienceContent[selectedMenuItem].title}</h2>
        {experienceContent[selectedMenuItem].content.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{__html: paragraph}}/>
        ))}
        <button className="clipped contact" onClick={() => props.setContactModal(true)}>
          Get in Touch
        </button>
      </div>
      <div className="exp-nav">
        <h1>Experience</h1>
        <ul className="exp-ul">
          <li
            className={selectedTri === 1 ? "selected link" : "link"}
            onClick={() => handleMenuItemClick("software-development", 1)}
          >
            Software Development
          </li>
          <li
            className={selectedTri === 2 ? "selected link" : "link"}
            onClick={() => handleMenuItemClick("work-experience", 2)}
          >
            Work Experience
          </li>
          <li
            className={selectedTri === 3 ? "selected link" : "link"}
            onClick={() => handleMenuItemClick("education", 3)}
          >
            Education
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
