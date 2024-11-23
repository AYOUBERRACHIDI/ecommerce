import React from 'react';

const About = () => (
  <div className="about">
    <h1 style={{marginTop:"10px"}}>À propos de Air Shop</h1>
    <p>Air Shop by AYOUB ERRACHIDI - Découvrez notre sélection exclusive de sneakers.</p>
    <h2>Notre Mission</h2>
        <p>
          Chez Air Shop, nous croyons que les sneakers ne sont pas seulement des chaussures, mais un mode 
          d'expression. Notre mission est de vous offrir une expérience unique en combinant 
          <strong>style</strong>, <strong>confort</strong>, et <strong>innovation</strong>.
        </p>
        
        <h2>Contactez-nous</h2>
        <p>
          Vous avez une question ou besoin d'aide ? Rendez-vous sur notre <br></br>
          <a href="/contact" className="about-link">page de contact</a>. 
          Nous serons ravis de vous aider !
        </p>
  </div>
);

export default About;
