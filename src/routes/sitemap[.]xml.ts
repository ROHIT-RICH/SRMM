import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://srminnovationshub.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const pages = [
          "/",
          "/about",
          "/contact",
          "/case-studies",
          "/crm",
          "/hrms",
          "/saas-development",
          "/web-development",
          "/mobile-app-development",
          "/custom-software",
          "/business-automation",
          "/privacy-policy",
          "/terms-and-conditions",
          "/refund-policy",
          "/cookie-policy",
          "/security-policy",
          "/founders",
        ];

        const urls = pages
          .map(
            (page) => `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "/" ? "1.0" : "0.8"}</priority>
  </url>`
          )
          .join("");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          status: 200,
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "no-cache, no-store, must-revalidate",
          },
        });
      },
    },
  },
});
