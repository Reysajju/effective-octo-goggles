interface ProposalInput {
  lead: string;
  scope: string;
  tone: string;
}

export async function generateProposalCopy({ lead, scope, tone }: ProposalInput) {
  const apiKey = process.env.GEMINI_API_KEY;
  const endpoint = process.env.GEMINI_API_URL || "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

  const prompt = `Create a ${tone} proposal for ${lead}. Scope: ${scope}. Include overview, deliverables, timeline, and CTA.`;

  if (!apiKey) {
    return `<p><strong>${lead}</strong></p><p>${scope}</p><ul><li>Deliverable 1</li><li>Deliverable 2</li></ul><p>Let's book a kickoff this week.</p>`;
  }

  const response = await fetch(`${endpoint}?key=${apiKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 800,
      },
    }),
  });

  if (!response.ok) {
    console.error("Gemini error", await response.text());
    throw new Error("Gemini generation failed");
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Proposal ready to send.";
  const html = text
    .split(/\n\n+/)
    .map((paragraph: string) => `<p>${paragraph}</p>`)
    .join("");
  return html;
}
