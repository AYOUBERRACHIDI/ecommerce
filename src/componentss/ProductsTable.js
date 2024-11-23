import React, { useState, useEffect } from 'react';
import './ProductsTable.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import data from '../api.json';  // Importation des données

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    name: '',
    retail_price_cents: 0,
    category: '',
    brand: '',
    condition: '',
    color: '',
    picture: ''
  });
  const [searchTerm, setSearchTerm] = useState('');  // État pour la recherche

  // Charger les produits depuis le fichier JSON
  useEffect(() => {
    const formattedProducts = data.sneakers.map((product) => ({
      id: product.id,
      name: product.name,
      retail_price_cents: product.retail_price_cents,
      category: product.category.join(", "),
      brand: product.brand_name,
      condition: product.shoe_condition,
      color: product.color,
      picture: product.grid_picture_url
    }));
    setProducts(formattedProducts);
  }, []);

  // Fonction pour gérer la modification du produit
  const handleEditProductChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === productToEdit.id
        ? { ...product, ...editedProduct }
        : product
    );
    setProducts(updatedProducts);
    setShowEditProductModal(false); // Fermer la fenêtre modale après la sauvegarde
  };

  // Fonction pour supprimer un produit
  const handleDeleteProduct = (id) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?');
    if (confirmDelete) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
    }
  };

  // Filtrer les produits par le nom
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-table">
      <h2>Gestion des Produits</h2>
      <input
        type="text"
        className="search-bar"
        placeholder="Rechercher un produit..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Catégorie</th>
            <th>Marque</th>
            <th>Condition</th>
            <th>Couleur</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{(product.retail_price_cents / 100).toFixed(2)} €</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>{product.condition}</td>
                <td>{product.color}</td>
                <td>
                  {product.picture && (
                    <img src={product.picture} alt={product.name} width="50" />
                  )}
                </td>
                <td>
                  <button
                  className="edit-button"
                    onClick={() => {
                      setProductToEdit(product);
                      setEditedProduct(product); // Remplir le formulaire avec les données actuelles du produit
                      setShowEditProductModal(true);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Aucun produit trouvé</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modale pour la modification du produit */}
      {showEditProductModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Modifier le produit</h2>
            <form>
  <label style={{ color: 'white' }}>
    Nom:
    <input
      type="text"
      name="name"
      value={editedProduct.name}
      onChange={handleEditProductChange}
      style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
    />
  </label>
  <label style={{ color: 'white' }}>
    Prix:
    <input
      type="number"
      name="retail_price_cents"
      value={editedProduct.retail_price_cents}
      onChange={handleEditProductChange}
      style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
    />
  </label>
  <label style={{ color: 'white' }}>
    Catégorie:
    <input
      type="text"
      name="category"
      value={editedProduct.category}
      onChange={handleEditProductChange}
      style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
    />
  </label>
  <label style={{ color: 'white' }}>
    Marque:
    <input
      type="text"
      name="brand"
      value={editedProduct.brand}
      onChange={handleEditProductChange}
      style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
    />
  </label>
  <label style={{ color: 'white' }}>
    Condition:
    <input
      type="text"
      name="condition"
      value={editedProduct.condition}
      onChange={handleEditProductChange}
      style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
    />
  </label>
  <label style={{ color: 'white' }}>
    Couleur:
    <input
      type="text"
      name="color"
      value={editedProduct.color}
      onChange={handleEditProductChange}
      style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
    />
  </label>
  <label style={{ color: 'white' }}>
    Image URL:
    <input
      type="text"
      name="picture"
      value={editedProduct.picture}
      onChange={handleEditProductChange}
      style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
    />
  </label>
  <div className="modal-buttons">
    <button
      type="button"
      onClick={handleSaveProduct}
      style={{ padding: '10px 20px', backgroundColor: '#f37708', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
    >
      Sauvegarder
    </button>
    <button
      type="button"
      onClick={() => setShowEditProductModal(false)}
      style={{ padding: '10px 20px', backgroundColor: '#f37708', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
    >
      Annuler
    </button>
  </div>
</form>

          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsTable;
