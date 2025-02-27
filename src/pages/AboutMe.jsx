import React from "react";
import "../styles/AboutMe.css";

const AboutMe = ({ name = "Kirk SL Wilkinson" }) => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        Hi! I'm <strong>{name}</strong>, a web developer passionate about
        crafting seamless digital experiences. I specialize in{" "}
        <strong>React, JavaScript, and front-end development</strong>.
      </p>
      <p>
        Always exploring new technologies, I aim to build <em>engaging</em> and{" "}
        <em>efficient</em> web applications.
      </p>
    </div>
  );
};

export default AboutMe;
