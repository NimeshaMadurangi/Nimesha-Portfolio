// components/AboutMe.js

import React from 'react';

function AboutMe() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="about-content">
      <h3>
      Hey there! 👋 I’m Nimesha Madurangi, a third-year undergraduate student at the Sri Lanka Institute of Information Technology (SLIIT). Currently, I’m pursuing my BSc. (Hons) in Information Technology with a specialization in Information Technology! 🌟
        </h3>

        <div className="image-container">
          <img
            src="/programming_01.gif"
            alt="Programming GIF"
            className="programming-gif"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
