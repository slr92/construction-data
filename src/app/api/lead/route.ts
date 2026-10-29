import { NextResponse } from "next/server";
import { estimateValue, type Estimate } from "@/lib/estimate";
import { pruneAnswers, type Answers } from "@/lib/enquiry";

// Receives the site's forms and stores them in the Supabase `leads` table (see
// supabase/migrations). Without SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY it
// returns 503 and the form falls back to email.

const KINDS = new Set(["buyer_request", "partner_application", "estimate_enquiry"]);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD = 4000;
const MAX_ANSWER = 300;

function cleanAnswers(raw: unknown): Answers {
  if (typeof raw !== "object" || raw === null) return {};
  const out: Answers = {};
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    if (key.length > 64) continue;
    if (typeof value === "string") out[key] = value.slice(0, MAX_ANSWER);
    else if (Array.isArray(value))
      out[key] = value.filter((v): v is string => typeof v === "string").slice(0, 50).map((v) => v.slice(0, MAX_ANSWER));
  }
  return pruneAnswers(out);
}

export async function POST(req: Request) {
  let body: { kind?: unknown; fields?: unknown; answers?: unknown; website?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Pretend it worked.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true, estimate: null });
  }

  const kind = typeof body.kind === "string" ? body.kind : "";
  if (!KINDS.has(kind) || typeof body.fields !== "object" || body.fields === null) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const fields: Record<string, string> = {};
  for (const [key, value] of Object.entries(body.fields as Record<string, unknown>)) {
    if (typeof value === "string" && key.length <= 64) fields[key] = value.trim().slice(0, MAX_FIELD);
  }

  if (!fields.name || !fields.email || !EMAIL.test(fields.email)) {
    return NextResponse.json({ error: "Name and a valid email are required" }, { status: 400 });
  }

  const answers = kind === "estimate_enquiry" ? cleanAnswers(body.answers) : undefined;
  const estimate: Estimate | null = answers ? estimateValue(answers) : null;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: "Form storage is not configured" }, { status: 503 });
  }

  const { name, email, phone, ...rest } = fields;
  const details = answers ? { ...rest, answers, estimate } : rest;
  const res = await fetch(`${url}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ kind, name, email, phone: phone || null, details }),
  });

  if (!res.ok) {
    console.error("lead insert failed", res.status, await res.text());
    return NextResponse.json({ error: "Could not save" }, { status: 502 });
  }
  return NextResponse.json({ ok: true, estimate });
}
