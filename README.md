# ForEachFlix - Application de Decouverte de Films

ForEachFlix est une application web permettant de decouvrir et d'explorer les films populaires en utilisant l'API The Movie Database (TMDB).

## Features

- 🎬 Affichage de la liste des films populaires
- ⭐ Notation des films avec un systeme d'etoiles
- 🎞️ Page de details detaillee pour chaque film
- � Liste et details des acteurs populaires
- 📱 Design responsive adapte a tous les appareils
- 🎨 Thème "Taverne Spatiale" avec interface moderne Material-UI
- 🌐 Langue francaise par defaut
- ⚡ Navigation rapide avec React Router
- 🌟 Effets visuels lumineux et animations fluides

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

## Thème "Taverne Spatiale"

L'application utilise un thème personnalisé Material-UI inspiré d'une taverne spatiale futuriste.

### Palette de Couleurs
- **Couleur Primaire** : Violet Magenta (#9D4EDD) - Ambiance spaciale
- **Couleur Secondaire** : Cyan/Bleu (#00D9FF) - Accents lumineux
- **Couleur d'Erreur** : Rouge Espacé (#FF006E)
- **Couleur de Réussite** : Vert Lumineux (#06FFA5)
- **Couleur d'Avertissement** : Orange Spatial (#FFB703)
- **Fond** : Noir profond (#0A0A0A) avec dégradés sombres

### Effets Visuels
- 🌌 Dégradés de fond animés en boucle infinie
- ✨ Effets de lueur (glow) sur les éléments interactifs
- 🎭 Ombres de texte pour les titres
- 🔮 Transitions fluides sur tous les éléments
- 🌠 Animations d'entrée pour les cartes
- 🖱️ Scrollbar personnalisée avec dégradé lumineux

### Fichiers du Thème
- `src/theme.js` - Configuration complète du thème Material-UI
- `src/App.css` - Styles personnalisés et animations
- `src/index.css` - Styles CSS globaux

## Structure du Projet

```
foreachFlix/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx       # Composant pour afficher une carte de film
│   │   ├── ActorCard.jsx       # Composant pour afficher une carte d'acteur
│   │   └── Navbar.jsx          # Barre de navigation
│   ├── pages/
│   │   ├── HomePage.jsx        # Page d'accueil avec liste des films
│   │   ├── MoviePage.jsx       # Page de details d'un film
│   │   ├── ActorsPage.jsx      # Page d'accueil avec liste des acteurs
│   │   └── ActorDetailPage.jsx # Page de details d'un acteur
│   ├── services/
│   │   └── movieAPI.js         # Client API pour TMDB
│   ├── App.jsx                 # Composant principal avec routage
│   ├── App.css                 # Styles personnalisés pour le thème
│   ├── index.css               # Styles CSS globaux
│   ├── theme.js                # Configuration du thème Material-UI
│   └── main.jsx                # Point d'entree React
├── public/                      # Fichiers statiques
├── index.html                  # Page HTML principale
├── vite.config.js              # Configuration Vite
├── eslint.config.js            # Configuration ESLint
├── package.json                # Dependances et scripts
└── README.md                   # Documentation

```

## Utilisation

### Page d'Accueil Films (HomePage)
- Affiche la liste completes des films populaires
- Chaque film est affiche sous forme de carte
- Les cartes affichent: l'affiche, le titre, la notation et un apercu
- Effet de survol qui souleve la carte

### Page de Details d'un Film (MoviePage)
- Affiche les informations completes d'un film
- Affiche: titre, affiche, date de sortie, note et synopsis complet
- Affiche la distribution (10 premiers acteurs avec leurs rôles)
- Accessible en cliquant sur une carte de film

### Page d'Accueil Acteurs (ActorsPage)
- Affiche la liste des acteurs populaires
- Chaque acteur est affiche sous forme de carte
- Les cartes affichent: la photo, le nom et la popularité
- Effet de survol identique aux films

### Page de Details d'un Acteur (ActorDetailPage)
- Affiche les informations detaillees d'un acteur
- Photo de profil, nom, domaine d'activité
- Date et lieu de naissance
- Biographie complete
- Accessible en cliquant sur une carte d'acteur

### Barre de Navigation
- Bouton "Films" pour acceder a la liste des films
- Bouton "Acteurs" pour acceder a la liste des acteurs
- Presente en haut de chaque page avec effets lumineux

## API

Le projet utilise l'API TMDB (The Movie Database):
- **Base URL**: `https://api.themoviedb.org/3`
- **Cle API**: Stockee dans `src/services/movieAPI.js`
- **Endpoints utilises**:
  - `/movie/popular` - Liste des films populaires
  - `/movie/{id}` - Details d'un film specifique
  - `/movie/{id}/credits` - Credits/acteurs d'un film
  - `/person/popular` - Liste des acteurs populaires
  - `/person/{id}` - Details d'un acteur specifique

## Composants

### MovieCard
Affiche une carte de film avec:
- Image d'affiche du film
- Titre
- Note evaluee par des etoiles
- Resumer du film (3 lignes max)
- Date de sortie en format francais
- Effet de lueur au survol

### ActorCard
Affiche une carte d'acteur avec:
- Photo de profil de l'acteur
- Nom
- Departement/domaine d'activité
- Indice de popularité
- Effet de lueur au survol

### Navbar
Barre de navigation avec:
- Bouton "Films" pour la liste des films
- Bouton "Acteurs" pour la liste des acteurs
- Effets lumineux du thème taverne spatiale
- Barre d'application avec dégradé personnalisé

## Configuration Thème

Le fichier `src/theme.js` contient:
- Palette de couleurs personnalisée (violet, cyan, rouge spatialisé)
- Typographie avec effets de lueur (text-shadow)
- Styles personnalisés pour les composants Material-UI
- Transitions fluides et animations
- Thème sombre adapte a l'ambiance taverne spatiale

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
- Le thème personnalisé offre une ambiance immersive "Taverne Spatiale"

## FAQ

### Comment changer le thème?
Le thème est configure dans `src/theme.js`. Modifiez la palette de couleurs dans l'objet `palette` de `createTheme()`.

### Comment changer la cle API?
Modifiez la variable `apiKey` dans `src/services/movieAPI.js`

### Comment changer la langue?
Modifiez le parametre `language` dans la configuration du client axios dans `src/services/movieAPI.js`

### Comment ajouter plus de pages?
1. Creez un nouveau fichier dans `src/pages/`
2. Ajoutez une route dans `App.jsx`
3. Ajoutez un lien dans la Navbar si nécessaire

### Comment modifier un dégradé ou une couleur?
- Couleurs principales: `src/theme.js` (objet `palette`)
- Animations et effects: `src/App.css` et `src/index.css`
- Styles globaux: `src/index.css`

---

**Dernière mise à jour**: Mars 2026
