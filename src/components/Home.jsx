import React from 'react';
import Header from './Header';
import Animation from './Animation';

function Home() {
  return (
    <section id="home">
      <div className="content-container">
        <div className="desc">
          <h3>- Hello -</h3>
          <h1>I'm Nimesha Madurangi</h1>
          <h3>Software Engineer</h3>
        </div>
        <Animation />
        <br />
        <h4>Explore my projects, skills, and more!</h4>
        <br />
      </div>
    </section>
  );
}

export default Home;
