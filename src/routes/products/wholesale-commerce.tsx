import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import wholesaleImage from "@/assets/product-wholesale.jpg";
import {
  ShoppingCart,
  Users,
  Boxes,
  ClipboardList,
  BadgeDollarSign,
  Building2,
  BarChart3,
  Warehouse,
  Package,
  TrendingUp,
  Link,
} from "lucide-react";

const TITLE =
  "Wholesale Commerce Platform | B2B Ecommerce Software";

const DESCRIPTION =
  "Wholesale Commerce helps manufacturers, distributors and wholesalers manage B2B ecommerce, inventory, orders, dealers, pricing and business operations from a single platform.";

export const Route = createFileRoute("/products/wholesale-commerce")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "B2B Ecommerce Platform, Wholesale Ecommerce Software, Distributor Management Software, Dealer Management System, Inventory Management Software",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: WholesaleCommercePage,
});

function WholesaleCommercePage() {
 const features = [
  { title: "B2B Ecommerce", icon: ShoppingCart },
  { title: "Dealer Management", icon: Users },
  { title: "Inventory Control", icon: Boxes },
  { title: "Order Management", icon: ClipboardList },
  { title: "Custom Pricing", icon: BadgeDollarSign },
  { title: "Distributor Portal", icon: Building2 },
  { title: "Purchase Management", icon: Package },
  { title: "Analytics Dashboard", icon: TrendingUp },
];
const modules = [
  { name: "Inventory", icon: Boxes },
  { name: "Orders", icon: ClipboardList },
  { name: "Dealers", icon: Users },
  { name: "Distributors", icon: Building2 },
  { name: "Pricing", icon: BadgeDollarSign },
  { name: "Purchases", icon: Package },
  { name: "Warehouses", icon: Warehouse },
  { name: "Analytics", icon: BarChart3 },
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
                B2B Wholesale Commerce Platform
              </span>

             <h1 className="mt-8 text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
  The Operating System For
  <span className="block font-serif italic font-normal bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
    Modern Wholesale Commerce
  </span>
</h1>   

              <p className="mt-6 max-w-2xl text-lg text-slate-400">
                Manage dealers, distributors, inventory, orders,
                pricing, procurement and B2B ecommerce operations
                from one intelligent platform.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                Get Wholesale Commerce Consultation
                </Button>

              </div>

              <div className="mt-14 grid grid-cols-3 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    100K+
                  </h3>
                  <p className="text-sm text-slate-400">
                    Orders Processed
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    50+
                  </h3>
                  <p className="text-sm text-slate-400">
                    Dealer Networks
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    40%
                  </h3>
                  <p className="text-sm text-slate-400">
                    Faster Operations
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
             <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <img
                  src={wholesaleImage}
                  alt="Wholesale Commerce Dashboard"
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
            Complete Wholesale Commerce Features
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-slate-400">
            Everything wholesalers, distributors and manufacturers need
            to scale their operations digitally.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
           {features.map((item) => {
  const Icon = item.icon;

  return (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20">
  <Icon className="h-6 w-6 text-cyan-400" />
</div>

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-400">
                  Enterprise-grade commerce automation for growing businesses.
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
          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <h2 className="text-5xl font-bold">
                End-to-End B2B Commerce Management
              </h2>

              <p className="mt-6 text-slate-400">
                Centralize inventory, order processing, dealer management,
                pricing strategies and procurement operations from a
                single dashboard.
              </p>

              <ul className="mt-8 space-y-4">
                <li>✓ Multi-Warehouse Inventory</li>
                <li>✓ Dealer & Distributor Portal</li>
                <li>✓ Bulk Order Management</li>
                <li>✓ Dynamic Wholesale Pricing</li>
                <li>✓ Purchase & Procurement</li>
                <li>✓ Stock Tracking</li>
                <li>✓ Invoice Management</li>
                <li>✓ Real-Time Business Analytics</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img
                src={wholesaleImage}
                alt="Wholesale Dashboard"
                className="w-full"
              />
            </div>

          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-bold">
            Commerce Modules
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {modules.map((module) => {
  const Icon = module.icon;

  return (
    <div
      key={module.name}
      className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5 text-center hover:border-cyan-400 transition-all"
    >
      <Icon className="mx-auto mb-3 h-8 w-8 text-cyan-400" />

      <div>{module.name}</div>
    </div>
  );
})}

            
          </div>
        </div>
      </section>

      {/* BENEFITS */}
    {/* BENEFITS */}
<section className="py-24">
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="text-center text-5xl font-bold">
      Why Choose Wholesale Commerce?
    </h2>

    <div className="mt-16 grid gap-8 md:grid-cols-2">
      {[
        {
          title: "Centralized Inventory Control",
          icon: Boxes,
        },
        {
          title: "Automated Order Processing",
          icon: ClipboardList,
        },
        {
          title: "Dealer & Distributor Management",
          icon: Users,
        },
        {
          title: "Real-Time Business Insights",
          icon: BarChart3,
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <Icon className="mb-4 h-10 w-10 text-cyan-400" />

            <h3 className="text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-4 text-slate-400">
              Optimize operations, reduce manual work and scale faster.
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-6xl font-black">
            Scale Your Wholesale Business
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Digitize inventory, orders, dealer networks and B2B commerce
            operations with Wholesale Commerce.
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
