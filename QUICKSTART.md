# 🚀 DÉMARRAGE RAPIDE - Les Délices Divines

Bienvenue ! Ce guide vous aide à démarrer avec votre site web premium en quelques minutes.

---

## ⚡ En 3 étapes

### 1️⃣ Installer & Lancer (si nécessaire)

```bash
# Ouvrir le terminal dans le dossier du projet
cd "G:/Délices Divines/dev"

# Installer les dépendances (seulement si pas encore fait)
npm install

# Lancer le serveur de développement
npm run dev
```

**Le site sera accessible sur** : http://localhost:3000

---

### 2️⃣ Personnaliser vos informations

**📝 Fichier à modifier** : `src/data/menu.json`

#### Changez vos coordonnées :

```json
{
  "contact": {
    "phone": "+22912345678",           ← Votre numéro
    "whatsapp": "22912345678",         ← Sans le +
    "email": "votre@email.com",
    "address": "Votre adresse",
    "openingHours": "Lun-Ven: 10h-22h"
  }
}
```

#### Ajoutez vos plats :

```json
{
  "id": 6,
  "name": "Votre plat",
  "description": "Description alléchante",
  "price": 15000,                      ← Prix en FCFA
  "category": "Plats principaux",
  "popular": true,                     ← Afficher en homepage ?
  "image": "plat.jpg"
}
```

📖 **Guide complet** : Consultez `GUIDE_MENU.md` pour plus de détails

---

### 3️⃣ Testez votre site

1. Ouvrez : http://localhost:3000
2. Scrollez sur toute la page
3. Testez le bouton WhatsApp flottant
4. Testez les boutons "Commander"
5. Vérifiez sur mobile (mode responsive dans navigateur)

---

## 📂 Structure du Projet

```
dev/
├── 📄 README.md              ← Documentation principale
├── 📄 GUIDE_MENU.md          ← Comment modifier le menu
├── 📄 STRUCTURE.md           ← Architecture visuelle détaillée
├── 📄 ROADMAP.md             ← Évolutions futures
├── 📄 QUICKSTART.md          ← Ce fichier !
│
├── src/
│   ├── app/
│   │   ├── globals.css       ← 🎨 Système de design (couleurs, animations)
│   │   ├── layout.tsx        ← SEO et structure
│   │   └── page.tsx          ← 🏠 Page principale
│   │
│   ├── data/
│   │   └── menu.json         ← 📊 DONNÉES DU RESTAURANT (à modifier)
│   │
│   └── config/
│       └── site.config.ts    ← ⚙️ Configuration générale
│
└── public/                   ← Images et assets statiques
```

---

## 🎯 Les 5 Fichiers Clés

### 1. `src/data/menu.json` ⭐ LE PLUS IMPORTANT
- Contenus du restaurant
- Menu et plats
- Coordonnées
- Avis clients

### 2. `src/app/page.tsx`
- Page d'accueil
- Toutes les sections
- Logique d'affichage

### 3. `src/app/globals.css`
- Système de couleurs
- Typographies
- Animations
- Classes réutilisables

### 4. `src/config/site.config.ts`
- Messages WhatsApp
- Paramètres d'affichage
- Features flags

### 5. `src/app/layout.tsx`
- SEO (title, description)
- Meta tags
- Structure HTML

---

## 🎨 Personnalisation Rapide

### Changer les couleurs principales

**Fichier** : `src/app/globals.css`

```css
:root {
  --color-gold-warm: #d4af37;    ← Votre couleur d'accent
  --color-black-deep: #0a0a0a;  ← Background sombre
  --color-cream: #faf8f3;        ← Background clair
}
```

---

### Modifier les messages WhatsApp

**Fichier** : `src/config/site.config.ts`

```typescript
whatsappMessages: {
  general: "Votre message personnalisé",
  menuDuJour: "Votre message",
  // ...
}
```

---

### Changer le nombre de plats en homepage

**Fichier** : `src/config/site.config.ts`

```typescript
display: {
  maxPopularDishes: 6,  ← Changez ce nombre
}
```

Puis dans `menu.json`, marquez vos plats avec `"popular": true`

---

## ✅ Checklist Avant Mise en Ligne

### Contenus
- [ ] Infos de contact à jour (téléphone, WhatsApp, email)
- [ ] Menu complet avec vrais plats
- [ ] Prix corrects
- [ ] Descriptions alléchantes
- [ ] Avis clients authentiques

### Technique
- [ ] Tester tous les liens WhatsApp
- [ ] Tester le bouton d'appel
- [ ] Vérifier responsive mobile
- [ ] Tester sur plusieurs navigateurs
- [ ] Performance Lighthouse > 90

### SEO
- [ ] Title et description dans `layout.tsx`
- [ ] Mots-clés pertinents
- [ ] Open Graph tags

---

## 🆘 Problèmes Fréquents

### ❌ "npm run dev" ne fonctionne pas

**Solution** : Utilisez `cmd` au lieu de PowerShell

```bash
cmd /c "npm run dev"
```

---

### ❌ Le site affiche une erreur JSON

**Cause** : Erreur de syntaxe dans `menu.json`

**Solution** :
1. Validez votre JSON sur https://jsonlint.com/
2. Vérifiez les virgules, guillemets, accolades
3. Regardez le message d'erreur dans la console (F12)

---

### ❌ Les changements n'apparaissent pas

**Solution** :
1. Sauvegardez bien le fichier (Ctrl+S)
2. Rafraîchissez le navigateur (Ctrl+R)
3. Videz le cache (Ctrl+Shift+R)

---

### ❌ WhatsApp s'ouvre mais le message est vide

**Cause** : Numéro WhatsApp incorrect

**Solution** :
- Format attendu : `22912345678` (sans +, sans espaces)
- Vérifiez dans `menu.json` → `contact.whatsapp`

---

## 📱 Tester sur Mobile

### Option 1 : Mode Responsive du navigateur
1. F12 pour ouvrir DevTools
2. Cliquez sur l'icône mobile/tablette
3. Sélectionnez "iPhone" ou "Android"

### Option 2 : Sur votre téléphone (même WiFi)
1. Trouvez l'IP réseau dans le terminal : `http://192.168.X.X:3000`
2. Ouvrez cette URL sur votre mobile
3. Testez WhatsApp réel

---

## 🚀 Mettre en Production

### Option 1 : Vercel (Recommandé - Gratuit)

1. Créez un compte sur https://vercel.com
2. Connectez votre projet GitHub
3. Déployez en 1 clic
4. URL automatique en `.vercel.app`

### Option 2 : Netlify

1. Compte sur https://netlify.com
2. Glissez/déposez le dossier `dev`
3. Site déployé automatiquement

### Option 3 : Hébergement classique

1. Build de production :
```bash
npm run build
```

2. Le dossier `.next` contient le site
3. Uploadez sur votre hébergeur

---

## 📚 Documentation Complète

- **README.md** : Vue d'ensemble et fonctionnalités
- **GUIDE_MENU.md** : Modifier le menu facilement
- **STRUCTURE.md** : Architecture visuelle détaillée
- **ROADMAP.md** : Évolutions futures planifiées

---

## 🎓 Ressources d'Apprentissage

### Next.js
- https://nextjs.org/docs

### TailwindCSS
- https://tailwindcss.com/docs

### JSON
- https://www.json.org/json-fr.html

---

## 💬 Support

### Besoin d'aide ?

1. Consultez les guides dans le dossier
2. Vérifiez la console du navigateur (F12)
3. Validez votre JSON sur jsonlint.com
4. Comparez avec les exemples fournis

---

## 🎉 C'est Parti !

Votre site premium est prêt à être personnalisé et lancé.

**Prochaines étapes recommandées** :

1. ✏️ Personnalisez `menu.json` avec vos vraies données
2. 📸 Prévoyez une session photo professionnelle (voir ROADMAP.md)
3. 📊 Configurez Google Analytics (optionnel)
4. 🚀 Déployez sur Vercel
5. 📣 Partagez avec vos clients !

---

**Bon appétit et bonne chance avec Les Délices Divines ! 🍽️✨**
