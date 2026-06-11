import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import crmImage from "@/assets/product-crm.jpg";
import {
  Users,
  KanbanSquare,
  Contact,
  MessageSquareMore,
  Briefcase,
  CheckSquare,
  BarChart3,
  TrendingUp,
  Mail,
  PieChart,
  UserPlus,
  Activity,
  Link,
} from "lucide-react";


const TITLE =
  "SRM CRM Software | Customer Relationship Management Platform";

const DESCRIPTION =
  "SRM CRM helps businesses manage leads, customers, sales pipelines, follow-ups, deals and revenue growth from a single platform.";

export const Route = createFileRoute("/products/crm")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "CRM Software, Customer Relationship Management Software, Lead Management Software, Sales CRM, Pipeline Management Software, WhatsApp CRM",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: CRMPage,
});

function CRMPage() {
 const features = [
  { title: "Lead Management", icon: UserPlus },
  { title: "Sales Pipeline", icon: KanbanSquare },
  { title: "Contact Management", icon: Contact },
  { title: "WhatsApp Integration", icon: MessageSquareMore },
  { title: "Deal Tracking", icon: Briefcase },
  { title: "Task Management", icon: CheckSquare },
  { title: "Revenue Analytics", icon: TrendingUp },
  { title: "Sales Reports", icon: BarChart3 },
];
const modules = [
  { name: "Leads", icon: UserPlus },
  { name: "Contacts", icon: Contact },
  { name: "Deals", icon: Briefcase },
  { name: "Tasks", icon: CheckSquare },
  { name: "Sales Pipeline", icon: KanbanSquare },
  { name: "Reports", icon: BarChart3 },
  { name: "WhatsApp", icon: MessageSquareMore },
  { name: "Analytics", icon: PieChart },
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
                Smart CRM Platform
              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
                Convert More
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Leads Into Customers
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-slate-400">
                Manage leads, sales pipelines, customer relationships,
                follow-ups, deals and revenue forecasting from a single CRM
                dashboard.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                Get CRM Consultation
                </Button>

               
              </div>

              <div className="mt-14 grid grid-cols-3 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    10K+
                  </h3>
                  <p className="text-sm text-slate-400">
                    Leads Managed
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    45%
                  </h3>
                  <p className="text-sm text-slate-400">
                    More Conversions
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    3X
                  </h3>
                  <p className="text-sm text-slate-400">
                    Faster Sales
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
             <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <img
                  src={crmImage}
                  alt="SRM CRM Dashboard"
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
            Complete CRM Features
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-slate-400">
            Everything your sales team needs to manage prospects and close
            more deals.
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
        Streamline customer relationships and sales operations.
      </p>
    </motion.div>
  );
})}
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-5xl font-bold">
                Powerful Sales Dashboard
              </h2>

              <p className="mt-6 text-slate-400">
                Track leads, manage pipelines, monitor team performance and
                forecast revenue with real-time insights.
              </p>

              <ul className="mt-8 space-y-4">
                <li>✓ Lead Capture & Qualification</li>
                <li>✓ Sales Pipeline Tracking</li>
                <li>✓ WhatsApp & Email Integration</li>
                <li>✓ Revenue Forecasting</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img
                src={crmImage}
                alt="CRM Dashboard"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-bold">
            Why Businesses Choose SRM CRM
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
           {[
  {
    title: "Increase Lead Conversion",
    icon: TrendingUp,
  },
  {
    title: "Automate Follow-Ups",
    icon: Mail,
  },
  {
    title: "Improve Sales Productivity",
    icon: Activity,
  },
  {
    title: "Complete Customer Visibility",
    icon: Users,
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
        Powerful CRM workflows designed for growing businesses and sales teams.
      </p>
    </div>
  );
})}
             
            
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-bold">
            CRM Modules
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

      {/* CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-6xl font-black">
            Grow Sales Faster With SRM CRM
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Manage leads, automate follow-ups and close more deals with an
            intelligent CRM platform.
          </p>

          <Button size="lg" className="mt-10">
            <Link to ="#contact" className="flex items-center gap-2">
              Get Started
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}