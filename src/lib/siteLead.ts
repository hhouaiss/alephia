// Validation partagée du formulaire "Demande de projet" (site web) : utilisée par la home (côté client)
// et par /api/projet (côté serveur), pour que les deux appliquent exactement les mêmes règles.
import { isDisposableEmail, normalizePhone } from './formationLead';

export { normalizePhone };

// Les deux seules formules. Les libellés sont repris dans les emails.
export const FORMULA_CHOICES = [
  { value: 'express', label: 'Site Express' },
  { value: 'business', label: 'Site Business' },
  { value: 'unsure', label: 'Je ne sais pas encore' },
] as const;
export type Formula = (typeof FORMULA_CHOICES)[number]['value'];

export interface SiteLead {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  activity: string;
  formula: Formula | '';
  details: string;
  consent: boolean;
}

export type SiteLeadField = keyof SiteLead;

// Ordre d'affichage des champs : sert à placer le focus sur la première erreur
export const SITE_FIELD_ORDER: SiteLeadField[] = [
  'formula', 'fullName', 'company', 'email', 'phone', 'activity', 'details', 'consent',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const FR_PHONE_RE = /^(?:\+33|0033|0)[1-9]\d{8}$/;
const FORMULA_VALUES: readonly string[] = FORMULA_CHOICES.map((c) => c.value);

const str = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '');
const bool = (value: unknown) => value === true || value === 'on' || value === 'true';

export const formulaLabel = (value: string) =>
  FORMULA_CHOICES.find((c) => c.value === value)?.label ?? 'Non précisée';

export const parseSiteLead = (raw: Record<string, unknown>): SiteLead => {
  const formula = str(raw.formula, 20);
  return {
    fullName: str(raw.fullName, 150),
    company: str(raw.company, 150),
    email: str(raw.email, 200),
    phone: str(raw.phone, 30),
    activity: str(raw.activity, 150),
    formula: (FORMULA_VALUES.includes(formula) ? formula : '') as Formula | '',
    details: str(raw.details, 3000),
    consent: bool(raw.consent),
  };
};

export const validateSiteLead = (lead: SiteLead) => {
  const errors: Partial<Record<SiteLeadField, string>> = {};

  if (!lead.formula) errors.formula = 'Choisissez une formule, ou « Je ne sais pas encore ».';
  if (!lead.fullName) errors.fullName = 'Indiquez votre prénom et votre nom.';
  if (!lead.company) errors.company = 'Indiquez le nom de votre entreprise.';
  if (!lead.activity) errors.activity = 'Indiquez votre activité, par exemple « plombier » ou « fleuriste ».';

  if (!lead.email) errors.email = 'Indiquez votre adresse email.';
  else if (!EMAIL_RE.test(lead.email)) errors.email = 'Cette adresse email ne semble pas valide.';
  else if (isDisposableEmail(lead.email)) errors.email = 'Merci d’utiliser une adresse email durable, pas une adresse jetable.';

  if (!lead.phone) errors.phone = 'Indiquez un numéro pour que nous puissions vous rappeler.';
  else if (!FR_PHONE_RE.test(normalizePhone(lead.phone))) errors.phone = 'Indiquez un numéro français valide, par exemple 06 12 34 56 78.';

  if (!lead.consent) errors.consent = 'Votre accord est nécessaire pour que nous puissions vous recontacter.';

  return errors;
};
