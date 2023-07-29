import React, { useState } from "react";
import "./Exp.css";
import experienceContent from "./experienceContent.json"; // Import the JSON content

const Experience = (props) => {
  // State to track the selected menu item
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    "software-development"
  );

  // State to track triangle bullet points
  const [selectedTri, setSelectedTri] = useState(1);

  // Function to handle menu item click and update selectedMenuItem state
  const handleMenuItemClick = (menuItem, index) => {
    setSelectedMenuItem(menuItem);
    setSelectedTri(index);
  };

  return (
    <div className="experience">
      <div className="exp-main">
        {/* Display the selected content based on the selectedMenuItem */}
        <h2>{experienceContent[selectedMenuItem].title}</h2>
        {experienceContent[selectedMenuItem].content.map((paragraph, index) => (
          // <p key={index}>{paragraph}</p>
          <p key={index} dangerouslySetInnerHTML={{__html: paragraph}}/>
        ))}
        <button className="clipped contact" onClick={() => props.setContactModal(true)}>
          Get in Touch
        </button>
      </div>
      <div className="exp-nav">
        {/* Your content for the navigation section goes here */}
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
