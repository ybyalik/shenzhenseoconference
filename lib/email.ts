import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  console.log('Debug - hostname:', hostname);
  console.log('Debug - has token:', !!xReplitToken);

  if (!xReplitToken) {
    console.error('X_REPLIT_TOKEN not found, falling back to env vars');
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  try {
    const url = 'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend';
    console.log('Fetching connection from:', url);
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    });
    
    const data = await response.json();
    console.log('Connection response:', JSON.stringify(data, null, 2));
    
    connectionSettings = data.items?.[0];

    if (!connectionSettings || (!connectionSettings.settings?.api_key)) {
      console.error('Resend not connected or missing API key');
      throw new Error('Resend not connected');
    }
    
    return {
      apiKey: connectionSettings.settings.api_key, 
      fromEmail: connectionSettings.settings.from_email
    };
  } catch (error) {
    console.error('Error fetching connection:', error);
    throw error;
  }
}

async function getResendClient() {
  const { apiKey, fromEmail } = await getCredentials();
  return {
    client: new Resend(apiKey),
    fromEmail
  };
}

export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}) {
  try {
    const { client, fromEmail } = await getResendClient();
    
    const { data, error } = await client.emails.send({
      from: `Shenzhen SEO Conference <${fromEmail}>`,
      to: [to],
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
