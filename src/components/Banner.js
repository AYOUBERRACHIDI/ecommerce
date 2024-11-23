import React from 'react';
import bannerVideo from '../assets/video.mp4'; 
import './Banner.css';

const Banner = () => {
  const handleScrollDown = () => {
    window.scrollBy({ top: 500, behavior: 'smooth' });
  };

  return (
    <div className="banner" onClick={handleScrollDown}>
      <video className="banner-video" autoPlay loop muted>
        <source src={bannerVideo} type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos.
      </video>
      
      <div className="banner-text">
        <h1>Bienvenue dans notre<br/> Boutique de Sneakers</h1>
        <p>Découvrez les dernières collections de Air Jordan et plus encore !</p>
      </div>

      <button className="shop-now-button">
        Acheter maintenant
      </button>
    </div>
  );
};

export default Banner;
