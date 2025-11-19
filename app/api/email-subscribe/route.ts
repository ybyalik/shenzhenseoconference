import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const emailSubscribeSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = emailSubscribeSchema.parse(body);

    console.log('Email subscription received:', validatedData);

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to updates',
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

    console.error('Email subscription error:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
    }, { status: 500 });
  }
}
