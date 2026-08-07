import { NextResponse } from "next/server";
import { getSupabaseServiceClient } from "@/lib/supabase/server";
import type { ContactSubmission } from "@/lib/types";

const VALID_CONSULTATION_TYPES: ContactSubmission["consultationType"][] = [
  "In-Clinic — Jaipur",
  "Online — India",
  "Online — International",
];

export async function POST(request: Request) {
  let body: Partial<ContactSubmission>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = body.fullName?.trim();
  const phone = body.phone?.trim();
  const cityCountry = body.cityCountry?.trim();
  const condition = body.condition?.trim();
  const consultationType = body.consultationType;

  if (!fullName || !phone || !cityCountry || !condition) {
    return NextResponse.json(
      { error: "Name, phone, city/country, and condition are required." },
      { status: 400 }
    );
  }

  if (
    !consultationType ||
    !VALID_CONSULTATION_TYPES.includes(consultationType as ContactSubmission["consultationType"])
  ) {
    return NextResponse.json(
      { error: "Please select a valid consultation type." },
      { status: 400 }
    );
  }

  const supabase = getSupabaseServiceClient();
  if (!supabase) {
    console.error(
      "Contact form submitted but Supabase is not configured (missing SUPABASE_SERVICE_ROLE_KEY)."
    );
    return NextResponse.json(
      { error: "We couldn't save your message right now. Please WhatsApp us instead." },
      { status: 503 }
    );
  }

  const { error } = await supabase.from("contact_submissions").insert({
    full_name: fullName,
    phone,
    email: body.email ?? null,
    city_country: cityCountry,
    consultation_type: consultationType,
    condition,
    heard_from: body.heardFrom ?? null,
    message: body.message ?? null,
  });

  if (error) {
    console.error("Failed to save contact submission:", error.message);
    return NextResponse.json(
      { error: "We couldn't save your message right now. Please WhatsApp us instead." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
