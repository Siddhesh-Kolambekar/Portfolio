import { useContext, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { ThemeContext } from "./ThemeContext.js";

const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Go to home"
        >
          SK<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav
          className={`site-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setDarkMode((value) => !value)}
            aria-label="Toggle color theme"
          >
            {darkMode ? "☀ Light" : "☾ Dark"}
          </button>
          <a className="nav-resume" href="/resume.docx" download>
            Resume ↓
          </a>
        </nav>
      </header>
      <main>
        <section id="home" className="section hero-section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="skills" className="section">
          <Skill />
        </section>
        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">CAREER</p>
            <h2>Experience</h2>
            <p>Building thoughtful interfaces for real products.</p>
          </div>
          <article className="experience-card">
            <div className="experience-top">
              <div>
                <h3>SDE-1 · Frontend Developer</h3>
                <p className="company">Sheshi · Fintech Startup</p>
              </div>
              <span className="date-pill">Mar 2025 — Jun 2026</span>
            </div>
            <ul>
              <li>
                Built and maintained fintech dashboards using Next.js and React.
              </li>
              <li>
                Created reusable UI components and dynamic financial data
                tables.
              </li>
              <li>
                Integrated REST APIs with Axios, including error handling and
                API-driven updates.
              </li>
              <li>
                Resolved production issues and collaborated with backend, QA,
                and product teams in Agile sprints.
              </li>
            </ul>
          </article>
        </section>
        <section id="projects" className="section">
          <Project />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} Siddhesh Kolambekar · Designed and built
        with React
      </footer>
    </div>
  );
}

export default App;
