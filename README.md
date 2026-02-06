# 🍽️ Les Délices Divines - Site Web Premium

> **Quand la gastronomie devient divine**

Un site web gastronomique premium et immersif pour *Les Délices Divines*, restaurant haut de gamme à Cotonou, Bénin.

![Version](https://img.shields.io/badge/version-1.0.0-gold)
![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ Caractéristiques Principales

### 🎨 Design Premium
- **Palette de couleurs luxueuse** : Noir profond, doré chaud, crème, marbre
- **Typographies élégantes** : Cormorant Garamond (serif) + Inter (sans-serif)
- **Micro-animations** subtiles et professionnelles
- **Effets visuels** : hover transitions, fade-in, slide animations
- **Design responsive** mobile-first avec breakpoints optimisés

### 📱 Fonctionnalités

#### 🌟 Hero Section Immersive
- Gradient cinématographique noir/doré
- Animations en cascade au chargement
- Call-to-action WhatsApp et téléphone
- Icône de scroll animé

#### 🍽️ Showcase des Plats Signatures
- Grille responsive (1/2/3 colonnes)
- Cards avec effet de hover élégant
- Badges "Populaire" dorés
- Prix formatés en XOF avec Intl.NumberFormat
- Bouton de commande WhatsApp direct

#### ⭐ Section Avis Clients
- Design dark premium avec bordures dorées
- Système d'étoiles visuelles
- Citations élégantes et témoignages authentiques

#### 📞 Contact & Commande Rapide
- Informations de contact avec icônes
- Zone CTA dark premium pour commandes rapides
- Boutons WhatsApp et téléphone intégrés

#### 💬 Bouton WhatsApp Flottant
- Position fixe bottom-right
- Animation de pulsation continue
- Effet hover avec scale
- Messages pré-remplis contextuels

### 🚀 Technologies Utilisées

- **Framework**: Next.js 16.1.6 avec App Router
- **Styling**: TailwindCSS 4 + CSS Vanilla premium
- **Fonts**: Google Fonts (Cormorant Garamond, Inter)
- **TypeScript**: Pour la sécurité du code
- **Data Source**: JSON local (`src/data/menu.json`)

---

## 📂 Structure du Projet

```
dev/
├── src/
│   ├── app/
│   │   ├── globals.css          # Système de design complet
│   │   ├── layout.tsx            # Layout avec SEO optimisé
│   │   └── page.tsx              # Page principale (homepage)
│   └── data/
│       └── menu.json             # Données du restaurant
├── public/                       # Assets statiques
├── package.json
└── README.md
```

---

## 🎯 Installation & Lancement

### Prérequis
- Node.js 20+ 
- npm ou yarn

### Installation

```bash
# Se placer dans le dossier du projet
cd "G:/Délices Divines/dev"

# Installer les dépendances (si nécessaire)
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur : **http://localhost:3000**

### Build de Production

```bash
# Créer un build optimisé
npm run build

# Lancer en production
npm start
```

---

## 🎨 Système de Design

### Palette de Couleurs

| Couleur | Valeur Hex | Usage |
|---------|-----------|-------|
| Noir profond | `#0a0a0a` | Background principal, texte |
| Noir doux | `#1a1a1a` | Backgrounds secondaires |
| Or chaud | `#d4af37` | Accents premium, CTA |
| Or clair | `#f4e4c1` | Dégradés, hover states |
| Crème | `#faf8f3` | Background sections claires |
| Crème foncé | `#e8e4dc` | Textes secondaires |

### Typographie

```css
/* Titres - Serif élégante */
font-family: 'Cormorant Garamond', serif;

/* Corps de texte - Sans-serif moderne */
font-family: 'Inter', sans-serif;
```

### Espacements

```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2.5rem;    /* 40px */
--spacing-xl: 4rem;      /* 64px */
--spacing-2xl: 6rem;     /* 96px */
```

---

## 📊 Structure des Données (menu.json)

```json
{
  "restaurantName": "Les Délices Divines",
  "tagline": "L'excellence gastronomique à portée de main",
  "contact": {
    "phone": "+22900000000",
    "whatsapp": "22900000000",
    "email": "contact@delicesdivines.com",
    "address": "Avenue de l'Excellence, Cotonou, Bénin",
    "openingHours": "Lun - Dim: 11h00 - 23h00"
  },
  "menu": [
    {
      "id": 1,
      "name": "Souris d'Agneau Confite",
      "description": "...",
      "price": 14500,
      "category": "Plats principaux",
      "popular": true,
      "image": "lamb_shank.jpg"
    }
  ],
  "reviews": [...]
}
```

---

## 🔗 Intégration WhatsApp

Les liens WhatsApp sont générés dynamiquement avec des messages pré-remplis :

```typescript
const getWhatsAppLink = (dishName: string) => {
  const message = `Bonjour, je souhaite commander : ${dishName}`;
  return `https://wa.me/${menuData.contact.whatsapp}?text=${encodeURIComponent(message)}`;
};
```

**Exemples de liens** :
- Commander un plat spécifique : message avec nom du plat
- Menu général : "Bonjour, je souhaite consulter votre menu"
- CTA Hero : "Menu du jour"

---

## 🎭 Animations & Interactions

### Animations au chargement
- `fadeInUp` : Apparition avec translation verticale
- `fadeIn` : Fondu simple
- `slideInFromLeft` : Arrivée depuis la gauche

### Micro-interactions
- **Cards** : `translateY(-8px)` + ombre accentuée au hover
- **Boutons** : `translateY(-2px)` + ombre dorée au hover
- **Images** : `scale(1.05)` au hover dans les cards
- **WhatsApp flottant** : Animation pulse continue + scale au hover

---

## 📱 Responsive Design

### Breakpoints

- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

### Optimisations Mobile
- Navigation simplifiée
- Grille 1 colonne sur mobile
- Tailles de police fluides (clamp)
- Espacement réduit sur petits écrans
- Bouton WhatsApp adapté

---

## 🔍 SEO & Performance

### Métadonnées optimisées
- Titre descriptif avec localisation (Cotonou)
- Meta description riche en mots-clés
- Open Graph tags pour partages sociaux
- Twitter Card pour tweets enrichis
- Lang="fr" pour le français

### Performance
- Google Fonts avec `preconnect`
- CSS optimisé avec Tailwind
- Next.js 16 avec Turbopack
- Images optimisées (à ajouter avec Next/Image)

**Cible Lighthouse** : Score 95+

---

## 🚀 Prochaines Améliorations

### Phase 2 - Fonctionnalités avancées
- [ ] Vraies images culinaires professionnelles
- [ ] Galerie photo interactive
- [ ] Page menu complète avec filtres par catégorie
- [ ] Système de réservation en ligne
- [ ] Blog gastronomique
- [ ] Multi-langue (FR/EN)

### Phase 3 - Intégrations
- [ ] Google Maps pour localisation
- [ ] Liens réseaux sociaux (Instagram, Facebook)
- [ ] Newsletter par email
- [ ] Système de commande avancé
- [ ] Back-office pour gérer le menu

---

## 👨‍💻 Développement

### Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification ESLint
```

### Variables CSS personnalisées

Toutes les couleurs, espacements, ombres et transitions sont disponibles via CSS variables :

```css
var(--color-gold-warm)
var(--spacing-xl)
var(--shadow-gold)
var(--transition-elegant)
```

---

## 📄 License

MIT © 2026 Les Délices Divines

---

## 🙏 Crédits

- **Design & Développement** : Équipe Antigravity AI
- **Typographies** : Google Fonts (Cormorant Garamond, Inter)
- **Framework** : Next.js by Vercel
- **Styling** : Tailwind CSS

---

## 📞 Contact Restaurant

- **Téléphone** : +229 00 00 00 00
- **WhatsApp** : +229 00 00 00 00
- **Email** : contact@delicesdivines.com
- **Adresse** : Avenue de l'Excellence, Cotonou, Bénin
- **Horaires** : Lun - Dim: 11h00 - 23h00

---

**Bon appétit ! 🍽️✨**
