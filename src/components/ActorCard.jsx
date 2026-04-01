// Importation des composants Material-UI pour la carte d'acteur
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
// Importation du hook de navigation
import { useNavigate } from 'react-router-dom';

// URL de base pour les images de profil (The Movie Database API)
const profileImage = "https://image.tmdb.org/t/p/w342"

/**
 * Composant ActorCard - Affiche une carte d'acteur
 * Affiche la photo de profil, le nom et la popularité de l'acteur
 * @param {Object} props - Données de l'acteur (id, name, profile_path, popularity, known_for_department)
 */
const ActorCard = ({props}) => {
    // Hook pour naviguer vers la page détails de l'acteur
    const navigate = useNavigate();

    /**
     * Fonction de gestion du clic sur la carte
     * Redirige vers la page détails de l'acteur avec son ID
     */
    const handleClick = () => {
        navigate(`/actor/${props.id}`);
    };

    return (
        // Carte principale avec effets de survol
        <Card sx={{ 
            height: '500px', 
            display: 'flex', 
            flexDirection: 'column',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 20px rgba(0,0,0,0.15)'
            }
        }}>
            {/* Zone cliquable de la carte */}
            <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }} onClick={handleClick}>
                {/* Image de profil de l'acteur */}
                <Box sx={{ 
                    width: '100%', 
                    height: '320px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <CardMedia
                        component="img"
                        image={props.profile_path ? `${profileImage}${props.profile_path}` : 'https://via.placeholder.com/342x350?text=No+Image'}
                        alt={props.name}
                        sx={{ 
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover', 
                            flexShrink: 0 
                        }}
                    />
                </Box>
                {/* Contenu de la carte (nom, département, popularité) */}
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    {/* Nom de l'acteur */}
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {props.name}
                    </Typography>
                    
                    {/* Département ou domaine d'activité (Acting, Directing, etc.) */}
                    {props.known_for_department && (
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                            {props.known_for_department}
                        </Typography>
                    )}

                    {/* Indice de popularité */}
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Popularité: {props.popularity.toFixed(1)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ActorCard;
