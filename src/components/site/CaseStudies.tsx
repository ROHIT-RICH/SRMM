import { motion } from "framer-motion";
import { SectionHeader } from "./Products";
import hrms from "@/assets/product-hrms.jpg";
import crm from "@/assets/product-crm.jpg";
import erp from "@/assets/product-erp.jpg";
import wholesale from "@/assets/product-wholesale.jpg";

const cases = [
  {
    title: "Multi-Tenant HRMS",
    industry: "Enterprise · 12 branches",
    image: hrms,
    metrics: [
      { v: "73%", l: "Less HR admin time" },
      { v: "4×", l: "Faster payroll runs" },
    ],
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "WhatsApp CRM",
    industry: "B2C sales · 80 agents",
    image: crm,
    metrics: [
      { v: "2.4×", l: "Lead response rate" },
      { v: "31%", l: "Higher conversion" },
    ],
    stack: ["React", "Node.js", "WhatsApp API"],
  },
  {
    title: "AutoDealer ERP",
    industry: "Automotive dealership",
    image: erp,
    metrics: [
      { v: "100%", l: "Inventory accuracy" },
      { v: "5h", l: "Saved per day" },
    ],
    stack: ["React", "Express", "MySQL"],
  },
  {
    title: "Wholesale Commerce App",
    industry: "B2B distribution",
    image: wholesale,
    metrics: [
      { v: "+62%", l: "Reorder rate" },
      { v: "10k+", l: "Monthly orders" },
    ],
    stack: ["React Native", "Node.js", "MongoDB"],
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real systems. Real numbers."
          subtitle="A snapshot of platforms now operating in production across multiple regions."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1c]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={c.image}
                  alt={`${c.title} screenshot`}
                  loading="lazy"
                  width={1920}
                  height={1080}
                  className="block w-full transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[#00E5FF]">
                  {c.industry}
                </div>
                <h3 className="mt-1.5 text-xl font-semibold text-white">
                  {c.title}
                </h3>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {c.metrics.map((m) => (
                    <div key={m.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-2xl font-extrabold text-white">
                        {m.v}
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {m.l}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-white/75"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
