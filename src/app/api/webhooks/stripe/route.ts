import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  // In production validate signature w/ Stripe SDK.
  console.log("Stripe webhook received", payload.substring(0, 120));

  return NextResponse.json({ received: true });
}
