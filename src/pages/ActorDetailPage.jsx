// Importation de la fonction API pour récupérer les détails d'un acteur
import { getActorById } from "../services/movieAPI";
// Importation des hooks React
import { useEffect, useState } from "react";
// Importation des composants Material-UI
import { Container, Typography, Box, CircularProgress } from "@mui/material";
// Importation du hook pour accéder aux paramètres d'URL
import { useParams } from "react-router-dom";

/**
 * Composant ActorDetailPage - Page de détails d'un acteur
 * Affiche toutes les informations détaillées d'un acteur spécifique
 */
const ActorDetailPage = () => {
    // Récupération de l'ID de l'acteur depuis l'URL
    const { id } = useParams();
    // État pour stocker les détails de l'acteur
    const [actor, setActor] = useState(null);
    // État pour gérer le chargement
    const [loading, setLoading] = useState(true);

    /**
     * Fonction pour récupérer les détails de l'acteur depuis l'API
     */
    const fetchActorById = async () => {
        try {
            setLoading(true);
            // Appel à l'API avec l'ID de l'acteur
            const response = await getActorById(id);
            // Mise à jour de l'état avec les données de l'acteur
            setActor(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    // Exécution du chargement quand l'ID change
    useEffect(() => {
        fetchActorById();
    }, [id])

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            {/* Affichage conditionnel : chargement, acteur trouvé ou message d'erreur */}
            {loading ? (
                // Spinner de chargement
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                    <CircularProgress />
                </Box>
            ) : actor ? (
                <Box>
                    {/* Conteneur flex pour afficher l'image et les infos côte à côte */}
                    <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
                        {/* Photo de profil de l'acteur */}
                        {actor.profile_path && (
                            <Box sx={{ flex: '0 0 300px' }}>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`} 
                                    alt={actor.name} 
                                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
                                />
                            </Box>
                        )}

                        {/* Informations principales de l'acteur */}
                        <Box sx={{ flex: 1 }}>
                            {/* Nom de l'acteur */}
                            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                                {actor.name}
                            </Typography>

                            {/* Département/domaine d'activité */}
                            {actor.known_for_department && (
                                <Typography variant="h6" sx={{ mb: 1 }}>
                                    Domaine: {actor.known_for_department}
                                </Typography>
                            )}

                            {/* Date de naissance */}
                            {actor.birthday && (
                                <Typography variant="h6" sx={{ mb: 1 }}>
                                    Date de naissance: {actor.birthday}
                                </Typography>
                            )}

                            {/* Lieu de naissance */}
                            {actor.place_of_birth && (
                                <Typography variant="h6" sx={{ mb: 1 }}>
                                    Lieu de naissance: {actor.place_of_birth}
                                </Typography>
                            )}

                            {/* Indice de popularité */}
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Popularité: {actor.popularity.toFixed(1)}
                            </Typography>

                            {/* Genre */}
                            {actor.gender && (
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    Genre: {actor.gender === 1 ? 'Femme' : 'Homme'}
                                </Typography>
                            )}
                        </Box>
                    </Box>

                    {/* Biographie de l'acteur */}
                    {actor.biography && (
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Biographie
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                {actor.biography}
                            </Typography>
                        </Box>
                    )}

                    {/* Message si pas de biographie */}
                    {!actor.biography && (
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            Aucune biographie disponible pour cet acteur.
                        </Typography>
                    )}
                </Box>
            ) : (
                // Message si l'acteur n'est pas trouvé
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Acteur non trouvé.
                </Typography>
            )}
        </Container>
    );
};

export default ActorDetailPage;
