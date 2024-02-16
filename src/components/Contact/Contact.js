// Contact.js
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
   
    <div className="contact-form">
    <h2>Contacto</h2>
    <p>Send me a message <a href="mailto:juanunez92@gmail.com>" >Contact me</a> or complete the form</p>
    <form>
        <div className="form-row">
            <div className="form-group">
                <label htmlFor="name1">Your Name:</label>
                <input type="text" id="name1" name="name1" />
            </div>
            <div className="form-group">
            <label htmlFor="email">Your email:</label>
                <input type="text" id="email" name="email" />
            </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Send!</button>
        </div>
        </form>
      <div className="social-links">
        <h3>Social Media</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/jnuneznun/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/juanannunezn"
              target="_blank"
              rel="noreferrer"
            >
              Behance
            </a>
          </li>
          <li>
            <a
              href="https://github.com/juanunez92"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contact;