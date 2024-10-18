// src/App.js
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Introduction/>
      <AboutMe/>
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
