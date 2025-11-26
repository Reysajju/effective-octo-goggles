import { NextResponse } from "next/server";

const leads = [
  { id: "lead_1", name: "Nova Studio", status: "Proposal sent", value: 5400 },
  { id: "lead_2", name: "Hayes Legal", status: "Needs info", value: 3200 },
];

export async function GET() {
  return NextResponse.json({ data: leads });
}
