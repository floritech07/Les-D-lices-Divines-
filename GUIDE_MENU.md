# 📝 Guide de Personnalisation du Menu

Ce guide vous explique comment modifier facilement le menu de votre restaurant.

---

## 📂 Fichier à modifier

Le menu se trouve dans : **`src/data/menu.json`**

---

## 🍽️ Ajouter un nouveau plat

1. Ouvrez `src/data/menu.json`
2. Dans le tableau `menu`, ajoutez un nouvel objet :

```json
{
  "id": 6,
  "name": "Nom de votre plat",
  "description": "Description alléchante qui donne envie",
  "price": 15000,
  "category": "Plats principaux",
  "popular": true,
  "image": "nom_image.jpg"
}
```

### Champs expliqués

| Champ | Type | Description | Exemple |
|-------|------|-------------|---------|
| `id` | Nombre | Identifiant unique (incrémentez le dernier ID) | `6` |
| `name` | Texte | Nom du plat | `"Tournedos Rossini"` |
| `description` | Texte | Description appétissante | `"Filet de bœuf poêlé, foie gras, sauce truffe"` |
| `price` | Nombre | Prix en FCFA (sans décimales) | `18000` |
| `category` | Texte | Catégorie du plat (voir liste ci-dessous) | `"Plats principaux"` |
| `popular` | Boolean | Afficher en page d'accueil ? | `true` ou `false` |
| `image` | Texte | Nom du fichier image | `"tournedos.jpg"` |

---

## 📑 Catégories disponibles

Utilisez une de ces catégories existantes :

- `"Plats principaux"`
- `"Grillades"`
- `"Spécialités locales"`
- `"Fast food gourmet"`
- `"Accompagnements"`
- `"Jus naturels"`
- `"Cocktails"`
- `"Boissons"`

### Ajouter une nouvelle catégorie

Si vous voulez créer une nouvelle catégorie :

1. Ajoutez-la dans le tableau `categories` :

```json
"categories": [
  "Plats principaux",
  "Grillades",
  "Votre nouvelle catégorie"  ← Ajoutez ici
]
```

2. Utilisez cette catégorie dans vos plats

---

## ⭐ Plats "Populaires"

Les plats avec `"popular": true` s'affichent sur la page d'accueil.

**Conseils** :
- Limitez à 3-6 plats populaires maximum
- Choisissez vos plats signatures
- Mettez en avant vos best-sellers

---

## 💰 Format des prix

- Prix en **FCFA** (Franc CFA)
- **Sans décimales** : `12500` (pas `12500.00`)
- Le site affiche automatiquement : `12 500 FCFA`

**Exemples** :
```json
"price": 5000   → Affiche "5 000 FCFA"
"price": 15000  → Affiche "15 000 FCFA"
"price": 125000 → Affiche "125 000 FCFA"
```

---

## 📝 Modifier les informations du restaurant

Dans le même fichier `menu.json`, modifiez :

```json
{
  "restaurantName": "Votre Nom",
  "tagline": "Votre slogan",
  "contact": {
    "phone": "+22900000000",      ← Votre numéro avec indicatif
    "whatsapp": "22900000000",    ← Sans le +
    "email": "votreemail@exemple.com",
    "address": "Votre adresse complète",
    "openingHours": "Vos horaires"
  }
}
```

---

## ⭐ Gérer les avis clients

Dans `menu.json`, section `reviews` :

```json
"reviews": [
  {
    "name": "Prénom N.",
    "text": "Le témoignage complet du client",
    "stars": 5
  }
]
```

**Notes** :
- Maximum 5 étoiles
- Gardez 2-4 avis pour un affichage optimal
- Privilégiez des témoignages authentiques

---

## 🖼️ Gérer les images (Phase 2)

**Actuellement** : Le site utilise des emojis en attendant les vraies photos.

**Pour ajouter de vraies images** :

1. Placez vos photos dans `public/images/dishes/`
2. Nommez-les selon le champ `image` du plat
3. Format recommandé : JPG ou WebP
4. Dimensions recommandées : 600x400px minimum

**Exemple** :
```json
{
  "name": "Souris d'Agneau",
  "image": "lamb_shank.jpg"  ← Le fichier doit être dans public/images/dishes/lamb_shank.jpg
}
```

---

## ✅ Exemple complet : Ajouter 3 nouveaux plats

```json
{
  "menu": [
    {
      "id": 6,
      "name": "Pavé de Saumon Grillé",
      "description": "Saumon norvégien, beurre citronné, légumes vapeur",
      "price": 16000,
      "category": "Grillades",
      "popular": true,
      "image": "salmon.jpg"
    },
    {
      "id": 7,
      "name": "Tiramisu Maison",
      "description": "Dessert italien traditionnel au café et mascarpone",
      "price": 4500,
      "category": "Desserts",
      "popular": false,
      "image": "tiramisu.jpg"
    },
    {
      "id": 8,
      "name": "Smoothie Mangue-Passion",
      "description": "Fruits frais mixés, 100% naturel",
      "price": 2500,
      "category": "Jus naturels",
      "popular": false,
      "image": "smoothie.jpg"
    }
  ]
}
```

---

## 🔄 Après modification

1. **Sauvegardez** le fichier `menu.json`
2. Le site se **rafraîchit automatiquement** (hot reload)
3. Vérifiez dans le navigateur : `http://localhost:3000`

---

## ⚠️ Points d'attention

### Syntaxe JSON
- Utilisez des **guillemets doubles** `"` (pas simples `'`)
- N'oubliez pas les **virgules** entre les objets
- Pas de virgule après le dernier élément
- Vérifiez que vos accolades `{}` et crochets `[]` sont bien fermés

### Validation
Utilisez un validateur JSON en ligne si vous avez un doute :
- https://jsonlint.com/
- Copiez/collez votre JSON pour vérifier

---

## 🎯 Checklist avant publication

- [ ] Tous les prix sont corrects
- [ ] Les descriptions donnent envie
- [ ] 3-6 plats marqués comme "popular"
- [ ] Les catégories sont cohérentes
- [ ] Les informations de contact sont à jour
- [ ] Les horaires d'ouverture sont exacts
- [ ] Le numéro WhatsApp fonctionne
- [ ] Les avis clients sont authentiques

---

## 🆘 Besoin d'aide ?

Si vous rencontrez une erreur après modification :

1. **Vérifiez la console du navigateur** (F12)
2. **Validez votre JSON** sur jsonlint.com
3. **Comparez avec l'exemple** ci-dessus
4. **Restaurez la version précédente** si nécessaire

---

**Astuce** : Gardez toujours une copie de sauvegarde de `menu.json` avant modification importante !
