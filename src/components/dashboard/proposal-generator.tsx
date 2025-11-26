"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ProposalGenerator() {
  const [lead, setLead] = useState("Nova Studio");
  const [scope, setScope] = useState("Brand refresh and new landing page");
  const [tone, setTone] = useState("friendly");
  const [result, setResult] = useState("Draft a proposal to see output.");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    setResult("Generating proposal...");
    const response = await fetch("/api/ai/generate-proposal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lead, scope, tone }),
    });
    const data = await response.json();
    setResult(data.proposalHtml ?? data.error ?? "Generation failed");
    setLoading(false);
  }

  return (
    <div className="space-y-4 text-sm text-white/80">
      <label className="block">
        <span className="text-xs text-white/60">Lead</span>
        <input
          className="mt-1 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white"
          value={lead}
          onChange={(e) => setLead(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="text-xs text-white/60">Scope</span>
        <textarea
          className="mt-1 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white"
          value={scope}
          rows={3}
          onChange={(e) => setScope(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="text-xs text-white/60">Tone</span>
        <select
          className="mt-1 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option value="friendly">Friendly</option>
          <option value="formal">Formal</option>
          <option value="playful">Playful</option>
        </select>
      </label>
      <Button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate proposal"}
      </Button>
      <div className="rounded-2xl border border-white/10 bg-black/20 p-4" dangerouslySetInnerHTML={{ __html: result }} />
    </div>
  );
}
