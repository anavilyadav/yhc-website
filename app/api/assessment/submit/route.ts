import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { AssessmentAnswers } from "@/lib/data/assessment";

export async function POST(request: Request) {
  let body: Partial<AssessmentAnswers>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const concern = body.concern?.trim();
  const duration = body.duration?.trim();
  const priorTreatment = body.priorTreatment?.trim();
  const impact = body.impact?.trim();
  const preference = body.preference?.trim();
  const name = body.name?.trim();
  const phone = body.phone?.trim();

  if (!concern || !duration || !priorTreatment || !impact || !preference || !name || !phone) {
    return NextResponse.json({ error: "All assessment answers are required." }, { status: 400 });
  }

  // Uses the anon client, not the service role — the "Anyone can submit
  // the root cause assessment" RLS insert policy on assessment_submissions
  // already permits this write publicly, same as contact_submissions.
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    console.error(
      "Assessment submitted but Supabase is not configured (missing NEXT_PUBLIC_SUPABASE_URL/ANON_KEY)."
    );
    return NextResponse.json({ error: "We couldn't save your assessment right now." }, { status: 503 });
  }

  const { error } = await supabase.from("assessment_submissions").insert({
    concern,
    duration,
    prior_treatment: priorTreatment,
    impact,
    preference,
    name,
    phone,
  });

  if (error) {
    console.error("Failed to save assessment submission:", error.message);
    return NextResponse.json({ error: "We couldn't save your assessment right now." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
