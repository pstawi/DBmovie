// Importation des styles spécifiques au composant App
import './App.css'
// Importation des pages
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
// Importation des composants de routage
import { Route, Routes } from 'react-router-dom'
// Importation du composant Navbar
import Navbar from './components/Navbar'

/**
 * Composant principal de l'application ForeachFlix
 * Gère le routage entre les différentes pages
 */
function App() {
  return (
    <div>
      {/* Affichage de la barre de navigation */}
      <Navbar />
      {/* Configuration des routes de l'application */}
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/home" element={<HomePage />} />
        {/* Route pour la page de détails d'un film (paramètre dynamique: id) */}
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  )
}

export default App
