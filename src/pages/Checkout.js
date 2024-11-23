import React from 'react';
import './Checkout.css';

const Checkout = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="checkout">
      <h1>Confirmation de Commande</h1>
      {cartItems.length > 0 ? (
        <div className="checkout-items">
          {cartItems.map((item, index) => (
            <div key={index} className="checkout-item">
              <img src={item.main_picture_url} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>Prix : {(item.retail_price_cents / 100).toFixed(2)} €</p>
                <p>Taille : {item.size}</p>
                <button
                  className="remove-button"
                  onClick={() => onRemoveFromCart(index)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
          <button
            className="confirm-button"
            onClick={() => alert('Commande confirmée !')}
          >
            Confirmer la commande
          </button>
        </div>
      ) : (
        <p>Votre panier est vide.</p>
      )}
    </div>
  );
};

export default Checkout;
