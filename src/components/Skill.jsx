const groups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript ES6+",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Axios",
      "JWT",
      "MongoDB",
      "MySQL",
      "IndexedDB",
    ],
  },
  { title: "Tools & 3D", items: ["Git", "Bitbucket", "Three.js", "Rapier"] },
];
const Skill = () => (
  <div className="content-width">
    <div className="section-heading">
      <p className="eyebrow">MY TOOLKIT</p>
      <h2>Skills & technologies</h2>
      <p>Tools I use to build, connect, and improve web applications.</p>
    </div>
    <div className="skill-groups">
      {groups.map((group) => (
        <article className="skill-card" key={group.title}>
          <h3>{group.title}</h3>
          <div className="skill-list">
            {group.items.map((item) => (
              <span className="skill-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </div>
);
export default Skill;
