// Importation des hooks React
import { useEffect, useState } from "react";
// Importation de la fonction API pour récupérer les films
import { getAllMovie } from "../services/movieAPI.js";
// Importation du composant MovieCard
import MovieCard from "../components/MovieCard.jsx";
// Importation des composants Material-UI
import { Container, Grid, Typography, Box, CircularProgress, Pagination } from "@mui/material";

/**
 * Composant HomePage - Page d'accueil de l'application
 * Affiche la liste de tous les films populaires
 */
const HomePage = () => {
    // État pour stocker la liste des films
    const [movies, setMovies] = useState([]);
    // État pour gérer le chargement
    const [loading, setLoading] = useState(true);
    // État pour gérer les erreurs
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    /**
     * Fonction pour récupérer les films depuis l'API
     */
    const fetchMovie = async () => {
        try {
            setLoading(true);
            // Appel à l'API pour récupérer tous les films populaires
            const response = await getAllMovie(page);
            // Mise à jour de l'état avec les résultats
            setMovies(response.data.results);
            setError(null);
        } catch (error) {
            console.error(error);
            setError("Erreur lors du chargement des films");
        } finally {
            setLoading(false);
        }
    }

    const handleChangePage = (_event, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Affichage des films pour déboguer
    console.log(movies);
    // Exécution du chargement une fois au montage du composant
    useEffect(() => {
        fetchMovie();
    }, [page]);

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* En-tête de la page */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Bienvenue sur ForEachFlix
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                    Découvrez les meilleurs films
                </Typography>
            </Box>

            <Pagination count={500} color="secondary" page={page} onChange={handleChangePage} />
            {/* Affichage conditionnel : chargement, erreur ou contenu */}
            {loading ? (
                // Spinner de chargement
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                // Message d'erreur
                <Typography color="error" sx={{ py: 4, textAlign: 'center' }}>
                    {error}
                </Typography>
            ) : (
                // Grille de films en responsive layout
                <Grid container spacing={3}>
                    {/* Itération sur chaque film pour afficher une MovieCard */}
                    {movies.map((movie) => (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={movie.id}>
                            <MovieCard props={movie} />
                        </Grid>
                    ))}
                </Grid>
            )}

            <Pagination count={500} color="secondary" page={page} onChange={handleChangePage} />
        </Container>
    );
}

export default HomePage;