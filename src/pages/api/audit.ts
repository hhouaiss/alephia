import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { supabase } from '../../lib/supabase';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Validate required fields
    const requiredFields = ['companyName', 'companySize', 'sector', 'region', 'techMaturity', 'firstName', 'lastName', 'email', 'mainObjective', 'aiExperience', 'deploymentTimeline'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return new Response(
          JSON.stringify({
            success: false,
            message: `Le champ ${field} est requis`
          }),
          { status: 400 }
        );
      }
    }

    // Transform form data to match Supabase column names (snake_case)
    const formattedData = {
      company_name: data.companyName,
      company_size: data.companySize,
      sector: data.sector,
      region: data.region,
      tech_maturity: data.techMaturity,
      website: data.website || null,

      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,

      main_objective: data.mainObjective,
      ai_experience: data.aiExperience,
      deployment_timeline: data.deploymentTimeline,
      concerns: Array.isArray(data.concerns) ? data.concerns : [],

      created_at: new Date().toISOString(),
      status: 'pending'
    };

    // Save to Supabase
    const { error: supabaseError } = await supabase
      .from('audit_submissions')
      .insert([formattedData]);

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      // Continue même en cas d'erreur Supabase pour envoyer l'email
    }

    // No configuration needed - Resend handles everything!

    // Email de confirmation au lead
    const confirmationEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .highlight { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
            .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Merci pour votre demande d'audit IA !</h1>
            </div>
            <div class="content">
              <p>Bonjour ${data.firstName},</p>

              <p>Nous avons bien reçu votre demande d'audit IA personnalisé pour <strong>${data.companyName}</strong>.</p>

              <div class="highlight">
                <h3>📋 Récapitulatif de votre demande :</h3>
                <ul style="list-style: none; padding-left: 0;">
                  <li>🏢 <strong>Entreprise :</strong> ${data.companyName}</li>
                  <li>👥 <strong>Taille :</strong> ${data.companySize} employés</li>
                  <li>🏭 <strong>Secteur :</strong> ${data.sector}</li>
                  <li>📍 <strong>Région :</strong> ${data.region}</li>
                  <li>🎯 <strong>Objectif principal :</strong> ${data.mainObjective}</li>
                  <li>⏰ <strong>Timeline :</strong> ${data.deploymentTimeline}</li>
                </ul>
              </div>

              <p><strong>Prochaines étapes :</strong></p>
              <ol>
                <li>Notre équipe va analyser vos besoins dans les <strong>24-48h</strong></li>
                <li>Vous recevrez votre audit personnalisé par email</li>
                <li>Nous vous proposerons un rendez-vous téléphonique pour discuter des recommandations</li>
              </ol>

              <p style="text-align: center;">
                <a href="https://alefia.co" class="button">Découvrir alefia</a>
              </p>

              <p>En attendant, n'hésitez pas à nous contacter si vous avez des questions.</p>

              <p>À très bientôt !<br>
              <strong>L'équipe alefia</strong></p>

              <div class="footer">
                <p>alefia - Votre partenaire IA<br>
                <a href="mailto:hello@alefia.co">hello@alefia.co</a></p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email de notification interne
    const notificationEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { background: #1f2937; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .section { background: #f9fafb; padding: 20px; margin: 10px 0; border-left: 3px solid #667eea; }
            .label { font-weight: bold; color: #4b5563; display: inline-block; width: 200px; }
            .value { color: #1f2937; }
            .urgent { background: #fef3c7; border-left-color: #f59e0b; padding: 15px; border-radius: 6px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🎯 Nouvelle demande d'audit IA</h2>
              <p style="margin: 0; opacity: 0.9;">Reçue le ${new Date().toLocaleString('fr-FR')}</p>
            </div>

            <div class="urgent">
              <strong>⚡ Action requise :</strong> Analyser et répondre dans les 24-48h
            </div>

            <div class="section">
              <h3>👤 Informations du contact</h3>
              <p><span class="label">Nom complet :</span> <span class="value">${data.firstName} ${data.lastName}</span></p>
              <p><span class="label">Email :</span> <span class="value"><a href="mailto:${data.email}">${data.email}</a></span></p>
            </div>

            <div class="section">
              <h3>🏢 Informations entreprise</h3>
              <p><span class="label">Entreprise :</span> <span class="value">${data.companyName}</span></p>
              <p><span class="label">Taille :</span> <span class="value">${data.companySize} employés</span></p>
              <p><span class="label">Secteur :</span> <span class="value">${data.sector}</span></p>
              <p><span class="label">Région :</span> <span class="value">${data.region}</span></p>
              <p><span class="label">Maturité tech :</span> <span class="value">${data.techMaturity}</span></p>
              ${data.website ? `<p><span class="label">Site web :</span> <span class="value"><a href="${data.website}" target="_blank">${data.website}</a></span></p>` : ''}
            </div>

            <div class="section">
              <h3>🎯 Besoins IA</h3>
              <p><span class="label">Objectif principal :</span> <span class="value">${data.mainObjective}</span></p>
              <p><span class="label">Expérience IA :</span> <span class="value">${data.aiExperience}</span></p>
              <p><span class="label">Timeline souhaitée :</span> <span class="value">${data.deploymentTimeline}</span></p>
              ${data.concerns && data.concerns.length > 0 ? `
                <p><span class="label">Préoccupations :</span></p>
                <ul>
                  ${data.concerns.map((concern: string) => `<li>${concern}</li>`).join('')}
                </ul>
              ` : ''}
            </div>

            <div style="text-align: center; margin-top: 30px; padding: 20px; background: #e5e7eb; border-radius: 8px;">
              <p style="margin: 0;"><strong>📊 Préparer l'audit personnalisé pour ${data.companyName}</strong></p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send emails using Resend (much simpler!)
    console.log('📧 Sending emails via Resend...');

    try {
      const [confirmationResult, notificationResult] = await Promise.all([
        // Confirmation email to the lead
        resend.emails.send({
          from: 'alefia <onboarding@resend.dev>',
          to: data.email,
          subject: '✅ Votre demande d\'audit IA a été reçue - alefia',
          html: confirmationEmailHtml,
        }),
        // Internal notification email
        resend.emails.send({
          from: 'alefia Notifications <onboarding@resend.dev>',
          to: 'alephia.hello@gmail.com', // Using verified email for now
          subject: `🎯 Nouvelle demande d'audit IA - ${data.companyName}`,
          html: notificationEmailHtml,
          replyTo: data.email,
        })
      ]);

      console.log('✅ Confirmation email sent:', confirmationResult.data?.id || confirmationResult);
      console.log('✅ Notification email sent:', notificationResult.data?.id || notificationResult);
    } catch (emailError) {
      console.error('❌ Email sending error:', emailError);
      // Continue anyway - data is already saved
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Audit soumis avec succès'
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing audit submission:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Une erreur est survenue lors du traitement de votre demande'
      }),
      { status: 500 }
    );
  }
}
