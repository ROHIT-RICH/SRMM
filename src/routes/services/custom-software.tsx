import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const TITLE =
  "Custom Software Development Services | SRM Innovations";

const DESCRIPTION =
  "Custom software development company building enterprise applications, SaaS platforms, business automation solutions, CRM, ERP and scalable digital products.";

export const Route = createFileRoute("/services/custom-software")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Custom Software Development, Enterprise Software Development, SaaS Development, Business Automation Software, Web Application Development",
      },
    ],
  }),
  component: CustomSoftwarePage,
});

function CustomSoftwarePage() {
  const services = [
    "Enterprise Software",
    "Business Automation",
    "CRM Development",
    "ERP Solutions",
    "HRMS Platforms",
    "SaaS Products",
  ];

  const tech = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d455,transparent_40%)]" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                Custom Software Development
              </span>

              <h1 className="mt-8 text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
                Software Built Around
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  Your Business
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl text-slate-400">
                We design, build and scale custom software solutions that
                automate operations, improve productivity and unlock growth.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                  Book Discovery Call
                </Button>

                <Button variant="outline" size="lg">
                  Get Project Estimate
                </Button>
              </div>
            </div>

            {/* Animated Visual */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[120px]" />

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "CRM Platform",
                  "ERP Solution",
                  "HRMS System",
                  "SaaS Product",
                ].map((card) => (
                  <div
                    key={card}
                    className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                  >
                    <h3 className="font-semibold">{card}</h3>
                    <p className="mt-2 text-sm text-slate-400">
                      Enterprise-grade software solution
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black">
            What We Build
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-slate-400">
            From internal business tools to enterprise platforms,
            we create software tailored to your exact workflows.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>

                <p className="mt-4 text-slate-400">
                  Scalable and secure software engineered for growth.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black">
            Our Development Process
          </h2>

          <div className="mt-20 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Discovery",
              "Strategy",
              "Design",
              "Development",
              "Testing",
              "Launch",
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

      {/* TECHNOLOGY */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black">
            Modern Technology Stack
          </h2>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {tech.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black">
            Industries We Serve
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Healthcare",
              "Finance",
              "Retail",
              "Education",
              "Real Estate",
              "Manufacturing",
              "Logistics",
              "Automotive",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black">
            Why Choose SRM Innovations
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              "Business First Approach",
              "Scalable Architecture",
              "Modern Technology Stack",
              "Rapid Development Cycle",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-2xl font-semibold">
                  {item}
                </h3>

                <p className="mt-4 text-slate-400">
                  Built to support long-term business growth and innovation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-black md:text-7xl">
            Let's Build Your
            <span className="block text-cyan-400">
              Next Software Product
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400">
            Whether you need a SaaS platform, enterprise software,
            CRM, ERP or business automation system, we can help turn
            your vision into reality.
          </p>

          <Button size="lg" className="mt-10">
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}