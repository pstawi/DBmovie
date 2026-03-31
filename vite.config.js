// Importation de la fonction defineConfig de Vite pour la configuration
import { defineConfig } from 'vite'
// Importation du plugin Vite pour React (support JSX et fast refresh)
import react from '@vitejs/plugin-react'

// Configuration de Vite
// Voir : https://vite.dev/config/
export default defineConfig({
  // Tableau des plugins Vite à utiliser
  plugins: [react()],  // Plugin React pour le support JSX et hot module replacement
})
