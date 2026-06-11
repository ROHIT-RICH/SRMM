import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import dealerImage from "@/assets/product-erp.jpg";
import {
  Car,
  Users,
  ClipboardCheck,
  BadgeDollarSign,
  ShieldCheck,
  Wrench,
  Package,
  BarChart3,
  CarFront,
  CalendarCheck,
  HandCoins,
  FileCheck,
  Building2,
  TrendingUp,
  Contact,
  Briefcase,
  Link,
} from "lucide-react";

const TITLE =
  "AutoDealer ERP | Dealership Management Software";

const DESCRIPTION =
  "AutoDealer ERP helps automobile dealerships manage inventory, leads, vehicle sales, finance, insurance, workshop operations and multi-branch dealer networks.";

export const Route = createFileRoute("/products/auto-dealer-erp")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Dealer Management Software, Auto Dealer ERP, Automobile ERP, Vehicle Inventory Management, Dealership CRM, Workshop Management Software",
      },
    ],
  }),
  component: AutoDealerERPPage,
});

function AutoDealerERPPage() {
 const features = [
  { title: "Lead Management", icon: Users },
  { title: "Vehicle Inventory", icon: CarFront },
  { title: "Test Drive Booking", icon: CalendarCheck },
  { title: "Sales Management", icon: BadgeDollarSign },
  { title: "Loan Processing", icon: HandCoins },
  { title: "Insurance Tracking", icon: ShieldCheck },
  { title: "Workshop Management", icon: Wrench },
  { title: "Analytics Dashboard", icon: TrendingUp },
];
const modules = [
  { name: "Lead CRM", icon: Contact },
  { name: "Vehicle Stock", icon: Car },
  { name: "Sales", icon: BadgeDollarSign },
  { name: "Finance", icon: HandCoins },
  { name: "Insurance", icon: ShieldCheck },
  { name: "Workshop", icon: Wrench },
  { name: "Spare Parts", icon: Package },
  { name: "Reports", icon: BarChart3 },
];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Nav />

      {/* HERO */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d430,transparent_45%)]" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                Automobile Dealership ERP
              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
                Complete
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Dealer Management
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-slate-400">
                Manage leads, vehicle inventory, test drives,
                finance approvals, insurance, deliveries,
                workshops and dealer operations from one platform.
              </p>

              <div className="mt-10 flex gap-4">
                <Button size="lg">
                  Get Auto-Dealer Consultation
                </Button>

              
              </div>

              <div className="mt-14 grid grid-cols-3 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    50K+
                  </h3>
                  <p className="text-sm text-slate-400">
                    Vehicles Managed
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    35%
                  </h3>
                  <p className="text-sm text-slate-400">
                    Faster Deliveries
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    100%
                  </h3>
                  <p className="text-sm text-slate-400">
                    Process Visibility
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <img
                  src={dealerImage}
                  alt="Auto Dealer ERP Dashboard"
                  className="w-full"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-bold">
            Complete Dealer ERP Features
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => {
  const Icon = item.icon;

  return (
              <motion.div
                whileHover={{ y: -8 }}
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20">
  <Icon className="h-6 w-6 text-cyan-400" />
</div>

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-400">
                  Streamline dealership operations with automation.
                </p>
              </motion.div>
  );
})}
          </div>

        </div>
      </section>

      {/* OPERATIONS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>
              <h2 className="text-5xl font-bold">
                End-to-End Dealership Operations
              </h2>

              <p className="mt-6 text-slate-400">
                Track every vehicle from enquiry to delivery while
                managing finance, insurance, registration and service
                operations from a unified system.
              </p>

              <ul className="mt-8 space-y-4">
                <li>✓ Vehicle Inventory Management</li>
                <li>✓ Lead & Enquiry Tracking</li>
                <li>✓ Test Drive Scheduling</li>
                <li>✓ Loan & Finance Processing</li>
                <li>✓ Insurance Management</li>
                <li>✓ Registration Workflow</li>
                <li>✓ Workshop Management</li>
                <li>✓ Multi-Branch Operations</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img
                src={dealerImage}
                alt="Dealer ERP"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* MODULES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-bold">
            ERP Modules
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {[
              "Lead CRM",
              "Vehicle Stock",
              "Sales",
              "Finance",
              "Insurance",
              "Workshop",
              "Spare Parts",
              "Reports",
            ].map((module) => (
              <div
                key={module}
                className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5 text-center"
              >
                {module}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-6xl font-black">
            Modernize Your Dealership Operations
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Automate sales, inventory, workshop and customer management
            with AutoDealer ERP.
          </p>

          <Button size="lg" className="mt-10">
            <Link to="#contact" className="flex items-center gap-2">
              
            </Link>
            Get Started
          </Button>

        </div>
      </section>

      <Footer />
    </main>
  );
}