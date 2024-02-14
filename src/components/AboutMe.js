// components/AboutMe.js

import React from 'react';

function AboutMe() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="about-content">
        <p>Nimesha Madurangi</p>
        <p>BSc. (Hons) in Information Technology</p>
        <div className="image-container2">
          <img src ="/female-developer-vector.jpg"  // Replace with the actual path to your image
            alt="Description of the image"
            className="profile-image"
          />
          </div>
      </div>
    </section>
  );
}

export default AboutMe;
