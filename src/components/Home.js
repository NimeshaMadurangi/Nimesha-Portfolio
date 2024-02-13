// components/Home.js

import React from 'react';


function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my projects, skills, and more!</p>
      <div className="button-container">
        <button className="button-container"><a href="#about">About</a></button>
        <a href="#projects" className="button-container">Projects</a>
        <a href="#skills" className="button-container">Skills</a>
        <a href="#contact" className="button-container">Contact</a>
      </div>
    </div>
  );
}

export default Home;
