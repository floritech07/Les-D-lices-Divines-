// Configuration du site Les Délices Divines
// Ce fichier centralise toutes les variables de configuration modifiables

export const siteConfig = {
    // Informations du restaurant
    restaurant: {
        name: "Les Délices Divines",
        tagline: "Quand la gastronomie devient divine",
        subtitle: "L'excellence gastronomique à portée de main",
    },

    // Coordonnées
    contact: {
        phone: "+22900000000",
        whatsapp: "22900000000",
        email: "contact@delicesdivines.com",
        address: "Avenue de l'Excellence, Cotonou, Bénin",
        openingHours: "Lun - Dim: 11h00 - 23h00",
    },

    // Réseaux sociaux (à activer dans une prochaine version)
    social: {
        facebook: "",
        instagram: "",
        twitter: "",
        tiktok: "",
    },

    // Messages WhatsApp pré-configurés
    whatsappMessages: {
        general: "Bonjour, je souhaite consulter votre menu",
        menuDuJour: "Menu du jour",
        menuComplet: "Voir le menu complet",
        reservation: "Bonjour, je souhaite réserver une table",
        information: "Bonjour, j'aimerais avoir des informations",
    },

    // Paramètres d'affichage
    display: {
        // Nombre de plats populaires à afficher en homepage
        maxPopularDishes: 6,

        // Nombre d'avis clients à afficher
        maxReviews: 2,

        // Afficher le badge "Populaire" sur les plats
        showPopularBadge: true,

        // Afficher les catégories sur les cards
        showCategories: true,
    },

    // Customisation du design
    theme: {
        // Active le mode sombre automatique (à implémenter)
        darkModeAuto: false,

        // Couleur d'accent principale (or par défaut)
        accentColor: "#d4af37",

        // Durée des animations (ms)
        animationDuration: 800,
    },

    // SEO
    seo: {
        titleTemplate: "%s | Les Délices Divines",
        defaultTitle: "Les Délices Divines - Restaurant Gastronomique Premium à Cotonou",
        description: "Découvrez Les Délices Divines, restaurant gastronomique premium à Cotonou. Cuisine raffinée, plats signatures et expérience divine. Commandez facilement via WhatsApp.",
        keywords: [
            "restaurant Cotonou",
            "gastronomie",
            "restaurant premium",
            "cuisine raffinée",
            "Les Délices Divines",
            "commande en ligne",
            "WhatsApp",
            "Bénin",
            "plats signatures",
        ],
        ogImage: "/og-image.jpg", // À créer
    },

    // Features flags (pour activer/désactiver des fonctionnalités)
    features: {
        whatsappFloatingButton: true,
        newsletter: false, // À implémenter
        onlineReservation: false, // À implémenter
        multilanguage: false, // À implémenter
        darkMode: false, // À implémenter
        gallery: false, // À implémenter
        blog: false, // À implémenter
    },

    // URLs et navigation (pour extension future multi-pages)
    navigation: {
        home: "/",
        menu: "/menu", // À créer
        about: "/a-propos", // À créer
        contact: "/contact", // À créer
        reservations: "/reservations", // À créer
    },

    // Analytics (à configurer)
    analytics: {
        googleAnalyticsId: "", // GA4 ID
        facebookPixelId: "", // Facebook Pixel
    },
};

export default siteConfig;
