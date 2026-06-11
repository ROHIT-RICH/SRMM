import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://srminnovationshub.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          { path: "/case-studies", changefreq: "weekly", priority: "0.8" },
          { path: "/crm", changefreq: "monthly", priority: "0.8" },
          { path: "/hrms", changefreq: "monthly", priority: "0.8" },
          { path: "/saas-development", changefreq: "monthly", priority: "0.8" },
          { path: "/web-development", changefreq: "monthly", priority: "0.8" },
          { path: "/mobile-app-development", changefreq: "monthly", priority: "0.8" },
          { path: "/custom-software", changefreq: "monthly", priority: "0.8" },
          { path: "/business-automation", changefreq: "monthly", priority: "0.8" },
        ];

        const urls = entries.map(
          (e) => `
  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        );

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});