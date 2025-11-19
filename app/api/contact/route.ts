import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
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
