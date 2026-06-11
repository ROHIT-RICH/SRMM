import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d430,transparent_40%)]" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-20 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                About SRM Innovations
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
                Building Technology
                <span className="block text-cyan-400">
                  For Businesses That
                </span>
                Refuse To Stay Small.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                SRM Innovations is a software development company helping
                startups, SMEs and enterprises build scalable digital
                products, automate operations and accelerate growth.
              </p>

              <div className="mt-10 flex gap-4">
                <Button size="lg">
                  Start A Project
                </Button>

                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-3xl bg-cyan-500/10 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-xl font-semibold">
                    Company Overview
                  </h3>

                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
                    Growing
                  </span>
                </div>

                <div className="mt-8 space-y-6">

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Focus
                    </span>

                    <span>
                      Software Development
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Expertise
                    </span>

                    <span>
                      SaaS & Automation
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Platforms
                    </span>

                    <span>
                      Web & Mobile
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Goal
                    </span>

                    <span>
                      Business Growth
                    </span>
                  </div>

                </div>

                <div className="mt-10 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-cyan-500/10 p-5">
                    <div className="text-3xl font-bold text-cyan-400">
                      15+
                    </div>

                    <p className="mt-2 text-sm text-slate-400">
                      Projects
                    </p>
                  </div>

                  <div className="rounded-2xl bg-cyan-500/10 p-5">
                    <div className="text-3xl font-bold text-cyan-400">
                      99%
                    </div>

                    <p className="mt-2 text-sm text-slate-400">
                      Satisfaction
                    </p>
                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-20 lg:grid-cols-2">

            <div>
              <p className="font-semibold text-cyan-400">
                WHO WE ARE
              </p>

              <h2 className="mt-5 text-4xl font-bold">
                Technology Partner,
                Not Just A Vendor.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-400">
                We work closely with businesses to understand their
                operations, challenges and long-term goals before
                recommending solutions.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Our approach combines business understanding,
                modern software engineering and scalable
                architecture to create systems that support growth.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-4xl font-bold">
            What We Actually Do
          </h2>

          <div className="mt-16 space-y-8">

            {[
              [
                "Custom Software Development",
                "Business systems, internal tools and enterprise applications tailored to your workflows."
              ],
              [
                "SaaS Product Development",
                "Multi-tenant platforms, customer portals and subscription-based software products."
              ],
              [
                "Mobile Applications",
                "Modern Android and iOS applications designed for usability and scale."
              ],
              [
                "Business Automation",
                "Reduce manual work through automation, integrations and streamlined operations."
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-2xl font-semibold">
                  {title}
                </h3>

                <p className="mt-4 max-w-3xl text-slate-400">
                  {desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-4xl font-bold">
            How We Work
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-4">

            {[
              "Discovery",
              "Planning",
              "Development",
              "Support",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8"
              >
                <div className="text-5xl font-bold text-cyan-400">
                  0{index + 1}
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-[40px] border border-white/10 bg-white/5 p-12">

            <p className="font-semibold text-cyan-400">
              FOUNDER NOTE
            </p>

            <h2 className="mt-6 text-4xl font-bold">
              Software Should Create
              Real Business Value.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              SRM Innovations was founded with the belief that
              technology should be practical, scalable and aligned
              with business goals.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              We focus on helping businesses adopt technology
              in a way that improves efficiency, reduces friction
              and supports long-term growth.
            </p>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold">
                Rohit Vaishya
              </h3>

              <p className="text-cyan-400">
                Founder, SRM Innovations
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-bold md:text-6xl">
            Need A Technology Partner?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Let's discuss your goals and explore how software,
            automation and digital products can help your business grow.
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