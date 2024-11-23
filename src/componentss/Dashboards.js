import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar'; // Import de la Topbar
import StatsOverview from './StatsOverview';
import UsersTable from './UsersTable';
import ProductsTable from './ProductsTable';
import { DeleteModal, EditModal } from './Modals';
import AdminPage from './AdminPage'; // Importation de la page Admin
import './Dashboards.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSection, setCurrentSection] = useState('stats');
  const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  useEffect(() => {
    // Charger les données utilisateurs depuis le localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
    setFilteredUsers(storedUsers);

    // Charger les données produits depuis api.json
    fetch('/api.json')
      .then((response) => response.json())
      .then((data) => setProducts(data.sneakers || []))
      .catch((error) => console.error('Erreur API:', error));
  }, []);

  useEffect(() => {
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  const handleDeleteUser = () => {
    const updatedUsers = users.filter((user) => user !== userToDelete);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setShowDeleteUserModal(false);
  };

  const handleEditProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === productToEdit.id ? productToEdit : product
    );
    setProducts(updatedProducts);
    setShowEditProductModal(false);
  };

  return (
    <div className="dashboard-container">
      
      <Sidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <div className="main-section">
        <Topbar /> {/* Ajout de la Topbar */}
        <div className="main-content">
          {currentSection === 'stats' && (
            <StatsOverview
              totalEarnings={products.reduce((acc, p) => acc + p.retail_price_cents / 100, 0)}
              totalOrders={products.length}
              totalCustomers={users.length}
            />
          )}
          {currentSection === 'users' && (
            <UsersTable
              users={filteredUsers}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              openDeleteUserModal={setShowDeleteUserModal}
              setUserToDelete={setUserToDelete}
            />
          )}
          {currentSection === 'products' && (
            <ProductsTable
              products={products}
              setProductToEdit={setProductToEdit}
              setShowEditProductModal={setShowEditProductModal}
            />
          )}
          {currentSection === 'admin' && <AdminPage />} {/* Ajout de la page Admin */}
        </div>
        <DeleteModal
          show={showDeleteUserModal}
          onClose={() => setShowDeleteUserModal(false)}
          onConfirm={handleDeleteUser}
          message="Voulez-vous supprimer cet utilisateur ?"
        />
        <EditModal
          show={showEditProductModal}
          onClose={() => setShowEditProductModal(false)}
          product={productToEdit}
          onSave={handleEditProduct}
        />
      </div>
    </div>
  );
};

export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebar';
// import StatsOverview from './StatsOverview';
// import UsersTable from './UsersTable';
// import ProductsTable from './ProductsTable';
// import { DeleteModal, EditModal } from './Modals';
// import './Dashboards.css';

// const Dashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentSection, setCurrentSection] = useState('stats');
//   const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);
//   const [userToDelete, setUserToDelete] = useState(null);
//   const [showEditProductModal, setShowEditProductModal] = useState(false);
//   const [productToEdit, setProductToEdit] = useState(null);

//   useEffect(() => {
//     // Charger les données utilisateurs depuis le localStorage
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
//     setUsers(storedUsers);
//     setFilteredUsers(storedUsers);

//     // Charger les données produits depuis api.json
//     fetch('/api.json')
//       .then((response) => response.json())
//       .then((data) => setProducts(data.sneakers || []))
//       .catch((error) => console.error('Erreur API:', error));
//   }, []);

//   useEffect(() => {
//     const results = users.filter((user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredUsers(results);
//   }, [searchTerm, users]);

//   const handleDeleteUser = () => {
//     const updatedUsers = users.filter((user) => user !== userToDelete);
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers));
//     setShowDeleteUserModal(false);
//   };

//   const handleEditProduct = () => {
//     const updatedProducts = products.map((product) =>
//       product.id === productToEdit.id ? productToEdit : product
//     );
//     setProducts(updatedProducts);
//     setShowEditProductModal(false);
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />
//       <div className="main-content">
//         {currentSection === 'stats' && (
//           <StatsOverview
//             totalEarnings={products.reduce((acc, p) => acc + p.retail_price_cents / 100, 0)}
//             totalOrders={products.length}
//             totalCustomers={users.length}
//           />
//         )}
//         {currentSection === 'users' && (
//           <UsersTable
//             users={filteredUsers}
//             searchTerm={searchTerm}
//             setSearchTerm={setSearchTerm}
//             openDeleteUserModal={setShowDeleteUserModal}
//             setUserToDelete={setUserToDelete}
//           />
//         )}
//         {currentSection === 'products' && (
//           <ProductsTable
//             products={products}
//             setProductToEdit={setProductToEdit}
//             setShowEditProductModal={setShowEditProductModal}
//           />
//         )}
//       </div>
//       <DeleteModal
//         show={showDeleteUserModal}
//         onClose={() => setShowDeleteUserModal(false)}
//         onConfirm={handleDeleteUser}
//         message="Voulez-vous supprimer cet utilisateur ?"
//       />
//       <EditModal
//         show={showEditProductModal}
//         onClose={() => setShowEditProductModal(false)}
//         product={productToEdit}
//         onSave={handleEditProduct}
//       />
//     </div>
//   );
// };

// export default Dashboard;
