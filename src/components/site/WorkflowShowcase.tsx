import { motion } from "framer-motion";
import { Users, LineChart, Car, ShoppingBag, Check } from "lucide-react";
import { SectionHeader } from "./Products";

type Step = { label: string; meta: string };
type Flow = {
  id: string;
  product: string;
  tag: string;
  icon: typeof Users;
  steps: Step[];
};

const flows: Flow[] = [
  {
    id: "hrms",
    product: "SRM HRMS",
    tag: "People OS",
    icon: Users,
    steps: [
      { label: "Employee Created", meta: "EMP-4821 · Engineering" },
      { label: "Attendance Marked", meta: "Biometric · 09:02 AM" },
      { label: "Leave Approved", meta: "2 days · Manager · auto" },
      { label: "Payroll Generated", meta: "₹84,200 · Nov 2025" },
    ],
  },
  {
    id: "crm",
    product: "SRM CRM",
    tag: "Revenue OS",
    icon: LineChart,
    steps: [
      { label: "Lead Created", meta: "Acme Corp · inbound form" },
      { label: "Lead Qualified", meta: "BANT · score 87" },
      { label: "Proposal Sent", meta: "v2 · $48,000 ARR" },
      { label: "Deal Won", meta: "Closed-won · 14 days" },
    ],
  },
  {
    id: "erp",
    product: "AutoDealer ERP",
    tag: "Dealer OS",
    icon: Car,
    steps: [
      { label: "Vehicle Purchased", meta: "VIN 4G2KX · ₹6.8L" },
      { label: "Inventory Updated", meta: "Lot A-12 · ready" },
      { label: "Vehicle Sold", meta: "Invoice INV-2204" },
      { label: "Profit Generated", meta: "+₹1.2L · 17.6%" },
    ],
  },
  {
    id: "wholesale",
    product: "Wholesale Commerce",
    tag: "Commerce OS",
    icon: ShoppingBag,
    steps: [
      { label: "Order Placed", meta: "#18342 · 24 SKUs" },
      { label: "Inventory Updated", meta: "Stock synced · WH-2" },
      { label: "Customer Notified", meta: "WhatsApp + email" },
      { label: "Admin Updated", meta: "Dashboard · realtime" },
    ],
  },
];

export function WorkflowShowcase() {
  return (
    <section id="workflows" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-30 mask-fade-edges" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Live Workflows"
          title={
            <>
              Real workflows.{" "}
              <span className="font-serif italic text-gradient">Real outcomes.</span>
            </>
          }
          subtitle="A glimpse into what runs every day on SRM products — across HR, sales, dealerships and commerce."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {flows.map((f, i) => (
            <FlowCard key={f.id} flow={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowCard({ flow, index }: { flow: Flow; index: number }) {
  const Icon = flow.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8"
    >
      <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-[#2563ff]/20 blur-3xl" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent text-[#050816]">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-base font-semibold text-white">{flow.product}</div>
            <div className="text-[11px] uppercase tracking-widest text-[#00E5FF]">
              {flow.tag}
            </div>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-pulse-soft" />
          Live
        </span>
      </div>

      <ol className="relative mt-7 space-y-4 pl-7">
        <span className="pointer-events-none absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00E5FF]/60 via-[#2563ff]/40 to-transparent" />
        {flow.steps.map((s, i) => (
          <motion.li
            key={s.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.18 }}
            className="relative"
          >
            <motion.span
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.18, type: "spring", stiffness: 220 }}
              className="absolute -left-7 top-0.5 grid h-5 w-5 place-items-center rounded-full bg-gradient-accent text-[#050816] shadow-[0_0_20px_rgba(0,229,255,0.35)]"
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </motion.span>
            <div className="text-sm font-medium text-white">{s.label}</div>
            <div className="text-xs text-muted-foreground">{s.meta}</div>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}
