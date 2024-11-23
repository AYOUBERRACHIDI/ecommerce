import React from 'react';
import { useNavigate } from 'react-router-dom';  // Utilisation de useNavigate pour la redirection
import { FaChartBar, FaUsers, FaBox, FaTools, FaSignOutAlt } from 'react-icons/fa'; // Import des icônes
import './Sidebar.css';

const Sidebar = ({ currentSection, setCurrentSection }) => {
  const navigate = useNavigate();  // Hook pour la redirection

  const handleLogout = () => {
    // Ici, tu peux effacer les données de session si nécessaire (par exemple, clear localStorage)
    localStorage.removeItem('users');
    // Rediriger l'utilisateur vers la page d'accueil
    navigate('/');
  };

  return (
    <div className="sidebar">

      <button
        className={currentSection === 'stats' ? 'active' : ''}
        onClick={() => setCurrentSection('stats')}
      >
        <FaChartBar style={{ marginRight: '10px' }} />  {/* Icone Stats */}
        Stats
      </button>
      <button
        className={currentSection === 'users' ? 'active' : ''}
        onClick={() => setCurrentSection('users')}
      >
        <FaUsers style={{ marginRight: '10px' }} />  {/* Icone Utilisateurs */}
        Users
      </button>
      <button
        className={currentSection === 'products' ? 'active' : ''}
        onClick={() => setCurrentSection('products')}
      >
        <FaBox style={{ marginRight: '10px' }} />  {/* Icone Produits */}
        Products
      </button>
      <button
        className={currentSection === 'admin' ? 'active' : ''}  // Bouton Admin
        onClick={() => setCurrentSection('admin')}
      >
        <FaTools style={{ marginRight: '10px' }} />  {/* Icone Administration */}
        Admin
      </button>
      <button className="logout-button" onClick={handleLogout}>
        <FaSignOutAlt style={{ marginRight: '10px' }} />  {/* Icone Déconnexion */}
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
