// Importation des composants Material-UI pour la carte de film
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
// Importation du hook de navigation
import { useNavigate } from 'react-router-dom';

// URL de base pour les images de films (The Movie Database API)
const poster = "https://image.tmdb.org/t/p/w342"

/**
 * Composant MovieCard - Affiche une carte de film
 * Affiche l'affiche, le titre, la note et un aperçu du film
 * @param {Object} props - Données du film (id, title, poster_path, vote_average, overview, release_date)
 */
const MovieCard = ({props}) => {
    // Hook pour naviguer vers la page détails du film
    const navigate = useNavigate();
    // Conversion de la note sur 10 à une note sur 5 (pour le composant Rating)
    const rating = props.vote_average / 2;

    /**
     * Fonction de gestion du clic sur la carte
     * Redirige vers la page détails du film avec son ID
     */
    const handleClick = () => {
        navigate(`/movie/${props.id}`);
    };

    return (
        
        <Card sx={{ 
            height: '550px', 
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
                {/* Image d'affiche du film */}
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
                        image={`${poster}${props.poster_path}`}
                        alt={props.title}
                        sx={{ 
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover', 
                            flexShrink: 0 
                        }}
                    />
                </Box>
                {/* Contenu de la carte (titre, note, résumé) */}
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    {/* Titre du film */}
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {props.title}
                    </Typography>
                    
                    {/* Système d'évaluation en étoiles avec note numérique */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Rating 
                            value={rating} 
                            readOnly 
                            precision={0.5}
                            size="small"
                        />
                        {/* Note sur 10 */}
                        <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
                            ({props.vote_average.toFixed(1)})
                        </Typography>
                    </Box>

                    {/* Aperçu du film avec limitation à 3 lignes */}
                    <Typography variant="body2" sx={{ 
                        color: 'text.secondary',
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3
                    }}>
                        {props.overview}
                    </Typography>

                    {/* Date de sortie au format français */}
                    <Typography variant="caption" sx={{ mt: 2, color: 'text.secondary' }}>
                        Date: {new Date(props.release_date).toLocaleDateString('fr-FR')}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MovieCard;