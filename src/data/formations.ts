// Pages SEO /formation-ia/[slug] : une page par métier (secteur) et par usage.
// Elles remplacent les anciennes pages "automatisation" (/automatisation-ia/[secteur] et /automatiser/[tache]),
// redirigées en 301 vers leur équivalent ici (voir vercel.json, champ oldPath).
// Règles de contenu : rien de fictif (aucun chiffre, client ou témoignage inventé), phrases courtes, pas de tiret cadratin.

import type { FaqItem } from './offer';
import { TOPIC_CHOICES } from '../lib/formationLead';

type Topic = (typeof TOPIC_CHOICES)[number];

export interface FormationPage {
  slug: string;
  kind: 'secteur' | 'usage';
  oldPath: string;
  // Libellé court (hub, liens entre pages, fil d'Ariane)
  label: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  // Titre H1 : la partie `highlight` est surlignée en ambre
  h1: string;
  highlight: string;
  lead: string;
  pains: { title: string; desc: string }[];
  examples: { task: string; before: string; after: string }[];
  program: string[];
  faq: FaqItem[];
  // Sujets pré-cochés à l'étape 2 du tunnel
  topics: Topic[];
}

export const formations: FormationPage[] = [
  // ---------------------------------------------------------------- Secteurs
  {
    slug: 'artisans',
    kind: 'secteur',
    oldPath: '/automatisation-ia/artisan',
    label: 'Artisans',
    metaTitle: 'Formation IA pour artisans : devis, mails et administratif | Alefia',
    metaDescription: 'Formation IA pour artisans et petites entreprises du bâtiment. Devis, mails clients, relances : moins de temps au bureau. Éligible OPCO, à partir de 1 200 € la journée.',
    kicker: 'Formation IA pour les artisans',
    h1: 'Moins de soirées sur les devis. Plus de temps sur les chantiers.',
    highlight: 'Plus de temps sur les chantiers.',
    lead: 'Je forme les artisans et leurs équipes à utiliser l’IA pour la partie bureau : devis, mails clients, relances. Sur vos propres documents.',
    pains: [
      { title: 'Le bureau se fait le soir.', desc: 'La journée, vous êtes sur le chantier. Les devis et les mails attendent le soir ou le week-end.' },
      { title: 'Chaque devis repart de zéro.', desc: 'On reprend un ancien document, on corrige à la main, on oublie une ligne.' },
      { title: 'Les relances passent à la trappe.', desc: 'Un devis envoyé sans suite, une facture en retard. Personne n’a le temps de relancer.' },
    ],
    examples: [
      { task: 'Un devis de rénovation', before: 'Une heure à reprendre un ancien devis.', after: 'Une trame claire à partir de vos notes de visite.' },
      { task: 'Un client mécontent', before: 'On répond à chaud, ou on ne répond pas.', after: 'Une réponse posée, que vous relisez et envoyez.' },
      { task: 'Une relance de devis', before: 'On n’ose pas, ou on oublie.', after: 'Un message court et poli, prêt en une minute.' },
      { task: 'Un dossier d’aide ou de subvention', before: 'Des pages de texte à remplir.', after: 'Un premier jet structuré, à compléter avec vos chiffres.' },
    ],
    program: [
      'Écrire une demande claire à une IA, à partir de vos notes de chantier',
      'Construire une trame de devis et de mail réutilisable',
      'Rédiger relances, réponses clients et courriers administratifs',
      'Utiliser l’IA sur téléphone, entre deux chantiers',
      'Savoir ce qu’on ne donne jamais à une IA',
    ],
    faq: [
      { q: 'Je ne suis pas à l’aise avec l’informatique. C’est pour moi ?', a: 'Oui. On part de vos tâches réelles et on avance pas à pas. Si vous savez écrire un mail, vous pouvez suivre la formation.' },
      { q: 'L’IA peut-elle calculer mes prix ?', a: 'Non, et on ne lui demande pas. Vos prix restent les vôtres. L’IA vous aide à rédiger et à présenter le devis.' },
      { q: 'Mon OPCO peut-il financer la formation ?', a: 'Nos formations sont éligibles au financement OPCO. On s’occupe de toute la partie administrative.' },
    ],
    topics: ['Rédaction : mails, devis, offres', 'Administratif et comptabilité'],
  },
  {
    slug: 'agences-communication',
    kind: 'secteur',
    oldPath: '/automatisation-ia/agence-communication',
    label: 'Agences de communication',
    metaTitle: 'Formation IA pour agences de communication et marketing | Alefia',
    metaDescription: 'Formation IA sur mesure pour agences de communication : briefs, contenus, recommandations, comptes rendus. Sur vos vrais dossiers clients. Éligible OPCO.',
    kicker: 'Formation IA pour les agences de communication',
    h1: 'Votre équipe utilise déjà l’IA. Donnons-lui une méthode commune.',
    highlight: 'une méthode commune.',
    lead: 'Je forme les équipes d’agence à utiliser l’IA sur leur travail de tous les jours : briefs, contenus, recommandations, comptes rendus. Avec des règles claires pour les données clients.',
    pains: [
      { title: 'Chacun a ses astuces.', desc: 'Un chef de projet a trouvé la bonne méthode, les autres ne le savent pas.' },
      { title: 'Les contenus se ressemblent.', desc: 'Sans méthode, l’IA produit des textes plats, que tout le monde reconnaît.' },
      { title: 'Les données clients circulent.', desc: 'Personne n’a fixé ce qu’on peut coller dans une IA. Le risque est réel.' },
    ],
    examples: [
      { task: 'Un brief client confus', before: 'Des allers-retours pour comprendre la demande.', after: 'Une reformulation claire et les bonnes questions à poser.' },
      { task: 'Une recommandation stratégique', before: 'Une page blanche la veille du rendez-vous.', after: 'Un plan structuré, que l’équipe enrichit.' },
      { task: 'Des déclinaisons de posts', before: 'Des heures à adapter un message à chaque réseau.', after: 'Des variantes fidèles au ton de la marque, à relire.' },
      { task: 'Un compte rendu de réunion client', before: 'Rédigé tard, envoyé trop tard.', after: 'Un résumé avec les décisions et les actions, le jour même.' },
    ],
    program: [
      'Écrire des demandes précises qui respectent le ton d’une marque',
      'Passer d’un brief à une recommandation structurée',
      'Décliner un contenu sans perdre la qualité',
      'Construire une bibliothèque de demandes partagée par l’équipe',
      'Fixer les règles sur les données clients',
    ],
    faq: [
      { q: 'Notre équipe utilise déjà ChatGPT. Qu’allez-vous lui apprendre ?', a: 'Une méthode commune et des usages plus précis. On part de ce que chacun fait déjà, et on garde ce qui marche.' },
      { q: 'Peut-on travailler sur de vrais dossiers clients ?', a: 'Oui, c’est le principe. On fixe d’abord ce qui peut être partagé avec une IA, puis on travaille sur vos cas.' },
      { q: 'Faut-il des compétences techniques ?', a: 'Non. La formation est faite pour les équipes métier : chefs de projet, créatifs, commerciaux.' },
    ],
    topics: ['Marketing et réseaux sociaux', 'Résumer documents et réunions'],
  },
  {
    slug: 'cabinets-comptables',
    kind: 'secteur',
    oldPath: '/automatisation-ia/cabinet-comptable',
    label: 'Cabinets comptables',
    metaTitle: 'Formation IA pour cabinets comptables et experts-comptables | Alefia',
    metaDescription: 'Formation IA pour cabinets d’expertise comptable : mails clients, synthèses, notes, documents. Avec des règles strictes sur la confidentialité. Éligible OPCO.',
    kicker: 'Formation IA pour les cabinets comptables',
    h1: 'L’IA au cabinet, sans jamais perdre le contrôle de vos données.',
    highlight: 'sans jamais perdre le contrôle',
    lead: 'Je forme les collaborateurs de cabinets comptables à utiliser l’IA pour la rédaction, les synthèses et la relation client. Avec des règles claires sur ce qui ne sort jamais du cabinet.',
    pains: [
      { title: 'Les mails clients prennent des heures.', desc: 'Expliquer une échéance, demander une pièce, relancer. Chaque mail se rédige à la main.' },
      { title: 'La confidentialité freine tout.', desc: 'Faute de règles, certains n’osent rien faire. D’autres en font trop.' },
      { title: 'Les périodes fiscales saturent l’équipe.', desc: 'Pendant les pics, le temps manque pour bien expliquer aux clients.' },
    ],
    examples: [
      { task: 'Une demande de pièces manquantes', before: 'Le même mail réécrit pour chaque client.', after: 'Un modèle clair, adapté en quelques secondes.' },
      { task: 'Expliquer un point fiscal à un client', before: 'Un jargon que le client ne comprend pas.', after: 'Une explication simple, que vous validez.' },
      { task: 'Une synthèse pour un rendez-vous bilan', before: 'Des notes éparses à remettre en forme.', after: 'Une synthèse structurée, prête à présenter.' },
      { task: 'Une note interne de procédure', before: 'Personne n’a le temps de l’écrire.', after: 'Un premier jet propre, à compléter.' },
    ],
    program: [
      'Fixer les règles : ce qu’on peut donner à une IA, ce qu’on ne donne jamais',
      'Rédiger mails clients, relances et explications',
      'Transformer des notes en synthèse claire',
      'Rédiger procédures et documents internes',
      'Vérifier et relire ce que produit l’IA',
    ],
    faq: [
      { q: 'Peut-on utiliser l’IA avec des données clients ?', a: 'On le décide ensemble au début de la formation. On fixe ce qui peut être utilisé, sous quelle forme, et ce qui ne sort jamais du cabinet.' },
      { q: 'L’IA peut-elle faire la comptabilité ?', a: 'Ce n’est pas l’objet de la formation. On l’utilise pour la rédaction, les synthèses et la relation client.' },
      { q: 'Quand organiser la formation ?', a: 'De préférence hors période fiscale. On cale la date ensemble lors de l’appel.' },
    ],
    topics: ['Rédaction : mails, devis, offres', 'Administratif et comptabilité', 'Service client'],
  },
  {
    slug: 'e-commerce',
    kind: 'secteur',
    oldPath: '/automatisation-ia/e-commerce',
    label: 'E-commerce',
    metaTitle: 'Formation IA pour e-commerce : fiches produits, SAV, marketing | Alefia',
    metaDescription: 'Formation IA pour équipes e-commerce : fiches produits, réponses clients, emails marketing, réseaux sociaux. Sur votre catalogue. Éligible OPCO.',
    kicker: 'Formation IA pour l’e-commerce',
    h1: 'Fiches produits, SAV, newsletters. Votre équipe va plus vite, sans perdre votre ton.',
    highlight: 'sans perdre votre ton.',
    lead: 'Je forme les équipes e-commerce à utiliser l’IA sur leur catalogue, leur service client et leur marketing. Sur vos produits, avec votre ton de marque.',
    pains: [
      { title: 'Le catalogue grossit plus vite que les textes.', desc: 'Des fiches produits vides ou copiées du fournisseur.' },
      { title: 'Le service client répète les mêmes réponses.', desc: 'Livraison, retours, tailles. Les mêmes questions, tous les jours.' },
      { title: 'Le marketing manque de temps.', desc: 'Newsletters, posts, promotions. On publie moins que prévu.' },
    ],
    examples: [
      { task: 'Une fiche produit', before: 'La description du fournisseur, copiée telle quelle.', after: 'Un texte unique, dans votre ton, à relire.' },
      { task: 'Un client qui demande un retour', before: 'Une réponse tapée à la main, à chaque fois.', after: 'Une réponse claire et aimable, adaptée au cas.' },
      { task: 'La newsletter du mois', before: 'Repoussée de semaine en semaine.', after: 'Un premier jet à partir de vos nouveautés.' },
      { task: 'Un avis client négatif', before: 'On hésite, on ne répond pas.', after: 'Une réponse posée, qui montre que vous écoutez.' },
    ],
    program: [
      'Rédiger des fiches produits uniques dans votre ton',
      'Préparer des réponses types pour le service client',
      'Écrire newsletters et posts à partir de votre actualité',
      'Répondre aux avis clients',
      'Garder un œil critique sur ce que produit l’IA',
    ],
    faq: [
      { q: 'L’IA peut-elle écrire tout notre catalogue ?', a: 'Elle peut produire un premier jet pour chaque fiche. On apprend à le faire vite et bien, et à toujours relire.' },
      { q: 'Comment garder notre ton de marque ?', a: 'On formalise votre ton pendant la formation, puis on l’utilise dans chaque demande à l’IA.' },
      { q: 'La formation peut-elle se faire à distance ?', a: 'Oui. Je me déplace en Île-de-France. Ailleurs, la formation se fait à distance.' },
    ],
    topics: ['Service client', 'Marketing et réseaux sociaux', 'Rédaction : mails, devis, offres'],
  },
  {
    slug: 'coachs-consultants',
    kind: 'secteur',
    oldPath: '/automatisation-ia/coach-consultant',
    label: 'Coachs et consultants',
    metaTitle: 'Formation IA pour coachs, consultants et indépendants | Alefia',
    metaDescription: 'Formation IA pour coachs et consultants : propositions commerciales, contenus, comptes rendus de séance, prospection. Seul ou en petite équipe. Éligible OPCO.',
    kicker: 'Formation IA pour les coachs et consultants',
    h1: 'Moins de temps sur l’administratif. Plus de temps avec vos clients.',
    highlight: 'Plus de temps avec vos clients.',
    lead: 'Je forme les coachs, consultants et petits cabinets à utiliser l’IA pour leurs propositions, leurs contenus et leurs suivis clients.',
    pains: [
      { title: 'Vous êtes seul pour tout faire.', desc: 'Vendre, produire, facturer, publier. Le temps facturable fond.' },
      { title: 'Les propositions prennent des heures.', desc: 'Chaque proposition commerciale se réécrit presque entièrement.' },
      { title: 'La visibilité passe après.', desc: 'Vous savez qu’il faudrait publier. Vous n’en avez jamais le temps.' },
    ],
    examples: [
      { task: 'Une proposition commerciale', before: 'Une demi-journée à partir d’un ancien document.', after: 'Une proposition structurée à partir de vos notes d’appel.' },
      { task: 'Le compte rendu d’une séance', before: 'Écrit tard le soir, ou pas du tout.', after: 'Une synthèse claire avec les actions, envoyée le jour même.' },
      { task: 'Un post LinkedIn', before: 'Une idée notée, jamais publiée.', after: 'Un texte dans votre voix, que vous ajustez.' },
      { task: 'Un support d’atelier', before: 'Des heures de mise en forme.', after: 'Un plan détaillé et des exercices, à adapter.' },
    ],
    program: [
      'Transformer des notes d’appel en proposition commerciale',
      'Rédiger comptes rendus et suivis clients',
      'Écrire des contenus dans votre propre voix',
      'Préparer ateliers et supports',
      'Protéger la confidentialité de vos clients',
    ],
    faq: [
      { q: 'Je travaille seul. La formation est-elle adaptée ?', a: 'Oui. La formation est sur mesure, pour une personne ou une petite équipe.' },
      { q: 'Un indépendant peut-il la faire financer ?', a: 'Nos formations sont éligibles au financement par les fonds de formation. On regarde votre cas lors de l’appel et on s’occupe de la partie administrative.' },
      { q: 'L’IA ne va-t-elle pas uniformiser mes contenus ?', a: 'Pas si elle est bien utilisée. On travaille justement à garder votre voix et vos idées.' },
    ],
    topics: ['Commercial et prospection', 'Marketing et réseaux sociaux', 'Résumer documents et réunions'],
  },

  // ---------------------------------------------------------------- Usages
  {
    slug: 'devis',
    kind: 'usage',
    oldPath: '/automatiser/devis',
    label: 'Devis et propositions',
    metaTitle: 'Formation IA : rédiger vos devis et propositions commerciales | Alefia',
    metaDescription: 'Apprenez à votre équipe à rédiger devis, offres et propositions commerciales avec l’IA. Formation sur mesure, sur vos documents. Éligible OPCO.',
    kicker: 'Formation IA : devis et propositions',
    h1: 'Des devis et des offres clairs, rédigés en minutes.',
    highlight: 'rédigés en minutes.',
    lead: 'Je forme votre équipe à utiliser l’IA pour préparer devis, offres et propositions commerciales. À partir de vos notes et de vos anciens documents.',
    pains: [
      { title: 'Chaque devis repart d’un vieux document.', desc: 'Copier, coller, corriger. Et parfois oublier de changer le nom du client.' },
      { title: 'Les offres se ressemblent toutes.', desc: 'Le client ne voit pas ce que vous avez compris de son besoin.' },
      { title: 'Ça prend trop de temps.', desc: 'Les devis s’accumulent et partent en retard.' },
    ],
    examples: [
      { task: 'Après un premier rendez-vous', before: 'Des notes en vrac, un devis qui traîne.', after: 'Une proposition structurée le jour même.' },
      { task: 'Une offre pour un nouveau client', before: 'Un modèle générique.', after: 'Une offre qui reprend les mots et les enjeux du client.' },
      { task: 'Le détail des prestations', before: 'Des lignes vagues, sources de questions.', after: 'Des descriptions claires, que le client comprend.' },
      { task: 'Le mail d’envoi du devis', before: 'Deux lignes écrites à la va-vite.', after: 'Un mail qui résume l’offre et propose la suite.' },
    ],
    program: [
      'Transformer des notes de rendez-vous en proposition',
      'Construire une trame de devis réutilisable',
      'Adapter une offre aux enjeux de chaque client',
      'Rédiger le mail d’envoi et la relance',
      'Garder la main sur les prix et les engagements',
    ],
    faq: [
      { q: 'L’IA fixe-t-elle les prix ?', a: 'Non. Les prix et les engagements restent votre décision. L’IA aide à rédiger et à présenter.' },
      { q: 'Peut-on travailler avec notre logiciel de devis ?', a: 'Oui. On prépare les textes avec l’IA, puis vous les reportez dans votre outil habituel.' },
      { q: 'Combien de temps dure la formation ?', a: 'On la définit ensemble lors du cadrage, selon votre équipe et vos besoins.' },
    ],
    topics: ['Rédaction : mails, devis, offres', 'Commercial et prospection'],
  },
  {
    slug: 'relances-clients',
    kind: 'usage',
    oldPath: '/automatiser/relances-clients',
    label: 'Relances clients',
    metaTitle: 'Formation IA : rédiger vos relances clients et impayés | Alefia',
    metaDescription: 'Formez votre équipe à rédiger relances de devis, de factures et de clients avec l’IA. Des messages fermes et polis, prêts en une minute. Éligible OPCO.',
    kicker: 'Formation IA : relances clients',
    h1: 'Relancer sans y passer la journée, et sans froisser personne.',
    highlight: 'sans froisser personne.',
    lead: 'Je forme votre équipe à rédiger avec l’IA les relances de devis, de factures et de clients silencieux. Le bon ton, à chaque étape.',
    pains: [
      { title: 'Personne n’aime relancer.', desc: 'On repousse, on oublie, et le devis ou la facture reste en suspens.' },
      { title: 'Le ton est difficile à trouver.', desc: 'Trop mou, on n’est pas pris au sérieux. Trop sec, on abîme la relation.' },
      { title: 'Chaque relance s’écrit à la main.', desc: 'Le même travail, pour chaque client, chaque semaine.' },
    ],
    examples: [
      { task: 'Un devis sans réponse', before: 'On attend, puis on oublie.', after: 'Une relance courte qui propose une suite simple.' },
      { task: 'Une facture en retard', before: 'Un mail gêné, ou trop sec.', after: 'Un message ferme et poli, adapté au client.' },
      { task: 'Une deuxième relance', before: 'Le même texte, copié une deuxième fois.', after: 'Un message qui change d’angle et fait avancer.' },
      { task: 'Un client ancien à recontacter', before: 'On ne sait pas quoi lui dire.', after: 'Une prise de nouvelles naturelle et utile.' },
    ],
    program: [
      'Écrire une demande qui donne le bon ton à l’IA',
      'Construire une série de relances, de la plus douce à la plus ferme',
      'Adapter chaque message au client et à l’historique',
      'Relancer devis, factures et clients inactifs',
      'Garder une relation saine avec vos clients',
    ],
    faq: [
      { q: 'L’IA envoie-t-elle les relances à notre place ?', a: 'Non. La formation porte sur la rédaction. Vous gardez la main sur l’envoi.' },
      { q: 'Peut-on l’utiliser pour les impayés ?', a: 'Oui, pour rédiger les messages de relance. Les étapes juridiques restent du ressort de votre conseil.' },
      { q: 'Faut-il des compétences techniques ?', a: 'Non. Si votre équipe sait écrire un mail, elle peut suivre la formation.' },
    ],
    topics: ['Rédaction : mails, devis, offres', 'Service client'],
  },
  {
    slug: 'emails',
    kind: 'usage',
    oldPath: '/automatiser/gestion-emails',
    label: 'Emails',
    metaTitle: 'Formation IA : rédiger et traiter vos emails plus vite | Alefia',
    metaDescription: 'Formez votre équipe à rédiger, résumer et trier ses emails avec l’IA. Mails clients délicats, réponses types, résumés de longs échanges. Éligible OPCO.',
    kicker: 'Formation IA : emails',
    h1: 'Votre boîte mail ne devrait pas vous prendre la matinée.',
    highlight: 'vous prendre la matinée.',
    lead: 'Je forme votre équipe à utiliser l’IA pour rédiger, résumer et organiser ses emails. Des mails clairs, plus vite, sans perdre votre ton.',
    pains: [
      { title: 'Les mails délicats bloquent.', desc: 'Un client mécontent, un refus à annoncer. On cherche ses mots pendant une heure.' },
      { title: 'Les longs échanges se perdent.', desc: 'Quinze messages dans un fil. Plus personne ne sait ce qui a été décidé.' },
      { title: 'Les mêmes réponses, encore et encore.', desc: 'Chacun réécrit les mêmes explications à sa façon.' },
    ],
    examples: [
      { task: 'Un mail client délicat', before: 'On cherche ses mots, on réécrit trois fois.', after: 'Un premier jet propre, que vous ajustez.' },
      { task: 'Un long fil de discussion', before: 'On relit tout pour retrouver la décision.', after: 'Un résumé avec les points clés et les actions.' },
      { task: 'Une question fréquente', before: 'Chacun répond à sa façon.', after: 'Une réponse type commune, adaptée en un instant.' },
      { task: 'Un mail en anglais', before: 'On hésite, on passe par un traducteur.', after: 'Un mail correct et naturel, que vous relisez.' },
    ],
    program: [
      'Rédiger les mails délicats avec le bon ton',
      'Résumer un long échange en quelques lignes',
      'Créer des réponses types partagées par l’équipe',
      'Écrire en anglais ou dans une autre langue',
      'Ne jamais coller d’informations sensibles dans une IA',
    ],
    faq: [
      { q: 'Faut-il connecter l’IA à notre messagerie ?', a: 'Non. La formation porte sur l’usage de l’IA pour rédiger et résumer. Vous gardez vos outils actuels.' },
      { q: 'Fonctionne-t-elle avec Outlook ou Gmail ?', a: 'Oui. Les méthodes s’appliquent quelle que soit votre messagerie.' },
      { q: 'Et la confidentialité des échanges ?', a: 'On fixe dès le début ce qu’on peut donner à une IA, et ce qu’on ne donne jamais.' },
    ],
    topics: ['Rédaction : mails, devis, offres', 'Service client'],
  },
  {
    slug: 'reporting',
    kind: 'usage',
    oldPath: '/automatiser/reporting',
    label: 'Comptes rendus et reporting',
    metaTitle: 'Formation IA : comptes rendus, synthèses et reporting | Alefia',
    metaDescription: 'Formez votre équipe à produire comptes rendus de réunion, synthèses et reportings avec l’IA. Clairs, structurés, envoyés le jour même. Éligible OPCO.',
    kicker: 'Formation IA : comptes rendus et reporting',
    h1: 'Des comptes rendus clairs, envoyés le jour même.',
    highlight: 'envoyés le jour même.',
    lead: 'Je forme votre équipe à utiliser l’IA pour transformer notes, réunions et chiffres en comptes rendus et synthèses que tout le monde lit.',
    pains: [
      { title: 'Personne ne veut faire le compte rendu.', desc: 'Il arrive trois jours après, quand il arrive.' },
      { title: 'Les reportings sont longs à écrire.', desc: 'Les chiffres sont là. Il manque le texte qui les explique.' },
      { title: 'Les documents sont trop longs.', desc: 'Personne ne lit un rapport de vingt pages en entier.' },
    ],
    examples: [
      { task: 'Un compte rendu de réunion', before: 'Personne ne veut s’en charger.', after: 'Un résumé structuré, avec les actions à mener.' },
      { task: 'Le point mensuel à la direction', before: 'Un tableau de chiffres sans explication.', after: 'Une synthèse qui dit ce qui va, ce qui ne va pas, et pourquoi.' },
      { task: 'Un long rapport à lire', before: 'On le survole, on rate l’essentiel.', after: 'Les points clés en une page, avec les passages à lire.' },
      { task: 'Une note de synthèse', before: 'Une journée de rédaction.', after: 'Un plan et un premier jet en une heure.' },
    ],
    program: [
      'Transformer des notes brutes en compte rendu',
      'Rédiger une synthèse à partir de chiffres',
      'Résumer un long document sans perdre l’essentiel',
      'Créer des modèles de compte rendu pour l’équipe',
      'Vérifier les chiffres et les faits avant d’envoyer',
    ],
    faq: [
      { q: 'L’IA peut-elle analyser nos chiffres ?', a: 'Elle aide à les expliquer et à les présenter. On apprend aussi à vérifier ce qu’elle écrit, chiffre par chiffre.' },
      { q: 'Peut-on l’utiliser pendant les réunions ?', a: 'On voit comment prendre des notes utiles et les transformer ensuite. On fixe aussi les règles sur l’enregistrement.' },
      { q: 'Faut-il des compétences techniques ?', a: 'Non. La formation est faite pour les équipes métier.' },
    ],
    topics: ['Résumer documents et réunions', 'Administratif et comptabilité'],
  },
  {
    slug: 'extraction-donnees',
    kind: 'usage',
    oldPath: '/automatiser/saisie-donnees',
    label: 'Saisie et extraction de données',
    metaTitle: 'Formation IA : extraire et structurer vos données sans ressaisie | Alefia',
    metaDescription: 'Formez votre équipe à extraire des informations de documents, PDF et mails avec l’IA, pour moins de ressaisie. Avec des règles claires sur les données. Éligible OPCO.',
    kicker: 'Formation IA : saisie et extraction de données',
    h1: 'Moins de ressaisie. Plus de temps pour le travail qui compte.',
    highlight: 'Moins de ressaisie.',
    lead: 'Je forme votre équipe à utiliser l’IA pour extraire les informations utiles de documents, de PDF et de mails, et les mettre en forme. Avec des règles claires sur les données.',
    pains: [
      { title: 'On recopie à la main.', desc: 'D’un PDF vers un tableau, d’un mail vers un logiciel. Ligne par ligne.' },
      { title: 'Les erreurs de saisie coûtent cher.', desc: 'Un chiffre inversé, une date fausse. On le découvre trop tard.' },
      { title: 'Les documents arrivent en vrac.', desc: 'Formats différents, informations éparpillées. Il faut tout trier.' },
    ],
    examples: [
      { task: 'Les infos clés d’un contrat', before: 'On relit tout le document pour trouver trois dates.', after: 'Les dates, montants et clauses clés, listés et vérifiés.' },
      { task: 'Une liste dans un PDF', before: 'Ressaisie à la main dans un tableur.', after: 'Un tableau propre, à contrôler et à coller.' },
      { task: 'Des demandes reçues par mail', before: 'Copiées une à une dans un suivi.', after: 'Les informations utiles extraites dans le même format.' },
      { task: 'Des notes de terrain', before: 'Illisibles pour le reste de l’équipe.', after: 'Une fiche structurée, toujours dans le même ordre.' },
    ],
    program: [
      'Demander à l’IA d’extraire des informations précises',
      'Obtenir un tableau propre à partir d’un document',
      'Toujours contrôler le résultat avant de l’utiliser',
      'Savoir quels documents ne doivent jamais passer par une IA',
      'Créer des modèles réutilisables pour l’équipe',
    ],
    faq: [
      { q: 'L’IA remplace-t-elle notre logiciel ?', a: 'Non. Elle aide à préparer et à mettre en forme les informations. Vous les reportez ensuite dans vos outils.' },
      { q: 'L’IA fait-elle des erreurs ?', a: 'Oui, parfois. C’est pourquoi on apprend à contrôler systématiquement le résultat.' },
      { q: 'Et les données personnelles ?', a: 'On fixe des règles strictes au début de la formation : ce qui peut être traité, sous quelle forme, et ce qui ne l’est jamais.' },
    ],
    topics: ['Administratif et comptabilité', 'Résumer documents et réunions'],
  },
  {
    slug: 'prospection',
    kind: 'usage',
    oldPath: '/automatiser/suivi-prospects',
    label: 'Prospection commerciale',
    metaTitle: 'Formation IA pour la prospection commerciale et le suivi prospects | Alefia',
    metaDescription: 'Formez vos commerciaux à utiliser l’IA pour préparer leurs rendez-vous, écrire leurs messages de prospection et suivre leurs prospects. Éligible OPCO.',
    kicker: 'Formation IA : prospection commerciale',
    h1: 'Des messages de prospection qui ne ressemblent pas à tous les autres.',
    highlight: 'pas à tous les autres.',
    lead: 'Je forme vos commerciaux à utiliser l’IA pour préparer leurs rendez-vous, personnaliser leurs messages et suivre leurs prospects.',
    pains: [
      { title: 'Les messages sont génériques.', desc: 'Le prospect reconnaît le modèle en deux lignes, et passe.' },
      { title: 'La préparation est bâclée.', desc: 'On arrive au rendez-vous sans bien connaître l’entreprise.' },
      { title: 'Le suivi se perd.', desc: 'Après le premier échange, plus personne ne relance.' },
    ],
    examples: [
      { task: 'Un premier message à un prospect', before: 'Le même texte pour tout le monde.', after: 'Un message court qui parle de son activité.' },
      { task: 'La préparation d’un rendez-vous', before: 'Cinq minutes sur le site du prospect.', after: 'Une fiche avec ses enjeux et vos questions.' },
      { task: 'Le suivi après un appel', before: 'Des notes jamais reprises.', after: 'Un mail de suivi clair, envoyé le jour même.' },
      { task: 'Une objection fréquente', before: 'Chacun improvise.', after: 'Des réponses préparées et partagées par l’équipe.' },
    ],
    program: [
      'Préparer un rendez-vous à partir d’informations publiques',
      'Personnaliser un message sans y passer une heure',
      'Rédiger relances et mails de suivi',
      'Préparer les réponses aux objections',
      'Respecter les règles sur les données des prospects',
    ],
    faq: [
      { q: 'L’IA va-t-elle envoyer des messages en masse ?', a: 'Non. La formation vise des messages plus personnels, pas plus nombreux.' },
      { q: 'Fonctionne-t-elle avec notre CRM ?', a: 'Les méthodes s’appliquent quel que soit votre outil. Vous reportez les textes dans votre CRM habituel.' },
      { q: 'Pour quelle taille d’équipe ?', a: 'D’un commercial seul à une équipe complète. La formation est construite sur mesure.' },
    ],
    topics: ['Commercial et prospection', 'Rédaction : mails, devis, offres'],
  },
  {
    slug: 'onboarding-client',
    kind: 'usage',
    oldPath: '/automatiser/onboarding-client',
    label: 'Accueil des nouveaux clients',
    metaTitle: 'Formation IA : accueillir et accompagner vos nouveaux clients | Alefia',
    metaDescription: 'Formez votre équipe à préparer avec l’IA les mails de bienvenue, guides, FAQ et suivis des nouveaux clients. Un accueil clair et soigné. Éligible OPCO.',
    kicker: 'Formation IA : accueil des nouveaux clients',
    h1: 'Un accueil client clair et soigné, sans tout réécrire à chaque fois.',
    highlight: 'sans tout réécrire à chaque fois.',
    lead: 'Je forme votre équipe à préparer avec l’IA tout ce qui entoure l’arrivée d’un client : mails de bienvenue, guides, réponses aux premières questions.',
    pains: [
      { title: 'Chaque client est accueilli différemment.', desc: 'Selon la personne, les informations envoyées changent.' },
      { title: 'Les mêmes questions reviennent.', desc: 'Les nouveaux clients demandent tous la même chose, la première semaine.' },
      { title: 'Les documents d’accueil sont datés.', desc: 'Le guide date de trois ans. Personne n’a le temps de le refaire.' },
    ],
    examples: [
      { task: 'Le mail de bienvenue', before: 'Deux lignes, ou un long mail illisible.', after: 'Un mail clair avec les prochaines étapes.' },
      { task: 'Le guide de démarrage', before: 'Un vieux document que personne ne lit.', after: 'Un guide court et à jour, à valider.' },
      { task: 'La FAQ des nouveaux clients', before: 'Les réponses sont dans la tête de l’équipe.', after: 'Une FAQ écrite à partir des vraies questions reçues.' },
      { task: 'Le point à un mois', before: 'Oublié.', after: 'Un message de suivi prêt, à personnaliser.' },
    ],
    program: [
      'Écrire un parcours d’accueil étape par étape',
      'Rédiger mails de bienvenue et de suivi',
      'Transformer les questions fréquentes en FAQ',
      'Mettre à jour vos guides et documents',
      'Garder un ton cohérent dans toute l’équipe',
    ],
    faq: [
      { q: 'L’IA va-t-elle répondre à nos clients ?', a: 'Non. La formation porte sur la préparation des messages et des documents. Votre équipe reste au contact des clients.' },
      { q: 'Pour quel type d’entreprise ?', a: 'Toute entreprise qui accueille régulièrement de nouveaux clients : services, conseil, logiciels, agences.' },
      { q: 'Faut-il des compétences techniques ?', a: 'Non. La formation est faite pour les équipes métier.' },
    ],
    topics: ['Service client', 'Rédaction : mails, devis, offres'],
  },
];

export const getFormation = (slug: string) => formations.find((f) => f.slug === slug);
