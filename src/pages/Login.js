import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('ayoubrachidi254@gmail.com'); // Email par défaut
  const [password, setPassword] = useState('1234'); // Mot de passe par défaut
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Vérification si les informations par défaut sont utilisées
    if (email === 'ayoubrachidi254@gmail.com' && password === '1234') {
      // Rediriger directement vers le dashboard sans vérification supplémentaire
      onLogin({ email, password }); // Appeler la fonction onLogin avec l'utilisateur
      navigate('/dashboard'); // Redirection vers le dashboard
    } else {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = existingUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        onLogin(user);
        navigate('/dashboard'); // Rediriger vers le dashboard pour un utilisateur existant
      } else {
        setError('Email ou mot de passe incorrect.');
      }
    }
  };

  return (
    <div className="auth-form">
      <h2>Se connecter</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
      <p>Pas encore inscrit ? <a href="/signup">S'inscrire</a></p>
    </div>
  );
};

export default Login;
