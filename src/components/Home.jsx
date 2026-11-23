import "./Home.css";
import profilePhoto from "../assets/ResumePic.png";

const Home = () => (
  <div className="hero content-width">
    <div className="hero-copy">
      <p className="eyebrow">HELLO, I&apos;M SIDDHESH</p>
      <h1>
        Building clean, useful <span>web experiences.</span>
      </h1>
      <p className="hero-role">Frontend Developer · React.js · Next.js</p>
      <p className="hero-description">
        I build responsive interfaces, connect products to APIs, and turn
        complex workflows into clear, user-friendly experiences.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">
          Explore my work <span>↗</span>
        </a>
        <a className="button button-secondary" href="#contact">
          Get in touch
        </a>
      </div>
      <div className="hero-meta">
        <span>
          <i className="status-dot" /> Available for frontend opportunities
        </span>
        <span>Mumbai, India</span>
      </div>
    </div>

    <div className="hero-visual profile-visual">
      <div className="profile-photo-frame">
        <img
          className="profile-photo"
          src={profilePhoto}
          alt="Portrait of Siddhesh Kolambekar"
        />
      </div>
      <span className="profile-photo-label">Frontend Developer</span>
    </div>
  </div>
);

export default Home;
