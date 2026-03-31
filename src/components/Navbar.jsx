// Importation du hook de navigation de React Router
import { useNavigate } from "react-router-dom";
// Importation des composants Material-UI pour la barre d'application
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem } from "@mui/material";

/**
 * Composant Navbar - Barre de navigation de l'application
 * Permet de naviguer vers la page d'accueil (HomePage)
 */
const Navbar = () => {
    // Hook pour la navigation programmatique
    const navigate = useNavigate();

    /**
     * Fonction de gestion du clic sur le menu accueil
     * Redirige vers la page d'accueil (/home)
     */
    const handleClick = () => {
        navigate("/home");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Barre d'application avec position statique */}
            <AppBar position="static">
                <Toolbar>
                    {/* Bouton d'icône pour le menu */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* Élément de menu Home avec gestionnaire de clic */}
                    <MenuItem onClick={handleClick}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Home
                        </Typography>
                    </MenuItem>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;