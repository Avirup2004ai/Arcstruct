import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      company,
      phone,
      email,
      sector,
      service,
      location,
      area,
      timeline,
      message,
    } = data;

    // Validate required fields
    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: 'Missing required fields (Name, Phone, Email, or Service).' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const inquiryPayload = {
      id: `INQ-${Date.now()}`,
      timestamp,
      name,
      company: company || 'N/A',
      phone,
      email,
      sector,
      service,
      location: location || 'Eastern India',
      area: area || 'N/A',
      timeline: timeline || 'Immediate',
      message: message || 'N/A',
    };

    console.log('[ARCHSTRUCT INQUIRY RECEIVED]:', inquiryPayload);

    // Optional: If RESEND_API_KEY or SMTP is provided in .env, forward email
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Archstruct Inquiries <onboarding@resend.dev>',
            to: ['arcstractconsultant@gmail.com'],
            subject: `[New Inquiry] ${service} - ${name} (${location})`,
            html: `
              <h2>New Project Consultation Request</h2>
              <p><strong>Client Name:</strong> ${name}</p>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Sector:</strong> ${sector}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Location:</strong> ${location}</p>
              <p><strong>Approx Area:</strong> ${area}</p>
              <p><strong>Timeline:</strong> ${timeline}</p>
              <p><strong>Project Overview:</strong><br/>${message}</p>
              <hr/>
              <p><small>Logged at ${timestamp} via The Archstruct Consultant Website</small></p>
            `,
          }),
        });
      } catch (emailErr) {
        console.warn('Resend email dispatch error:', emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Consultation dossier recorded successfully.',
      inquiry: inquiryPayload,
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry submission.' },
      { status: 500 }
    );
  }
}
