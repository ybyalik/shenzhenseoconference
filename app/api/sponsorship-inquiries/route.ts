import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

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
