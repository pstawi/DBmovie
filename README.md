# ForEachFlix - Application de Decouverte de Films

ForEachFlix est une application web permettant de decouvrir et d'explorer les films populaires en utilisant l'API The Movie Database (TMDB).

## Features

- 🎬 Affichage de la liste des films populaires
- ⭐ Notation des films avec un systeme d'etoiles
- 🎞️ Page de details detaillee pour chaque film
- 📱 Design responsive adapte a tous les appareils
- 🎨 Interface moderne avec Material-UI
- 🌐 Langue francaise par defaut
- ⚡ Navigation rapide avec React Router

## Technologies Utilisees

- **React 19** - Bibliothèque JavaScript pour la construction d'interfaces utilisateur
- **Vite** - Build tool moderne et rapide
- **Material-UI** - Composants React avec design Material Design
- **React Router** - Gestion du routage et de la navigation
- **Axios** - Client HTTP pour les requetes API
- **The Movie Database (TMDB) API** - Source des donnees sur les films

## Installation

1. Clonez ou telechargez le projet
2. Installez les dependances :
```bash
npm install
```

## Lancer l'Application

### Mode Developpement
```bash
npm run dev
```
L'application sera accessible a `http://localhost:5173`

### Build Production
```bash
npm run build
```

### Preview du Build
```bash
npm run preview
```

### Linter
```bash
npm run lint
```

## Structure du Projet

```
foreachFlix/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx       # Composant pour afficher une carte de film
│   │   └── Navbar.jsx          # Barre de navigation
│   ├── pages/
│   │   ├── HomePage.jsx        # Page d'accueil avec liste des films
│   │   └── MoviePage.jsx       # Page de details d'un film
│   ├── services/
│   │   └── movieAPI.js         # Client API pour TMDB
│   ├── App.jsx                 # Composant principal
│   ├── App.css                 # Styles globaux
│   ├── index.css               # Styles CSS globaux
│   └── main.jsx                # Point d'entree React
├── public/                      # Fichiers statiques
├── index.html                  # Page HTML principale
├── vite.config.js              # Configuration Vite
├── eslint.config.js            # Configuration ESLint
├── package.json                # Dependances et scripts
└── README.md                   # Documentation

```

## Utilisation

### Page d'Accueil (HomePage)
- Affiche la liste completes des films populaires
- Chaque film est affiche sous forme de carte
- Les cartes affichent: l'affiche, le titre, la notation et un apercu
- Effet de survol qui souleve la carte

### Page de Details (MoviePage)
- Affiche les informations completes d'un film
- Affiche: titre, affiche, date de sortie, note et synopsis complet
- Accessible en cliquant sur une carte de film

### Barre de Navigation
- Contient un bouton "Home" pour revenir a la page d'accueil
- Presente en haut de chaque page

## API

Le projet utilise l'API TMDB (The Movie Database):
- **Base URL**: `https://api.themoviedb.org/3`
- **Cle API**: Stockee dans `src/services/movieAPI.js`
- **Endpoints utilises**:
  - `/movie/popular` - Liste des films populaires
  - `/movie/{id}` - Details d'un film specifique

## Composants

### MovieCard
Affiche une carte de film avec:
- Image d'affiche du film
- Titre
- Note evaluee par des etoiles
- Resumer du film (3 lignes max)
- Date de sortie

### Navbar
Barre de navigation avec:
- Logo/icone
- Bouton Home

## Configuration ESLint

Le projet utilise ESLint avec:
- Configuration JavaScript recommandee
- Regles React Hooks
- Plugin React Refresh pour Vite

## Notes de Developpement

- L'application utilise vite pour un developpement rapide avec HMR (Hot Module Replacement)
- React utilise les hooks modernes (useState, useEffect)
- Le routage est gere avec React Router v7
- Material-UI fournit une methodologie de design cohérente

## FAQ

### Comment changer la cle API?
Modifiez la variable `apiKey` dans `src/services/movieAPI.js`

### Comment changer la langue?
Modifiez le parametre `language` dans la configuration du client axios dans `src/services/movieAPI.js`

### Comment ajouter plus de pages?
1. Creez un nouveau fichier dans `src/pages/`
2. Ajoutez une route dans `App.jsx`
3. Ajoutez un lien dans la Navbar si nécessaire

---

**Dernière mise à jour**: Mars 2026
