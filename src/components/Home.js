// components/Home.js

import React from 'react';
import Footer from './Footer';


function Home() {

  return (
    <section id = "home">
    <div>
      <div className="desc">
      <h3>- Hello -</h3>
      <h1>I'm Nimesha Madurangi</h1>
      </div>
      <br/>
      <h3>Explore my projects, skills, and more!</h3>
      <br/>
        <button className="square-button"><a href="#about">About</a></button>
        <button className="square-button"><a href="#projects">Projects</a></button>
        <button className="square-button"><a href="#skills">Skills</a></button>
        <button className="square-button"><a href="#contact">Contact</a></button>
        <br/>
        <button className="square-button"><a href="#about">About</a></button>
        <button className="square-button"><a href="#projects">Projects</a></button>
        <button className="square-button"><a href="#skills">Skills</a></button>
        <button className="square-button"><a href="#contact">Contact</a></button>
    </div>
    </section>
  );
}

export default Home;
