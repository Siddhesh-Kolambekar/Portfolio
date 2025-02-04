import React, { useState,useContext,useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import { ThemeContext } from './ThemeContext';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const openPdf = () => {
    const openPdfUrl = 'https://resume-builder-test-new.masaischool.com/resume/public?resumeId=679f400df97830ef5e9154e4';
    const downloadPdfUrl = 'https://drive.google.com/uc?export=download&id=1QcvBrzYizzLZGRJaBG0KgEJz1GTiPzv6';
    window.open(openPdfUrl, '_blank');
    const downloadLink = document.createElement('a');
    downloadLink.href = downloadPdfUrl;
    downloadLink.download = 'SiddheshKolambekar.pdf';
    downloadLink.click();
  };

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const elements = document.querySelectorAll(".variable");
    elements.forEach(el => {
      el.style.color = darkMode ? "whitesmoke" : "black";
    });
  }, [darkMode]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-header">
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <div className={`nav-links-container ${menuOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
          <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
          <a href="#skill" className="nav-link" onClick={toggleMenu}>Skill</a>
          <a href="#project" className="nav-link" onClick={toggleMenu}>Project</a>
          <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
          <button className="resume-button" onClick={() => setDarkMode(prev => !prev)}>Toggle theme</button>
          <button className="resume-button" onClick={openPdf}>Resume</button>
        </div>
      </nav>
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skill">
          <Skill />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
