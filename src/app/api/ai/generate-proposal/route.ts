import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { generateProposalCopy } from "@/lib/gemini";
import { getSupabaseClient } from "@/lib/supabase";

const schema = z.object({
  lead: z.string().min(2),
  scope: z.string().min(4),
  tone: z.string().default("friendly"),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { lead, scope, tone } = parsed.data;

  try {
    const proposalHtml = await generateProposalCopy({ lead, scope, tone });

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { error: supabaseError } = await supabase.from("proposals").insert({
          lead_name: lead,
          content_html: proposalHtml,
          tone,
        });
        if (supabaseError) {
          console.warn("Supabase insert skipped", supabaseError.message);
        }
      } catch (err) {
        console.warn("Supabase insert skipped", (err as Error).message);
      }
    }

    return NextResponse.json({ proposalHtml });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to generate proposal" }, { status: 500 });
  }
}
