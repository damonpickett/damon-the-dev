import "./MainContent.css";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import About from "../About/About";
import ContactModal from "../ContactModal/ContactModal";

function MainContent() {
  const [contactModal, setContactModal] = useState(false);

  return (
    <div className="main-content">
      <div className="routes-container">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              contactModal={contactModal}
              setContactModal={setContactModal}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              contactModal={contactModal}
              setContactModal={setContactModal}
            />
          }
        />
        <Route
          path="/about"
          element={<About setContactModal={setContactModal} />}
        />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/experience"
          element={<Experience setContactModal={setContactModal} />}
        />
      </Routes>
      </div>
      <ContactModal
        contactModal={contactModal}
        setContactModal={setContactModal}
      />
      <div className="footer-content">
        <div className="credits">
          <p>
            Designed and{" "}
            <a
              className="content-link"
              href="https://github.com/damonpickett/damon-the-dev"
              rel="noreferrer"
              target="_blank"
            >
              built
            </a>{" "}
            by Damon the Dev
          </p>
          <p>
            Icons by{" "}
            <a
              className="content-link"
              href="https://icons8.com/"
              rel="noreferrer"
              target="_blank"
            >
              Icons8
            </a>
          </p>
        </div>
        <div className="social">
          <a
            href="https://twitter.com/Damon_Pickett"
            rel="noreferrer"
            target="_blank"
            className="first link"
          >
            <img src={twitter} alt="twitter" className="social-icon" />
          </a>
          <a
            href="https://github.com/damonpickett"
            rel="noreferrer"
            target="_blank"
            className="second link"
          >
            <img src={github} alt="github" className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/damon-pickett/"
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            <img src={linkedin} alt="linkedin" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
