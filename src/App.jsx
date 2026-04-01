// Importation des styles spécifiques au composant App
import './App.css'
// Importation du thème personnalisé
import theme from './theme'
// Importation de ThemeProvider pour appliquer le thème
import { ThemeProvider } from '@mui/material/styles'
// Importation des pages de films
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
// Importation des pages d'acteurs
import ActorsPage from './pages/ActorsPage'
import ActorDetailPage from './pages/ActorDetailPage'
// Importation des composants de routage
import { Route, Routes } from 'react-router-dom'
// Importation du composant Navbar
import Navbar from './components/Navbar'

/**
 * Composant principal de l'application ForeachFlix
 * Gère le routage entre les différentes pages
 * Applique le thème "Taverne Spatiale" à toute l'application
 */
function App() {
  return (
    // Application du thème personnalisé avec ThemeProvider
    <ThemeProvider theme={theme}>
      <div>
        {/* Affichage de la barre de navigation */}
        <Navbar />
        {/* Configuration des routes de l'application */}
        <Routes>
          {/* Route pour la page d'accueil des films */}
          <Route path="/home" element={<HomePage />} />
          {/* Route pour la page de détails d'un film (paramètre dynamique: id) */}
          <Route path="/movie/:id" element={<MoviePage />} />
          {/* Route pour la page d'accueil des acteurs */}
          <Route path="/actors" element={<ActorsPage />} />
          {/* Route pour la page de détails d'un acteur (paramètre dynamique: id) */}
          <Route path="/actor/:id" element={<ActorDetailPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
