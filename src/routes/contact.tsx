import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d440,transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
              Contact SRM Innovations
            </span>

            <h1 className="mt-8 text-5xl font-semibold leading-tight md:text-6xl">
              Let's Build
              <span className="block text-cyan-400">
                Something Great
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Whether you need custom software, SaaS development,
              mobile applications or business automation,
              we're ready to discuss your next project.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="pb-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                <Mail className="h-8 w-8 text-cyan-400" />

                <h3 className="mt-5 text-xl font-semibold">
                  Email
                </h3>

                <p className="mt-3 text-slate-400">
                  hello@srminnovations.com
                </p>

              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                <Phone className="h-8 w-8 text-cyan-400" />

                <h3 className="mt-5 text-xl font-semibold">
                  Phone
                </h3>

                <p className="mt-3 text-slate-400">
                  +91 XXXXX XXXXX
                </p>

              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                <MapPin className="h-8 w-8 text-cyan-400" />

                <h3 className="mt-5 text-xl font-semibold">
                  Location
                </h3>

                <p className="mt-3 text-slate-400">
                  Bhopal, Madhya Pradesh, India
                </p>

              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                <Clock className="h-8 w-8 text-cyan-400" />

                <h3 className="mt-5 text-xl font-semibold">
                  Response Time
                </h3>

                <p className="mt-3 text-slate-400">
                  Usually within 24 hours
                </p>

              </div>

            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <h2 className="text-3xl font-semibold">
                Tell Us About Your Project
              </h2>

              <p className="mt-4 text-slate-400">
                Fill out the form and we'll get back to you.
              </p>

              <form className="mt-10 space-y-6">

                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 outline-none"
                  />

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 outline-none"
                  />

                </div>

                <input
                  type="text"
                  placeholder="Project Type"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 outline-none"
                />

                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 outline-none"
                />

                <Button
                  size="lg"
                  className="w-full"
                >
                  Send Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

              </form>

            </motion.div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-semibold md:text-5xl">
            Need A Technology Partner?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            From SaaS platforms and custom software
            to mobile apps and automation systems,
            we're here to help.
          </p>

          <Button
            size="lg"
            className="mt-10"
          >
            Schedule A Consultation
          </Button>

        </div>

      </section>

      <Footer />
    </main>
  );
}