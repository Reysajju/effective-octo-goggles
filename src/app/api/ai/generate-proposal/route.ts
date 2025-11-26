// ./src/app/api/forms/submit/route.ts

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { generateProposalCopy } from "@/lib/gemini";
import { getSupabaseClient } from "@/lib/supabase";

// Define the validation schema for the request body
const schema = z.object({
  lead: z.string().min(2),
  scope: z.string().min(4),
  tone: z.string().default("friendly"),
  // Added a placeholder field 'form' to mimic the structure from the original error
  // which used parsed.data.form for the 'events' table type.
  form: z.string().default("proposal_request"), 
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    // Return 400 Bad Request if validation fails
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { lead, scope, tone } = parsed.data;
  const supabase = getSupabaseClient();
  
  // --- FIX APPLIED HERE: Event logging with correct 'await' structure ---
  // The original error targeted the 'events' table insert logic.
  if (supabase) {
    try {
      // Use the 'await' keyword to execute the Postgrest call and handle potential errors
      const { error: eventError } = await supabase
        .from("events")
        .insert({ type: parsed.data.form, payload_json: parsed.data });
        // We typically don't need .select() for a simple log/event insert
        
      if (eventError) {
        // Log a warning if the database reports an error for the event insert
        console.warn("Events insert failed (DB error)", eventError.message);
      }
    } catch (err: unknown) {
      // Log a warning if a network or execution error occurs before/during the request
      console.warn("Events insert skipped (Execution error)", (err as Error).message);
    }
  }
  // --- END FIX ---

  try {
    // 1. Generate the proposal copy (external service call)
    const proposalHtml = await generateProposalCopy({ lead, scope, tone });

    // 2. Insert the proposal into the 'proposals' table
    if (supabase) {
      try {
        const { error: supabaseError } = await supabase.from("proposals").insert({
          lead_name: lead,
          content_html: proposalHtml,
          tone,
        });
        
        if (supabaseError) {
          // Log a warning if the proposal insert fails, but continue to return the proposal
          console.warn("Proposal insert failed", supabaseError.message);
        }
      } catch (err: unknown) {
        // Log a warning if the proposal insert fails due to execution error
        console.warn("Proposal insert skipped", (err as Error).message);
      }
    }

    // 3. Return the generated proposal
    return NextResponse.json({ proposalHtml });
  } catch (error) {
    // Handle errors from generateProposalCopy (e.g., Gemini service failure)
    console.error("Error generating proposal:", error);
    return NextResponse.json({ error: "Unable to generate proposal" }, { status: 500 });
  }
}
