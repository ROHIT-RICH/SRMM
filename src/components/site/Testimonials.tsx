import { motion } from "framer-motion";
import { SectionHeader } from "./Products";

const quotes = [
  {
    q: "SRM rebuilt our HR stack from scratch in eight weeks. Payroll that used to take three days now runs in twenty minutes.",
    a: "Director of Operations",
    c: "Logistics group · India",
  },
  {
    q: "We replaced four disconnected tools with one ERP. Inventory accuracy went from 'guessing' to 100%.",
    a: "Owner",
    c: "Auto dealership · UAE",
  },
  {
    q: "The mobile app SRM built drives 60% of our reorders. It just works — and the team actually answers the phone.",
    a: "Head of Sales",
    c: "B2B distributor · UK",
  },
  {
    q: "They behave like an internal team. Weekly demos, predictable milestones, zero drama.",
    a: "CTO",
    c: "SaaS startup · US",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Operators who've shipped with us."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {quotes.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-strong rounded-2xl p-7"
            >
              <div className="text-2xl leading-none text-[#00E5FF]">“</div>
              <blockquote className="mt-2 text-base leading-relaxed text-white/90">
                {t.q}
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-white">{t.a}</span>
                <span className="text-muted-foreground"> · {t.c}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
