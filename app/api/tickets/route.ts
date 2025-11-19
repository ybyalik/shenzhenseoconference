import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const ticketSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  ticketType: z.enum(["standard", "deluxe", "vip"]),
  quantity: z.number().min(1).max(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = ticketSchema.parse(body);

    console.log('Ticket pre-order received:', validatedData);

    return NextResponse.json({
      success: true,
      message: 'Ticket pre-order received successfully',
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

    console.error('Ticket pre-order error:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
    }, { status: 500 });
  }
}
