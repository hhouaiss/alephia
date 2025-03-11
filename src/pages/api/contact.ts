import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'company', 'subject', 'message', 'consent'];
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
    
    // Create email content
    const emailContent = `
      Nouveau message de contact:
      
      Nom: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Entreprise: ${data.company}
      Sujet: ${data.subject}
      
      Message:
      ${data.message}
      
      Consentement RGPD: ${data.consent ? 'Oui' : 'Non'}
    `;
    
    // Configure email transport
    // For production, you'll need to set up a real SMTP service
    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST || 'smtp.example.com',
      port: parseInt(import.meta.env.SMTP_PORT || '587'),
      secure: import.meta.env.SMTP_SECURE === 'true',
      auth: {
        user: import.meta.env.SMTP_USER || 'your-email@example.com',
        pass: import.meta.env.SMTP_PASS || 'your-password',
      },
    });
    
    // Send email
    await transporter.sendMail({
      from: import.meta.env.CONTACT_FROM || 'website@alefia.co',
      to: 'hello@alefia.co',
      subject: `Nouveau contact: ${data.subject}`,
      text: emailContent,
      replyTo: data.email,
    });
    
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message envoyé avec succès'
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Une erreur est survenue lors du traitement de votre demande'
      }),
      { status: 500 }
    );
  }
}