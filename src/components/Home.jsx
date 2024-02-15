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
          <h3>Software Engineer</h3>
        </div>
        </div>
    </section>
  );
}

export default Home;
