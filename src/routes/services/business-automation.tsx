// src/routes/services/business-automation.tsx

import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

const TITLE =
  "Business Automation Services | Workflow & Process Automation";

const DESCRIPTION =
  "Automate repetitive business processes, sales workflows, HR operations, customer communication and internal systems with SRM Innovations.";

export const Route = createFileRoute("/services/business-automation")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Business Automation, Workflow Automation, Process Automation, CRM Automation, WhatsApp Automation, Sales Automation, Business Process Automation",
      },
    ],
  }),
  component: BusinessAutomationPage,
});

function BusinessAutomationPage() {
  const automations = [
    "Lead Automation",
    "Sales Automation",
    "HR Automation",
    "Invoice Automation",
    "Workflow Automation",
    "WhatsApp Automation",
    "Email Automation",
    "CRM Automation",
  ];

  const platforms = [
    "Zapier",
    "Make",
    "HubSpot",
    "Zoho",
    "Salesforce",
    "WhatsApp API",
    "Google Workspace",
    "Microsoft 365",
  ];

  const benefits = [
    {
      title: "Save Time",
      desc: "Reduce hours of repetitive manual work and increase operational efficiency.",
    },
    {
      title: "Reduce Errors",
      desc: "Eliminate human mistakes with automated workflows and validations.",
    },
    {
      title: "Increase Productivity",
      desc: "Allow teams to focus on revenue-generating and strategic activities.",
    },
    {
      title: "Scale Efficiently",
      desc: "Handle more customers and processes without increasing workload.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d455,transparent_40%)]" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div>
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                Business Automation Services
              </span>

              <h1 className="mt-8 text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
                Automate Your
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  Business Operations
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl text-slate-400">
                Eliminate repetitive tasks, streamline workflows and
                connect your business systems with intelligent automation
                solutions built for growth.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                  Book Consultation
                </Button>

                <Button variant="outline" size="lg">
                  Explore Solutions
                </Button>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    80%
                  </h3>
                  <p className="text-sm text-slate-400">
                    Less Manual Work
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    3X
                  </h3>
                  <p className="text-sm text-slate-400">
                    Faster Operations
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    24/7
                  </h3>
                  <p className="text-sm text-slate-400">
                    Automated Workflows
                  </p>
                </div>
              </div>
            </div>

            {/* Workflow Visual */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <div className="space-y-4 text-center">
                  <div className="rounded-xl bg-cyan-500/20 p-4">
                    Lead Generated
                  </div>

                  <div className="text-cyan-400">↓</div>

                  <div className="rounded-xl bg-blue-500/20 p-4">
                    CRM Updated
                  </div>

                  <div className="text-cyan-400">↓</div>

                  <div className="rounded-xl bg-violet-500/20 p-4">
                    WhatsApp Sent
                  </div>

                  <div className="text-cyan-400">↓</div>

                  <div className="rounded-xl bg-cyan-500/20 p-4">
                    Sales Notified
                  </div>

                  <div className="text-cyan-400">↓</div>

                  <div className="rounded-xl bg-blue-500/20 p-4">
                    Deal Created
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AUTOMATIONS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black">
            Automation Solutions
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {automations.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>

                <p className="mt-4 text-sm text-slate-400">
                  Intelligent workflow automation designed to improve efficiency.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black">
            Why Automate Your Business?
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black">
            Platforms We Integrate
          </h2>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <motion.div
                key={platform}
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3"
              >
                {platform}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black">
            Our Automation Process
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Analyze",
              "Identify",
              "Design",
              "Implement",
              "Test",
              "Optimize",
            ].map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 text-center"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-black md:text-7xl">
            Stop Doing Manual Work
            <span className="block text-cyan-400">
              Start Automating
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400">
            Discover how automation can save time, reduce costs,
            improve productivity and help your business scale faster.
          </p>

          <Button size="lg" className="mt-10">
            Book Automation Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}