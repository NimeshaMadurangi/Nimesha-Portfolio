// App.js

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
