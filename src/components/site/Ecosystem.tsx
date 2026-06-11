import { motion } from "framer-motion";
import { Users, LineChart, Car, ShoppingBag, Boxes } from "lucide-react";
import { SectionHeader } from "./Products";

const nodes = [
  { key: "hrms", label: "SRM HRMS", sub: "People OS", icon: Users, angle: 0 },
  { key: "crm", label: "SRM CRM", sub: "Revenue OS", icon: LineChart, angle: 90 },
  { key: "erp", label: "AutoDealer ERP", sub: "Dealer OS", icon: Car, angle: 180 },
  { key: "wholesale", label: "Wholesale", sub: "Commerce OS", icon: ShoppingBag, angle: 270 },
];

export function Ecosystem() {
  const R = 210; // orbit radius

  return (
    <section id="ecosystem" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-edges opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563ff]/15 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="The Product Ecosystem"
          title={
            <>
              One <span className="font-serif italic text-gradient">connected </span> operating
              system for your business
            </>
          }
          subtitle="HRMS, CRM, ERP and Commerce — designed to share data, automate workflows and scale together."
        />

        {/* MOBILE LAYOUT */}
<div className="mt-12 flex flex-col gap-4 sm:hidden">
  {nodes.map((n, i) => {
    const Icon = n.icon;

    return (
      <motion.div
        key={n.key}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
      >
        <div className="relative overflow-hidden rounded-2xl liquid-glass p-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-accent text-[#050816]">
              <Icon className="h-5 w-5" />
            </div>

            <div>
              <div className="text-sm font-semibold text-white">
                {n.label}
              </div>

              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {n.sub}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  })}

  <div className="mt-4 flex flex-col items-center">
    <div className="relative grid h-24 w-24 place-items-center rounded-3xl liquid-glass">
      <div className="absolute inset-0 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" />
      <Boxes className="h-7 w-7 text-[#00E5FF]" />
    </div>

    <div className="mt-4 text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
      SRM Platform
    </div>
  </div>
</div>

{/* DESKTOP ORBIT */}
<div className="relative mx-auto mt-20 hidden h-[560px] w-full max-w-[560px] sm:block">
  {/* concentric rings */}
  <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
  <div className="absolute inset-10 rounded-full border border-white/[0.05]" />
  <div className="absolute inset-24 rounded-full border border-white/[0.04]" />

  {/* rotating dashed orbit */}
  <div className="absolute inset-4 rounded-full border border-dashed border-[#00E5FF]/20 animate-orbit" />

  {/* connection lines svg */}
  <svg
    viewBox="-280 -280 560 560"
    className="absolute inset-0 h-full w-full"
    aria-hidden
  >
    {nodes.map((n) => {
      const rad = (n.angle * Math.PI) / 180;
      const x = Math.cos(rad) * R;
      const y = Math.sin(rad) * R;

      return (
        <line
          key={n.key}
          x1="0"
          y1="0"
          x2={x}
          y2={y}
          stroke="url(#flowGrad)"
          strokeWidth="1.5"
          className="animate-flow"
        />
      );
    })}

    <defs>
      <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#2563FF" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  </svg>

  {/* center core */}
  <motion.div
    initial={{ scale: 0.85, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <div className="relative grid h-32 w-32 place-items-center rounded-3xl liquid-glass">
      <div className="absolute inset-0 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" />

      <Boxes className="h-8 w-8 text-[#00E5FF]" />

      <div className="absolute -bottom-9 whitespace-nowrap text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        SRM Platform
      </div>
    </div>
  </motion.div>

  {/* orbiting product nodes */}
  {nodes.map((n, i) => {
    const rad = (n.angle * Math.PI) / 180;
    const x = Math.cos(rad) * R;
    const y = Math.sin(rad) * R;
    const Icon = n.icon;

    return (
      <motion.div
        key={n.key}
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.15 + i * 0.1,
          duration: 0.6,
        }}
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2"
      >
        <div className="group relative">
          <div className="absolute -inset-3 rounded-2xl bg-[#2563ff]/30 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

          <div className="relative flex w-44 items-center gap-3 rounded-2xl liquid-glass p-3.5 transition-transform group-hover:-translate-y-0.5">
            <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-accent text-[#050816]">
              <Icon className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-white">
                {n.label}
              </div>

              <div className="truncate text-[11px] uppercase tracking-wider text-muted-foreground">
                {n.sub}
              </div>
            </div>

            <span className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-pulse-soft" />
          </div>
        </div>
      </motion.div>
    );
  })}
</div>

        

        <div className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Unified identity, shared data layer, single audit trail — switch on what you need,
          scale into the rest.
        </div>
      </div>
    </section>
  );
}
