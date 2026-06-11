import { motion } from "framer-motion";
import { Check } from "lucide-react";
import hrms from "@/assets/product-hrms.jpg";
import crm from "@/assets/product-crm.jpg";
import erp from "@/assets/product-erp.jpg";
import wholesale from "@/assets/product-wholesale.jpg";

type Product = {
  tag: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  reverse?: boolean;
};

const products: Product[] = [
  {
    tag: "HRMS Platform",
    name: "SRM HRMS",
    tagline: "Run your entire people operation on one platform.",
    description:
      "Multi-tenant HRMS that unifies attendance, payroll, leave and employee lifecycle for distributed teams across branches and regions.",
    features: [
      "Employee & branch management",
      "Attendance and biometric sync",
      "Automated payroll runs",
      "Leave and approvals engine",
      "Role-based access control",
      "Multi-tenant architecture",
    ],
    image: hrms,
  },
  {
    tag: "Revenue OS",
    name: "SRM CRM",
    tagline: "From first touch to closed-won, in one pipeline.",
    description:
      "A modern CRM built for sales teams that need real visibility — lead routing, deal stages, customer history and reporting that drives revenue.",
    features: [
      "Lead capture and routing",
      "Deal pipeline & forecasting",
      "Customer 360 timeline",
      "Sales dashboards",
      "Team collaboration",
      "WhatsApp & email integration",
    ],
    image: crm,
    reverse: true,
  },
  {
    tag: "Dealer ERP",
    name: "AutoDealer ERP",
    tagline: "Built for dealerships that move serious volume.",
    description:
      "End-to-end dealership management — vehicle inventory, purchases, sales, expenses and profitability — replacing four disconnected tools.",
    features: [
      "Vehicle inventory & VIN tracking",
      "Purchase management",
      "Sales & invoicing",
      "Expense tracking",
      "Profit & loss reporting",
      "Customer & finance records",
    ],
    image: erp,
  },
  {
    tag: "Mobile Commerce",
    name: "Wholesale Commerce Platform",
    tagline: "A native mobile ordering channel for B2B sellers.",
    description:
      "Mobile-first wholesale platform with a customer app, admin panel, order workflow and inventory — purpose-built for distributors and wholesalers.",
    features: [
      "Native customer mobile app",
      "Product catalog & pricing tiers",
      "Order management",
      "Inventory & stock alerts",
      "Admin control panel",
      "Customer accounts & history",
    ],
    image: wholesale,
    reverse: true,
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Products"
          title="Software that ships, scales and gets used every day."
          subtitle="Four production platforms powering operations, sales and commerce across India, the US, UK, Australia and Canada."
        />

        <div className="mt-20 space-y-28">
  {products.map((p) => (
    <div
      key={p.name}
      id={
        p.name === "SRM HRMS"
          ? "hrms"
          : p.name === "SRM CRM"
          ? "crm"
          : p.name === "AutoDealer ERP"
          ? "autodealer"
          : "wholesale"
      }
    >
      <ProductRow product={p} />
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

function ProductRow({ product }: { product: Product }) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        product.reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-widest text-[#00E5FF]">
          {product.tag}
        </span>
        <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          {product.name}
        </h3>
        <p className="mt-3 text-lg text-white/80">{product.tagline}</p>
        <p className="mt-3 text-sm text-muted-foreground">{product.description}</p>

        <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {product.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5 text-sm text-white/85"
            >
              <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#2563ff]/20">
                <Check className="h-3 w-3 text-[#00E5FF]" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#050816] transition-transform hover:scale-[1.02]"
          >
            Request a demo
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/[0.05]"
          >
            Talk to sales
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="absolute -inset-6 -z-10 rounded-3xl bg-[#2563ff]/20 blur-3xl" />
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1c] shadow-elevated">
          <img
            src={product.image}
            alt={`${product.name} interface`}
            loading="lazy"
            width={1920}
            height={1080}
            className="block w-full transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </motion.div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-widest text-[#00E5FF]">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
