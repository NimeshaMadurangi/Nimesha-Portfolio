import React from 'react';
import Header from './Header';

function Home() {
  return (
    <section id="home">
      <div className="content-container">
        <div className="desc">
        <div className="animation-container">
        <img
          src="./wordanime.gif"
          alt="Animation"
          className="animation-gif"
         />
    </div>
          <br/><br/><br/><br/> <br/><br/>
          <h3>- Hello -</h3>
          <h1>I'm Nimesha Madurangi</h1>
          <h3>Web Developer</h3>
          <p>Back-end / Full-Stack</p>
          <button className="square-button"><a href="#contact">Contact Me</a></button>
        </div>
        </div>
    </section>
  );
}

export default Home;
