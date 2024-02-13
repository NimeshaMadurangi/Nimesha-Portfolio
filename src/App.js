// App.js

import React from 'react';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
