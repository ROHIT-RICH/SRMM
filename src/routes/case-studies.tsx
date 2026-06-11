import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const studies = [
    {
      title: "Wholesale Commerce Platform",
      industry: "Wholesale Distribution",
      challenge:
        "Manual order processing, inventory mismatches and delayed reporting.",
      solution:
        "Built a centralized ERP platform with inventory tracking, order management and analytics.",
      results: [
        "60% Faster Order Processing",
        "40% Less Manual Work",
        "3x Better Inventory Visibility",
      ],
    },
    {
      title: "HRMS Platform",
      industry: "Human Resources",
      challenge:
        "Managing attendance, leave and employee records across multiple branches.",
      solution:
        "Developed a multi-tenant HRMS platform with role-based access and automation.",
      results: [
        "75% Less Administrative Work",
        "1000+ Employee Records Managed",
        "50% Faster HR Operations",
      ],
    },
    {
      title: "CRM System",
      industry: "Sales & Marketing",
      challenge:
        "Leads scattered across spreadsheets and inconsistent follow-up processes.",
      solution:
        "Created a centralized CRM with pipelines, lead tracking and reporting dashboards.",
      results: [
        "3x Faster Lead Management",
        "100% Lead Visibility",
        "Improved Sales Follow-Up",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative py-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d430,transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
              Case Studies
            </span>

            <h1 className="mt-8 text-5xl font-semibold leading-tight md:text-6xl">
              Real Business Problems.
              <span className="block text-cyan-400">
                Real Software Solutions.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Explore how SRM Innovations helps businesses streamline
              operations, automate workflows and scale through technology.
            </p>
          </motion.div>

        </div>

      </section>

      {/* CASE STUDIES */}
      <section className="pb-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="space-y-10">

            {studies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
              >

                <div className="grid gap-10 lg:grid-cols-2">

                  <div>

                    <div className="text-sm uppercase tracking-[3px] text-cyan-400">
                      {study.industry}
                    </div>

                    <h2 className="mt-4 text-3xl font-semibold">
                      {study.title}
                    </h2>

                    <div className="mt-10">

                      <h3 className="font-semibold text-white">
                        Challenge
                      </h3>

                      <p className="mt-3 leading-8 text-slate-400">
                        {study.challenge}
                      </p>

                    </div>

                    <div className="mt-8">

                      <h3 className="font-semibold text-white">
                        Solution
                      </h3>

                      <p className="mt-3 leading-8 text-slate-400">
                        {study.solution}
                      </p>

                    </div>

                  </div>

                  <div>

                    <h3 className="font-semibold text-white">
                      Results
                    </h3>

                    <div className="mt-8 space-y-4">

                      {study.results.map((result) => (
                        <div
                          key={result}
                          className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5"
                        >
                          <span className="font-medium text-cyan-400">
                            {result}
                          </span>
                        </div>
                      ))}

                    </div>

                    <Button className="mt-10">
                      View Full Case Study
                    </Button>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* IMPACT */}
      <section className="border-y border-white/10 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-semibold">
            How We Measure Success
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-4">

            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400">
                500+
              </div>
              <p className="mt-3 text-slate-400">
                Hours Saved
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400">
                60%
              </div>
              <p className="mt-3 text-slate-400">
                Faster Operations
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400">
                100%
              </div>
              <p className="mt-3 text-slate-400">
                Process Visibility
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400">
                3X
              </div>
              <p className="mt-3 text-slate-400">
                Better Efficiency
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-semibold md:text-6xl">
            Your Business Could Be
            <span className="block text-cyan-400">
              The Next Success Story
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400">
            Let's discuss your goals and build a solution that
            improves efficiency, productivity and growth.
          </p>

          <Button size="lg" className="mt-10">
            Schedule A Consultation
          </Button>

        </div>

      </section>

      <Footer />
    </main>
  );
}