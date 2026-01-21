export type Language = 'en' | 'fr';

export const translations = {
  en: {
    // Navigation
    nav: {
      menu: 'Full Menu',
      runClub: 'Run Club',
      merch: 'Merch',
      location: 'Location',
      orderNow: 'Order Now',
    },
    
    // Hero Section
    hero: {
      title: 'NO COFFEE ',
      subtitle: 'NO SMILE.',
      tagline: 'ICE. COFFEE. VIBES. NICE.',
      cta: 'Explore Menu',
      marquee: 'OPEN DAILY 8:30-17:30 — ICE. COFFEE. VIBES. NICE.',
    },
    
    // Menu Grid Section
    menuGrid: {
      badge: 'MENU',
      title: 'WHAT WE SERVE',
      ingredients: 'INGREDIENTS:',
    },
    
    // Run Club Section
    runClub: {
      badge: 'RUN CLUB',
      title: 'CAFE WITH SMILE',
      subtitle: 'RUN CLUB',
      description: 'Join our weekly runs through the streets of Nice. Coffee before, vibes during, and recovery drinks after. All levels welcome.',
      schedule: 'Every Wednesday & Saturday',
      time: '7:00 AM Start',
      meetingPoint: 'Meet at the Cafe',
      address: '22bis Blvd Stalingrad',
      strava: 'Strava Club',
      stravaJoin: 'Join our community',
      cta: 'Join the Club',
      routes: '5K - 10K ROUTES',
      weekly: 'WEEKLY RUNS',
    },
    
    // Merch Section
    merch: {
      badge: 'DROP 001',
      title: 'MERCH',
      subtitle: 'DROPS',
      description: 'Limited edition streetwear. Designed in Nice. Only 50 pieces per drop. Once they\'re gone, they\'re gone.',
      productTitle: 'SMILE TEE - BLACK',
      specs: {
        cotton: '100% ORGANIC COTTON',
        fit: 'OVERSIZED FIT',
        print: 'SCREEN PRINTED LOGO',
        sizes: 'SIZES: S - XXL',
      },
      unitsOnly: '50 UNITS ONLY',
      dropsIn: 'DROPS IN: 3D 12H 45M',
      cta: 'Notify Me',
    },
    
    // Location Section
    location: {
      badge: 'LOCATION',
      title: 'FIND US',
      addressTitle: 'ADDRESS',
      street: '22bis Boulevard Stalingrad',
      city: 'Nice, 06000',
      country: 'France',
      hoursTitle: 'HOURS',
      weekdays: 'MONDAY - SATURDAY',
      weekdaysTime: '8:30 - 17:30',
      sunday: 'SUNDAY',
      sundayTime: '9:30 - 17:30',
      cta: 'Get Directions',
    },
    
    // Location Page (THE HQ)
    locationPage: {
      title: 'THE HQ',
      subtitle: '22BIS BD STALINGRAD, NICE',
      addressBlock: 'Address',
      hoursBlock: 'Opening Hours',
      transportBlock: 'Get Here',
      monSat: 'Mon - Sat',
      sunday: 'Sunday',
      tram: 'TRAM',
      tramLine: 'L2: Port Lympia',
      email: 'EMAIL',
      cta: 'OPEN IN GOOGLE MAPS',
    },
    
    // Menu Page
    menuPage: {
      title: 'FULL',
      titleHighlight: 'SPEC SHEET',
      categories: {
        all: 'All',
        hot: 'Hot',
        iced: 'Iced',
        food: 'Food',
        sweets: 'Sweets',
      },
      signature: 'SIGNATURE',
      ingredients: 'INGREDIENTS:',
      ref: 'REF',
      footer: 'Kitchen closes at 16:00 // All prices in EUR',
      madeIn: 'MADE WITH LOVE IN NICE',
    },
    
    // Run Club Page
    runClubPage: {
      title: 'RUN. COFFEE.',
      subtitle: 'REPEAT.',
      schedule: 'EVERY SUNDAY',
      time: '09:30 / ALL PACES WELCOME',
      manifest: 'THE MANIFEST',
      meetingPoint: 'MEETING POINT',
      address: '22bis Bd Stalingrad',
      distance: 'DISTANCE',
      distanceValue: '5K & 10K Loops',
      pace: 'PACE',
      chillGroup: 'Chill Group',
      fastGroup: 'Fast Group',
      bagDrop: 'BAG DROP',
      bagDropValue: 'Available at the Cafe',
      route: 'THE ROUTE',
      routeName: 'ROUTE: PROMENADE DES ANGLAIS',
      routeType: '[FLAT]',
      joinCrew: 'JOIN THE CREW',
      latestStats: 'LATEST STATS',
      stravaWidget: '[STRAVA CLUB WIDGET]',
      stravaNote: 'Iframe will be added here',
      joinStrava: 'JOIN STRAVA CLUB',
      joinWhatsApp: 'JOIN WHATSAPP GROUP',
      communityNote: 'Connect with the community, track your runs, and never miss a session.',
      firstTime: 'First time?',
      firstTimeHighlight: 'Just show up.',
      firstTimeNote: 'No registration needed. We run together, we finish together.',
    },
    
    // Merch Page
    merchPage: {
      brand: 'CAFE WITH SMILE',
      title: 'WEAR THE',
      titleHighlight: 'SMILE.',
      drop: 'DROP 001',
      subtitle: 'Limited Edition Collection',
      available: 'AVAILABLE NOW / LIMITED STOCK',
      designedIn: 'DESIGNED IN NICE',
      theDrop: 'THE DROP',
      itemsAvailable: '[3 ITEMS AVAILABLE]',
      manifesto: 'THE MANIFESTO',
      manifestoTitle: 'Designed in Nice. Worn Everywhere.',
      manifestoSubtitle: 'LIMITED QUANTITIES / EXCLUSIVE DROPS',
      specSheet: 'SPEC SHEET',
      soldOut: 'SOLD OUT',
      addToCart: 'ADD TO CART',
      tags: {
        organicCotton: 'ORGANIC COTTON',
        oversizedFit: 'OVERSIZED FIT',
      },
    },
  },
  
  fr: {
    // Navigation
    nav: {
      menu: 'Menu Complet',
      runClub: 'Club Running',
      merch: 'Boutique',
      location: 'Localisation',
      orderNow: 'Commander',
    },
    
    // Hero Section
    hero: {
      title: 'PAS DE CAFE ',
      subtitle: 'PAS DE SOURIRE',
      tagline: 'GLACE. CAFÉ. AMBIANCE. NICE.',
      cta: 'Voir le Menu',
      marquee: 'OUVERT TOUS LES JOURS 8:30-17:30 — GLACE. CAFÉ. AMBIANCE. NICE.',
    },
    
    // Menu Grid Section
    menuGrid: {
      badge: 'MENU',
      title: 'CE QUE NOUS SERVONS',
      ingredients: 'INGRÉDIENTS :',
    },
    
    // Run Club Section
    runClub: {
      badge: 'CLUB RUNNING',
      title: 'CAFE WITH SMILE',
      subtitle: 'CLUB RUNNING',
      description: 'Rejoignez nos courses hebdomadaires dans les rues de Nice. Café avant, ambiance pendant, et boissons de récupération après. Tous niveaux bienvenus.',
      schedule: 'Chaque Mercredi & Samedi',
      time: 'Départ 7h00',
      meetingPoint: 'Rendez-vous au Café',
      address: '22bis Blvd Stalingrad',
      strava: 'Club Strava',
      stravaJoin: 'Rejoignez la communauté',
      cta: 'Rejoindre le Club',
      routes: 'PARCOURS 5K - 10K',
      weekly: 'COURSES HEBDOMADAIRES',
    },
    
    // Merch Section
    merch: {
      badge: 'DROP 001',
      title: 'BOUTIQUE',
      subtitle: 'DROPS',
      description: 'Collection streetwear en édition limitée. Conçu à Nice. Seulement 50 pièces par drop. Une fois partis, c\'est fini.',
      productTitle: 'TEE SMILE - NOIR',
      specs: {
        cotton: '100% COTON BIO',
        fit: 'COUPE OVERSIZE',
        print: 'LOGO SÉRIGRAPHIÉ',
        sizes: 'TAILLES : S - XXL',
      },
      unitsOnly: '50 UNITÉS SEULEMENT',
      dropsIn: 'DISPONIBLE DANS : 3J 12H 45M',
      cta: 'Me Notifier',
    },
    
    // Location Section
    location: {
      badge: 'LOCALISATION',
      title: 'NOUS TROUVER',
      addressTitle: 'ADRESSE',
      street: '22bis Boulevard Stalingrad',
      city: 'Nice, 06000',
      country: 'France',
      hoursTitle: 'HORAIRES',
      weekdays: 'LUNDI - SAMEDI',
      weekdaysTime: '8h30 - 17h30',
      sunday: 'DIMANCHE',
      sundayTime: '9h30 - 17h30',
      cta: 'Itinéraire',
    },
    
    // Location Page (THE HQ)
    locationPage: {
      title: 'LE QG',
      subtitle: '22BIS BD STALINGRAD, NICE',
      addressBlock: 'Adresse',
      hoursBlock: 'Horaires d\'Ouverture',
      transportBlock: 'Comment Venir',
      monSat: 'Lun - Sam',
      sunday: 'Dimanche',
      tram: 'TRAM',
      tramLine: 'L2 : Port Lympia',
      email: 'EMAIL',
      cta: 'OUVRIR DANS GOOGLE MAPS',
    },
    
    // Menu Page
    menuPage: {
      title: 'MENU',
      titleHighlight: 'COMPLET',
      categories: {
        all: 'Tout',
        hot: 'Chaud',
        iced: 'Glacé',
        food: 'Nourriture',
        sweets: 'Douceurs',
      },
      signature: 'SIGNATURE',
      ingredients: 'INGRÉDIENTS :',
      ref: 'RÉF',
      footer: 'Cuisine ferme à 16h00 // Tous les prix en EUR',
      madeIn: 'FAIT AVEC AMOUR À NICE',
    },
    
    // Run Club Page
    runClubPage: {
      title: 'COURIR. CAFÉ.',
      subtitle: 'RÉPÉTER.',
      schedule: 'CHAQUE DIMANCHE',
      time: '09h30 / TOUS RYTHMES BIENVENUS',
      manifest: 'LE MANIFESTE',
      meetingPoint: 'POINT DE RENDEZ-VOUS',
      address: '22bis Bd Stalingrad',
      distance: 'DISTANCE',
      distanceValue: 'Boucles 5K & 10K',
      pace: 'RYTHME',
      chillGroup: 'Groupe Cool',
      fastGroup: 'Groupe Rapide',
      bagDrop: 'CONSIGNE',
      bagDropValue: 'Disponible au Café',
      route: 'LE PARCOURS',
      routeName: 'PARCOURS : PROMENADE DES ANGLAIS',
      routeType: '[PLAT]',
      joinCrew: 'REJOINDRE L\'ÉQUIPE',
      latestStats: 'DERNIÈRES STATS',
      stravaWidget: '[WIDGET CLUB STRAVA]',
      stravaNote: 'Iframe sera ajouté ici',
      joinStrava: 'REJOINDRE LE CLUB STRAVA',
      joinWhatsApp: 'REJOINDRE LE GROUPE WHATSAPP',
      communityNote: 'Connectez-vous avec la communauté, suivez vos courses et ne manquez jamais une session.',
      firstTime: 'Première fois ?',
      firstTimeHighlight: 'Venez simplement.',
      firstTimeNote: 'Pas d\'inscription nécessaire. On court ensemble, on finit ensemble.',
    },
    
    // Merch Page
    merchPage: {
      brand: 'CAFE WITH SMILE',
      title: 'PORTEZ LE',
      titleHighlight: 'SMILE.',
      drop: 'DROP 001',
      subtitle: 'Collection Édition Limitée',
      available: 'DISPONIBLE MAINTENANT / STOCK LIMITÉ',
      designedIn: 'CONÇU À NICE',
      theDrop: 'LE DROP',
      itemsAvailable: '[3 ARTICLES DISPONIBLES]',
      manifesto: 'LE MANIFESTE',
      manifestoTitle: 'Conçu à Nice. Porté Partout.',
      manifestoSubtitle: 'QUANTITÉS LIMITÉES / DROPS EXCLUSIFS',
      specSheet: 'FICHE TECHNIQUE',
      soldOut: 'ÉPUISÉ',
      addToCart: 'AJOUTER AU PANIER',
      tags: {
        organicCotton: 'COTON BIO',
        oversizedFit: 'COUPE OVERSIZE',
      },
    },
  },
} as const;

export type Translations = typeof translations.en;
