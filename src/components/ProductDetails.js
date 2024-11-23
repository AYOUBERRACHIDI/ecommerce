import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import apiData from '../api.json';
import './ProductDetails.css';

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    phone: ''
  });
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [addToCartMessage, setAddToCartMessage] = useState(''); 

  const product = apiData.sneakers.find((p) => p.id.toString() === id);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart({ ...product, size: selectedSize });
      setAddToCartMessage(`Ajouté au panier: ${product.name} - Taille ${selectedSize}`);
      
      setTimeout(() => {
        setAddToCartMessage('');
      }, 5000);
    } else {
      alert("Veuillez sélectionner une taille.");
    }
  };

  const handleBuyNow = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleConfirmPurchase = () => {
    setConfirmationMessage("Achat confirmé avec succès !");
    setModalVisible(false);
    setTimeout(() => {
      setConfirmationMessage('');
    }, 20000); 
  };

  return (
    <div className="product-details">
      {confirmationMessage && (
        <div className="confirmation-message">
          {confirmationMessage}
        </div>
      )}

      {addToCartMessage && (
        <div className="add-to-cart-message">
          {addToCartMessage}
        </div>
      )}

      <div className="product-details-container">
      <div className="product-info">
          <h1>{product.name}</h1>
          <p>Designer: {product.designer}</p>
          <p>Condition: {product.shoe_condition}</p>
          <p>Prix: {(product.retail_price_cents / 100).toFixed(2)} €</p>
          <p dangerouslySetInnerHTML={{ __html: product.story_html }}></p>
          </div>
        <div className="product-image">
          <img src={product.main_picture_url} alt={product.name} />
        </div>

        
        

          
          <div className="product-options">
            <div className="size-selection">
              <p>Tailles disponibles:</p>
              {[36, 37, 38, 39, 40, 41, 42, 43, 44].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={selectedSize === size ? 'selected' : ''}
                >
                  {size}
                </button>
              ))}
            
          </div>

          <div className="action-buttons">
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Ajouter au panier
            </button>
            <button onClick={handleBuyNow} className="buy-now-btn">
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>



      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirmez votre achat</h2>
            <p><strong>{product.name}</strong></p>
            <p>Taille: {selectedSize}</p>
            <p>Prix: {(product.retail_price_cents / 100).toFixed(2)} €</p>


            <form>
              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={userInfo.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Adresse"
                value={userInfo.address}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Numéro de téléphone"
                value={userInfo.phone}
                onChange={handleInputChange}
              />
            </form>

            <div className="modal-buttons">
              <button onClick={handleCloseModal} className="close-modal-btn">Fermer</button>
              <button onClick={handleConfirmPurchase} className="confirm-purchase-btn">Confirmer l'achat</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
