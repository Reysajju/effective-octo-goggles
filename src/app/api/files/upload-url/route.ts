import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  filename: z.string(),
  type: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(parsed.error.flatten(), { status: 400 });
  }

  const uploadUrl = `https://storage.clientflow.app/upload/${encodeURIComponent(parsed.data.filename)}?token=${randomUUID()}`;

  return NextResponse.json({ uploadUrl });
}
