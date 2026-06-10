import { Resend } from 'resend';

const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@shenzhenseoconference.com';

export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not set');
  }
  const resend = new Resend(apiKey);
  try {
    const { data, error } = await resend.emails.send({
      from: `Shenzhen SEO Conference <${fromEmail}>`,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ''),
    });

    if (error) {
      console.error('Error sending email:', error);
      throw error;
    }

    console.log('Email sent:', data?.id);
    return { success: true, messageId: data?.id };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
