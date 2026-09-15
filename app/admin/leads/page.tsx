import { createAuthClient } from "@/lib/supabase/auth-server";
import { whatsappLinkTo } from "@/lib/site-config";
import { deleteContactSubmission, deleteAssessmentSubmission } from "./actions";

interface ContactRow {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
  city_country: string;
  consultation_type: string;
  condition: string;
  heard_from: string | null;
  message: string | null;
  created_at: string;
}

interface AssessmentRow {
  id: string;
  concern: string;
  duration: string;
  prior_treatment: string;
  impact: string;
  preference: string;
  name: string;
  phone: string;
  created_at: string;
}

type Lead =
  | { source: "contact"; createdAt: string; row: ContactRow }
  | { source: "assessment"; createdAt: string; row: AssessmentRow };

async function getLeads(): Promise<Lead[]> {
  const supabase = await createAuthClient();
  if (!supabase) return [];

  const [contactRes, assessmentRes] = await Promise.all([
    supabase
      .from("contact_submissions")
      .select("id, full_name, phone, email, city_country, consultation_type, condition, heard_from, message, created_at")
      .order("created_at", { ascending: false }),
    supabase
      .from("assessment_submissions")
      .select("id, concern, duration, prior_treatment, impact, preference, name, phone, created_at")
      .order("created_at", { ascending: false }),
  ]);

  const contactLeads: Lead[] = (contactRes.data ?? []).map((row) => ({
    source: "contact",
    createdAt: row.created_at,
    row,
  }));
  const assessmentLeads: Lead[] = (assessmentRes.data ?? []).map((row) => ({
    source: "assessment",
    createdAt: row.created_at,
    row,
  }));

  return [...contactLeads, ...assessmentLeads].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

// wa.me needs a bare country-code-prefixed number — patients type their
// phone every which way, so this strips formatting and assumes India
// (matches every other WhatsApp default on this site) for a bare 10-digit
// number, which is what almost every submission looks like in practice.
function whatsappHrefFor(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  const withCountryCode = digits.length === 10 ? `91${digits}` : digits;
  return whatsappLinkTo(withCountryCode, "Hello, this is Yadav Homeo Clinic — following up on your enquiry.");
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function AdminLeadsPage() {
  const leads = await getLeads();

  return (
    <div>
      <h1 className="font-serif text-2xl text-navy">Leads</h1>
      <p className="mt-1 text-sm text-text-mid">
        Everyone who submitted the Contact form or completed the Root Cause Assessment, newest
        first — including anyone who filled the assessment but never sent it on WhatsApp.
      </p>

      <div className="mt-8 space-y-4">
        {leads.length === 0 && <p className="text-sm text-text-mid">No leads yet.</p>}

        {leads.map((lead) => (
          <div
            key={`${lead.source}-${lead.row.id}`}
            className="rounded-xl border border-navy/10 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${
                    lead.source === "contact" ? "bg-navy/10 text-navy" : "bg-amber/20 text-amber-dark"
                  }`}
                >
                  {lead.source === "contact" ? "Contact Form" : "Root Cause Assessment"}
                </span>
                <h2 className="mt-1.5 font-serif text-lg text-navy">
                  {lead.source === "contact" ? lead.row.full_name : lead.row.name}
                </h2>
                <p className="text-xs text-text-light">{formatDate(lead.createdAt)}</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={whatsappHrefFor(lead.row.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm bg-amber px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-navy hover:opacity-90"
                >
                  WhatsApp {lead.row.phone}
                </a>
                <form
                  action={lead.source === "contact" ? deleteContactSubmission : deleteAssessmentSubmission}
                >
                  <input type="hidden" name="id" value={lead.row.id} />
                  <button
                    type="submit"
                    className="rounded-sm border border-red-300 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-red-600 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>

            {lead.source === "contact" ? (
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                <Field label="Condition" value={lead.row.condition} />
                <Field label="Consultation Type" value={lead.row.consultation_type} />
                <Field label="City / Country" value={lead.row.city_country} />
                {lead.row.email && <Field label="Email" value={lead.row.email} />}
                {lead.row.heard_from && <Field label="Heard From" value={lead.row.heard_from} />}
                {lead.row.message && (
                  <div className="sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-text-mid">Message</dt>
                    <dd className="mt-0.5 text-navy">{lead.row.message}</dd>
                  </div>
                )}
              </dl>
            ) : (
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                <Field label="Concern" value={lead.row.concern} />
                <Field label="Duration" value={lead.row.duration} />
                <Field label="Previous Treatment" value={lead.row.prior_treatment} />
                <Field label="Impact" value={lead.row.impact} />
                <Field label="Preference" value={lead.row.preference} />
              </dl>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-text-mid">{label}</dt>
      <dd className="mt-0.5 text-navy">{value}</dd>
    </div>
  );
}
