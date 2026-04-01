// Importation du mode strict de React
import { StrictMode } from 'react'
// Importation de la fonction pour créer une racine React
import { createRoot } from 'react-dom/client'
// Importation des styles globaux
import './index.css'
// Importation du composant App principal
import App from './App.jsx'
// Importation du routeur pour la gestion de la navigation
import { BrowserRouter } from 'react-router-dom'

/**
 * Point d'entrée de l'application React
 * Configure le rendu de la racine avec StrictMode et BrowserRouter
 */
createRoot(document.getElementById('root')).render(
  // StrictMode aide à identifier les problèmes potentiels en développement
  <StrictMode>
    {/* BrowserRouter permet la navigation entre les pages */}
    <BrowserRouter>
      {/* Composant principal de l'application */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
