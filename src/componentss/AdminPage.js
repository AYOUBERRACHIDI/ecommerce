import React, { useState, useEffect } from 'react';
import './AdminPage.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importation des icônes Font Awesome

const AdminPage = () => {
  const [admins, setAdmins] = useState([]); // State pour stocker les données des admins
  const [adminToEdit, setAdminToEdit] = useState(null);
  const [adminToDelete, setAdminToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newAdminName, setNewAdminName] = useState('');
  const [newAdminRole, setNewAdminRole] = useState('');

  // Simuler la récupération des données des admins (tu pourrais remplacer par une API)
  useEffect(() => {
    // Simuler un appel API
    const fetchAdmins = () => {
      const adminData = [
        { id: 1, name: 'Ayoub', role: 'Super Admin' },
        { id: 2, name: 'Admin 2', role: 'Moderateur' },
        { id: 3, name: 'Admin 3', role: 'Gestionnaire' },
      ];
      setAdmins(adminData); // Mettre à jour l'état avec les données des admins
    };

    fetchAdmins(); // Appeler la fonction de récupération des admins
  }, []);

  const handleEditAdmin = () => {
    const updatedAdmins = admins.map((admin) =>
      admin.id === adminToEdit.id
        ? { ...admin, name: newAdminName, role: newAdminRole }
        : admin
    );
    setAdmins(updatedAdmins);
    setShowEditModal(false);
  };

  const handleDeleteAdmin = () => {
    const updatedAdmins = admins.filter((admin) => admin.id !== adminToDelete.id);
    setAdmins(updatedAdmins);
    setShowDeleteModal(false);
  };

  return (
    <div className="admin-page">
      <h1>Tableau des Admins</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td>{admin.id}</td>
              <td>{admin.name}</td>
              <td>{admin.role}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => {
                    setAdminToEdit(admin);
                    setNewAdminName(admin.name);
                    setNewAdminRole(admin.role);
                    setShowEditModal(true);
                  }}
                >
                  <FaEdit /> 
                </button>
                <button
                  className="delete-btn"
                  onClick={() => {
                    setAdminToDelete(admin);
                    setShowDeleteModal(true);
                  }}
                >
                  <FaTrashAlt /> 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de confirmation de suppression */}
      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Êtes-vous sûr de vouloir supprimer cet admin ?</h2>
            <div className="modal-actions">
              <button onClick={handleDeleteAdmin}>Oui</button>
              <button onClick={() => setShowDeleteModal(false)}>Non</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de modification */}
      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modifier les informations de l'admin</h2>
            <input
              type="text"
              placeholder="Nom"
              value={newAdminName}
              onChange={(e) => setNewAdminName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Rôle"
              value={newAdminRole}
              onChange={(e) => setNewAdminRole(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={handleEditAdmin}>Enregistrer</button>
              <button onClick={() => setShowEditModal(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
