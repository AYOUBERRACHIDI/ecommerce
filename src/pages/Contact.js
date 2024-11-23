import React, { useState } from 'react';
import './Contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Votre message a été envoyé !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      <form onSubmit={handleSubmit}>
        <label>Nom</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
