import "./Home.css";
import profilePic from "../../assets/profile-pic.jpeg";
import ReactLogo from "../../assets/Desktop/Tablet/react.png";
import PythonLogo from "../../assets/Desktop/Tablet/python.png";
import AILogo from "../../assets/Desktop/Tablet/ai.png";
import FigmaLogo from "../../assets/Desktop/Tablet/figma.png";

const Home = (props) => {
  return (
    <div className="home">
      <div className="hero">
        <div className="profile-container">
          <img src={profilePic} className="profile-pic" alt="Damon Pickett" />
        </div>
        <div className="hero-text">
          <div className="site-title">
            <h1>Damon the Dev</h1>
          </div>
          <div className="site-subtitle">
            <h2>Software Developer</h2>
          </div>
          <div className="value-prop">
            <p>
              Unlock the power of seamless user experiences and intelligent
              solutions with a front-end and AI specialist.
            </p>
          </div>
          <button
            className="contact"
            onClick={() => props.setContactModal(true)}
          >
            Get in touch
          </button>
        </div>
      </div>
      <div className="tech-stack">
        <div className="tech-item">
          <img src={ReactLogo} alt="react" />
        </div>
        <div className="tech-item">
          <img src={PythonLogo} alt="python" />
        </div>
        <div className="tech-item">
          <img src={AILogo} alt="ai" />
        </div>
        <div className="tech-item">
          <img src={FigmaLogo} alt="figma" />
        </div>
      </div>
    </div>
  );
};

export default Home;
