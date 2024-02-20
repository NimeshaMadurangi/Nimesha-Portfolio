import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2 className="conth1">Contact</h2>
      <h4>Call me 
        <br/> <t/>078 482 8918
        <br/> <t/>076 173 7909</h4>

      <div className="contact-form">
        <h4>Or send me a message:</h4>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
