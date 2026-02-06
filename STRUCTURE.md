# 📐 Guide de Structure - Les Délices Divines

Ce document décrit la structure complète et l'organisation visuelle du site web premium.

---

## 🏗️ Architecture des Pages

### Page Principale (Homepage - page.tsx)

Le site est une **Single Page Application (SPA)** structurée en sections scrollables :

```
┌─────────────────────────────────────────┐
│                                         │
│   1. HERO SECTION (Full viewport)      │
│   - Background dégradé cinématographique│
│   - Logo doré central                   │
│   - Titre "Les Délices Divines"        │
│   - Subtitle "Quand la gastronomie..."  │
│   - 2 CTA : WhatsApp + Téléphone        │
│   - Scroll indicator animé              │
│                                         │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│                                         │
│   2. PLATS SIGNATURES                   │
│   Background : Crème (#faf8f3)          │
│                                         │
│   [Titre centré]                        │
│   "Nos Plats Signatures"                │
│                                         │
│   ┌──────┐  ┌──────┐  ┌──────┐         │
│   │ Card │  │ Card │  │ Card │         │
│   │  #1  │  │  #2  │  │  #3  │         │
│   │ 🍽️   │  │ 🦐   │  │ 🍔   │         │
│   │Badge │  │Badge │  │Badge │         │
│   │Prix  │  │Prix  │  │Prix  │         │
│   │[CTA] │  │[CTA] │  │[CTA] │         │
│   └──────┘  └──────┘  └──────┘         │
│                                         │
│   Grid responsive: 1/2/3 cols          │
│                                         │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│                                         │
│   3. AVIS CLIENTS                       │
│   Background : Noir profond (#0a0a0a)   │
│                                         │
│   [Titre centré - Texte crème]         │
│   "Ce que disent nos clients"           │
│                                         │
│   ┌─────────────┐  ┌─────────────┐     │
│   │ ⭐⭐⭐⭐⭐    │  │ ⭐⭐⭐⭐⭐    │     │
│   │ "Citation"  │  │ "Citation"  │     │
│   │ — Auteur    │  │ — Auteur    │     │
│   └─────────────┘  └─────────────┘     │
│                                         │
│   Bordures dorées avec effet hover      │
│                                         │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│                                         │
│   4. CONTACT & COMMANDE                 │
│   Background : Crème (#faf8f3)          │
│                                         │
│   ┌───────────┐     ┌──────────────┐   │
│   │  CONTACT  │     │  CTA DARK    │   │
│   │           │     │  PREMIUM     │   │
│   │ 📍 Adresse│     │ "Commandez   │   │
│   │ 📞 Tél.   │     │  maintenant" │   │
│   │ 🕐 Horaire│     │              │   │
│   │           │     │ [WhatsApp]   │   │
│   │           │     │ [Téléphone]  │   │
│   └───────────┘     └──────────────┘   │
│                                         │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│                                         │
│   5. FOOTER                             │
│   Background : Noir profond (#0a0a0a)   │
│                                         │
│   "Les Délices Divines" (doré)         │
│   Tagline italic                        │
│   © 2026 Tous droits réservés          │
│                                         │
└─────────────────────────────────────────┘

┌──────────────┐
│   FLOATING   │  ← Toujours visible
│   WHATSAPP   │     Position: fixed
│   BUTTON 💬  │     bottom: 30px
└──────────────┘     right: 30px
```

---

## 🎨 Composants Visuels Détaillés

### 1. Hero Section

**Dimensions** : 100vh (plein écran)  
**Background** : Gradient `linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2520 100%)`  
**Overlay** : Radial gradients dorés avec opacity 10%

**Éléments** :
```
                [Logo doré circulaire]
                        ↓
            LES DÉLICES DIVINES
          (h1 - blanc - 5rem max)
                        ↓
     "Quand la gastronomie devient divine"
        (p - doré - italic - 3xl)
                        ↓
   L'excellence gastronomique à portée de main
          (p - crème clair - xl)
                        ↓
   [Commander WhatsApp] [Appeler maintenant]
      (btn-whatsapp)    (btn-secondary)
```

**Animations** :
- Fade-in-up avec délais en cascade (0.2s, 0.4s, 0.6s, 0.8s)
- Scroll indicator : bounce infini

---

### 2. Card Plat Signature

```
┌────────────────────────────────┐
│                                │
│     [IMAGE PLACEHOLDER]        │ ← 280px height
│          🍽️ Emoji             │   Gradient bg
│                                │
│  [⭐ Populaire]  ←────────────┤ Badge doré
│                                │
├────────────────────────────────┤
│  CATÉGORIE (uppercase)         │ ← Or chaud, small
│                                │
│  Nom du Plat                   │ ← h3, 2xl
│                                │
│  Description appétissante...   │ ← line-clamp-2
│                                │
│  12 500 FCFA    [Commander]    │ ← Prix doré + CTA
│                                │
└────────────────────────────────┘

Dimensions:
- Border-radius: 16px
- Padding: 24px
- Shadow: var(--shadow-soft)
- Hover: translateY(-8px) + shadow-strong
```

**États** :
- **Default** : Blanc, ombre douce
- **Hover** : Translation -8px, ombre forte, image scale 1.05

---

### 3. Review Card

```
┌────────────────────────────────┐
│ Background: #1a1a1a            │
│ Border: 1px solid gold/20      │
│                                │
│  ⭐⭐⭐⭐⭐                      │
│                                │
│  "Citation du client avec      │
│   son témoignage authentique   │
│   et son expérience"           │
│                                │
│  — Nom du Client               │
│                                │
└────────────────────────────────┘

- Border-radius: 24px
- Padding: 32px
- Hover: border opacity → 40%
```

---

### 4. Bouton WhatsApp Flottant

```
     ┌─────────┐
     │    💬   │  65x65px (desktop)
     │         │  55x55px (mobile)
     └─────────┘
         ↓
   [Pulse Ring]  ← Animation 2s infinie
```

**Styles** :
- Position: `fixed`
- Z-index: `1000`
- Background: `#25D366` (WhatsApp green)
- Shadow: `0 4px 20px rgba(37, 211, 102, 0.4)`
- Hover: `scale(1.1)`

**Animation Pulse** :
```css
@keyframes pulse {
  0%   { scale: 1, opacity: 1 }
  50%  { scale: 1.2, opacity: 0.5 }
  100% { scale: 1, opacity: 0 }
}
```

---

## 🎭 Système d'Animations

### Keyframes Disponibles

1. **fadeInUp**
   - De : `opacity: 0, translateY(30px)`
   - Vers : `opacity: 1, translateY(0)`
   - Durée : 0.8s

2. **fadeIn**
   - De : `opacity: 0`
   - Vers : `opacity: 1`
   - Durée : 0.8s

3. **slideInFromLeft**
   - De : `opacity: 0, translateX(-50px)`
   - Vers : `opacity: 1, translateX(0)`
   - Durée : 0.8s

4. **pulse** (WhatsApp)
   - Cycle : scale + opacity
   - Durée : 2s (infinie)

### Classes Utility

```css
.animate-fade-in-up  { animation: fadeInUp 0.8s ease-out forwards; }
.animate-fade-in     { animation: fadeIn 0.8s ease-out forwards; }
.animate-slide-in    { animation: slideInFromLeft 0.8s ease-out forwards; }
```

---

## 📱 Responsive Behavior

### Desktop (> 768px)

```
Hero:      Titre 5rem, textes centrés
Dishes:    Grid 3 colonnes
Reviews:   Grid 2 colonnes
Contact:   Grid 2 colonnes (info + CTA)
WhatsApp:  65px, bottom-right 30px
```

### Tablet (768px)

```
Hero:      Titre réduit (clamp auto)
Dishes:    Grid 2 colonnes
Reviews:   Grid 2 colonnes
Contact:   Grid 2 colonnes
```

### Mobile (< 768px)

```
Hero:      Titre 2.5rem min, CTA vertical stack
Dishes:    Grid 1 colonne
Reviews:   Grid 1 colonne
Contact:   Grid 1 colonne (stack)
WhatsApp:  55px, bottom-right 20px
Spacing:   Réduit (--spacing-sm)
```

---

## 🔗 Flux de Navigation

```
Utilisateur arrive sur le site
         ↓
    [HERO SECTION]
         ↓
    Scroll down
         ↓
 [PLATS SIGNATURES]
         ↓
   Clique sur "Commander"
         ↓
   → WhatsApp s'ouvre avec message pré-rempli
   → "Bonjour, je souhaite commander : [Nom du plat]"
         ↓
   Conversation WhatsApp avec le restaurant
```

**OU**

```
Utilisateur voit le bouton flottant
         ↓
    Clique sur 💬
         ↓
   WhatsApp s'ouvre avec message général
   "Bonjour, je souhaite consulter votre menu"
```

---

## 🎨 Palette Complète avec Usage

| Couleur | Hex | Où elle est utilisée |
|---------|-----|----------------------|
| **Noir profond** | `#0a0a0a` | Hero bg, sections dark, footer, textes principaux |
| **Noir doux** | `#1a1a1a` | Review cards bg, textes secondaires |
| **Or chaud** | `#d4af37` | Accents, badges, prix, bordures, icons background |
| **Or clair** | `#f4e4c1` | Gradients, hover states subtils |
| **Crème** | `#faf8f3` | Background sections claires, body |
| **Crème foncé** | `#e8e4dc` | Textes secondaires sur dark |
| **WhatsApp Green** | `#25D366` | Bouton WhatsApp uniquement |

---

## 🔢 Hiérarchie Typographique

```
h1: 5rem (max) → Titre principal hero
    font: Cormorant Garamond
    weight: 700
    
h2: 3.5rem (max) → Titres de sections
    font: Cormorant Garamond
    weight: 600
    
h3: 2.5rem (max) → Noms de plats
    font: Cormorant Garamond
    weight: 600

p:  1.125rem (max) → Corps de texte
    font: Inter
    weight: 400
    line-height: 1.7

Tous responsive avec clamp()
```

---

## ⚡ Performance Tips

### Optimisations actuelles
- ✅ CSS Variables pour cohérence
- ✅ Tailwind purge automatique
- ✅ Next.js avec Turbopack
- ✅ Font preconnect
- ✅ Animations CSS (pas JS)

### À ajouter (Phase 2)
- [ ] Next/Image pour images optimisées
- [ ] Lazy loading sections
- [ ] Preload fonts critiques
- [ ] Compression images WebP
- [ ] Service Worker pour cache

---

## 🎯 Checklist Design Premium

- [x] Palette de couleurs luxueuse (noir/or)
- [x] Typographies élégantes (serif + sans-serif)
- [x] Micro-animations subtiles
- [x] Hover states sur tous les éléments interactifs
- [x] Design responsive mobile-first
- [x] Espacement harmonieux (système 8pt)
- [x] Ombres douces et élégantes
- [x] Bouton flottant WhatsApp
- [x] Messages WhatsApp pré-remplis
- [x] Transitions fluides (cubic-bezier)
- [x] Scroll smooth
- [x] Animation de chargement (fade-in-up)
- [x] SEO optimisé (meta tags)

---

**Ce guide représente la structure visuelle complète du site Les Délices Divines.**  
Toutes les sections, composants et interactions sont documentés pour maintien et évolution future.
