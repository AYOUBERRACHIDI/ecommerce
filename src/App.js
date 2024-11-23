import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarSecondary from './components/NavbarSecondary'; 
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Contact from './pages/Contact';
import CartModal from './components/CartModal';
import Checkout from './pages/Checkout';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './componentss/Dashboards';
import Footer from './components/Footer'; 
import Men from './pages/Men';
import Women from './pages/Women';
import Youth from './pages/Youth';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Utilisation de useLocation pour connaître la route actuelle
  const location = useLocation();

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleToggleCart = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Déterminer si on doit afficher les Navbars et le Footer
  const shouldShowNavbars = location.pathname !== '/dashboard';
  const shouldShowFooter = location.pathname !== '/dashboard';

  return (
    <>
      {shouldShowNavbars && (
        <>
          <div className="navbar-secondary-container">
            <NavbarSecondary />
          </div>
          <Navbar onSearch={handleSearch} onToggleCart={handleToggleCart} user={user} onLogout={handleLogout} />
        </>
      )}
      
      <main>
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductPage onAddToCart={handleAddToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
          <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/youth" element={<Youth />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      
      {isCartModalOpen && <CartModal cartItems={cartItems} onClose={handleToggleCart} />}
      
      {shouldShowFooter && <Footer />}
    </>
  );
};

export default App;
