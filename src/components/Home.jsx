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
    <div
      className="hero-visual"
      aria-label="Decorative frontend development graphic"
    >
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="code-window">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <p>
          <span>const</span> developer = {"{"}
        </p>
        <p className="code-indent">
          name: <b>&quot;Siddhesh&quot;</b>,
        </p>
        <p className="code-indent">
          focus: <b>&quot;Frontend&quot;</b>,
        </p>
        <p className="code-indent">
          stack: [&quot;React&quot;, &quot;Next.js&quot;]
        </p>
        <p>{"}"}</p>
        <div className="code-cursor">▍</div>
      </div>
      <div className="floating-tag tag-react">React.js</div>
      <div className="floating-tag tag-next">Next.js</div>
      <div className="floating-tag tag-ts">TypeScript</div>
    </div>
  </div>
);
export default Home;
