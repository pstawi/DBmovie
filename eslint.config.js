// Importation des configurations ESLint recommandees
import js from '@eslint/js'
// Importation des variables globales du navigateur
import globals from 'globals'
// Importation des regles ESLint pour les hooks React
import reactHooks from 'eslint-plugin-react-hooks'
// Importation des regles ESLint pour React Refresh (HMR)
import reactRefresh from 'eslint-plugin-react-refresh'
// Importation de la fonction defineConfig d'ESLint
import { defineConfig, globalIgnores } from 'eslint/config'

/**
 * Configuration ESLint pour le projet React avec Vite
 * Definit les regles et le comportement du linter
 */
export default defineConfig([
  // Ignorer les fichiers dans le dossier dist (production build)
  globalIgnores(['dist']),
  {
    // Appliquer les regles aux fichiers JavaScript et JSX
    files: ['**/*.{js,jsx}'],
    // Etendre les configurations recommandees
    extends: [
      js.configs.recommended,  // Recommandations ESLint JavaScript
      reactHooks.configs.flat.recommended,  // Recommandations pour les hooks React
      reactRefresh.configs.vite,  // Configuration pour Vite et React Refresh
    ],
    // Options du langage
    languageOptions: {
      // Version ECMAScript
      ecmaVersion: 2020,
      // Variables globales du navigateur (window, document, etc.)
      globals: globals.browser,
      // Options du parser
      parserOptions: {
        ecmaVersion: 'latest',  // Version ECMAScript la plus recente
        ecmaFeatures: { jsx: true },  // Support du JSX
        sourceType: 'module',  // Support des modules ES6
      },
    },
    // Definition des regles personnalisees
    rules: {
      // Regle pour detecter les variables non utilisees
      // Ignore les constantes (commencant par un caractere majuscule)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
