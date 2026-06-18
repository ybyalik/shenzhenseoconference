import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/email';

const speakerInterestSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  linkedin: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
});

const RECIPIENTS = [
  'amanda@shenzhenseoconference.com',
  'mengying@shenzhenseoconference.com',
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = speakerInterestSchema.parse(body);

    console.log('Speaker interest received:', data);

    const emailHtml = `
      <h2>New Speaker Interest (Call for Speakers 2027)</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>LinkedIn:</strong> ${data.linkedin ? `<a href="${data.linkedin}">${data.linkedin}</a>` : 'Not provided'}</p>
    `;

    await sendEmail({
      to: RECIPIENTS,
      subject: 'New Speaker Interest – Call for Speakers 2027',
      html: emailHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Speaker interest received successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    console.error('Speaker interest error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
