import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        
        <div className="footer-left">
          <p>&copy; 2024 AIR SHOP. All Rights Reserved.</p>
        </div>
        
        
        <div className="footer-links">
          <ul>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy-policy">Politique de confidentialité</Link></li>
          </ul>
        </div>
        
        
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
