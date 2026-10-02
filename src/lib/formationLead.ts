// Validation partagée du formulaire "Formation IA" : utilisée par la page (côté client)
// et par /api/formation (côté serveur), pour que les deux appliquent exactement les mêmes règles.

// Formulaire volontairement court : 4 champs obligatoires, le reste se qualifie au téléphone.
export const TRAINEE_COUNTS = ['1 à 3', '4 à 6', '7 à 10', 'Plus de 10'] as const;

// Questions 2 et 3 du tunnel de la home. Les libellés sont enregistrés tels quels en base.
export const TOPIC_CHOICES = [
  'Rédaction : mails, devis, offres',
  'Service client',
  'Commercial et prospection',
  'Marketing et réseaux sociaux',
  'Administratif et comptabilité',
  'Résumer documents et réunions',
] as const;

export const OPCO_CHOICES = [
  { value: 'yes', label: 'Oui, je veux vérifier mon éligibilité' },
  { value: 'unknown', label: 'Je ne sais pas ce que c’est' },
  { value: 'no', label: 'Non, nous financerons nous-mêmes' },
] as const;
export type OpcoChoice = (typeof OPCO_CHOICES)[number]['value'];

export interface FormationLead {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  traineesCount: string;
  topics: string[];
  // Précisions libres ("Autre chose ?")
  tasks: string;
  opcoChoice: OpcoChoice | '';
  // Déduit de opcoChoice quand il est renseigné : true sauf si "no"
  opco: boolean;
  consent: boolean;
}

export type FormationField = keyof FormationLead;

// Ordre d'affichage des champs : sert à placer le focus sur la première erreur
export const FIELD_ORDER: FormationField[] = [
  'fullName', 'email', 'phone', 'company', 'traineesCount', 'topics', 'tasks', 'opcoChoice', 'opco', 'consent',
];

// Services d'adresses jetables les plus courants. Les sous-domaines sont aussi refusés.
const DISPOSABLE_DOMAINS = new Set([
  'yopmail.com', 'yopmail.fr', 'yopmail.net', 'cool.fr.nf', 'jetable.fr.nf', 'courriel.fr.nf',
  'jetable.org', 'mailinator.com', 'mailinator.net', 'guerrillamail.com', 'guerrillamail.info',
  'guerrillamail.net', 'guerrillamail.org', 'sharklasers.com', 'grr.la', '10minutemail.com',
  '10minutemail.net', 'temp-mail.org', 'temp-mail.io', 'tempmail.com', 'tempmail.net',
  'tempmailo.com', 'tempail.com', 'tempr.email', 'trashmail.com', 'trashmail.fr', 'trashmail.net',
  'getnada.com', 'nada.email', 'maildrop.cc', 'dispostable.com', 'throwawaymail.com',
  'fakeinbox.com', 'mailnesia.com', 'mintemail.com', 'mohmal.com', 'emailondeck.com',
  'discard.email', 'spamgourmet.com', 'mytemp.email', 'moakt.com', 'mail-temp.com',
  'burnermail.io', 'crazymailing.com', 'mailcatch.com', 'spam4.me', 'emailfake.com',
  'minuteinbox.com', 'inboxkitten.com', 'mailpoof.com', 'tmpmail.org', 'tmpmail.net',
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const FR_PHONE_RE = /^(?:\+33|0033|0)[1-9]\d{8}$/;

export const normalizePhone = (value: string) => value.replace(/[\s.\-()]/g, '');

export const isDisposableEmail = (email: string) => {
  const domain = email.split('@')[1]?.toLowerCase() ?? '';
  const parts = domain.split('.');
  for (let i = 0; i < parts.length - 1; i++) {
    if (DISPOSABLE_DOMAINS.has(parts.slice(i).join('.'))) return true;
  }
  return false;
};

const str = (value: unknown, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';
const bool = (value: unknown) => value === true || value === 'on' || value === 'true';

const OPCO_VALUES: readonly string[] = OPCO_CHOICES.map((c) => c.value);

export const parseFormationLead = (raw: Record<string, unknown>): FormationLead => {
  const opcoChoice = (OPCO_VALUES.includes(str(raw.opcoChoice, 10)) ? str(raw.opcoChoice, 10) : '') as OpcoChoice | '';
  return {
    fullName: str(raw.fullName, 150),
    company: str(raw.company, 150),
    email: str(raw.email, 200),
    phone: str(raw.phone, 30),
    traineesCount: str(raw.traineesCount, 30),
    topics: Array.isArray(raw.topics) ? raw.topics.slice(0, TOPIC_CHOICES.length).map((t) => str(t, 100)).filter(Boolean) : [],
    tasks: str(raw.tasks, 3000),
    opcoChoice,
    opco: opcoChoice ? opcoChoice !== 'no' : bool(raw.opco),
    consent: bool(raw.consent),
  };
};

export const validateFormationLead = (lead: FormationLead) => {
  const errors: Partial<Record<FormationField, string>> = {};

  if (!lead.fullName) errors.fullName = 'Indiquez votre prénom et votre nom.';
  if (!lead.company) errors.company = 'Indiquez le nom de votre entreprise.';

  if (!lead.email) errors.email = 'Indiquez votre email professionnel.';
  else if (!EMAIL_RE.test(lead.email)) errors.email = 'Cette adresse email ne semble pas valide.';
  else if (isDisposableEmail(lead.email)) errors.email = 'Merci d’utiliser une adresse email durable, pas une adresse jetable.';

  if (!lead.phone) errors.phone = 'Indiquez un numéro de téléphone pour que je puisse vous rappeler.';
  else if (!FR_PHONE_RE.test(normalizePhone(lead.phone))) errors.phone = 'Indiquez un numéro français valide, par exemple 06 12 34 56 78.';

  // Facultatif : on ne refuse qu'une valeur hors liste
  if (lead.traineesCount && !(TRAINEE_COUNTS as readonly string[]).includes(lead.traineesCount)) {
    errors.traineesCount = 'Choisissez une valeur dans la liste.';
  }

  if (lead.topics.some((t) => !(TOPIC_CHOICES as readonly string[]).includes(t))) {
    errors.topics = 'Choisissez des sujets dans la liste.';
  }

  if (!lead.consent) errors.consent = 'Votre accord est nécessaire pour que je puisse vous recontacter.';

  return errors;
};
