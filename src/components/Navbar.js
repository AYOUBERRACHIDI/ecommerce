import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import panierIcon from '../assets/panier.png';
import loupeIcon from '../assets/loupe.png';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = ({ onSearch, onToggleCart, user, onLogout }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Vérification des conditions pour cacher "Bienvenue" et le bouton déconnexion
  const shouldHideUserDetails = user?.email === 'ayoubrachidi254@gmail.com' && user?.password === '1234';

  return (
    <>
      {/* Navbar principale */}
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo-home">
            <img src={logo} alt="Logo" className="logo" />
            <span>AIR SHOP</span>
          </Link>
        </div>

        <div className="navbar-center">
          <Link to="/men" className="gender-link">Men</Link>
          <Link to="/women" className="gender-link">Women</Link>
          <Link to="/youth" className="gender-link">Youth</Link>
        </div>

        <div className="navbar-right">
          <div className="search-container">
            <img
              src={loupeIcon}
              alt="Search Icon"
              className="icon"
              onClick={handleSearchToggle}
            />
            {showSearch && (
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
                autoFocus
              />
            )}
          </div>

          <img
            src={panierIcon}
            alt="Cart Icon"
            className="icon"
            onClick={onToggleCart}
          />

          {/* Affichage conditionnel pour "Bienvenue" et "Déconnexion" */}
          {user && !shouldHideUserDetails && (
            <>
              <span className="user-welcome">Bienvenue, {user.name}</span>
              <button onClick={onLogout} className="logout-button">Déconnexion</button>
            </>
          )}

          <div className="menu-icon" onClick={handleMenuToggle}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <Link to="/about" onClick={handleMenuToggle}>About</Link>
            <Link to="/contact" onClick={handleMenuToggle}>Contact</Link>
            {user && <Link to="/dashboard" onClick={handleMenuToggle}>Dashboard</Link>}
            {user ? (
              !shouldHideUserDetails && (
                <button onClick={onLogout} className="mobile-logout-button">Déconnexion</button>
              )
            ) : (
              <>
                <Link to="/login" onClick={handleMenuToggle}>Se connecter</Link>
                <Link to="/signup" onClick={handleMenuToggle}>S'inscrire</Link>
              </>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
