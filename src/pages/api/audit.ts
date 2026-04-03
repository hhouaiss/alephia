import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { supabase } from '../../lib/supabase';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Validate required fields (nouveau formulaire simplifié)
    if (!data.firstName || !data.email) {
      return new Response(
        JSON.stringify({ success: false, message: 'Prénom et email requis' }),
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ success: false, message: 'Email invalide' }),
        { status: 400 }
      );
    }

    // Save to Supabase (nouvelle table v2)
    const { error: supabaseError } = await supabase
      .from('audit_submissions_v2')
      .insert([{
        first_name:   data.firstName,
        email:        data.email,
        besoin:       data.besoin || null,
        utm_source:   data.utm_source   || null,
        utm_medium:   data.utm_medium   || null,
        utm_campaign: data.utm_campaign || null,
        utm_content:  data.utm_content  || null,
        status:       'pending',
        created_at:   new Date().toISOString(),
      }]);

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      // On continue quand même pour envoyer les emails
    }

    // Email de confirmation au lead
    const confirmationEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; padding: 32px 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .highlight { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #6366f1; }
            .footer { text-align: center; margin-top: 30px; color: #9ca3af; font-size: 13px; }
            .button { display: inline-block; padding: 14px 32px; background: #6366f1; color: white; text-decoration: none; border-radius: 8px; margin: 20px 0; font-weight: bold; }
            .check { color: #10b981; margin-right: 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0 0 8px 0; font-size: 24px;">Votre audit IA est en route !</h1>
              <p style="margin: 0; opacity: 0.8; font-size: 15px;">Réponse personnalisée sous 48h</p>
            </div>
            <div class="content">
              <p>Bonjour ${data.firstName},</p>

              <p>Merci pour votre demande. J'analyse votre situation et vous enverrai un audit personnalisé sous 48h.</p>

              ${data.besoin ? `
              <div class="highlight">
                <p style="margin: 0;"><strong>Votre besoin :</strong><br>${data.besoin}</p>
              </div>
              ` : ''}

              <p><strong>Ce que contiendra votre audit :</strong></p>
              <p><span class="check">✓</span> Les 3 tâches à automatiser en priorité</p>
              <p><span class="check">✓</span> Les outils recommandés (agents IA, n8n, Make...)</p>
              <p><span class="check">✓</span> Une estimation du temps gagné par semaine</p>
              <p><span class="check">✓</span> Un plan d'action concret pour démarrer</p>

              <p style="text-align: center;">
                <a href="https://calendly.com/meet-alefia/30min" class="button">Réserver un créneau de 15 min</a>
              </p>

              <p style="color: #6b7280; font-size: 14px; text-align: center;">Sans engagement</p>

              <p>A très bientôt,<br><strong>Hassan</strong><br>Fondateur, Alefia</p>

              <div class="footer">
                <p>Alefia — Automatisation IA pour PME, TPE et indépendants<br>
                <a href="mailto:hello@alefia.co" style="color: #6366f1;">hello@alefia.co</a> — <a href="https://alefia.co" style="color: #6366f1;">alefia.co</a></p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email de notification interne pour Hassan
    const notificationEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1f2937; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .section { background: #f9fafb; padding: 20px; margin: 10px 0; border-left: 3px solid #6366f1; border-radius: 0 6px 6px 0; }
            .label { font-weight: bold; color: #6b7280; }
            .urgent { background: #fef3c7; border: 1px solid #fcd34d; padding: 12px 16px; border-radius: 6px; margin: 16px 0; }
            .utm { background: #f0fdf4; border: 1px solid #86efac; padding: 12px 16px; border-radius: 6px; margin: 16px 0; font-size: 13px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0 0 6px 0;">Nouvelle demande d'audit IA</h2>
              <p style="margin: 0; opacity: 0.8; font-size: 14px;">${new Date().toLocaleString('fr-FR')}</p>
            </div>

            <div class="urgent">
              <strong>Action requise :</strong> Répondre sous 48h à <a href="mailto:${data.email}">${data.email}</a>
            </div>

            <div class="section">
              <p class="label">Contact</p>
              <p style="margin: 4px 0; font-size: 18px;"><strong>${data.firstName}</strong></p>
              <p style="margin: 4px 0;"><a href="mailto:${data.email}">${data.email}</a></p>
            </div>

            ${data.besoin ? `
            <div class="section">
              <p class="label">Besoin exprimé</p>
              <p style="margin: 4px 0;">${data.besoin}</p>
            </div>
            ` : `
            <div class="section">
              <p class="label">Besoin exprimé</p>
              <p style="margin: 4px 0; color: #9ca3af;"><em>Non renseigné — à découvrir en appel</em></p>
            </div>
            `}

            ${(data.utm_source || data.utm_campaign) ? `
            <div class="utm">
              <p style="margin: 0 0 6px 0;"><strong>Source Google Ads</strong></p>
              ${data.utm_source ? `<p style="margin: 2px 0;">Source : ${data.utm_source}</p>` : ''}
              ${data.utm_medium ? `<p style="margin: 2px 0;">Medium : ${data.utm_medium}</p>` : ''}
              ${data.utm_campaign ? `<p style="margin: 2px 0;">Campagne : ${data.utm_campaign}</p>` : ''}
              ${data.utm_content ? `<p style="margin: 2px 0;">Contenu : ${data.utm_content}</p>` : ''}
            </div>
            ` : ''}
          </div>
        </body>
      </html>
    `;

    try {
      await Promise.all([
        resend.emails.send({
          from: 'Hassan de Alefia <onboarding@resend.dev>',
          to: data.email,
          subject: 'Votre audit IA est en préparation — Alefia',
          html: confirmationEmailHtml,
        }),
        resend.emails.send({
          from: 'Alefia Notifications <onboarding@resend.dev>',
          to: 'hello@alefia.co',
          subject: `Nouvelle demande audit — ${data.firstName} (${data.email})`,
          html: notificationEmailHtml,
          replyTo: data.email,
        })
      ]);
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // On continue — le lead est déjà sauvé en base
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Audit soumis avec succès' }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing audit submission:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Une erreur est survenue' }),
      { status: 500 }
    );
  }
}
