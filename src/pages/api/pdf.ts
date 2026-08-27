import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ url, redirect }) => {
  const type = url.searchParams.get("type") === "design" ? "design" : "ats";
  return redirect(`/print/${type}`, 302);
};
