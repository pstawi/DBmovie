// Importation de la fonction API pour récupérer un film par ID
import {getMovieById, getMovieCredits} from "../services/movieAPI";
// Importation des hooks React
import { useEffect, useState } from "react";
// Importation des composants Material-UI
import { Container, Typography, Box, CircularProgress, Grid, Chip } from "@mui/material";
// Importation du hook pour accéder aux paramètres d'URL
import { useParams } from "react-router-dom";

/**
 * Composant MoviePage - Page de détails d'un film
 * Affiche toutes les informations détaillées d'un film spécifique
 */
const MoviePage = () => {
    // Récupération de l'ID du film depuis l'URL
    const { id } = useParams();
    // État pour stocker les détails du film
    const [movie, setMovie] = useState(null);
    // État pour stocker les acteurs/crédits du film
    const [credits, setCredits] = useState(null);

    /**
     * Fonction pour récupérer les détails du film depuis l'API
     */
    const fetchMovieById = async () => {
        try {
            // Appel à l'API avec l'ID du film
            const response = await getMovieById(id);
            // Mise à jour de l'état avec les données du film
            setMovie(response.data);

            // Appel à l'API pour récupérer les crédits (acteurs)
            const creditsResponse = await getMovieCredits(id);
            setCredits(creditsResponse.data);
        } catch (error) {
            console.error(error);
        }
    }

    // Exécution du chargement quand l'ID change
    useEffect(() => {
        fetchMovieById();
    }, [id])

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            {/* Affichage conditionnel : film trouvé ou message d'erreur */}
            {movie ? (
                <Box>
                    {/* Titre du film */}
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {movie.title}
                    </Typography>

                    {/* Affiche du film */}
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} style={{ width: '100%', height: 'auto', marginBottom: '16px' }} />

                    {/* Date de sortie */}
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        Release Date: {movie.release_date}
                    </Typography>

                    {/* Note du film */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Rating: {movie.vote_average.toFixed(1)} / 10
                        </Typography>
                    </Box>

                    {/* Résumé/description du film */}
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {movie.overview}
                    </Typography>

                    {/* Section des acteurs */}
                    {credits && credits.cast && credits.cast.length > 0 && (
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Distribution
                            </Typography>
                            {/* Grille des acteurs */}
                            <Grid container spacing={1}>
                                {/* Affichage des 10 premiers acteurs */}
                                {credits.cast.slice(0, 10).map((actor) => (
                                    <Grid item key={actor.id}>
                                        {/* Chip affichant le nom et le rôle de l'acteur */}
                                        <Chip 
                                            label={`${actor.name} (${actor.character})`}
                                            variant="outlined"
                                            sx={{ 
                                                fontSize: '0.9rem',
                                                height: 'auto',
                                                padding: '8px',
                                                '& .MuiChip-label': {
                                                    display: 'block',
                                                    whiteSpace: 'normal'
                                                }
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    )}
                </Box>
            ) : (
                // Message si le film n'est pas trouvé
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Movie not found.
                </Typography>
            )}
        </Container>
    );
};

export default MoviePage;