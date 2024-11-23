import React from 'react';
import logo from '../assets/logo.png'; 
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <h1 className="title">AIR SHOP</h1>
      </div>
      <div className="topbar-profile">
        <img
          src="https://cdn-icons-png.freepik.com/256/8500/8500156.png?ga=GA1.1.1857225398.1701447793&semt=ais_hybrid"
          alt="Profile"
          className="profile-image"
        />
        <span className="profile-name">Ayoub</span>
      </div>
    </div>
  );
};

export default Topbar;
