import React from 'react';
import Header from './Header';

function Home() {
  return (
    <section id="home" style={{ backgroundImage: 'url("./bc.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="content-container">
        <div className="desc">
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
