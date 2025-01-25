import React from "react";

const Skill = () => {
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "3rem",
    fontSize: "clamp(1.5rem, 5vw, 3rem)",
    color: "#333",
    fontWeight: "bold",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: "2rem",
    justifyContent: "center",
  };

  const skillItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const skillItemHoverStyle = {
    ":hover": {
      transform: "scale(1.05)",
      boxShadow: "0 6px 8px rgba(0,0,0,0.15)",
    },
  };

  const imageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    marginBottom: "0.75rem",
  };

  const labelStyle = {
    fontSize: "1rem",
    color: "#555",
    fontWeight: "500",
  };

  const skills = [
    {
      name: "HTML",
      icon: "https://th.bing.com/th?id=OSK.4e4c99b2afbd1e2f07a76d494756ed8e&w=50&h=50&c=11&rs=1&qlt=80&o=6&dpr=1.3&pid=SANGAM",
    },
    {
      name: "CSS",
      icon: "https://th.bing.com/th?id=OSK.SFnwzpL5L8XCveS1muxXCPI6PBsF847383Jj0IcX50Y&w=50&h=50&c=11&rs=1&qlt=80&o=6&dpr=1.3&pid=SANGAM",
    },
    {
      name: "JavaScript",
      icon: "https://th.bing.com/th/id/OIP.I5XOh9o_kbTNsXnsIc53aAHaHa?w=50&h=50&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Python",
      icon: "https://th.bing.com/th?id=OSK.51053f2608887c85ccaf7038d1e46985&w=50&h=50&c=11&rs=1&qlt=80&o=6&dpr=1.3&pid=SANGAM",
    },
    {
      name: "MySQL",
      icon: "https://th.bing.com/th/id/OIP.JVt34lGxmm0GAGNNL_mwBgHaHa?w=50&h=50&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "MongoDB",
      icon: "https://th.bing.com/th?id=OSK.5eb085f4e09e7724782c6fb3e5b18caf&w=50&h=50&c=11&rs=1&qlt=80&o=6&dpr=1.3&pid=SANGAM",
    },
    {
      name: "React",
      icon: "https://th.bing.com/th?id=OSK.Gx03gXuGYG4opIcw73oEeAm33KFjNvHyQaeBmIQaoBg&w=50&h=50&c=11&rs=1&qlt=80&o=6&dpr=1.3&pid=SANGAM",
    },
    {
      name: "Git",
      icon: "https://th.bing.com/th?id=OSK.1cd4f39e37aeaa997bfca886bce2e910&w=50&h=50&c=11&rs=1&qlt=80&o=6&dpr=1.3&pid=SANGAM",
    },
    {
      name: "Npm",
      icon: "https://th.bing.com/th?id=OSK.931c54c33d101853bdbae874b2633cf1&w=50&h=50&c=11&rs=1&qlt=80&o=6&dpr=1.3&pid=SANGAM",
    },
    {
      name: "Netlify",
      icon: "https://th.bing.com/th/id/OIP.vz7_8tUPWjssC87owmj88gHaHa?w=50&h=50&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  return (
    <>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Skills</h1>
        <div style={gridStyle}>
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                ...skillItemStyle,
                ...skillItemHoverStyle,
              }}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                style={imageStyle}
              />
              <span style={labelStyle}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <hr style={{ marginTop: "3vh" }} />
    </>
  );
};

export default Skill;
