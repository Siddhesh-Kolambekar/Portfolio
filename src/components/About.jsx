import React from 'react';

const About = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '2rem',
    backgroundColor: 'lightgray',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2.5rem',
    color: '#333',
    paddingBottom: '10px',
  };

  const tableStyle = {
    width: '45%',
    fontSize: '1rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    overflow: 'hidden',
  };

  const tableCellStyle = {
    padding: '12px',
    borderBottom: '1px solid #eee',
  };

  const thStyle = {
    ...tableCellStyle,
    backgroundColor: '#007bff',
    color: 'white',
    fontWeight: 'bold',
    width: '30%',
  };

  const tdStyle = {
    ...tableCellStyle,
    width: '70%',
  };

  const profileTextStyle = {
    width: '45%',
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  return (
    <>
      <div style={{ padding: '2rem' }}>
        <h1 style={headingStyle}>About Me</h1>
        <div style={containerStyle}>
          <table style={tableStyle}>
            <tbody>
              {[
                ['Name', 'Siddhesh Kolambekar'],
                ['Education', 'Junior College'],
                ['Address', 'Mumbai, Maharashtra, India'],
                ['Phone', '+91 9653198374'],
                ['Gmail', 'siddkol04@gmail.com'],
                ['Linkedin', <a href="https://www.linkedin.com/in/siddhesh-kolambekar-b25501348" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn Profile</a>],
                ['GitHub', <a href="https://github.com/Siddhesh-Kolambekar" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub Profile</a>],
              ].map(([label, value], index) => (
                <tr key={index}>
                  <th style={thStyle}>{label}</th>
                  <td style={tdStyle}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={profileTextStyle}>
            Hi, I'm Siddhesh Kolambekar, a FrontEnd developer with a strong passion for
            building seamless, interactive, and user-friendly web applications. I
            specialize in creating dynamic, responsive websites using modern
            technologies like React, JavaScript, and CSS. With an eye for design
            and detail, I focus on ensuring that every project I work on delivers
            both functionality and a delightful user experience.
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "3vh" }} />
    </>
  );
};

export default About;