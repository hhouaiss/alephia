export interface ServiceData {
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
  avantApres: {
    avant: string;
    gain: string;
    apres: string;
  };
  faq: { q: string; a: string }[];
  liens: { label: string; href: string }[];
  cta: string;
}

export const services: ServiceData[] = [
  {
    slug: 'agents-ia',
    metaTitle: 'Agents IA sur mesure pour PME et TPE | Alefia',
    metaDescription: 'Développement d\'agents IA adaptés à votre métier. Automatisation des devis, emails, relances, reportings. Premier agent opérationnel en 48h. Audit gratuit.',
    hero: {
      badge: 'Agents IA sur mesure',
      h1: 'Des agents IA qui travaillent à votre place',
      subtitle: 'On conçoit des agents intelligents calibrés pour vos processus métier spécifiques. Pas un outil générique : un assistant qui connaît votre activité, vos clients, vos règles.',
    },
    intro: 'Un agent IA sur mesure est un programme autonome capable d\'exécuter des tâches complexes sans intervention humaine : répondre à des emails, qualifier des leads, générer des devis, analyser des documents. Alefia les conçoit et les déploie pour les PME, TPE et indépendants en France.',
    problemes: [
      'Vous passez des heures par semaine sur des tâches répétitives qui pourraient être automatisées',
      'Les outils IA génériques (ChatGPT, Copilot) ne s\'adaptent pas à vos processus spécifiques',
      'Vous avez besoin d\'une solution qui fonctionne dans vos outils existants, sans tout reconstruire',
      'Vous voulez des résultats concrets rapidement, pas un projet de 6 mois',
    ],
    solutions: [
      {
        titre: 'Agent de traitement des emails',
        desc: 'Triage automatique, réponses aux questions fréquentes, escalade intelligente vers la bonne personne. Votre boîte mail ne déborde plus.',
      },
      {
        titre: 'Agent de génération de devis',
        desc: 'À partir d\'un brief client ou d\'un formulaire, l\'agent génère un devis complet, formaté selon votre modèle, prêt à envoyer.',
      },
      {
        titre: 'Agent de relance commerciale',
        desc: 'Suivi automatique des prospects et clients, relances personnalisées au bon moment. Aucune opportunité ne passe entre les mailles.',
      },
    ],
    avantApres: {
      avant: 'Vos collaborateurs passent 3 à 4 heures par jour sur des tâches manuelles et répétitives. L\'erreur humaine coûte du temps et des clients.',
      gain: '+10h récupérées par semaine en moyenne',
      apres: 'L\'agent traite en temps réel. Vos équipes se concentrent sur ce qui a vraiment de la valeur : la relation client, la stratégie, la créativité.',
    },
    faq: [
      {
        q: 'Combien de temps pour déployer un premier agent IA ?',
        a: 'Le premier agent est opérationnel en 48h après l\'audit initial. On commence par le cas d\'usage le plus impactant pour vous, et on itère ensuite.',
      },
      {
        q: 'Est-ce que l\'agent peut s\'intégrer à nos outils existants ?',
        a: 'Oui. Nos agents s\'intègrent à votre CRM, votre messagerie, votre ERP, Notion, Slack, Google Workspace... On travaille avec vos outils, pas contre eux.',
      },
      {
        q: 'Faut-il des compétences techniques pour utiliser un agent IA ?',
        a: 'Aucune. Vos équipes interagissent avec l\'agent comme avec n\'importe quel outil. On forme tout le monde en moins de 2h.',
      },
      {
        q: 'Nos données sont-elles sécurisées ?',
        a: 'Oui. On peut déployer les agents sur votre infrastructure ou en cloud privé. Toutes nos solutions sont conformes RGPD. Vos données ne servent pas à entraîner des modèles tiers.',
      },
      {
        q: 'Quel est le coût d\'un agent IA sur mesure ?',
        a: 'L\'audit est gratuit. Le développement est ensuite proposé sur devis selon la complexité. La plupart de nos clients atteignent le ROI en moins d\'un mois.',
      },
    ],
    liens: [
      { label: 'Automatisation de workflows', href: '/services/automatisation-workflows' },
      { label: 'Intégration IA dans vos outils', href: '/services/integration-ia' },
      { label: 'Infrastructure IA privée', href: '/services/infrastructure-ia-privee' },
    ],
    cta: 'Demander mon audit gratuit',
  },

  {
    slug: 'automatisation-workflows',
    metaTitle: 'Automatisation de workflows avec n8n, Make et Zapier | Alefia',
    metaDescription: 'Connectez vos outils et automatisez vos processus métier avec n8n, Make et Zapier. Elimination des tâches manuelles répétitives. Audit gratuit pour PME et TPE.',
    hero: {
      badge: 'Automatisation de workflows',
      h1: 'Vos outils connectés, vos tâches automatisées',
      subtitle: 'On construit les ponts entre vos applications pour que l\'information circule toute seule. Plus de copier-coller, plus de saisies manuelles, plus d\'oublis.',
    },
    intro: 'L\'automatisation de workflows consiste à faire communiquer vos outils entre eux et à automatiser les séquences de tâches répétitives. Alefia maîtrise n8n, Make et Zapier pour créer des flux de travail intelligents adaptés aux PME, TPE et indépendants.',
    problemes: [
      'Vous ressaisissez manuellement des informations d\'un outil à l\'autre (CRM, email, tableur, facturation)',
      'Votre équipe perd du temps sur des validations, des transferts de fichiers, des notifications manuelles',
      'Vous avez plusieurs outils qui ne se parlent pas et chacun travaille dans son coin',
      'Les tâches tombent dans les cracks parce qu\'il n\'y a pas de processus automatisé',
    ],
    solutions: [
      {
        titre: 'Synchronisation CRM et messagerie',
        desc: 'Chaque nouvel email client crée automatiquement une fiche dans votre CRM. Chaque mise à jour CRM déclenche la bonne notification dans Slack ou Teams.',
      },
      {
        titre: 'Workflows de facturation',
        desc: 'Devis signé → facture générée → relance programmée → comptabilité mise à jour. Le cycle complet sans intervention manuelle.',
      },
      {
        titre: 'Automatisation du recrutement',
        desc: 'Candidature reçue, tri automatique, réponses personnalisées, planning d\'entretiens. Votre processus RH tourne seul.',
      },
    ],
    avantApres: {
      avant: 'Chaque transfert d\'information entre outils demande une intervention manuelle. Erreurs, oublis et perte de temps s\'accumulent chaque semaine.',
      gain: '-60% de travail manuel sur vos processus opérationnels',
      apres: 'Les données circulent automatiquement. Vos équipes reçoivent les bonnes informations au bon moment, sans rien saisir.',
    },
    faq: [
      {
        q: 'Quelle est la différence entre n8n, Make et Zapier ?',
        a: 'Zapier est simple mais limité et coûteux à l\'échelle. Make offre plus de flexibilité à prix raisonnable. n8n est open-source, auto-hébergeable, idéal pour les flux complexes ou les données sensibles. On choisit l\'outil adapté à votre situation.',
      },
      {
        q: 'Faut-il avoir un développeur en interne pour maintenir les workflows ?',
        a: 'Non. On conçoit des workflows robustes avec de la documentation claire. On forme votre équipe et on reste disponibles pour les évolutions.',
      },
      {
        q: 'Est-ce qu\'on peut connecter nos outils maison ou nos logiciels métier spécifiques ?',
        a: 'Dans la plupart des cas, oui. Si votre outil expose une API ou un webhook, on peut le connecter. Pour les logiciels sans API, on trouve des alternatives créatives.',
      },
      {
        q: 'Combien de temps pour mettre en place un premier workflow ?',
        a: 'Un workflow simple (ex : synchronisation CRM-email) est prêt en 24 à 48h. Les flux plus complexes multi-étapes prennent une à deux semaines.',
      },
    ],
    liens: [
      { label: 'Agents IA sur mesure', href: '/services/agents-ia' },
      { label: 'Intégration IA dans vos outils', href: '/services/integration-ia' },
      { label: 'Formation et conseil IA', href: '/services/formation-conseil' },
    ],
    cta: 'Automatiser mes processus',
  },

  {
    slug: 'integration-ia',
    metaTitle: 'Intégration IA dans vos outils CRM, ERP et applications métier | Alefia',
    metaDescription: 'Intégrez l\'IA directement dans votre CRM, ERP, messagerie et outils métier. Sans changer votre organisation. Pour PME et TPE. Audit gratuit.',
    hero: {
      badge: 'Intégration IA',
      h1: 'L\'IA dans vos outils, pas à côté',
      subtitle: 'Inutile de tout reconstruire. On intègre les capacités IA directement dans les outils que votre équipe utilise déjà, pour qu\'ils gagnent en puissance sans changer leurs habitudes.',
    },
    intro: 'L\'intégration IA consiste à greffer des fonctionnalités d\'intelligence artificielle sur votre environnement logiciel existant : CRM, ERP, messagerie, gestion de projet. Alefia intervient sans perturber votre organisation ni forcer une migration coûteuse.',
    problemes: [
      'Vous avez un CRM ou un ERP mais il ne fait pas d\'analyse prédictive, ni de suggestions intelligentes',
      'Vos équipes utilisent déjà des outils mais l\'IA reste un outil externe qu\'on "consulte" séparément',
      'Vous avez peur qu\'intégrer l\'IA implique de tout refaire ou de payer une migration massive',
      'Vous voulez que l\'IA aide vos collaborateurs dans leur travail quotidien, pas qu\'ils apprennent un nouveau logiciel',
    ],
    solutions: [
      {
        titre: 'IA dans votre CRM',
        desc: 'Scoring de leads automatique, résumés de conversation, suggestions de relance, détection des opportunités à risque. L\'IA enrichit chaque fiche client.',
      },
      {
        titre: 'IA dans votre messagerie',
        desc: 'Rédaction assistée, triage intelligent, détection des emails urgents, réponses automatiques aux questions fréquentes. Directement dans Outlook, Gmail ou Front.',
      },
      {
        titre: 'IA dans vos outils métier',
        desc: 'Analyse de documents, extraction de données structurées, génération de rapports. On connecte l\'IA à vos logiciels sectoriels via API ou scraping.',
      },
    ],
    avantApres: {
      avant: 'L\'IA est un outil externe que les équipes consultent parfois. La valeur reste théorique, l\'adoption est faible.',
      gain: 'IA intégrée au quotidien de chaque collaborateur',
      apres: 'Chaque action dans l\'outil existant bénéficie de l\'IA en arrière-plan. L\'adoption est naturelle parce que les habitudes ne changent pas.',
    },
    faq: [
      {
        q: 'Est-ce que vous pouvez intégrer l\'IA dans n\'importe quel logiciel ?',
        a: 'Si le logiciel dispose d\'une API ou de webhooks, oui. Pour les logiciels fermés, on examine les alternatives au cas par cas. On est honnêtes si une intégration n\'est pas faisable.',
      },
      {
        q: 'Est-ce que nos données vont alimenter les modèles d\'IA des fournisseurs ?',
        a: 'Non, si on utilise des configurations API sans opt-in au partage de données. Et si la confidentialité est critique, on peut déployer des modèles locaux sur votre infrastructure.',
      },
      {
        q: 'Combien de temps prend une intégration IA ?',
        a: 'Une intégration simple (ex : IA dans Gmail) se fait en quelques jours. Une intégration ERP complexe demande 2 à 4 semaines. On vous donne un planning précis après l\'audit.',
      },
      {
        q: 'Est-ce que vos intégrations restent compatibles lors des mises à jour de nos outils ?',
        a: 'On conçoit les intégrations de façon robuste aux évolutions des APIs. Et on assure un suivi après déploiement pour gérer les changements de version.',
      },
    ],
    liens: [
      { label: 'Agents IA sur mesure', href: '/services/agents-ia' },
      { label: 'Automatisation de workflows', href: '/services/automatisation-workflows' },
      { label: 'Infrastructure IA privée', href: '/services/infrastructure-ia-privee' },
    ],
    cta: 'Intégrer l\'IA dans mes outils',
  },

  {
    slug: 'formation-conseil',
    metaTitle: 'Formation et conseil IA pour entreprises | Alefia',
    metaDescription: 'Formez vos équipes à l\'IA et construisez une stratégie d\'adoption durable. Ateliers pratiques, accompagnement personnalisé pour PME et TPE. Audit gratuit.',
    hero: {
      badge: 'Formation et conseil IA',
      h1: 'Votre équipe autonome avec l\'IA',
      subtitle: 'L\'outil le plus puissant ne sert à rien si vos équipes ne l\'utilisent pas. On forme vos collaborateurs et on construit avec vous une stratégie IA adaptée à votre réalité.',
    },
    intro: 'La formation IA et le conseil en stratégie permettent à votre entreprise d\'adopter l\'intelligence artificielle de façon durable, sans dépendre d\'un prestataire pour chaque évolution. Alefia accompagne dirigeants et équipes opérationnelles avec une approche pragmatique et sans jargon.',
    problemes: [
      'Vos équipes ont entendu parler de l\'IA mais ne savent pas comment l\'utiliser concrètement dans leur travail',
      'Vous avez peur de vous lancer sans avoir une vision claire de ce que l\'IA peut apporter à votre activité',
      'Des outils IA ont été déployés mais l\'adoption est faible parce qu\'il n\'y a pas eu de formation',
      'Vous voulez comprendre où investir en IA sans vous noyer dans les options ou vous faire vendre ce dont vous n\'avez pas besoin',
    ],
    solutions: [
      {
        titre: 'Atelier stratégie IA',
        desc: 'Session de travail avec la direction pour cartographier vos cas d\'usage IA prioritaires, évaluer les gains potentiels et définir une feuille de route réaliste.',
      },
      {
        titre: 'Formation équipes opérationnelles',
        desc: 'Ateliers pratiques pour vos collaborateurs sur les outils IA du quotidien : prompting, agents IA, automatisation. 2h suffisent pour une autonomie réelle.',
      },
      {
        titre: 'Accompagnement post-déploiement',
        desc: 'Suivi à 30 et 90 jours pour s\'assurer que l\'adoption est effective, ajuster les outils si besoin et répondre aux questions qui émergent en situation réelle.',
      },
    ],
    avantApres: {
      avant: 'L\'IA est perçue comme une menace ou un gadget. Les équipes contournent les outils déployés et reviennent à leurs vieilles habitudes.',
      gain: 'Adoption réelle et durable dans toute l\'équipe',
      apres: 'Chaque collaborateur sait utiliser l\'IA dans son périmètre. Les gains de temps sont concrets et mesurables dès les premières semaines.',
    },
    faq: [
      {
        q: 'Faut-il des prérequis techniques pour suivre vos formations ?',
        a: 'Aucun. Nos formations sont conçues pour des profils non-techniques. On part de votre métier et de vos outils pour montrer comment l\'IA s\'y applique.',
      },
      {
        q: 'Les formations se font en présentiel ou à distance ?',
        a: 'Les deux. On intervient en présentiel pour les équipes en Île-de-France et à distance pour le reste de la France. On s\'adapte à votre organisation.',
      },
      {
        q: 'Quelle est la durée d\'une formation type ?',
        a: 'Une session d\'initiation dure 2h. Un parcours complet avec ateliers pratiques et suivi se fait sur 2 à 3 jours étalés sur un mois.',
      },
      {
        q: 'Est-ce que vous pouvez former des équipes de tailles différentes ?',
        a: 'Oui, de 2 à 30 personnes. Au-delà, on adapte le format (sessions multiples, formation de formateurs internes).',
      },
    ],
    liens: [
      { label: 'Agents IA sur mesure', href: '/services/agents-ia' },
      { label: 'Automatisation de workflows', href: '/services/automatisation-workflows' },
      { label: 'Intégration IA dans vos outils', href: '/services/integration-ia' },
    ],
    cta: 'Discuter de ma stratégie IA',
  },

  {
    slug: 'infrastructure-ia-privee',
    metaTitle: 'Infrastructure IA privée et souveraine pour entreprises | Alefia',
    metaDescription: 'Déployez vos modèles IA sur votre propre infrastructure, on-premise ou cloud privé. Données maîtrisées, conformité RGPD, sans dépendance aux APIs tierces. Audit gratuit.',
    hero: {
      badge: 'Infrastructure IA privée',
      h1: 'L\'IA sur votre infrastructure, vos données chez vous',
      subtitle: 'Certaines données ne peuvent pas quitter votre système. On déploie des modèles IA puissants directement sur votre infrastructure, sans passer par des APIs tierces.',
    },
    intro: 'L\'infrastructure IA privée consiste à faire tourner des modèles d\'intelligence artificielle sur vos propres serveurs, en local ou en cloud privé, sans envoyer vos données à des fournisseurs externes. Alefia conçoit et déploie ces environnements pour les entreprises soucieuses de souveraineté des données et de conformité RGPD.',
    problemes: [
      'Vos données sont confidentielles (clients, RH, financier, santé) et vous ne pouvez pas les envoyer à OpenAI ou d\'autres APIs',
      'Votre secteur impose des contraintes réglementaires strictes sur l\'hébergement et le traitement des données',
      'Vous dépendez de services cloud dont les tarifs, les conditions et la disponibilité peuvent changer du jour au lendemain',
      'Vous voulez une solution IA pérenne, sans être lié à un fournisseur spécifique',
    ],
    solutions: [
      {
        titre: 'Déploiement de modèles open-source',
        desc: 'On installe et configure des modèles comme Mistral, LLaMA ou Phi directement sur vos serveurs. Performances comparables aux APIs commerciales, données maîtrisées.',
      },
      {
        titre: 'Environnement cloud privé',
        desc: 'Si vous n\'avez pas d\'infrastructure on-premise, on déploie sur un cloud privé hébergé en France. Conformité RGPD garantie, isolation totale de vos données.',
      },
      {
        titre: 'Fine-tuning sur vos données métier',
        desc: 'On entraîne ou ajuste les modèles sur vos propres données pour qu\'ils parlent votre jargon, connaissent vos produits et respectent vos règles métier.',
      },
    ],
    avantApres: {
      avant: 'Vos données passent par des APIs tierces. Vous acceptez des conditions d\'utilisation qui peuvent changer, avec des risques de confidentialité réels.',
      gain: '100% de maîtrise sur vos données et votre IA',
      apres: 'L\'IA tourne sur votre infrastructure. Personne d\'autre n\'a accès à vos données. Vous contrôlez les coûts, les mises à jour et la roadmap.',
    },
    faq: [
      {
        q: 'Quels modèles peut-on déployer en local ?',
        a: 'Mistral, LLaMA 3, Phi-3, Gemma, Qwen et d\'autres modèles open-source performants. Le choix dépend de votre cas d\'usage et de votre infrastructure. On vous recommande le meilleur ratio performance/coût.',
      },
      {
        q: 'Quel type de serveur faut-il pour faire tourner un modèle IA ?',
        a: 'Ça dépend du modèle et du volume d\'usage. Un modèle léger peut tourner sur une machine avec un GPU grand public. Pour des modèles plus puissants, on dimensionne ensemble l\'infrastructure nécessaire.',
      },
      {
        q: 'Est-ce que les performances sont comparables à ChatGPT ou Claude ?',
        a: 'Pour les cas d\'usage spécialisés et bien définis, oui. Les modèles open-source récents sont très performants. Et avec un fine-tuning sur vos données, ils peuvent même dépasser les modèles généralistes sur votre domaine.',
      },
      {
        q: 'Que se passe-t-il si un nouveau modèle plus performant sort ?',
        a: 'On peut mettre à jour votre infrastructure pour embarquer le nouveau modèle. C\'est l\'un des avantages du déploiement local : vous gardez le contrôle sur les évolutions.',
      },
      {
        q: 'Est-ce que cette solution est compatible avec la réglementation de notre secteur ?',
        a: 'C\'est précisément pour ça qu\'elle existe. Santé, finance, droit, défense... On adapte l\'architecture aux exigences de votre secteur et on documente la conformité.',
      },
    ],
    liens: [
      { label: 'Agents IA sur mesure', href: '/services/agents-ia' },
      { label: 'Intégration IA dans vos outils', href: '/services/integration-ia' },
      { label: 'Formation et conseil IA', href: '/services/formation-conseil' },
    ],
    cta: 'Sécuriser mon infrastructure IA',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}
