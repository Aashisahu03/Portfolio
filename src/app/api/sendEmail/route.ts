import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import emailjs from "emailjs-com";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { user_name, user_email, message } = body;

  try {
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        user_name,
        user_email,
        message,
      },
      process.env.EMAILJS_PUBLIC_KEY! // just the public key string
    );

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("EmailJS error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
