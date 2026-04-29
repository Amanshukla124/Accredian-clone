import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  interest: string;
  message?: string;
}

// In-memory store (resets on server restart — good for demo/dev)
const leads: (LeadData & { id: string; createdAt: string })[] = [];

const BLOCKED_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "rediffmail.com",
];

function isValidWorkEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;
  if (BLOCKED_DOMAINS.includes(domain)) return false;
  return /\S+@\S+\.\S+/.test(email);
}

function generateId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<LeadData>;

    // Validate required fields
    const { name, email, company, teamSize, interest, message } = body;

    if (!name || !email || !company || !teamSize) {
      return NextResponse.json(
        { success: false, error: "Required fields missing: name, email, company, teamSize" },
        { status: 400 }
      );
    }

    if (!isValidWorkEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid work email. Please use your company email address." },
        { status: 400 }
      );
    }

    const lead = {
      id: generateId(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      teamSize,
      interest: interest || "Not specified",
      message: message?.trim() || "",
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);

    console.log(`[Leads API] New lead captured: ${lead.id} — ${lead.name} <${lead.email}> from ${lead.company}`);

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully",
        id: lead.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Leads API] Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Handy for development — view all captured leads
  return NextResponse.json({ success: true, count: leads.length, leads });
}
