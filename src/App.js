import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experiences from './Components/Experiences';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;