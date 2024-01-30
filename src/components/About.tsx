import React from "react";
import "@/styles/About.css";
import SectionTitle from "./SectionTitle";

const About: React.FC = () => (
  <div className="about-container">
    <SectionTitle lightText="About" blackText="Less is more work." />
    <div className="about">
      <div className="about-image-container">
        <div className="image-backdrop-one"></div>
        <div className="about-image"></div>
        <div className="image-backdrop-two"></div>
        <div className="white"></div>
      </div>
      <div className="about-text">
        <p className="bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo
          neque voluptate tempora velit cum non, fuga vitae architecto delectus
          sed maxime rerum impedit aliquam obcaecati, aut excepturi iusto
          laudantium!
        </p>
        <div className="about-line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          sapiente. Velit iure exercitationem dolores nesciunt dolore. Eum
          officiis dolorum hic voluptate quaerat minima, similique inventore
          esse, alias, sed quo officia?
        </p>
      </div>
    </div>
  </div>
);

export default About;