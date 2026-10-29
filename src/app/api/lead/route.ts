import { NextResponse } from "next/server";

// Receives the buyer request and partner application forms and stores them in
// the Supabase `leads` table (see supabase/migrations). Without SUPABASE_URL and
// SUPABASE_SERVICE_ROLE_KEY it returns 503 and the form falls back to email.

const KINDS = new Set(["buyer_request", "partner_application"]);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD = 4000;

export async function POST(req: Request) {
  let body: { kind?: unknown; fields?: unknown; website?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden "website" field. Pretend it worked.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
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

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: "Form storage is not configured" }, { status: 503 });
  }

  const { name, email, phone, ...rest } = fields;
  const res = await fetch(`${url}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ kind, name, email, phone: phone || null, details: rest }),
  });

  if (!res.ok) {
    console.error("lead insert failed", res.status, await res.text());
    return NextResponse.json({ error: "Could not save" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
