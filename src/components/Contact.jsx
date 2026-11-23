import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const handleChange = (event) =>
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus("");
    try {
      await emailjs.send(
        "service_nrjj5we",
        "template_hh179gd",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "-Q7NZf-_Ur_H7xmcK",
      );
      setStatus("Thanks! Your message has been sent.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus(
        "Sorry, your message could not be sent. Please email me directly.",
      );
    } finally {
      setSending(false);
    }
  };
  return (
    <div className="content-width">
      <div className="section-heading">
        <p className="eyebrow">LET&apos;S CONNECT</p>
        <h2>Have a project in mind?</h2>
        <p>
          I&apos;m open to frontend developer opportunities and interesting
          collaborations.
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-intro">
          <h3>Let&apos;s talk.</h3>
          <p>
            Have an opportunity or want to discuss a project? Send me a message
            and I&apos;ll get back to you.
          </p>
          <a href="mailto:siddkol04@gmail.com">siddkol04@gmail.com ↗</a>
          <a href="tel:+919653198374">+91 9653198374</a>
          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/siddhesh-kolambekr"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/Siddhesh-Kolambekar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
          </div>
          <label>
            Subject
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell me a little about it..."
              required
            />
          </label>
          <button
            className="button button-primary"
            type="submit"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send message ↗"}
          </button>
          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
export default Contact;
