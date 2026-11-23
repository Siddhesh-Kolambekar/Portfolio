const projects = [
  {
    number: "01",
    name: "FusionCraft Hub",
    status: "In development",
    description:
      "A local-first browser workspace with a 3D design environment and a separate physics experimentation environment. Includes scene editing, Rapier physics simulation, and IndexedDB persistence.",
    stack: ["Next.js", "React", "Three.js", "Rapier", "IndexedDB"],
    demo: "https://fusioncraft-hub.siddkol04.workers.dev",
    repo: "https://github.com/Siddhesh-Kolambek/FusionCraft-Hub",
  },
  {
    number: "02",
    name: "Dish Scanner",
    status: "In development",
    description:
      "A QR-code-based nutrition scanner built to retrieve nutritional information and support calorie tracking through a React interface and backend REST APIs.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    repo: "https://github.com/Siddhesh-Kolambekar/Dish-Scanner",
  },
  {
    number: "03",
    name: "Property Listing Platform",
    status: "Live project",
    description:
      "An interactive, map-based property listing application with user authentication and a responsive interface for exploring property information.",
    stack: ["React", "JavaScript", "Maps", "Authentication"],
    demo: "https://property-listing-dnu.pages.dev/",
    repo: "https://github.com/Siddhesh-Kolambekar/Property-Listing",
  },
];
const Project = () => (
  <div className="content-width">
    <div className="section-heading">
      <p className="eyebrow">SELECTED WORK</p>
      <h2>Projects I&apos;ve built</h2>
      <p>A mix of product-focused frontend work and full-stack experiments.</p>
    </div>
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.number}>
          <div className="project-card-top">
            <span className="project-number">{project.number}</span>
            <span
              className={`project-status ${project.status === "Live project" ? "is-live" : ""}`}
            >
              {project.status}
            </span>
          </div>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="project-links">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live preview ↗
              </a>
            )}
            <a href={project.repo} target="_blank" rel="noreferrer">
              Source code ↗
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
);
export default Project;
