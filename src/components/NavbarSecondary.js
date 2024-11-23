import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarSecondary.css';

const NavbarSecondary = () => {
  return (
    <div className="navbar-secondary">
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/signup">S'inscrire</Link>
      <Link to="/login">Se connecter</Link>
    </div>
  );
};

export default NavbarSecondary;
