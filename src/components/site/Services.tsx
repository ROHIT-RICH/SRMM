import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Users,
  TrendingUp,
  Settings2,
  Workflow,
} from "lucide-react";
import { SectionHeader } from "./Products";

const services = [
  { icon: Code2, name: "Custom Software Development", desc: "Bespoke platforms engineered for your operating model." },
  { icon: Globe, name: "Web Development", desc: "High-performance React applications and marketing sites." },
  { icon: Smartphone, name: "Mobile App Development", desc: "React Native apps for iOS and Android, single codebase." },
  { icon: Cloud, name: "SaaS Development", desc: "Multi-tenant SaaS products, from MVP to scale." },
  { icon: Users, name: "HRMS Development", desc: "Attendance, payroll and people ops platforms." },
  { icon: TrendingUp, name: "CRM Development", desc: "Sales pipelines, customer 360, revenue dashboards." },
  { icon: Settings2, name: "ERP Solutions", desc: "Operations, inventory, finance and reporting." },
  { icon: Workflow, name: "Business Automation", desc: "Workflow engines that remove manual overhead." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Engineering teams plug in across the entire stack."
          subtitle="From discovery to long-term partnership — one team, accountable for outcomes."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative bg-[#070b1a] p-6 transition-colors hover:bg-[#0b1226]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#2563ff]/30 to-[#00e5ff]/10 text-[#00E5FF] transition-transform group-hover:scale-110">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-base font-semibold text-white">
                {s.name}
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
