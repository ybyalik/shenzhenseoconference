import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/email';

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  requestInvitationLetter: z.boolean(),
  nationality: z.string().optional(),
  passportNo: z.string().optional(),
  passportIssuingOffice: z.string().optional(),
  dateOfIssue: z.string().optional(),
  passportExpiration: z.string().optional(),
  jobTitle: z.string().optional(),
  durationOfStay: z.string().optional(),
  additionalMessage: z.string().optional(),
}).refine((data) => {
  if (data.requestInvitationLetter) {
    return (
      data.nationality &&
      data.passportNo &&
      data.passportIssuingOffice &&
      data.dateOfIssue &&
      data.passportExpiration &&
      data.jobTitle &&
      data.durationOfStay
    );
  }
  return true;
}, {
  message: "All fields are required when requesting a business invitation letter",
  path: ["requestInvitationLetter"],
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    console.log('Contact form received:', validatedData);

    const emailSubject = validatedData.requestInvitationLetter
      ? 'New Business Invitation Letter Request'
      : 'New Contact Form Submission';

    let emailHtml = `
      <h2>${emailSubject}</h2>
      <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
    `;

    if (validatedData.requestInvitationLetter) {
      emailHtml += `
        <h3>Passport Information</h3>
        <p><strong>Nationality:</strong> ${validatedData.nationality}</p>
        <p><strong>Passport No.:</strong> ${validatedData.passportNo}</p>
        <p><strong>Issuing Office:</strong> ${validatedData.passportIssuingOffice}</p>
        <p><strong>Date of Issue:</strong> ${validatedData.dateOfIssue}</p>
        <p><strong>Expiration Date:</strong> ${validatedData.passportExpiration}</p>
        <p><strong>Job Title:</strong> ${validatedData.jobTitle}</p>
        <p><strong>Duration of Stay:</strong> ${validatedData.durationOfStay}</p>
      `;
    }

    if (validatedData.additionalMessage) {
      emailHtml += `
        <h3>Additional Message</h3>
        <p>${validatedData.additionalMessage}</p>
      `;
    }

    await sendEmail({
      to: 'jp@shenzhenseoconference.com',
      subject: emailSubject,
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      message: 'Contact form received successfully',
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

    console.error('Contact form error:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
    }, { status: 500 });
  }
}
