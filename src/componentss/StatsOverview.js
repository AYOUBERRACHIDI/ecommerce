import React from 'react';
import { FaMoneyBillWave, FaBoxOpen, FaUsers, FaPlusCircle, FaTimesCircle, FaCheckCircle } from 'react-icons/fa'; // Icônes
import { Bar, Line, Pie, Scatter } from 'react-chartjs-2'; // Import des graphiques
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import './StatsOverview.css';

// Enregistrer les composants de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const StatsOverview = ({ totalEarnings, totalOrders, totalCustomers, newOrders }) => {

  // Exemple de données pour les administrateurs
  const admins = [
    { name: 'Ayoub Errachidi', email: 'ayoubrachidi254@gmail.com', role: 'Super Administrateur' },
    { name: 'Bob Martin', email: 'bob.martin@example.com', role: 'Administrateur' },
    { name: 'Charlie Durand', email: 'charlie.durand@example.com', role: 'Administrateur' },
  ];

  // Exemple de données pour les utilisateurs
  

  // Données dynamiques pour les graphiques (par exemple, provenant d'une API ou d'un état)
  const thisMonthRequests = 150; // Exemple de données pour les requêtes du mois
  const thisMonthEarnings = 1200; // Exemple de données pour les revenus du mois

  // Données pour le graphique des requêtes
  const requestData = {
    labels: ['Requêtes du mois'],
    datasets: [
      {
        label: "Requêtes",
        data: [thisMonthRequests], // Donnée dynamique pour les requêtes du mois
        backgroundColor: '#4caf50', // Couleur pour la barre
        borderColor: '#388e3c',
        borderWidth: 1,
      },
    ],
  };

  // Données pour le graphique des revenus
  const earningsData = {
    labels: ['Revenus du mois'],
    datasets: [
      {
        label: "Revenus",
        data: [thisMonthEarnings], // Donnée dynamique pour les revenus du mois
        backgroundColor: '#ff9800', // Couleur pour la barre
        borderColor: '#f57c00',
        borderWidth: 1,
      },
    ],
  };

  // Données pour le graphique en cercle des commandes
  const ordersData = {
    labels: ['Commandes Confirmées', 'Commandes en Cours', 'Commandes Annulées'],
    datasets: [
      {
        data: [60, 30, 10], // Répartition des commandes (exemple de données)
        backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
        hoverOffset: 4,
      },
    ],
  };

  // Données pour le graphique Scatter (exemple de données)
  const scatterData = {
    datasets: [
      {
        label: 'Commandes',
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 25 },
          { x: 20, y: 30 },
          { x: 25, y: 35 },
          { x: 30, y: 40 },
        ],
        backgroundColor: '#00f', // Couleur des points
      },
    ],
  };

  // Données pour le graphique de ligne (exemple de données)
  const lineData = {
    labels: ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4'],
    datasets: [
      {
        label: 'Ventes',
        data: [50, 200, 150, 300],
        borderColor: '#ff9800',
        tension: 0.1, // Pour créer des courbes
        fill: false,
      },
    ],
  };

  // Options pour le graphique Pie
  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Permet de contrôler la taille du graphique
    plugins: {
      legend: {
        position: 'top',
      },
    },
    elements: {
      arc: {
        borderWidth: 2, // Si vous voulez ajouter une bordure à chaque section
      },
    },
  };

  // Vérification si admins est défini et est un tableau
  const renderAdminTable = () => {
    if (!Array.isArray(admins) || admins.length === 0) {
      return <p>Aucun administrateur à afficher.</p>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin, index) => (
            <tr key={index}>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>{admin.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // Vérification si users est défini et est un tableau
  

  return (
    <div className="stats-overview">
      {/* Statistiques avec icônes */}
      <div className="stats-cards">
        <div className="stat-card">
          <FaMoneyBillWave className="stat-icon" />
          <h3>Total des revenus</h3>
          <p>4000 €</p>
        </div>
        <div className="stat-card">
          <FaBoxOpen className="stat-icon" />
          <h3>Total des commandes</h3>
          <p>300</p>
        </div>
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h3>Total des clients</h3>
          <p>1289</p>
        </div>
        <div className="stat-card">
          <FaPlusCircle className="stat-icon" />
          <h3>Nouvelle commande</h3>
          <p>{newOrders}</p>
        </div>
      </div>

      {/* Affichage des commandes directement sans condition */}
      <div className="orders-details">
        <div className="chart">
          <h4>Répartition des Commandes</h4>
          <Pie data={ordersData} options={pieChartOptions} />
        </div>
        <div className="order-summary">
          <div className="order-item">
            <FaCheckCircle /> <span>Commandes Confirmées : 60%</span>
          </div>
          <div className="order-item">
            <FaTimesCircle /> <span>Commandes Annulées : 10%</span>
          </div>
          <div className="order-item">
            <FaBoxOpen /> <span>Commandes en Cours : 30%</span>
          </div>
        </div>

        
      </div>

      {/* Graphiques pour les requêtes et revenus du mois */}
      <div className="chart-container">
        <div className="chart">
          <h4>Requêtes du Mois</h4>
          <Bar data={requestData} />
        </div>
        <div className="chart">
          <h4>Revenus du Mois</h4>
          <Bar data={earningsData} />
        </div>
        <div className="chart">
          
          <h4>Graphique de Ligne - Ventes</h4>
          <Line data={lineData} />
        </div>
        <div className="chart">
          <h4>Graphique Scatter - Commandes</h4>
          <Scatter data={scatterData} />
        </div>
      </div>

      {/* Tableau des administrateurs */}
      <div className="admins-table">
        <h3>Tableau des Administrateurs</h3>
        {renderAdminTable()}
      </div>
    </div>
  );
};

export default StatsOverview;
