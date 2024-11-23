import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.username === username)) {
      alert('Nom d\'utilisateur déjà pris.');
      return;
    }
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Inscription réussie !');
  };

  return (
    <div>
      <h2>Inscription</h2>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>S'inscrire</button>
    </div>
  );
};

export default Register;
