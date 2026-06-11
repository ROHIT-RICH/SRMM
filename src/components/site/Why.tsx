import { motion } from "framer-motion";
import {
  Target,
  Layers,
  Lock,
  Cpu,
  LifeBuoy,
  Handshake,
} from "lucide-react";
import { SectionHeader } from "./Products";

const items = [
  { icon: Target, t: "Business-focused", d: "Every feature ties back to revenue, cost or time saved." },
  { icon: Layers, t: "Scalable architecture", d: "Multi-tenant, modular, ready for 10× growth." },
  { icon: Lock, t: "Enterprise security", d: "Role-based access, audit trails, encrypted at rest." },
  { icon: Cpu, t: "Modern technology", d: "MERN, React Native, cloud-native by default." },
  { icon: LifeBuoy, t: "Reliable support", d: "SLAs, on-call rotation, real humans answering." },
  { icon: Handshake, t: "Long-term partnership", d: "We stay after launch. Roadmaps, not handoffs." },
];

export function Why() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Why SRM"
          title="Built for businesses that need software to actually work."
          subtitle="Six reasons enterprise teams keep choosing SRM over agencies and offshore vendors."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 transition-colors hover:border-white/20"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#2563ff]/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#00E5FF]">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{it.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
