import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartModal.css';

const CartModal = ({ cartItems, onClose }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose(); 
    navigate('/checkout'); 
  };

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <h2>Votre Panier</h2>
        {cartItems.length > 0 ? (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.main_picture_url} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Prix : {(item.retail_price_cents / 100).toFixed(2)} €</p>
                  <p>Taille : {item.size}</p>
                </div>
              </div>
            ))}
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        ) : (
          <p>Votre panier est vide.</p>
        )}
        <button onClick={onClose} className="close-button">Fermer</button>
      </div>
    </div>
  );
};

export default CartModal;
