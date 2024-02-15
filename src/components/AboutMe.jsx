import React from 'react';

function AboutMe() {
  return (
    <section id="about">
      <h1 id="about_h1">About Me</h1>
      <div className="about-content">
        <p>Hi, I'm Nimesha Madurangi.</p>
        <p>I hold a BSc. (Hons) in Information Technology.</p>
        <p>I am a passionate and dedicated developer with expertise in web development.</p>
        <div className="image-container2">
          <img
            src="/female-developer-vector.jpg"
            alt="Description of the image"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
