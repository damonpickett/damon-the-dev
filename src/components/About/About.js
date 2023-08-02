import "./About.css";

const About = (props) => {
  return (
    <div className="about fade-in">
      <h2>About</h2>
      <p>
        Hi, I’m Damon Pickett and I build AI-powered apps. In 2019 I was working
        as a Quality Assurance Lead in a call centre. I tasked myself with
        building data visualizations in Excel to represent the level of customer
        service that our department was achieving. During this process I often
        found myself losing track of time and working past the end of my shift
        without knowing it. I decided that that was the way I wanted work to
        feel and two years later I signed up for General Assembly’s Software
        Engineering Immersive.
      </p>
      <p>
        Since then I’ve built an{" "}
        <a
          className="content-link"
          href="https://github.com/damonpickett/buge"
          target="_blank"
          rel="noreferrer"
        >
          AI-powered debugging tool
        </a>
        , a{" "}
        <a
          className="content-link"
          href="https://github.com/damonpickett/macta"
          target="_blank"
          rel="noreferrer"
        >
          command-line application
        </a>{" "}
        which uses AI to help you find terminal commands, a{" "}
        <a
          className="content-link"
          href="https://blackbrooklodge.ca/"
          target="_blank"
          rel="noreferrer"
        >
          website for a local events centre
        </a>
        , and more.
      </p>
      <p>
        I’m currently learning how to use{" "}
        <a
          className="content-link"
          href="https://autogpt.net/"
          target="_blank"
          rel="noreferrer"
        >
          AutoGPT
        </a>{" "}
        to do market research before I launch my next app. In the meantime, who
        are you? What are you up to? Is there anything I might be able to help
        you with?
      </p>
      <button
        className="clipped contact"
        onClick={() => props.setContactModal(true)}
      >
        Get in touch
      </button>
    </div>
  );
};

export default About;
