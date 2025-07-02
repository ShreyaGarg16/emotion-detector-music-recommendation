// src/components/Contact.js
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>Email: <a href="mailto:support@emotiontune.com">support@emotiontune.com</a></p>
      <p>Instagram: <a href="https://instagram.com/emotiontune" target="_blank" rel="noopener noreferrer">@emotiontune</a></p>
    </section>
  );
};

export default Contact;

