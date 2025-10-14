# LED Alsace - Site Web Moderne

Site web moderne et responsive pour LED Alsace, spécialiste en enseignes lumineuses, marquage véhicule et signalétique en Alsace.

## 🚀 Technologies utilisées

- **React 18** avec Vite
- **React Router** pour la navigation multi-pages
- **Tailwind CSS** pour le design moderne
- **Lucide React** pour les icônes
- **shadcn/ui** pour les composants UI

## 📋 Prérequis

- Node.js 18+ 
- npm ou pnpm

## 🛠️ Installation

```bash
# Cloner le repository
git clone <votre-repo-url>
cd led-alsace-moderne

# Installer les dépendances
npm install
# ou
pnpm install

# Lancer le serveur de développement
npm run dev
# ou
pnpm dev
```

Le site sera accessible sur `http://localhost:5173`

## 📦 Build pour production

```bash
# Créer le build de production
npm run build
# ou
pnpm build

# Le dossier dist/ contiendra les fichiers prêts à être déployés
```

## 🌐 Structure du projet

```
led-alsace-moderne/
├── src/
│   ├── assets/              # Images et ressources
│   │   └── realisations/    # Photos de réalisations
│   ├── components/          # Composants réutilisables
│   │   ├── ui/              # Composants UI (shadcn)
│   │   └── Layout.jsx       # Layout principal avec navigation
│   ├── pages/               # Pages du site
│   │   ├── services/        # Pages détaillées des services
│   │   ├── Home.jsx         # Page d'accueil
│   │   ├── Services.jsx     # Liste des services
│   │   ├── Realisations.jsx # Galerie de réalisations
│   │   ├── NosClients.jsx   # Témoignages clients
│   │   ├── APropos.jsx      # À propos
│   │   ├── Questions.jsx    # FAQ
│   │   ├── Catalogue.jsx    # Catalogues téléchargeables
│   │   └── Contact.jsx      # Formulaire de contact
│   ├── App.jsx              # Composant principal avec routes
│   ├── App.css              # Styles globaux
│   └── main.jsx             # Point d'entrée
├── index.html               # Template HTML
├── package.json             # Dépendances
├── vite.config.js           # Configuration Vite
├── tailwind.config.js       # Configuration Tailwind
└── postcss.config.js        # Configuration PostCSS
```

## 📄 Pages disponibles

### Pages principales (8)
- **Accueil** (`/`) - Page d'accueil avec carrousel, services, témoignages
- **Services** (`/services`) - Liste complète des services
- **Réalisations** (`/realisations`) - Galerie de 14 projets avec filtres
- **Nos Clients** (`/nos-clients`) - Témoignages et liste de 31+ clients
- **À Propos** (`/a-propos`) - Histoire, valeurs, engagements
- **Questions** (`/questions`) - FAQ organisée par catégories
- **Catalogue** (`/catalogue`) - 4 catalogues téléchargeables
- **Contact** (`/contact`) - Formulaire, carte Google Maps, horaires

### Pages de services détaillées (7)
- **Enseignes** (`/services/enseignes`) - 8 réalisations
- **Marquage Véhicule** (`/services/marquage-vehicule`) - 5 réalisations
- **Marquage Vitrine** (`/services/marquage-vitrine`) - 3 réalisations
- **Impression Grand Format** (`/services/impression-grand-format`) - 2 réalisations
- **Textile & E.P.I.** (`/services/textile-epi`)
- **Signalétique** (`/services/signaletique`) - 2 réalisations
- **Création Graphique** (`/services/creation-graphique`)

## 🎨 Fonctionnalités

✅ **Navigation multi-pages** avec menu déroulant fonctionnel
✅ **Design responsive** adapté mobile, tablette, desktop
✅ **Carrousel automatique** sur la page d'accueil
✅ **Galeries d'images** avec filtres par catégorie
✅ **Animations fluides** sur toutes les interactions
✅ **Carte Google Maps** intégrée
✅ **Formulaire de contact** complet
✅ **Call-to-action** stratégiques sur chaque page
✅ **19 images réelles** de réalisations
✅ **Statistiques** : +1120 enseignes, +490 marquages véhicules, +2115 clients

## 🎨 Couleurs

- **Jaune principal** : `#FCD34D` (yellow-400)
- **Noir** : `#000000`
- **Blanc** : `#FFFFFF`
- **Gris** : Nuances de gray

## 📞 Informations de contact

**LED Alsace**
- Adresse : La Vigie, 12 Rue Théodore Monod, 67540 Ostwald
- Téléphone : 03 88 40 15 47
- Email : contact@ledalsace.com
- Site web : https://www.ledalsace.com

## 📝 Licence

Tous droits réservés © LED Alsace 2024

## 🤝 Contribution

Ce site a été créé pour LED Alsace. Pour toute modification ou amélioration, veuillez contacter l'équipe de développement.

## 🚀 Déploiement

Le site peut être déployé sur :
- Vercel
- Netlify
- GitHub Pages
- Tout hébergeur supportant les sites statiques React

### Déploiement sur Vercel

```bash
npm install -g vercel
vercel
```

### Déploiement sur Netlify

```bash
npm run build
# Puis glisser-déposer le dossier dist/ sur Netlify
```

## 📧 Support

Pour toute question ou assistance, contactez : contact@ledalsace.com
