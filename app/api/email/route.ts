import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const email = String(body?.email || "").trim();

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const provider = process.env.EMAIL_PROVIDER;
  const webhookUrl = process.env.EMAIL_WEBHOOK_URL;

  if (!provider || !webhookUrl) {
    return NextResponse.json({
      status: "pending",
      message:
        "Thanks for joining. We will confirm once the list is fully live.",
    });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: body?.source || "newsletter" }),
    });

    if (!response.ok) {
      throw new Error("Provider rejected the request.");
    }

    return NextResponse.json({
      status: "subscribed",
      message: "Thanks for joining. Look out for the next roundup.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to save your email.",
      },
      { status: 500 }
    );
  }
}
