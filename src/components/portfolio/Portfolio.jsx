import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/CineScreen.jpg"
import IMG2 from "../../assets/Dashboard.jpg";
import IMG3 from "../../assets/EBazaar.jpg";
import IMG4 from "../../assets/Evogym.jpg";
import IMG5 from "../../assets/LandingWebsite.jpg";
import IMG6 from "../../assets/Tripify.jpg";

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>"Cine Screen" is a Movie library Website using React.js</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Sanket0798?tab=projects"
              className="btn"
              target={"_blank"}
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>"Material Dashboard" is free MUI Admin Template based on React.</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Sanket0798?tab=projects"
              className="btn"
              target={"_blank"}
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a Frontend E-Commerce Website using React Router DOM.</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Sanket0798?tab=projects"
              className="btn"
              target={"_blank"}
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>"Evogym" is a Complete Typescript React Fitness Application.</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Sanket0798?tab=projects"
              className="btn"
              target={"_blank"}
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a simple Landing Website using HTML & CSS.</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Sanket0798?tab=projects"
              className="btn"
              target={"_blank"}
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>"Tripify" is a Frontend based Travel Website.</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Sanket0798?tab=projects"
              className="btn"
              target={"_blank"}
            >
              Github
            </a>
          </div>
        </article>
      </div>
      <div className="many-more">
        <a
          href="https://github.com/Sanket0798?tab=repositories"
          className="btn" target="_blank"
        >
          AND MANY MORE....
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
