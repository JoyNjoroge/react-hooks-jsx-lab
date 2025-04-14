import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>
      I am a passionate web developer with a love for creating dynamic and
      responsive web applications. I enjoy learning new technologies and
      improving my skills.
    </p>
    <img src={image} alt="I made this" />
  </div>
  );
}

export default About;
