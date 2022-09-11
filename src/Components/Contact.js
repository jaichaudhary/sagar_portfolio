import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get In Touch</span>

      <div className="contact__desc">
        <p className="contact__para">
          My inbox is always open. Whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </p>
      </div>
      <div className="contact__button">
        <div
          onClick={() => {
            window.open("mailto:sagar.chaudhary.1044@gmail.com");
          }}
          className="button button--flex"
        >
          Drop an email
        </div>
      </div>
    </div>
  );
}

export default Contact;
