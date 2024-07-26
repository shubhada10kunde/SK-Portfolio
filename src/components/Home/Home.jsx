import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-container fade-in">
      <div className="home-content">
        <h3 className="h13">Hello,</h3>
        <h1>I'm Shubhada Kunde</h1>
        <h3 className="h3">Software Developer / Frontend Developer</h3>
        <br />
        <p>
          Passionate web developer armed with a solid foundation in React.js,
          Javascript, HTML and CSS, enthusiastic to apply my dynamic mix of
          programming proficiency and thirst for knowledge to make meaningful
          contributions to software development.{" "}
        </p>

        <div>
          <Link
            to="https://www.linkedin.com/in/shubhada-kunde-b1b02a248?"
            className="tool-link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link to="https://github.com/shubhada10kunde" className="tool-link">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <a href="mailto:shubhadakunde8@gmail.com" className="tool-link">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>

      <div className="home-img">
        <div className="profile">
          <img src="./images/assets/Shubh.png" alt="" width="420" />
        </div>

        {/* <div> */}
        {/* <div className="tech-icon2">
            <img
              src="./images/assets/javascript2.png"
              alt=""
              className="icon-image"
            />
          </div> */}
        {/* <div className="tech-icon2">
            <img src="./images/assets/html.png" alt="" className="icon-image" />
          </div>
          <div className="tech-icon2">
            <img src="./images/assets/css.png" alt="" className="icon-image" />
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Home;
