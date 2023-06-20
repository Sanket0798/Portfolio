import React from "react";
import "./about.css";
import ME from "../../assets/Coder.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year's</small>
            </article>


            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
            Detail-oriented, analytical, and self-driven programmer with extensive experience building user-facing applications. Efficient and knowledgeable coder with skills in HTML, CSS and JavaScript programming languages and frameworks such as React.js, Vue.js, Express.js 
            Self-motivated and adaptable developer with applicable database knowledge and coding skills. Organized programmer looking for an opportunity to grow as a developer and support an ambitious startup technology company. Collaborative communicator with relationship building skills.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
 