import type { NextRequest } from "next/server";
import { siteConfig } from "@/lib/site-config";
import { updateSession } from "@/lib/supabase/middleware";

const productionHost = new URL(siteConfig.url).hostname;

/**
 * Vercel gives every deploy its own *.vercel.app URL in addition to the
 * production domain — including preview deploys from open PRs. Those
 * URLs serve the exact same pages/canonical tags as production, so if
 * Google finds one before DNS is pointed at yadavhomeoclinic.com, it can
 * index it as a separate, confusing entry. This blocks indexing on any
 * host other than the real production domain, with no Vercel dashboard
 * configuration required.
 *
 * Also refreshes the Supabase Auth session and gates /admin/* behind
 * login (see lib/supabase/middleware.ts) — the admin panel for the
 * videos/settings/gallery_photos tables added in this session.
 */
export async function middleware(request: NextRequest) {
  const response = await updateSession(request);

  if (request.nextUrl.hostname !== productionHost || request.nextUrl.pathname.startsWith("/admin")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
