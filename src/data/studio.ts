// Offre "studio web" d'Alefia (home depuis le 2026-11-20).
// Règles : deux formules seulement, prix d'appel HT, rien de fictif, aucune mention de technologie ni d'outil.
import type { FaqItem } from './offer';

export const FORM_ANCHOR = '#demande';
export const STUDIO_SLOGAN = 'Studio de création de sites web pour TPE, indépendants et artisans.';

export const EXPRESS = {
  id: 'express',
  name: 'Site Express',
  price: '299\u00a0€',
  pitch: 'Pour les indépendants, artisans et petites entreprises qui veulent une présence professionnelle sur Internet, sans attendre.',
  delay: '48 à 72 h',
  delayNote: 'après réception de tous les éléments nécessaires',
  cta: 'Commander mon site Express',
  included: [
    'Site one-page professionnel',
    'Design moderne, adapté à votre activité',
    'Présentation de l’entreprise et de ses services',
    'Coordonnées et formulaire de contact',
    'Adaptation mobile et tablette',
    'Optimisation SEO de base',
    'Mise en ligne',
    'Une série de corrections avant livraison',
  ],
};

export const BUSINESS = {
  id: 'business',
  name: 'Site Business',
  price: '599\u00a0€',
  pitch: 'Pour les entreprises qui veulent un vrai site vitrine : présenter leur activité, gagner en visibilité et recevoir des demandes de contact.',
  delay: '5 à 7 jours ouvrés',
  delayNote: 'après réception des éléments nécessaires',
  cta: 'Choisir mon site Business',
  included: [
    'Jusqu’à 5 pages',
    'Design personnalisé selon votre identité',
    'Page d’accueil pensée pour convertir',
    'Présentation de vos services ou prestations',
    'Page À propos',
    'Page Contact avec formulaire',
    'Adaptation mobile et tablette',
    'Optimisation SEO de base',
    'Mise en ligne',
    'Accompagnement et corrections avant livraison',
  ],
};

// Prestations complémentaires : sur devis, pour ne pas compliquer les deux formules
export const OPTIONS = [
  'Pages supplémentaires',
  'Rédaction de vos textes',
  'Nom de domaine et hébergement',
  'Modifications et suivi après la mise en ligne',
  'Fonctionnalités sur mesure (prise de rendez-vous, galerie…)',
];

// Références affichées sous le hero, à la demande de Hassan.
// Logos officiels absents du projet : noms en typographie neutre (voir HOME).
export const BRANDS = ['BNP Paribas', 'Crédit Mutuel', 'Hello bank!', 'Wonderbox', 'Remood'];

export const pillars = [
  {
    title: 'Une vraie expertise humaine',
    desc: 'Plus de 10 ans d’expérience dans le web, le design et l’expérience utilisateur. Chaque site est relu, ajusté et validé par un professionnel avant d’être livré.',
  },
  {
    title: 'Une livraison rapide',
    desc: 'Des délais courts, annoncés dès le départ. Votre site est en ligne en quelques jours, pas en quelques mois.',
  },
  {
    title: 'Un accompagnement réel',
    desc: 'Un interlocuteur unique, joignable avant, pendant et après le projet. Nous ne disparaissons pas une fois le site livré.',
  },
];

// Site "généré" vs site conçu par un professionnel
export const compare = [
  { generic: 'Un modèle rempli à la chaîne', alefia: 'Une structure pensée pour votre métier et vos clients' },
  { generic: 'Des textes vagues, les mêmes partout', alefia: 'Un message clair, qui dit ce que vous faites et où' },
  { generic: 'Personne ne vérifie l’affichage sur mobile', alefia: 'Chaque page contrôlée sur mobile, tablette et ordinateur' },
  { generic: 'Vous êtes seul une fois en ligne', alefia: 'Un interlocuteur qui connaît votre site et vous répond' },
];

export const steps = [
  { title: 'Vous nous parlez de votre activité', desc: 'Un court échange, ou le formulaire ci-dessous. Vous nous envoyez vos éléments : logo, photos, textes si vous en avez.' },
  { title: 'Nous concevons votre site', desc: 'Nous créons votre site et vous soumettons une première version, dans le délai annoncé.' },
  { title: 'Nous ajustons et mettons en ligne', desc: 'Vous demandez vos corrections, nous les appliquons, puis nous mettons votre site en ligne.' },
];

export const studioFaq: FaqItem[] = [
  {
    q: 'Comment pouvez-vous proposer ces tarifs ?',
    a: 'Nous avons rodé chaque étape de la création d’un site : des formules claires, un processus sans réunions inutiles, des échanges directs. Vous payez un site, pas des heures de rendez-vous. Le contrôle humain, lui, reste entier : chaque réalisation est vérifiée et validée par un professionnel.',
  },
  {
    q: 'Les sites sont-ils personnalisés ?',
    a: 'Oui. Chaque site est construit pour votre activité : vos couleurs, vos services, vos photos, votre façon de parler à vos clients. Le Site Express part d’une base éprouvée que nous adaptons à votre métier. Le Site Business a un design personnalisé selon l’identité de votre entreprise.',
  },
  {
    q: 'Puis-je demander des modifications ?',
    a: 'Oui. Le Site Express inclut une série de corrections avant livraison. Le Site Business inclut un accompagnement et des corrections avant livraison. Au-delà, les modifications supplémentaires sont possibles sur devis.',
  },
  {
    q: 'Qui s’occupe de l’hébergement et du nom de domaine ?',
    a: 'La mise en ligne est incluse dans les deux formules. Le nom de domaine et l’hébergement ont un coût annuel qui s’ajoute au prix du site : nous vous l’indiquons avant de commencer. Si vous en avez déjà un, nous l’utilisons. Sinon, nous vous accompagnons pour le réserver, ou nous nous en chargeons en option.',
  },
  {
    q: 'Puis-je modifier mon site après sa livraison ?',
    a: 'Oui. Vous pouvez nous demander des changements à tout moment : nouveau service, horaires, photos, page supplémentaire. Ces modifications sont réalisées sur devis, ou dans le cadre d’un suivi si vous en avez souscrit un.',
  },
  {
    q: 'Proposez-vous un accompagnement après la mise en ligne ?',
    a: 'Oui. Vous gardez le même interlocuteur après la livraison. Selon vos besoins, nous vous proposons des interventions ponctuelles ou un suivi régulier, sur devis.',
  },
  {
    q: 'Quels sont les délais de livraison ?',
    a: 'Comptez 48 à 72 heures pour un Site Express et 5 à 7 jours ouvrés pour un Site Business, à partir du moment où nous avons tous les éléments nécessaires (logo, photos, textes, informations de contact). Nous vous disons dès le départ exactement ce qu’il nous faut.',
  },
];
