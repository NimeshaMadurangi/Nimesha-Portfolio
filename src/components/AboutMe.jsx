import React from 'react';



function AboutMe() {
  return (
    <section id="about">
      <h1 id="abouth1">About Me</h1>
      <div className="about-content">
      <div className="image-container">
        <img
          src="./pro.png"
          alt="Profile"
          className="profile-image"
         />
    </div>
         <div id="abouth4">
          <h4>Nimesha Madurangi</h4>
          <h4>Undergraduate</h4>
          <h4>BSc. (Hons) in Information Technology</h4>
          <h4>Sri Lanka Institute of Information Technology (SLIIT)</h4>
          <h4>078 48 28 918</h4>
          <h4>Colombo <br/> SriLanka</h4>
          </div>
      </div>
    </section>
  );
}  

export default AboutMe;
