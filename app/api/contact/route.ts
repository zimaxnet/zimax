import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactEmail } from '@/lib/email';
import { checkRateLimit } from '@/lib/rate-limit';

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  organization: z.string().max(200).optional(),
  role: z.string().max(100).optional(),
  interest: z.enum(['secai-radar', 'ctxeco', 'partnerships', 'press', 'oss', 'other']),
  message: z.string().min(10).max(5000),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Consent is required',
  }),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const rateLimit = checkRateLimit(ip);
    
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          resetTime: rateLimit.resetTime,
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Validate with Zod
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Invalid form data',
          details: validationResult.error.issues,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Send email if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      try {
        await sendContactEmail(data);
      } catch (emailError) {
        // Log error but don't fail the request
        // In production, you might want to queue this for retry
        console.error('Email sending failed:', emailError);
        // Still log to console for now
        console.log('Contact form submission (email failed):', {
          name: data.name,
          email: data.email,
          organization: data.organization,
          role: data.role,
          interest: data.interest,
          message: data.message,
          timestamp: new Date().toISOString(),
        });
      }
    } else {
      // Fallback: just log if email service not configured
      console.log('Contact form submission (no email service configured):', {
        name: data.name,
        email: data.email,
        organization: data.organization,
        role: data.role,
        interest: data.interest,
        message: data.message,
        timestamp: new Date().toISOString(),
      });
    }

    // TODO: Store in database if DATABASE_URL is configured
    // if (process.env.DATABASE_URL) {
    //   await storeSubmission(data);
    // }

    return NextResponse.json(
      { message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
