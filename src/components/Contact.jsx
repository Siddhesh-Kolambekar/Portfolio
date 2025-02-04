import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_41920gh",
        "template_hh179gd",
        templateParams,
        "-Q7NZf-_Ur_H7xmcK"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send message. Please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "6vh", fontSize: "5vh" }} className="variable">Contact</h1>
      <div style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h2>Contact Me</h2>
        <p><strong>📞 Mobile:</strong> +91 9653198374</p>
        <p><img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" width="20"/> <strong>Gmail:</strong> siddkol04@gmail.com</p>
        <p><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" width="20"/> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/siddhesh-kolambekar-b25501348" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/siddhesh-kolambekar-b25501348</a></p>
        <p><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="20"/> <strong>GitHub:</strong> <a href="https://github.com/Siddhesh-Kolambekar" target="_blank" rel="noopener noreferrer">https://github.com/Siddhesh-Kolambekar</a></p>
      </div>

      <form style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }} onSubmit={handleSubmit}>
        <label htmlFor="name" style={{ fontWeight: "bold" }}>Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />

        <label htmlFor="email" style={{ fontWeight: "bold" }}>Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />

        <label htmlFor="subject" style={{ fontWeight: "bold" }}>Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Enter subject" value={formData.subject} onChange={handleChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />

        <label htmlFor="message" style={{ fontWeight: "bold" }}>Message</label>
        <textarea id="message" name="message" placeholder="Enter your message" rows="5" value={formData.message} onChange={handleChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", resize: "none" }}></textarea>

        <button type="submit" style={{ padding: "10px", backgroundColor: "#000", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>Submit</button>
        {status && <p style={{ textAlign: "center", fontWeight: "bold" }}>{status}</p>}
      </form>
    </>
  );
};

export default Contact;
