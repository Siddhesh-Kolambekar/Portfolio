const About = () => (
  <div className="content-width">
    <div className="section-heading">
      <p className="eyebrow">A LITTLE ABOUT ME</p>
      <h2>
        Turning ideas into <span>interfaces.</span>
      </h2>
      <p>A practical, product-minded approach to frontend development.</p>
    </div>
    <div className="about-grid">
      <article className="about-copy">
        <p>
          I&apos;m Siddhesh, a frontend developer based in Mumbai, India. I
          enjoy building responsive web applications that are clear, reliable,
          and easy to use.
        </p>
        <p>
          At Sheshi, I worked on fintech dashboards with React and Next.js,
          built reusable components, integrated REST APIs, and collaborated with
          cross-functional teams to ship product improvements.
        </p>
        <p>
          I&apos;m continuing to expand my skills across the JavaScript
          ecosystem while keeping frontend engineering and user experience at
          the centre of my work.
        </p>
        <div className="about-links">
          <a
            href="https://github.com/Siddhesh-Kolambekar"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/siddhesh-kolambekr"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="mailto:siddkol04@gmail.com">Email ↗</a>
        </div>
      </article>
      <aside className="details-card">
        <p className="eyebrow">QUICK DETAILS</p>
        <div>
          <span>Location</span>
          <strong>Mumbai, Maharashtra, India</strong>
        </div>
        <div>
          <span>Education</span>
          <strong>BCA · IGNOU (2025–2028)</strong>
        </div>
        <div>
          <span>Focus</span>
          <strong>Frontend Development</strong>
        </div>
        <div>
          <span>Core stack</span>
          <strong>React · Next.js · JavaScript</strong>
        </div>
      </aside>
    </div>
  </div>
);
export default About;
