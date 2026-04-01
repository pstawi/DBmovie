// Importation de la fonction createTheme de Material-UI
import { createTheme } from '@mui/material/styles';

/**
 * Thème personnalisé "Taverne Spatiale"
 * Couleurs: Violets, noirs, bleus foncés avec des accents brillants
 */
const theme = createTheme({
    // Palette de couleurs
    palette: {
        // Mode sombre pour l'ambiance taverne spatiale
        mode: 'dark',
        // Couleur primaire - violet/magenta spatialement futuriste
        primary: {
            main: '#9D4EDD',
            light: '#C77DFF',
            dark: '#7209B7',
            contrastText: '#fff',
        },
        // Couleur secondaire - cyan/bleu vivant
        secondary: {
            main: '#00D9FF',
            light: '#48DBF8',
            dark: '#0074B4',
            contrastText: '#000',
        },
        // Couleur d'erreur - rouge espacé
        error: {
            main: '#FF006E',
            light: '#FF4D94',
            dark: '#C80050',
        },
        // Couleur de réussite - vert lumineux
        success: {
            main: '#06FFA5',
            light: '#47E5C1',
            dark: '#00CC7A',
        },
        // Couleur d'avertissement - orange spatial
        warning: {
            main: '#FFB703',
            light: '#FFD60A',
            dark: '#CC6600',
        },
        // Couleur info - bleu cyan
        info: {
            main: '#00D9FF',
            light: '#48DBF8',
            dark: '#0074B4',
        },
        // Couleurs de fond
        background: {
            default: '#0A0A0A',
            paper: '#1A1A2E',
        },
        // Texte
        text: {
            primary: '#FFFFFF',
            secondary: '#B0B0B0',
            disabled: '#666666',
        },
        // Bordures
        divider: 'rgba(157, 78, 221, 0.2)',
    },

    // Typographie
    typography: {
        // Famille de polices futuriste
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        
        // Titre h1
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            letterSpacing: '0.5px',
            color: '#9D4EDD',
            textShadow: '0 0 20px rgba(157, 78, 221, 0.5)',
        },
        
        // Titre h2
        h2: {
            fontSize: '2rem',
            fontWeight: 700,
            letterSpacing: '0.5px',
            color: '#00D9FF',
            textShadow: '0 0 15px rgba(0, 217, 255, 0.3)',
        },
        
        // Titre h3
        h3: {
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#C77DFF',
            textShadow: '0 0 10px rgba(199, 125, 255, 0.2)',
        },
        
        // Titre h4
        h4: {
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#9D4EDD',
        },
        
        // Titre h5
        h5: {
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#00D9FF',
        },
        
        // Titre h6
        h6: {
            fontSize: '1rem',
            fontWeight: 600,
            color: '#C77DFF',
        },
        
        // Texte de corps
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        
        // Texte secondaire
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.5,
        },
        
        // Sous-titre
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 500,
            color: '#B0B0B0',
        },
        
        // Sous-titre secondaire
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#00D9FF',
            opacity: 0.8,
        },
    },

    // Composants personnalisés
    components: {
        // Barre d'application
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 50%, #0A0A0A 100%)',
                    boxShadow: '0 0 30px rgba(157, 78, 221, 0.3), 0 0 50px rgba(0, 217, 255, 0.1)',
                    borderBottom: '2px solid #9D4EDD',
                },
            },
        },

        // Boutons
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                    borderRadius: '8px',
                },
                contained: {
                    background: 'linear-gradient(135deg, #9D4EDD 0%, #7209B7 100%)',
                    boxShadow: '0 0 15px rgba(157, 78, 221, 0.4)',
                    '&:hover': {
                        boxShadow: '0 0 25px rgba(157, 78, 221, 0.8)',
                        transform: 'translateY(-2px)',
                    },
                },
                outlined: {
                    borderColor: '#9D4EDD',
                    color: '#9D4EDD',
                    '&:hover': {
                        borderColor: '#C77DFF',
                        backgroundColor: 'rgba(157, 78, 221, 0.1)',
                        boxShadow: '0 0 15px rgba(157, 78, 221, 0.3)',
                    },
                },
                text: {
                    color: '#00D9FF',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 217, 255, 0.1)',
                        textShadow: '0 0 10px rgba(0, 217, 255, 0.5)',
                    },
                },
            },
        },

        // Cartes
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)',
                    border: '1px solid rgba(157, 78, 221, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 217, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        border: '1px solid rgba(0, 217, 255, 0.6)',
                        boxShadow: '0 8px 32px rgba(0, 217, 255, 0.3), inset 0 0 20px rgba(157, 78, 221, 0.1)',
                    },
                },
            },
        },

        // Zone d'action de la carte
        MuiCardActionArea: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: 'rgba(157, 78, 221, 0.05)',
                    },
                },
            },
        },

        // Contenu de la carte
        MuiCardContent: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(10, 10, 10, 0.5)',
                },
            },
        },

        // Conteneur
        MuiContainer: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    borderRadius: '8px',
                },
            },
        },

        // Chips
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(157, 78, 221, 0.2)',
                    borderColor: '#9D4EDD',
                    color: '#C77DFF',
                    fontWeight: 500,
                    '&:hover': {
                        backgroundColor: 'rgba(157, 78, 221, 0.4)',
                        boxShadow: '0 0 10px rgba(157, 78, 221, 0.5)',
                    },
                },
                outlined: {
                    borderColor: '#00D9FF',
                    color: '#00D9FF',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 217, 255, 0.1)',
                        boxShadow: '0 0 10px rgba(0, 217, 255, 0.4)',
                    },
                },
            },
        },

        // Évaluation (Rating)
        MuiRating: {
            styleOverrides: {
                root: {
                    color: '#FFB703',
                },
            },
        },

        // Menu
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: 'rgba(157, 78, 221, 0.2)',
                        borderLeft: '3px solid #00D9FF',
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(157, 78, 221, 0.3)',
                        borderLeft: '3px solid #9D4EDD',
                    },
                },
            },
        },

        // Barre de progression
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(157, 78, 221, 0.2)',
                },
                bar: {
                    background: 'linear-gradient(90deg, #9D4EDD 0%, #00D9FF 100%)',
                    boxShadow: '0 0 15px rgba(0, 217, 255, 0.5)',
                },
            },
        },

        // Progression circulaire
        MuiCircularProgress: {
            styleOverrides: {
                root: {
                    color: '#00D9FF',
                },
            },
        },

        // Champs de texte
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderColor: '#9D4EDD',
                        '&:hover fieldset': {
                            borderColor: '#00D9FF',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#00D9FF',
                            boxShadow: '0 0 15px rgba(0, 217, 255, 0.3)',
                        },
                    },
                },
            },
        },

        // Grille
        MuiGrid: {
            styleOverrides: {
                root: {
                    // Force l'affichage correct de la grille
                },
            },
        },

        // Boîte
        MuiBox: {
            styleOverrides: {
                root: {
                    // Pas de style spécifique par défaut
                },
            },
        },
    },

    // Points de rupture responsifs
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

export default theme;
