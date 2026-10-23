/**
 * Minimal server-only Supabase client using the REST API (no extra packages).
 * Uses the service role key, so it must only ever run on the server.
 */
const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseConfigured = Boolean(url && key);

export async function supabaseInsert(table: string, row: Record<string, unknown>, opts: { onConflict?: string } = {}) {
  if (!url || !key) throw new Error("Supabase is not configured");
  const qs = opts.onConflict ? `?on_conflict=${encodeURIComponent(opts.onConflict)}` : "";
  const res = await fetch(`${url}/rest/v1/${table}${qs}`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: opts.onConflict ? "return=minimal,resolution=ignore-duplicates" : "return=minimal",
    },
    body: JSON.stringify(row),
    cache: "no-store",
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Supabase insert into ${table} failed (${res.status}): ${detail.slice(0, 300)}`);
  }
}
