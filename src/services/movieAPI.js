// Importation de la bibliothèque axios pour les requêtes HTTP
import axios from 'axios';

// Clé API pour accéder à l'API The Movie Database (TMDB)
const apiKey = "fcbed33d2061c5e3c7d84b34c863cc5f";

/**
 * Configuration du client axios
 * Ensemble des paramètres par défaut pour toutes les requêtes API
 */
export const client = axios.create({
    // URL de base de l'API TMDB
    baseURL:"https://api.themoviedb.org/3",
    // Paramètres ajoutés automatiquement à chaque requête
    params: {
        api_key: apiKey,
        // Langue des réponses en français
        language: "fr-FR"
    }
});

/**
 * Fonction pour récupérer tous les films populaires
 * @returns {Promise} Promesse contenant la liste des films populaires
 */
export function getAllMovie() {
    return client.get('/movie/popular')
}

/**
 * Fonction pour récupérer les détails d'un film spécifique
 * @param {number} id - L'ID du film
 * @returns {Promise} Promesse contenant les détails du film
 */
export function getMovieById(id) {
    return client.get(`/movie/${id}`)
}
