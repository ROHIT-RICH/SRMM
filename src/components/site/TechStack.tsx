import { motion } from "framer-motion";
import { SectionHeader } from "./Products";

const groups = [
  { label: "Frontend", items: ["React", "TypeScript", "Tailwind", "Next.js"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT"] },
  { label: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"] },
  { label: "Mobile", items: ["React Native", "Expo", "Push", "OTA"] },
  { label: "Cloud", items: ["AWS", "Vercel", "Cloudflare", "Docker"] },
];

export function TechStack() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Technology"
          title="A modern, boring-when-it-needs-to-be stack."
          subtitle="MERN at the core, extended with the cloud and mobile tooling each project actually needs."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.06 }}
              className="glass rounded-2xl p-5"
            >
              <div className="text-[11px] uppercase tracking-widest text-[#00E5FF]">
                {g.label}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/85"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
