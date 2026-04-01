// Importation des hooks React
import { useEffect, useState } from "react";
// Importation de la fonction API pour récupérer les acteurs
import { getAllActors } from "../services/movieAPI.js";
// Importation du composant ActorCard
import ActorCard from "../components/ActorCard.jsx";
// Importation des composants Material-UI
import { Container, Grid, Typography, Box, CircularProgress } from "@mui/material";

/**
 * Composant ActorsPage - Page d'accueil des acteurs
 * Affiche la liste de tous les acteurs populaires
 */
const ActorsPage = () => {
    // État pour stocker la liste des acteurs
    const [actors, setActors] = useState([]);
    // État pour gérer le chargement
    const [loading, setLoading] = useState(true);
    // État pour gérer les erreurs
    const [error, setError] = useState(null);

    /**
     * Fonction pour récupérer les acteurs depuis l'API
     */
    const fetchActors = async () => {
        try {
            setLoading(true);
            // Appel à l'API pour récupérer tous les acteurs populaires
            const response = await getAllActors();
            // Mise à jour de l'état avec les résultats
            setActors(response.data.results);
            setError(null);
        } catch (error) {
            console.error(error);
            setError("Erreur lors du chargement des acteurs");
        } finally {
            setLoading(false);
        }
    }

    // Affichage des acteurs pour déboguer
    console.log(actors);
    // Exécution du chargement une fois au montage du composant
    useEffect(() => {
        fetchActors();
    }, [])

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* En-tête de la page */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Les Acteurs du Cinéma
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                    Découvrez les acteurs les plus populaires
                </Typography>
            </Box>

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
                // Grille d'acteurs en responsive layout
                <Grid container spacing={3}>
                    {/* Itération sur chaque acteur pour afficher une ActorCard */}
                    {actors.map((actor) => (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={actor.id}>
                            <ActorCard props={actor} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
}

export default ActorsPage;
