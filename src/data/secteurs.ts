export interface SecteurData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
  };
  intro: string;
  problemes: string[];
  solutions: { titre: string; desc: string }[];
  avantApres: { avant: string; apres: string; gain: string };
  faq: { q: string; a: string }[];
  liens: { label: string; href: string }[];
  cta: string;
}

export const secteurs: SecteurData[] = [
  {
    slug: "artisan",
    metaTitle: "Automatisation IA pour artisans — Gagnez 15h/semaine | Alefia",
    metaDescription: "Automatisez vos devis, relances clients et gestion administrative avec des agents IA. Solution sur mesure pour artisans. Audit gratuit, réponse sous 48h.",
    hero: {
      badge: "15h/semaine récupérées en moyenne",
      h1: "Automatisez votre activité d'artisan avec l'IA",
      subtitle: "Devis en 2 minutes, relances automatiques, gestion des emails. Concentrez-vous sur votre métier, on gère l'administratif.",
    },
    intro: "Alefia est une agence parisienne spécialisée en automatisation IA et développement d'agents IA pour les artisans, TPE et PME. Nous aidons les artisans à reprendre le contrôle de leur temps en automatisant les tâches répétitives qui ne nécessitent pas leur expertise.",
    problemes: [
      "3h/jour perdues sur les devis, factures et relances — autant d'heures non facturables",
      "Des clients qui ne répondent pas à vos relances parce que vous n'avez pas le temps de les relancer",
      "Une boîte mail débordante avec des demandes qui restent sans réponse trop longtemps",
      "Des outils généralistes (Excel, Word) qui vous ralentissent au lieu de vous aider",
    ],
    solutions: [
      { titre: "Agent devis automatique", desc: "Un client envoie ses besoins par message ou email — votre agent IA génère un devis prêt à envoyer en 2 minutes. Fini la saisie manuelle." },
      { titre: "Relances clients intelligentes", desc: "Votre agent suit vos devis en attente et relance automatiquement à J+3, J+7, J+14 avec un message personnalisé. Zéro oubli, zéro effort." },
      { titre: "Tri et réponse aux emails", desc: "L'IA trie votre boîte mail, répond aux questions fréquentes et vous alerte uniquement sur les messages qui nécessitent votre attention réelle." },
    ],
    avantApres: {
      avant: "3h/jour sur l'administratif — devis, relances, emails non répondus",
      apres: "20 min/jour de vérification — l'agent IA gère tout le reste",
      gain: "+15h/semaine récupérées = 2 jours de chantier supplémentaires",
    },
    faq: [
      { q: "L'automatisation IA est-elle vraiment adaptée à un artisan ?", a: "Oui, et c'est même là où l'impact est le plus fort. Un artisan perd souvent 30 à 40% de son temps sur des tâches administratives qui ne génèrent pas de revenu. Nos agents IA sont configurés pour votre métier spécifique — pas un outil généraliste." },
      { q: "Est-ce que je dois changer mes outils actuels ?", a: "Non. Nos solutions s'intègrent à ce que vous utilisez déjà : Gmail, Outlook, WhatsApp Business, votre logiciel de devis. On se connecte à votre environnement sans tout réinventer." },
      { q: "Combien de temps faut-il pour mettre en place la solution ?", a: "Le premier agent IA est opérationnel en 48h après l'audit initial. La formation dure moins d'une heure — nos interfaces sont aussi simples qu'un SMS." },
      { q: "Quel est le coût d'un agent IA pour artisan ?", a: "L'audit initial est 100% gratuit et sans engagement. Les solutions sont ensuite sur devis selon le périmètre. La majorité de nos clients artisans récupèrent leur investissement en moins d'un mois grâce au temps et au CA gagnés." },
      { q: "Mes données clients sont-elles protégées ?", a: "Oui. Vos données ne sont jamais partagées avec des tiers. Nous respectons scrupuleusement le RGPD et vos informations restent sous votre contrôle." },
    ],
    liens: [
      { label: "Automatiser vos devis", href: "/automatiser/devis" },
      { label: "Automatiser vos relances clients", href: "/automatiser/relances-clients" },
    ],
    cta: "Obtenir mon audit artisan gratuit",
  },

  {
    slug: "agence-communication",
    metaTitle: "Automatisation IA pour agences de communication | Alefia Paris",
    metaDescription: "Agents IA pour agences com : reporting client automatique, briefs IA, gestion de contenu. Gagnez +10h/semaine. Audit gratuit.",
    hero: {
      badge: "+10h/semaine récupérées sur les tâches répétitives",
      h1: "L'IA qui automatise les tâches chronophages de votre agence",
      subtitle: "Reporting client, briefs créatifs, gestion des contenus. Vos équipes se concentrent sur la créativité, l'IA s'occupe du reste.",
    },
    intro: "Alefia accompagne les agences de communication dans l'automatisation de leurs processus internes. Reportings clients, briefs, veille, gestion des contenus : nos agents IA libèrent vos équipes des tâches à faible valeur ajoutée pour qu'elles se consacrent à ce qui crée vraiment de la valeur.",
    problemes: [
      "2h/semaine par client pour préparer les reportings — multiplié par 10 clients = 20h perdues",
      "Des briefs créatifs toujours à rédiger from scratch, même pour des projets similaires",
      "La veille concurrentielle et sectorielle mal faite faute de temps",
      "Des relances clients et suivi de validation qui tombent dans les mailles du filet",
    ],
    solutions: [
      { titre: "Reporting client automatisé", desc: "Vos données Analytics, Meta, LinkedIn sont agrégées et transformées en rapport PDF personnalisé envoyé automatiquement chaque semaine ou mois." },
      { titre: "Générateur de briefs IA", desc: "À partir d'un formulaire simple, l'IA génère un brief créatif complet en 3 minutes : objectifs, cibles, ton, benchmarks, livrables attendus." },
      { titre: "Veille automatique par secteur", desc: "Un agent surveille la presse, les réseaux sociaux et les concurrents de vos clients et vous envoie chaque matin un résumé des sujets importants." },
    ],
    avantApres: {
      avant: "20h/semaine sur les reportings et briefs pour 10 clients",
      apres: "2h de relecture et validation — tout le reste est automatisé",
      gain: "+18h/semaine par chef de projet = 1 client supplémentaire gérable",
    },
    faq: [
      { q: "Nos outils (Notion, Slack, Drive) sont-ils compatibles ?", a: "Oui. Nos automatisations se connectent aux outils que vous utilisez déjà : Notion, Slack, Google Drive, Meta Business, Google Analytics, LinkedIn. Aucune migration nécessaire." },
      { q: "L'IA peut-elle vraiment générer des briefs créatifs de qualité ?", a: "L'IA génère une base structurée et complète en quelques minutes. Vos équipes la relisent et affinent en 15 minutes au lieu de partir d'une feuille blanche. Le résultat final reste humain — l'IA supprime juste le temps de structuration." },
      { q: "Combien de temps pour déployer la solution ?", a: "Premier résultat en 48h. On commence par la tâche qui vous coûte le plus de temps — généralement les reportings clients — avant d'étendre aux autres processus." },
      { q: "Est-ce adapté pour une petite agence de 3-5 personnes ?", a: "Absolument. Les petites agences sont souvent celles qui bénéficient le plus de l'automatisation car chaque heure gagnée est directement réinvestie en capacité client." },
    ],
    liens: [
      { label: "Automatiser votre reporting", href: "/automatiser/reporting" },
      { label: "Automatiser la gestion des emails clients", href: "/automatiser/gestion-emails" },
    ],
    cta: "Obtenir mon audit agence gratuit",
  },

  {
    slug: "cabinet-comptable",
    metaTitle: "Automatisation IA pour cabinets comptables — Gagnez 20h/semaine | Alefia",
    metaDescription: "Agents IA pour experts-comptables : saisie automatique, relances clients, reporting fiscal. Sans changer votre logiciel comptable. Audit gratuit.",
    hero: {
      badge: "20h/semaine récupérées par collaborateur",
      h1: "L'IA qui automatise la saisie et le suivi pour votre cabinet",
      subtitle: "Saisie comptable assistée, relances pièces manquantes, reporting clients. Vos collaborateurs se concentrent sur le conseil, pas la saisie.",
    },
    intro: "Alefia développe des solutions d'automatisation IA spécifiquement adaptées aux cabinets d'expertise comptable. Nos agents IA s'intègrent à votre environnement existant (Sage, Cegid, QuadraCompta) pour automatiser les tâches répétitives sans disruption de vos processus actuels.",
    problemes: [
      "30 à 40% du temps de vos collaborateurs sur de la saisie et collecte de pièces — pas du conseil",
      "Des clients qui tardent à transmettre leurs documents et retardent les clôtures",
      "La préparation des bilans et liasses qui mobilise des ressources pendant des semaines",
      "La difficulté à scaler : chaque nouveau client = plus de charge administrative, pas plus de conseil",
    ],
    solutions: [
      { titre: "Relances pièces automatiques", desc: "Un agent envoie automatiquement des relances personnalisées à vos clients quand des pièces comptables sont manquantes ou en retard. Fini les relances manuelles." },
      { titre: "Collecte et tri documentaire IA", desc: "Les documents envoyés par vos clients (photos, PDF, emails) sont automatiquement triés, nommés et rangés dans les bons dossiers clients." },
      { titre: "Reporting client automatisé", desc: "Tableaux de bord mensuels envoyés automatiquement à chaque client : trésorerie, charges, évolution CA. Valeur perçue décuplée, temps investi divisé par 5." },
    ],
    avantApres: {
      avant: "8h/mois par client sur collecte de pièces, relances et reporting",
      apres: "2h de supervision — l'agent gère collecte, relances et reporting",
      gain: "+20h/collaborateur/semaine = capacité pour 30% de clients en plus",
    },
    faq: [
      { q: "Est-ce compatible avec Sage, Cegid ou QuadraCompta ?", a: "Nous travaillons en complément de votre logiciel métier, pas à sa place. Nos agents s'interfacent avec vos outils via email, cloud storage et API. Aucune modification de votre stack logicielle." },
      { q: "La confidentialité des données clients est-elle garantie ?", a: "Oui. La confidentialité est notre priorité numéro 1 pour les cabinets comptables. Vos données et celles de vos clients restent sous votre contrôle exclusif. Nous respectons le secret professionnel et les exigences RGPD." },
      { q: "Vos collaborateurs peuvent-ils prendre en main facilement ?", a: "Oui. Nos interfaces sont conçues pour des non-techniciens. La formation complète dure 2h. Après 3 jours d'utilisation, 95% de nos utilisateurs sont autonomes." },
      { q: "Quel ROI peut-on espérer pour un cabinet de 5 collaborateurs ?", a: "En moyenne, un cabinet de 5 collaborateurs récupère 80 à 100h/semaine sur les tâches automatisées. C'est l'équivalent de 2 à 2,5 collaborateurs supplémentaires sans embauche." },
    ],
    liens: [
      { label: "Automatiser la saisie de données", href: "/automatiser/saisie-donnees" },
      { label: "Automatiser le reporting", href: "/automatiser/reporting" },
    ],
    cta: "Obtenir mon audit cabinet gratuit",
  },

  {
    slug: "e-commerce",
    metaTitle: "Automatisation IA pour e-commerce — Support, stocks, relances | Alefia",
    metaDescription: "Agents IA pour boutiques en ligne : support client automatique, relances paniers abandonnés, gestion des avis. Déployé en 48h. Audit gratuit.",
    hero: {
      badge: "Support client automatisé 24h/24, 7j/7",
      h1: "L'IA qui fait tourner votre boutique pendant que vous dormez",
      subtitle: "Support client automatique, relances paniers abandonnés, gestion des avis et des retours. Vendez plus, travaillez moins.",
    },
    intro: "Alefia automatise les opérations e-commerce avec des agents IA qui travaillent 24h/24 : réponses client instantanées, relances paniers abandonnés, gestion des avis, suivi des commandes. Nos solutions s'intègrent à Shopify, WooCommerce, PrestaShop et tous les principaux CMS e-commerce.",
    problemes: [
      "Des demandes clients sans réponse le soir et le week-end = ventes perdues et mauvais avis",
      "60 à 70% des paniers abandonnés jamais relancés faute d'automatisation efficace",
      "Des heures perdues à répondre aux mêmes questions (délais, retours, tailles, disponibilités)",
      "La gestion des avis négatifs qui arrive trop tard pour rattraper la situation",
    ],
    solutions: [
      { titre: "Agent support client 24/7", desc: "Un chatbot IA formé sur votre catalogue répond instantanément aux questions fréquentes (délais, retours, tailles, stock). Escalade automatique vers vous pour les cas complexes." },
      { titre: "Relances paniers abandonnés", desc: "Séquence automatique personnalisée : email J+1, SMS J+2, offre spéciale J+5. Taux de récupération moyen de 15% des paniers abandonnés." },
      { titre: "Gestion et réponse aux avis", desc: "L'IA détecte les nouveaux avis, génère une réponse personnalisée et appropriée, et vous alerte sur les avis négatifs urgents pour une intervention rapide." },
    ],
    avantApres: {
      avant: "3h/jour sur le support client, avis et relances — revenus plafonnés",
      apres: "30 min de supervision — l'agent gère 80% des interactions client",
      gain: "+15% de CA récupéré sur les paniers abandonnés + support 24/7",
    },
    faq: [
      { q: "Avec quelles plateformes e-commerce êtes-vous compatibles ?", a: "Shopify, WooCommerce, PrestaShop, Magento, BigCommerce. Si vous utilisez une autre plateforme, contactez-nous — nous avons probablement déjà un connecteur ou pouvons en développer un." },
      { q: "Le chatbot peut-il vraiment remplacer un vrai support client ?", a: "Il ne le remplace pas — il gère les 80% de demandes répétitives pour que vous vous concentriez sur les 20% qui nécessitent vraiment votre intervention. Résultat : meilleure expérience client ET moins de charge pour vous." },
      { q: "Comment est formé l'agent sur mon catalogue ?", a: "On importe votre catalogue produit, votre FAQ, votre politique de retours et vos CGV. L'agent est opérationnel en 48h avec une connaissance complète de votre boutique." },
      { q: "Peut-on automatiser les réponses sur Instagram et Facebook aussi ?", a: "Oui. Nos agents couvrent email, chat web, Instagram DM, Facebook Messenger et WhatsApp Business. Un seul agent, tous vos canaux." },
    ],
    liens: [
      { label: "Automatiser la gestion des emails", href: "/automatiser/gestion-emails" },
      { label: "Automatiser le suivi des prospects", href: "/automatiser/suivi-prospects" },
    ],
    cta: "Obtenir mon audit e-commerce gratuit",
  },

  {
    slug: "coach-consultant",
    metaTitle: "Automatisation IA pour coachs et consultants — Alefia Paris",
    metaDescription: "Agents IA pour coachs et consultants indépendants : onboarding client, suivi, contenu, facturation. Gagnez 12h/semaine. Audit gratuit.",
    hero: {
      badge: "+12h/semaine récupérées sur l'administratif",
      h1: "Automatisez votre practice de coaching ou conseil avec l'IA",
      subtitle: "Onboarding client, suivi entre séances, création de contenu, facturation. Consacrez 100% de votre énergie à vos clients.",
    },
    intro: "Alefia aide les coachs et consultants indépendants à automatiser les tâches administratives et de suivi pour qu'ils puissent se concentrer sur leur expertise. De l'onboarding au suivi post-mission, nos agents IA prennent en charge tout ce qui ne nécessite pas votre présence.",
    problemes: [
      "L'onboarding de chaque nouveau client prend 2 à 3h de votre temps — questionnaires, contrats, prise de RDV",
      "Le suivi entre les séances est chronophage : rappels, documents à envoyer, comptes-rendus",
      "Créer du contenu régulier (LinkedIn, newsletter) pour attirer des clients prend du temps vous n'avez pas",
      "La facturation et les relances de paiement — nécessaires mais chronophages",
    ],
    solutions: [
      { titre: "Onboarding client automatisé", desc: "À la signature, un workflow automatique envoie le questionnaire d'entrée, collecte les réponses, programme les RDV et envoie tous les documents nécessaires." },
      { titre: "Suivi et rappels entre séances", desc: "Votre agent envoie automatiquement les résumés de séance, les exercices entre sessions, les rappels de RDV et collecte les feedbacks clients." },
      { titre: "Création de contenu assistée IA", desc: "À partir de vos notes et insights, l'IA génère des drafts de posts LinkedIn, d'articles et de newsletters que vous relisez et publiez en 15 minutes." },
    ],
    avantApres: {
      avant: "15h/semaine sur l'admin, le suivi clients et la création de contenu",
      apres: "3h de supervision et validation — tout le reste est automatisé",
      gain: "+12h/semaine = 2 clients supplémentaires ou un vrai week-end",
    },
    faq: [
      { q: "Est-ce adapté si je travaille seul(e) ?", a: "C'est fait pour ça. Les indépendants sont notre cœur de cible : vous n'avez pas d'équipe pour déléguer, donc l'IA devient votre assistant virtuel. Premier résultat visible en 48h." },
      { q: "Mes outils actuels (Calendly, Notion, Stripe) sont-ils compatibles ?", a: "Oui. Nos automatisations se branchent sur Calendly, Notion, Google Drive, Stripe, PayPal, Gmail, Outlook. On s'adapte à votre stack actuel." },
      { q: "L'IA peut-elle vraiment créer du contenu à mon image ?", a: "L'IA génère une base à partir de votre ton, vos sujets et vos exemples passés. Vous personnalisez en 15 min. Au bout de quelques semaines, les suggestions s'améliorent et correspondent de mieux en mieux à votre style." },
      { q: "Comment gérer la confidentialité des informations de mes clients ?", a: "Nous traitons la confidentialité client avec la plus grande rigueur. Vos données et celles de vos clients sont isolées et ne sont jamais utilisées pour entraîner des modèles tiers." },
    ],
    liens: [
      { label: "Automatiser l'onboarding client", href: "/automatiser/onboarding-client" },
      { label: "Automatiser la gestion des emails", href: "/automatiser/gestion-emails" },
    ],
    cta: "Obtenir mon audit coaching/conseil gratuit",
  },
];

export function getSecteurBySlug(slug: string): SecteurData | undefined {
  return secteurs.find(s => s.slug === slug);
}
