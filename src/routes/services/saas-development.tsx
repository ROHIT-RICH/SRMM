import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

const TITLE =
  "SaaS Development Services | Build Scalable SaaS Products";

const DESCRIPTION =
  "SRM Innovations helps startups and enterprises design, develop and scale SaaS products with modern cloud-native architecture.";

export const Route = createFileRoute("/services/saas-development")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "SaaS Development Company, SaaS Product Development, Multi Tenant SaaS, Cloud Software Development, SaaS Platform Development",
      },
    ],
  }),
  component: SaaSDevelopmentPage,
});

function SaaSDevelopmentPage() {
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
                SaaS Development Services
              </span>

              <h1 className="mt-8 text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
                Build The Next
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  SaaS Success Story
                    
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl text-slate-400">
                From MVP to enterprise-grade SaaS platforms,
                we help founders and businesses launch scalable,
                secure and cloud-native software products.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                  Start SaaS Project
                </Button>

                <Button variant="outline" size="lg">
                  Book Strategy Call
                </Button>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    MVP
                  </h3>
                  <p className="text-sm text-slate-400">
                    Launch Faster
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    Cloud
                  </h3>
                  <p className="text-sm text-slate-400">
                    Scalable Infra
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    SaaS
                  </h3>
                  <p className="text-sm text-slate-400">
                    Multi-Tenant
                  </p>
                </div>
              </div>
            </div>

            {/* SaaS Dashboard Mockup */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

               <div className="space-y-5">

  <div className="flex justify-between rounded-2xl bg-white/5 p-5">
    <div>
      <p className="text-sm text-slate-400">Monthly Revenue</p>
      <h3 className="text-3xl font-bold text-cyan-400">$42,000</h3>
    </div>

    <div>
      <p className="text-sm text-slate-400">Active Users</p>
      <h3 className="text-3xl font-bold">12.4K</h3>
    </div>
  </div>

  <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6">
    <h4 className="mb-4 font-semibold">Growth Analytics</h4>

    <div className="flex h-40 items-end gap-2">
      {[30,50,70,45,80,100].map((h,i)=>(
        <motion.div
          key={i}
          animate={{
            height:[`${h-10}%`,`${h}%`,`${h-10}%`]
          }}
          transition={{
            repeat:Infinity,
            duration:3,
            delay:i*0.15
          }}
          className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500 to-blue-500"
        />
      ))}
    </div>
  </div>

  <div className="space-y-3">
    <div className="flex justify-between rounded-xl bg-white/5 p-4">
      <span>SRM HRMS</span>
      <span className="text-green-400">Active</span>
    </div>

    <div className="flex justify-between rounded-xl bg-white/5 p-4">
      <span>SRM CRM</span>
      <span className="text-green-400">Active</span>
    </div>

    <div className="flex justify-between rounded-xl bg-white/5 p-4">
      <span>AutoDealer ERP</span>
      <span className="text-green-400">Active</span>
    </div>
  </div>

</div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-black">
            SaaS Products We Build
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "HRMS Platforms",
              "CRM Platforms",
              "Project Management Tools",
              "Marketplace SaaS",
              "Subscription Platforms",
              "Business Automation SaaS",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>

                <p className="mt-4 text-slate-400">
                  Scalable software built with modern architecture.
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SAAS FEATURES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-black">
            Enterprise SaaS Capabilities
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Multi-Tenant Architecture",
              "Role-Based Access Control",
              "Subscription Billing",
              "Analytics & Reporting",
              "Cloud Infrastructure",
              "API Integrations",
              "Team Management",
              "Enterprise Security",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                {feature}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-black">
            SaaS Development Process
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-5">

            {[
              "Discovery",
              "MVP",
              "Development",
              "Scaling",
              "Growth",
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

      {/* TECH STACK */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-black">
            SaaS Technology Stack
          </h2>

          <div className="mt-16 flex flex-wrap justify-center gap-4">

            {[
              "React",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "PostgreSQL",
              "AWS",
              "Docker",
              "Stripe",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3"
              >
                {tech}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-black md:text-7xl">
            Ready To Launch Your
            <span className="block text-cyan-400">
              SaaS Platform?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400">
            From idea validation to product launch and scaling,
            SRM Innovations helps you build SaaS products that grow.
          </p>

          <Button size="lg" className="mt-10">
            Schedule SaaS Consultation
          </Button>

        </div>
      </section>

      <Footer />
    </main>
  );
}