import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/email';

const sponsorshipInquirySchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = sponsorshipInquirySchema.parse(body);

    console.log('Sponsorship inquiry received:', validatedData);

    const emailHtml = `
      <h2>New Sponsorship Inquiry</h2>
      <p><strong>Company Name:</strong> ${validatedData.companyName}</p>
      <p><strong>Contact Name:</strong> ${validatedData.contactName}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
      ${validatedData.message ? `<h3>Message</h3><p>${validatedData.message}</p>` : ''}
    `;

    await sendEmail({
      to: 'jp@shenzhenseoconference.com',
      subject: 'New Sponsorship Inquiry',
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      message: 'Sponsorship inquiry received successfully',
      data: validatedData,
    }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      }, { status: 400 });
    }

    console.error('Sponsorship inquiry error:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
    }, { status: 500 });
  }
}
