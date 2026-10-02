import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { supabase } from '../../lib/supabase';
import { OPCO_CHOICES, normalizePhone, parseFormationLead, validateFormationLead } from '../../lib/formationLead';
import type { FormationLead } from '../../lib/formationLead';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Seule boîte qui reçoit : hassan@alefia.co. Volontairement en dur, pour qu'une
// ancienne variable d'environnement ne renvoie pas les demandes vers hello@.
const CONTACT_EMAIL = 'hassan@alefia.co';
const FROM_LEAD = `Hassan de Alefia <${CONTACT_EMAIL}>`;
const FROM_NOTIF = 'Alefia Notifications <notifications@alefia.co>';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;

// Délai minimal entre l'affichage du formulaire et l'envoi : en dessous, c'est un robot
const MIN_FILL_MS = 3000;

// Couleurs de la home, reprises dans les emails
const BLUE = '#10118b';
const AMBER = '#ffa500';
const INK = '#14153a';
const INK_2 = '#4a4c6a';
const INK_3 = '#6f7190';
const MIST = '#eef0f8';
const FONT = "'Archivo', Arial, Helvetica, sans-serif";

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const opcoLabel = (lead: FormationLead) =>
  OPCO_CHOICES.find((c) => c.value === lead.opcoChoice)?.label ?? (lead.opco ? 'Oui' : 'Non renseigné');

// Gabarit commun : bandeau bleu avec le logo, carte blanche, pied de page discret
const emailShell = (preheader: string, body: string) => `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800&display=swap" rel="stylesheet">
  </head>
  <body style="margin: 0; padding: 0; background: ${MIST}; font-family: ${FONT}; color: ${INK};">
    <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: ${MIST};">
      <tr>
        <td align="center" style="padding: 32px 12px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background: #ffffff; border-radius: 16px; overflow: hidden;">
            <tr>
              <td style="background: ${BLUE}; padding: 22px 32px;">
                <span style="font-family: ${FONT}; font-size: 26px; font-weight: 800; letter-spacing: -1px; color: #ffffff;">alefia<span style="color: ${AMBER};">.</span></span>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px; font-family: ${FONT}; font-size: 16px; line-height: 1.6; color: ${INK};">
                ${body}
              </td>
            </tr>
          </table>
          <p style="margin: 20px 0 0; font-family: ${FONT}; font-size: 12px; color: ${INK_3};">
            Alefia · Formation IA pour les TPE et PME · <a href="https://alefia.co" style="color: ${INK_3};">alefia.co</a> · <a href="mailto:${CONTACT_EMAIL}" style="color: ${INK_3};">${CONTACT_EMAIL}</a>
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

const tableRows = (rows: [string, string][]) => rows.map(([label, value]) => `
  <tr>
    <td style="padding: 10px 12px 10px 0; border-bottom: 1px solid #e3e5f0; color: ${INK_3}; font-size: 14px; vertical-align: top; width: 38%;">${escapeHtml(label)}</td>
    <td style="padding: 10px 0; border-bottom: 1px solid #e3e5f0; font-size: 15px; white-space: pre-wrap;">${escapeHtml(value)}</td>
  </tr>`).join('');

export const POST: APIRoute = async ({ request }) => {
  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return json({ success: false, message: 'Requête invalide' }, 400);
  }

  // Anti-spam sans friction : champ piège rempli ou envoi trop rapide.
  // On répond comme un succès pour ne rien apprendre au robot.
  const elapsedMs = Number(raw.elapsedMs);
  if (raw.fax_hp || !Number.isFinite(elapsedMs) || elapsedMs < MIN_FILL_MS) {
    return json({ success: true }, 200);
  }

  const lead = parseFormationLead(raw);
  const errors = validateFormationLead(lead);
  if (Object.keys(errors).length > 0) {
    return json({ success: false, errors }, 400);
  }

  const utm = Object.fromEntries(
    UTM_KEYS.map((key) => [key, typeof raw[key] === 'string' ? (raw[key] as string).slice(0, 200) : null])
  ) as Record<(typeof UTM_KEYS)[number], string | null>;
  const sourcePage = typeof raw.sourcePage === 'string' ? raw.sourcePage.slice(0, 200) : null;

  // 1. Enregistrement en base (table créée par supabase_migrations/004_create_formation_leads.sql)
  let dbFailed = false;
  try {
    const { error } = await supabase.from('formation_leads').insert([{
      full_name: lead.fullName,
      company: lead.company,
      email: lead.email,
      phone: normalizePhone(lead.phone),
      trainees_count: lead.traineesCount || null,
      topics: lead.topics,
      tasks_extra: lead.tasks || null,
      opco_choice: lead.opcoChoice || (lead.opco ? 'yes' : null),
      consent: lead.consent,
      source_page: sourcePage,
      ...utm,
    }]);
    if (error) {
      dbFailed = true;
      console.error('Supabase error (formation_leads):', error);
    }
  } catch (err) {
    dbFailed = true;
    console.error('Supabase exception (formation_leads):', err);
  }

  // 2. Récapitulatif interne avec toutes les réponses
  const firstName = lead.fullName.split(/\s+/)[0];
  const sentAt = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris', dateStyle: 'full', timeStyle: 'short' });
  const phone = normalizePhone(lead.phone);

  const answerRows: [string, string][] = [
    ['Personnes à former', lead.traineesCount || 'Ne sait pas encore'],
    ['Sujets', lead.topics.length ? lead.topics.join('\n') : 'Aucun sujet coché'],
    ['Précisions', lead.tasks || 'Aucune'],
    ['Financement OPCO', opcoLabel(lead)],
  ];
  const contactRows: [string, string][] = [
    ['Prénom et nom', lead.fullName],
    ['Entreprise', lead.company],
    ['Email', lead.email],
    ['Téléphone', lead.phone],
    ['Consentement RGPD', lead.consent ? 'Oui' : 'Non'],
  ];
  const sourceRows: [string, string][] = [
    ['Page', sourcePage || 'Inconnue'],
    ...UTM_KEYS.filter((key) => utm[key]).map((key) => [key, utm[key] as string] as [string, string]),
  ];

  const sectionTitle = (text: string) =>
    `<p style="margin: 28px 0 4px; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: ${BLUE};">${text}</p>`;

  const notificationHtml = emailShell(`${lead.company} · ${lead.fullName} · ${lead.phone}`, `
    <p style="margin: 0 0 4px; font-size: 13px; color: ${INK_3};">${escapeHtml(sentAt)}</p>
    <h1 style="margin: 0 0 20px; font-size: 24px; font-weight: 800; line-height: 1.2; color: ${INK};">Nouvelle demande de formation</h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: #fff4dc; border-left: 4px solid ${AMBER}; border-radius: 8px;">
      <tr>
        <td style="padding: 14px 18px; font-size: 15px;">
          <strong>À rappeler sous 24 h :</strong> ${escapeHtml(lead.fullName)}, ${escapeHtml(lead.company)}<br>
          <a href="tel:${escapeHtml(phone)}" style="color: ${BLUE}; font-weight: 600;">${escapeHtml(lead.phone)}</a> ·
          <a href="mailto:${escapeHtml(lead.email)}" style="color: ${BLUE};">${escapeHtml(lead.email)}</a>
        </td>
      </tr>
    </table>
    ${sectionTitle('Ses réponses')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${tableRows(answerRows)}</table>
    ${sectionTitle('Coordonnées')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${tableRows(contactRows)}</table>
    ${sectionTitle('Provenance')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${tableRows(sourceRows)}</table>
    ${dbFailed ? `<p style="margin: 24px 0 0; color: #b91c1c; font-size: 14px;"><strong>Attention :</strong> l’enregistrement dans Supabase a échoué. Cet email est la seule trace de la demande.</p>` : ''}
  `);

  // 3. Confirmation au prospect, signée Hassan, avec le rappel de ses réponses
  const recapRows: [string, string][] = [
    ['Personnes à former', lead.traineesCount || 'À définir ensemble'],
    ['Sujets', [lead.topics.join(', '), lead.tasks].filter(Boolean).join('\n') || 'À définir ensemble'],
    ['Financement OPCO', opcoLabel(lead)],
  ];
  const nextSteps = [
    ['Je vous rappelle sous 24 h ouvrées.', 'Un appel de 20 minutes, au ' + lead.phone + '.'],
    ['On cadre la formation.', 'Les sujets, la durée, le format.'],
    ['Vous recevez le programme et le devis.', lead.opco ? 'Avec le dossier OPCO, que je prépare pour vous.' : 'Avec le détail de chaque journée.'],
  ];

  const confirmationHtml = emailShell('Votre demande est bien reçue. Je vous rappelle sous 24 h ouvrées.', `
    <h1 style="margin: 0 0 18px; font-size: 26px; font-weight: 800; line-height: 1.2; color: ${INK};">
      Merci ${escapeHtml(firstName)}, votre demande est <span style="background: linear-gradient(transparent 60%, ${AMBER} 60%);">bien reçue.</span>
    </h1>
    <p style="margin: 0 0 16px; color: ${INK_2};">Je vous rappelle sous 24 h ouvrées pour parler de la formation de l’équipe de ${escapeHtml(lead.company)}.</p>
    <p style="margin: 0 0 8px; color: ${INK_2};">D’ici là, notez les tâches qui prennent le plus de temps à votre équipe. On partira de là.</p>

    ${sectionTitle('La suite')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${nextSteps.map(([title, desc], i) => `
      <tr>
        <td style="width: 44px; padding: 10px 0; vertical-align: top;">
          <div style="width: 30px; height: 30px; line-height: 30px; border-radius: 15px; background: ${BLUE}; color: #ffffff; text-align: center; font-size: 14px; font-weight: 700;">${i + 1}</div>
        </td>
        <td style="padding: 10px 0; font-size: 15px; color: ${INK_2};"><strong style="color: ${INK};">${escapeHtml(title)}</strong><br>${escapeHtml(desc)}</td>
      </tr>`).join('')}
    </table>

    ${sectionTitle('Votre demande')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: ${MIST}; border-radius: 10px;">
      <tr><td style="padding: 6px 18px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${tableRows(recapRows)}</table>
      </td></tr>
    </table>

    <p style="margin: 24px 0 0; color: ${INK_2};">Une question d’ici là ? Répondez simplement à cet email.</p>
    <p style="margin: 20px 0 0;">À très vite,<br><strong>Hassan Houaiss</strong><br><span style="color: ${INK_3}; font-size: 14px;">Fondateur d’Alefia, formateur IA</span></p>
  `);

  const [notif, confirmation] = await Promise.allSettled([
    resend.emails.send({
      from: FROM_NOTIF,
      to: CONTACT_EMAIL,
      replyTo: lead.email,
      subject: `Formation IA : ${lead.company}${lead.traineesCount ? ` (${lead.traineesCount} pers.)` : ''}${lead.opco ? ' · OPCO' : ''}`,
      html: notificationHtml,
    }),
    resend.emails.send({
      from: FROM_LEAD,
      to: lead.email,
      replyTo: CONTACT_EMAIL,
      subject: 'Votre demande de formation IA est bien reçue',
      html: confirmationHtml,
    }),
  ]);

  const notifOk = notif.status === 'fulfilled' && !notif.value.error;
  if (!notifOk) console.error('Resend notification error:', notif.status === 'fulfilled' ? notif.value.error : notif.reason);
  if (confirmation.status === 'rejected' || confirmation.value.error) {
    console.error('Resend confirmation error:', confirmation.status === 'fulfilled' ? confirmation.value.error : confirmation.reason);
  }

  // La demande n'est perdue que si ni la base ni la notification n'ont fonctionné
  if (dbFailed && !notifOk) {
    return json({ success: false, message: 'Une erreur est survenue' }, 500);
  }

  return json({ success: true }, 200);
};
