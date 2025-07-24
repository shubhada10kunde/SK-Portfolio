import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [showResume, setShowResume] = useState(false);

  const handleToggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <section className="aboutsection">
      <div className="about">
        <h2>
          About<span>Me</span>
        </h2>
        <br />
        <h3 className="title">Frontend Developer</h3>
        <br />
        <p>
          My name is Shubhada Bhalchandra Kunde. I have completed my Master’s
          degree in M.Sc. Scientific Computing from Savitribai Phule Pune
          University, following my graduation in B.Sc. Computer Science from the
          same university. I have also completed a 7-month internship as a
          Software Developer, where I gained hands-on experience in web
          development. I am a passionate and skilled developer with a strong
          interest in learning emerging technologies and tools. This portfolio
          showcases my journey and dedication toward becoming a proficient
          software developer in the IT industry.
        </p>

        <button className="resume-btn" onClick={handleToggleResume}>
          {showResume ? "Hide Resume" : "Show Resume"}
        </button>

        {showResume && (
          <div className="resume-container">
            <iframe
              src="./images/assets/Shubhada_kunde.pdf"
              width="100%"
              height="600px"
              type="application/pdf"
              title="Resume"
            ></iframe>
          </div>
        )}

        <h3 className="heading">Education</h3>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023-2025</div>
            <div className="timeline-content">
              <h3 className="timeline-heading">MSC Scientific Computing</h3>
              <p>University: Savitribai Phule Pune University</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2017-2020</div>
            <div className="timeline-content">
              <h3 className="timeline-heading">BSC Computer Science</h3>
              <p>
                University: Savitribai Phule Pune University <br /> Institute:
                NVP College, Nasik
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2016-2017</div>
            <div className="timeline-content">
              <h3 className="timeline-heading">HSC</h3>
              <p>
                Board: Maharashtra State Board <br /> Institute: NVP College,
                Nasik
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
