import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="aboutsection">
      <div className="about">
        <h2>
          About<span>Me</span>
        </h2>
        <br />
        <h3>Frontend Developer</h3>
        <br />
        <p>
          My name is Shubhada Bhalchandra Kunde and currently I am pursuing
          Masters degree in MSC Scientific Computing at Pune University. I have
          done my graduation in BSC Computer Science from SPPU. I am a skilled
          web developer and the purpose of this portfolio is to gain more
          knowledge about technologies and tools and to achieve expertise in
          that domain and to serve as a software developer in software industry.
        </p>
        <h3>Education</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h4>SPPU</h4>
              <p>MSC Scientific Computing</p>
              <p>2023-2025</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h4>NVP College,SPPU</h4>
              <p>BSC Computer Science</p>
              <p>2017-2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
