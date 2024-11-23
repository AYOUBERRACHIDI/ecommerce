import React from 'react';
import './Modals.css';

export const DeleteModal = ({ show, onClose, onConfirm, message }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="confirm-button">Confirmer</button>
          <button onClick={onClose} className="cancel-button">Annuler</button>
        </div>
      </div>
    </div>
  );
};

export const EditModal = ({ show, onClose, children, onSave }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <div className="modal-actions">
          <button onClick={onSave} className="confirm-button">Enregistrer</button>
          <button onClick={onClose} className="cancel-button">Annuler</button>
        </div>
      </div>
    </div>
  );
};
