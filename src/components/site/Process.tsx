import { motion } from "framer-motion";
import { SectionHeader } from "./Products";

const steps = [
  { n: "01", t: "Discovery", d: "Map operations, KPIs and the real bottleneck." },
  { n: "02", t: "Planning", d: "Scope, milestones, budget — written, signed, predictable." },
  { n: "03", t: "Design", d: "Product flows and UI built around the user's job." },
  { n: "04", t: "Development", d: "Sprints with weekly demos, no surprises at the end." },
  { n: "05", t: "Testing", d: "Manual + automated. We break it before users do." },
  { n: "06", t: "Deployment", d: "Cloud rollout, observability, rollback strategy." },
  { n: "07", t: "Support", d: "SLAs, roadmap and a long-term technical partner." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Process"
          title="A delivery process built for predictability."
          subtitle="Seven stages, weekly demos, fixed milestones. Built for clients who need software to ship, not slip."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563ff]/60 via-white/10 to-transparent lg:left-1/2" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-start gap-6 lg:items-center ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 -translate-x-1/2 lg:left-1/2">
                  <div className="h-3 w-3 rounded-full bg-gradient-accent shadow-[0_0_20px_rgba(0,229,255,0.7)]" />
                </div>
                <div className="ml-12 flex-1 lg:ml-0 lg:px-10">
                  <div className="glass-strong rounded-2xl p-6">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono text-[#00E5FF]">{s.n}</span>
                      <h3 className="text-xl font-semibold text-white">{s.t}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
