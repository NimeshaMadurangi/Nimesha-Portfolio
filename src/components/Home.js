// components/Home.js

import React from 'react';
import Footer from './Footer';


function Home() {
  return (
    <section id = "home">
    <div>
      <h1>Welcome to My Portfolio</h1>
        
      <p>Explore my projects, skills, and more!</p>

      <div className="home-content">
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
      <br/>
        <button className="square-button"><a href="#about">About</a></button>
        <button className="square-button"><a href="#projects">Projects</a></button>
        <button className="square-button"><a href="#skills">Skills</a></button>
        <button className="square-button"><a href="#contact">Contact</a></button>
    </div>
    <Footer/>
    </section>
  );
}

export default Home;
