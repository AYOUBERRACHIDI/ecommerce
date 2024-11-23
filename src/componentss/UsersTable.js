import React, { useState } from 'react';
import './UsersTable.css';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importer les icônes

const UsersTable = ({ searchTerm, setSearchTerm, openDeleteUserModal, setUserToDelete }) => {
  // Liste des utilisateurs par défaut
  const defaultUsers = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
    { name: 'Samuel Green', email: 'samuel.green@example.com' },
    { name: 'Emily White', email: 'emily.white@example.com' },
    { name: 'Chris Black', email: 'chris.black@example.com' },
    { name: 'Michael Brown', email: 'michael.brown@example.com' },
    { name: 'Sarah Davis', email: 'sarah.davis@example.com' },
    { name: 'David Johnson', email: 'david.johnson@example.com' },
    { name: 'Olivia Martinez', email: 'olivia.martinez@example.com' },
    { name: 'Daniel Wilson', email: 'daniel.wilson@example.com' },
  ];

  // Utilisation de l'état pour gérer les utilisateurs
  const [users, setUsers] = useState(defaultUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToDelete, setUserToDeleteState] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');

  // Filtrage des utilisateurs selon le terme de recherche
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fonction pour supprimer un utilisateur
  const deleteUser = () => {
    setUsers(users.filter(user => user.email !== userToDelete.email));
    setIsModalOpen(false);  // Fermer la modale après suppression
  };

  // Fonction pour annuler la suppression
  const cancelDelete = () => {
    setIsModalOpen(false);  // Fermer la modale
  };

  // Fonction pour afficher la modale de modification
  const openEditModal = (user) => {
    setUserToEdit(user);
    setUpdatedName(user.name);
    setUpdatedEmail(user.email);
    setIsEditModalOpen(true);
  };

  // Fonction pour modifier un utilisateur
  const updateUser = () => {
    setUsers(users.map(user =>
      user.email === userToEdit.email ? { ...user, name: updatedName, email: updatedEmail } : user
    ));
    setIsEditModalOpen(false);  // Fermer la modale après modification
  };

  // Fonction pour annuler la modification
  const cancelEdit = () => {
    setIsEditModalOpen(false);  // Fermer la modale
  };

  return (
    <div className="users-table">
      <input
        type="text"
        placeholder="Rechercher un utilisateur..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => openEditModal(user)} // Ouvre la modale de modification
                >
                  <FaEdit /> {/* Icône de modification */}
                </button>
                <button
                  onClick={() => {
                    setUserToDeleteState(user);
                    setIsModalOpen(true); // Ouvrir la modale de suppression
                  }}
                >
                  <FaTrash /> {/* Icône de suppression */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modale de confirmation de suppression */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est irréversible.</p>
            <div className="modal-buttons">
              <button onClick={deleteUser}>Confirmer</button>
              <button onClick={cancelDelete}>Annuler</button>
            </div>
          </div>
        </div>
      )}

      {/* Modale de modification de l'utilisateur */}
      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modifier l'utilisateur</h2>
            <form onSubmit={(e) => { e.preventDefault(); updateUser(); }}>
              <div>
                <label>Nom :</label>
                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Email :</label>
                <input
                  type="email"
                  value={updatedEmail}
                  onChange={(e) => setUpdatedEmail(e.target.value)}
                  required
                />
              </div>
              <div className="modal-buttons">
                <button type="submit">Confirmer</button>
                <button type="button" onClick={cancelEdit}>Annuler</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
