import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/email';

const ticketSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  ticketType: z.enum(["standard", "deluxe", "vip"]),
  quantity: z.number().min(1).max(10),
});

const ticketTypeNames: Record<string, string> = {
  standard: 'Standard ($390)',
  deluxe: 'Deluxe ($585)',
  vip: 'VIP ($1170)',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = ticketSchema.parse(body);

    console.log('Ticket pre-order received:', validatedData);

    const ticketTypeName = ticketTypeNames[validatedData.ticketType] || validatedData.ticketType;
    const emailHtml = `
      <h2>New Ticket Pre-Order</h2>
      <p><strong>Name:</strong> ${validatedData.fullName}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Ticket Type:</strong> ${ticketTypeName}</p>
      <p><strong>Quantity:</strong> ${validatedData.quantity}</p>
    `;

    await sendEmail({
      to: 'jp@shenzhenseoconference.com',
      subject: 'New Ticket Pre-Order',
      html: emailHtml,
    });

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
