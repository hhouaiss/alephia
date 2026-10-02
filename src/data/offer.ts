// Faits de l'offre Formation IA, partagés par la home et les pages /formation-ia.
// Règle : rien de fictif. Pas de chiffre, de client ni de témoignage inventé.

export const SITE_URL = 'https://alefia.co';
export const CONTACT_EMAIL = 'hassan@alefia.co';
export const PRICE_FROM = '1 200 €';
export const MALT_URL = 'https://www.malt.fr/profile/hassanhouaiss';
// Profils LinkedIn et X de Hassan (affichés dans la section formateur)
export const LINKEDIN_URL = 'https://www.linkedin.com/in/hassanhouaiss';
export const X_URL = 'https://x.com/HHouaiss';
export const FORM_ANCHOR = '#demande';
export const SLOGAN = 'Formation IA pour les équipes de TPE et PME.';

// Extraits copiés mot pour mot depuis le profil Malt (relevés le 19/09/2026). Ne jamais reformuler le texte.
// Affichage demandé par Hassan : prénom seul, entreprise, "avis client" pour tous.
export const reviews = [
  { text: 'Formation de qualité, avec des exemples concrets et directement applicables à notre activité.', author: 'Sophie', company: 'Kosilum' },
  { text: 'Hassan est une personne calme, sérieuse et digne de confiance.', author: 'Romain', company: 'CIC' },
  { text: 'Hassan est une personne à l’écoute avec un bon relationnel.', author: 'Lionel', company: 'Crédit Mutuel' },
];

export const steps = [
  { title: 'On s’appelle', desc: '20 minutes pour comprendre votre activité et votre équipe.' },
  { title: 'On cadre', desc: 'On choisit ensemble les sujets et les tâches à travailler.' },
  { title: 'Je vous forme', desc: 'Une formation sur mesure, sur vos dossiers. Chez vous ou à distance.' },
];

export const included = [
  'L’appel de cadrage de 20 minutes',
  'Un programme construit sur vos tâches et vos documents',
  'La formation, chez vous en Île-de-France ou à distance',
  'Le dossier OPCO, géré de A à Z',
];

export type FaqItem = { q: string; a: string };

export const baseFaq: FaqItem[] = [
  { q: 'Combien ça coûte ?', a: `À partir de ${PRICE_FROM} la journée. Vous recevez le devis exact après notre appel.` },
  { q: 'Comment marche le financement OPCO ?', a: 'Nos formations sont éligibles au financement OPCO. On s’occupe de toute la partie administrative, de A à Z.' },
  { q: 'Faut-il des compétences techniques ?', a: 'Non. La formation est faite pour les équipes métier : direction, commerce, marketing, administratif.' },
  { q: 'Et nos données ?', a: 'On fixe dès le début ce qu’on peut donner à une IA, et ce qu’on ne donne jamais.' },
  { q: 'En présentiel ou à distance ?', a: 'Les deux. Je me déplace en Île-de-France. Ailleurs, la formation se fait à distance.' },
  { q: 'Quel délai avant de démarrer ?', a: 'Deux à trois semaines sans OPCO. Trois à six semaines avec, le temps de valider le dossier.' },
];

export const faqSchema = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
});
