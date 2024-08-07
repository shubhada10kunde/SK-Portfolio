import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section>
      <div className="portfolio" id="project">
        <div className="maintext" id="project">
          <h2 className="h2">
            My<span>Projects</span>
          </h2>

          <div className="portfolio-content">
            <div className="row">
              <img src="./images/assets/invento.png" alt="" />
              <div className="layer">
                <h5 className="prj-heading">INvento</h5>
                <p>
                  The purpose of INvento is to create a online tool for managing
                  inventory that makes it easy to track items and handle orders.
                  This will help to improve track of stock and process orders
                  efficiently.
                </p>

                <div>
                  <Link
                    to="https://github.com/GSPune/Inventory-Management-Project"
                    className="link"
                  >
                    <h3 className="git">GitHub</h3>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row">
              <img src="./images/assets/sk-portfolio.png" alt="" />
              <div className="layer">
                <h5 className="prj-heading">SK-Portfolio</h5>
                <p>
                  SK-Portfolio is a personal portfolio showcasing my work and
                  skills in web design and development. It features a clean
                  design and detailed project descriptions.
                </p>

                <div>
                  <Link
                    to="https://github.com/shubhada10kunde/SK-Portfolio"
                    className="link"
                  >
                    <h3 className="git">GitHub</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
