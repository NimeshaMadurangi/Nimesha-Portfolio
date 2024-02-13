// components/Home.js

import React from 'react';


function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <h3>Explore my projects, skills, and more!</h3>
      <br/>
        <button className="square-button"><a href="#about">About</a></button>
        <button className="square-button"><a href="#projects">Projects</a></button>
        <button className="square-button"><a href="#skills">Skills</a></button>
        <button className="square-button"><a href="#contact">Contact</a></button>
    </div>
  );
}

export default Home;
