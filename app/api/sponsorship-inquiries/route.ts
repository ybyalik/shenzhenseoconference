import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/email';

// Inquiries are forwarded to these inboxes.
const INQUIRY_RECIPIENTS = [
  'rahile@shenzhenseoconference.com',
  'jp@shenzhenseoconference.com',
];

const sponsorshipInquirySchema = z.object({
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().email('Invalid email address'),
  // Optional fields (kept loose for backward compatibility with other forms).
  companyName: z.string().optional(),
  phone: z.string().optional(),
  tier: z.string().optional(),
  message: z.string().optional(),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = sponsorshipInquirySchema.parse(body);

    const emailHtml = `
      <h2>New Sponsorship Inquiry</h2>
      <p><strong>Contact Name:</strong> ${escapeHtml(data.contactName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      ${data.companyName ? `<p><strong>Company:</strong> ${escapeHtml(data.companyName)}</p>` : ''}
      ${data.tier ? `<p><strong>Target Tier:</strong> ${escapeHtml(data.tier)}</p>` : ''}
      ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ''}
      ${data.message ? `<h3>Message</h3><p>${escapeHtml(data.message)}</p>` : ''}
    `;

    // Best-effort delivery: a send failure is logged for admins but does not
    // surface to the visitor, who still sees a success confirmation.
    try {
      await sendEmail({
        to: INQUIRY_RECIPIENTS,
        subject: `New Sponsorship Inquiry — ${data.contactName}`,
        html: emailHtml,
      });
    } catch (emailError) {
      console.error('Sponsorship inquiry email failed to send:', emailError);
    }

    return NextResponse.json(
      { success: true, message: 'Sponsorship inquiry received successfully' },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation error', errors: error.errors },
        { status: 400 },
      );
    }

    console.error('Sponsorship inquiry error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 },
    );
  }
}
