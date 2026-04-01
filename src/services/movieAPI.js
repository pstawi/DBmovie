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

/**
 * Fonction pour récupérer tous les acteurs populaires
 * @returns {Promise} Promesse contenant la liste des acteurs populaires
 */
export function getAllActors() {
    return client.get('/person/popular')
}

/**
 * Fonction pour récupérer les détails d'un acteur spécifique
 * @param {number} id - L'ID de l'acteur
 * @returns {Promise} Promesse contenant les détails de l'acteur
 */
export function getActorById(id) {
    return client.get(`/person/${id}`)
}

/**
 * Fonction pour récupérer les crédits (acteurs) d'un film spécifique
 * @param {number} id - L'ID du film
 * @returns {Promise} Promesse contenant la liste des acteurs du film
 */
export function getMovieCredits(id) {
    return client.get(`/movie/${id}/credits`)
}


