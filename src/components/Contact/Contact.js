// Contact.js
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-form" id="contact">
      <h2 className="contact-tittle">Send Me an Email!!!</h2>
      <p className="contact-description">
        Send me an email to this address
        <a href="mailto:juanunez92@gmail.com"> juanunez92@gmail.com </a> or fill
        in the form.
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className="social-links">
        <h3>Social Media</h3>
        <ul>
            <li><a href="https://www.linkedin.com/in/jnuneznun/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://www.behance.net/juanannunezn" target="_blank" rel="noreferrer">Behance</a></li>
            <li><a href="https://github.com/juanunez92" target="_blank"rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
    </div>
  );
};
export default Contact;
