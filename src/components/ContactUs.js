// src/components/ContactUs.js
import React, { useState } from 'react';

const ContactUs = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been received: ' + message);
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
