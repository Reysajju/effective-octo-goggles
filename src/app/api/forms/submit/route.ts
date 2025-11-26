import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseClient } from "@/lib/supabase";

const schema = z.object({
  form: z.string().default("generic"),
  name: z.string().optional(),
  email: z.string().email().optional(),
  message: z.string().optional(),
  action: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";
  let payload: Record<string, string> = {};

  if (contentType.includes("application/json")) {
    payload = await request.json();
  } else {
    const formData = await request.formData();
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(parsed.error.flatten(), { status: 400 });
  }

  const supabase = getSupabaseClient();
  if (supabase) {
    await supabase
      .from("events")
      .insert({ type: parsed.data.form, payload_json: parsed.data })
      .catch((err: unknown) => console.warn("Events insert skipped", (err as Error).message));
  }

  return NextResponse.json({ ok: true, received: parsed.data });
}
