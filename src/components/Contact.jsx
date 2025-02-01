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
        "service_41920gh", // Replace with your EmailJS Service ID
        "template_hh179gd", // Replace with your EmailJS Template ID
        templateParams,
        "-Q7NZf-_Ur_H7xmcK" // Replace with your EmailJS Public Key
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

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "20px auto",
    paddingRight: "40px",
    paddingLeft:"20px",
    paddingTop:"20px",
    paddingBottom:"20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor:"white"
  };

  const labelStyle = {
    marginBottom: "5px",
    fontWeight: "bold",
    display: "block",
  };

  return (
    <>
      <h1 style={{textAlign: "center", marginBottom: "6vh", fontSize: "5vh"}}>Contact</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label style={labelStyle} htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          style={inputStyle}
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label style={labelStyle} htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          style={inputStyle}
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label style={labelStyle} htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Enter subject"
          style={inputStyle}
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label style={labelStyle} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          rows="5"
          style={{ ...inputStyle, resize: "none" }}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" style={buttonStyle}>
          Submit
        </button>

        {status && (
          <p style={{ marginTop: "10px", textAlign: "center" }}>{status}</p>
        )}
      </form>
    </>
  );
};

export default Contact;
