import { Resend } from 'resend';

// Lazy initialization to avoid build-time errors
function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  role?: string;
  interest: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const resend = getResendClient();
  if (!resend) {
    throw new Error('Resend API key not configured');
  }

  const contactEmail = process.env.CONTACT_EMAIL || 'info@zimax.net';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@zimax.net';

  const interestLabels: Record<string, string> = {
    'secai-radar': 'SecAI Radar',
    'ctxeco': 'ctxeco',
    'partnerships': 'Partnerships',
    'press': 'Press',
    'oss': 'Open Source',
    'other': 'Other',
  };

  const interestLabel = interestLabels[data.interest] || data.interest;

  try {
    await resend.emails.send({
      from: `Zimax Networks Contact Form <${fromEmail}>`,
      to: [contactEmail],
      replyTo: data.email,
      subject: `Contact Form: ${interestLabel} - ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        ${data.organization ? `<p><strong>Organization:</strong> ${data.organization}</p>` : ''}
        ${data.role ? `<p><strong>Role:</strong> ${data.role}</p>` : ''}
        <p><strong>Interest:</strong> ${interestLabel}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted at ${new Date().toISOString()}</small></p>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.organization ? `Organization: ${data.organization}` : ''}
${data.role ? `Role: ${data.role}` : ''}
Interest: ${interestLabel}

Message:
${data.message}

Submitted at ${new Date().toISOString()}
      `.trim(),
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email notification');
  }
}
