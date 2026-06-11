
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import founderImage from "@/assets/sir-ji.png";
import {
  ArrowRight,
  Building2,
  Rocket,
  Target,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/founders")({
  component: FounderPage,
});

function FounderPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Nav />

      {/* PREMIUM HERO */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute inset-0">

          <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

          <div className="absolute right-[-10%] bottom-[-10%] h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[180px]" />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-32">

          <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                Founder • Software Architect • SRM Innovations
              </span>

              <h1 className="mt-8 text-6xl font-bold leading-[1.05] md:text-7xl">

                Building
                <span className="block text-cyan-400">
                  Business Systems
                </span>

                That Scale.

              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">

                I'm Rohit Vaishya, Founder of SRM Innovations.

                My mission is to help businesses eliminate
                operational friction through software,
                automation, and scalable digital systems.

              </p>

              <div className="mt-12 flex flex-wrap gap-4">

                <Button size="lg">
                  Book Strategy Call
                </Button>


              </div>

              <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

                {[
                  ["15+", "Projects"],
                  ["5+", "Products"],
                  ["100%", "Custom"],
                  ["24/7", "Builder"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="text-3xl font-bold text-cyan-400">
                      {value}
                    </div>

                    <div className="mt-2 text-sm text-slate-500">
                      {label}
                    </div>
                  </div>
                ))}

              </div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-10 backdrop-blur-xl">

                <div className="absolute right-5 top-0 text-[180px] font-black text-white/[0.03]">
                  RV
                </div>

                <div className="relative z-10">

                  <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                    Founder Note
                  </div>

                  <h3 className="mt-8 text-4xl font-semibold leading-tight">

                    Great Software
                    Begins With
                    Great Understanding.

                  </h3>

                  <p className="mt-8 leading-8 text-slate-400">

                    Technology should not create complexity.

                    It should create clarity, automate
                    repetitive work, improve visibility
                    and help businesses move faster.

                  </p>

                  <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

                    <p className="italic text-slate-300">
                      "Great businesses are built on systems.
                      Great systems are built on clarity."
                    </p>

                  </div>

                  <div className="mt-10 border-t border-white/10 pt-8">

                    <div className="text-xl font-semibold">
                      Rohit Vaishya
                    </div>

                    <div className="mt-1 text-cyan-400">
                      Founder & CEO
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SIGNATURE QUOTE */}

      <section className="py-28">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <div className="text-7xl text-cyan-400">
            "
          </div>

          <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-relaxed md:text-5xl">

            Businesses don't grow because they work harder.

            They grow because their systems work better.

          </h2>

          <p className="mt-8 text-slate-500">
            — Rohit Vaishya
          </p>

        </div>

      </section>

      {/* FOUNDER STORY */}

      <section className="py-32">

        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-20 lg:grid-cols-[1fr_420px]">

            <div>

              <p className="text-sm uppercase tracking-[4px] text-cyan-400">
                Founder Story
              </p>

              <h2 className="mt-6 text-5xl font-semibold">
                Why SRM Innovations Exists
              </h2>

              <div className="mt-12 space-y-8 text-lg leading-9 text-slate-400">

                <p>
                  When I started working with growing businesses,
                  I noticed the same challenge repeatedly.
                </p>

                <p>
                  Teams were capable.
                  Leaders were ambitious.
                  Opportunities were everywhere.
                </p>

                <p>
                  Yet operations remained fragmented,
                  information lived in spreadsheets,
                  and critical decisions depended on
                  manual processes.
                </p>

                <p>
                  Businesses were investing more effort,
                  but not always building better systems.
                </p>

                <p>
                  That's where the idea behind
                  SRM Innovations began.
                </p>

                <p>
                  We don't build software because technology
                  exists. We build software because businesses
                  deserve systems that help them move faster,
                  make better decisions and scale with confidence.
                </p>

              </div>

            </div>

            <div className="space-y-8">

              {/* Founder Image */}
              <div className="sticky top-28 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">

                <img
                  src={founderImage}
                  alt="Rohit Vaishya - Founder SRM Innovations"
                  className="w-full object-cover"
                />

              </div>

              {/* Core Focus */}
              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

                <h3 className="text-2xl font-semibold">
                  Core Focus
                </h3>

                <div className="mt-8 space-y-6">

                  {[
                    {
                      icon: Building2,
                      title: "Business Systems",
                      desc: "Designing software around operational workflows."
                    },
                    {
                      icon: Rocket,
                      title: "Digital Growth",
                      desc: "Helping organizations scale efficiently."
                    },
                    {
                      icon: Target,
                      title: "Automation",
                      desc: "Reducing manual work through technology."
                    },
                    {
                      icon: TrendingUp,
                      title: "Long-Term Value",
                      desc: "Building systems that support future growth."
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                          <Icon className="h-5 w-5 text-cyan-400" />
                        </div>

                        <div>
                          <div className="font-medium">
                            {item.title}
                          </div>

                          <div className="mt-1 text-sm text-slate-500">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* JOURNEY */}

      <section className="border-y border-white/10 py-32">

        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[4px] text-cyan-400">
              Journey
            </p>

            <h2 className="mt-6 text-5xl font-semibold">
              Building Towards Something Bigger
            </h2>

          </div>

          <div className="mx-auto mt-20 max-w-4xl">

            {[
              {
                year: "2023",
                title: "Started Building Production Software",
                desc: "Worked on real-world applications and learned how businesses operate."
              },
              {
                year: "2024",
                title: "Focused On Business Systems",
                desc: "Began specializing in CRM, HRMS, ERP and workflow automation."
              },
              {
                year: "2026",
                title: "Founded SRM Innovations",
                desc: "Started building solutions focused on measurable business outcomes."
              },
              {
                year: "",
                title: "Scaling Products & Services",
                desc: "Expanding software solutions for ambitious businesses."
              },
            ].map((item, index) => (

              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-8 pb-12"
              >

                <div className="w-24 flex-shrink-0">

                  <div className="font-bold text-cyan-400">
                    {item.year}
                  </div>

                </div>

                <div className="relative flex-1 border-l border-white/10 pl-8">

                  <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-cyan-400" />

                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-400">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* WHAT WE BUILD */}

      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[4px] text-cyan-400">
              What We Build
            </p>

            <h2 className="mt-6 text-5xl font-semibold">
              Technology That Drives Growth
            </h2>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              "CRM Systems",
              "HRMS Platforms",
              "ERP Solutions",
              "SaaS Products",
              "Mobile Applications",
              "Business Automation",
            ].map((item) => (

              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 transition-all"
              >

                <div className="text-xl font-semibold">
                  {item}
                </div>

                <p className="mt-4 text-slate-500">
                  Built for scalability, performance and
                  real business impact.
                </p>

                <ArrowRight className="mt-8 h-5 w-5 text-cyan-400" />

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* PHILOSOPHY */}

      <section className="relative overflow-hidden border-y border-white/10 py-40">

        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <p className="text-sm uppercase tracking-[4px] text-cyan-400">
            Philosophy
          </p>

          <h2 className="mt-10 text-5xl font-semibold leading-relaxed md:text-6xl">

            Technology Should
            Create Leverage.

            <span className="mt-4 block text-cyan-400">
              Not Complexity.
            </span>

          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-400">

            Every product, workflow and system we design
            is focused on one outcome:

            helping businesses achieve more with less friction.

          </p>

        </div>

      </section>

      {/* PRINCIPLES */}

      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[4px] text-cyan-400">
              Principles
            </p>

            <h2 className="mt-6 text-5xl font-semibold">
              How We Think
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Business First",
                desc: "Technology should serve business goals. We start by understanding operations, people and outcomes before writing a single line of code."
              },
              {
                number: "02",
                title: "Outcomes Matter",
                desc: "Features don't create value. Better decisions, improved efficiency and measurable results do."
              },
              {
                number: "03",
                title: "Think Long-Term",
                desc: "Every system should be designed to support future growth, scale and evolving business needs."
              },
            ].map((item) => (

              <motion.div
                key={item.number}
                whileHover={{ y: -8 }}
                className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition-all"
              >

                <div className="text-sm font-bold tracking-[4px] text-cyan-400">
                  {item.number}
                </div>

                <h3 className="mt-6 text-3xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-6 leading-8 text-slate-400">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* VISION */}

      <section className="border-y border-white/10 py-32">

        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[4px] text-cyan-400">
              Vision
            </p>

            <h2 className="mt-6 text-5xl font-semibold">
              Building A Company
              That Creates Impact
            </h2>

          </div>

          <div className="mt-16 rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-10 backdrop-blur-xl md:p-14">

            <p className="text-xl leading-10 text-slate-300">

              My vision is to build SRM Innovations into one of the most trusted
              technology partners for ambitious businesses.

            </p>

            <p className="mt-8 text-xl leading-10 text-slate-400">

              Not just a software company.

              A company known for solving meaningful problems,
              simplifying complexity and helping organizations
              operate better through technology.

            </p>

            <p className="mt-8 text-xl leading-10 text-slate-400">

              Whether it's a CRM, HRMS, ERP, SaaS platform or
              business automation system, every solution should
              create lasting value.

            </p>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="relative overflow-hidden py-40">

        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            Let's Connect
          </div>

          <h2 className="mt-8 text-5xl font-bold md:text-6xl">

            Building The Next Generation
            <span className="block text-cyan-400">
              Of Business Software.
            </span>

          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-400">

            Whether you're building a startup,
            modernizing operations or launching a SaaS product,
            I'd love to learn about your vision and explore
            how technology can help accelerate it.

          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <Button size="lg">
              Book A Strategy Call
            </Button>

            <Button
              size="lg"
              variant="outline"
            >
              View Our Products
            </Button>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}