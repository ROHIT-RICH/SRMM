import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  const lastUpdated = "June 9, 2026";

  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing or using our website, software products, applications, or professional services, you agree to be bound by these Terms and Conditions.",
        "If you do not agree with any part of these terms, you should discontinue use of our services immediately.",
      ],
    },
    {
      title: "Services",
      content: [
        "SRM Innovations provides software development, web development, mobile application development, CRM solutions, ERP systems, SaaS platforms, consulting, maintenance, and related technology services.",
        "The scope, deliverables, pricing, and timelines for any project will be governed by separate agreements, proposals, or contracts.",
      ],
    },
    {
      title: "Client Responsibilities",
      content: [
        "Clients are responsible for providing accurate project requirements, content, approvals, and necessary access credentials.",
        "Delays in providing required information may impact project timelines and delivery schedules.",
        "Clients must ensure that all provided content complies with applicable laws and regulations.",
      ],
    },
    {
      title: "Payments & Billing",
      content: [
        "All invoices must be paid according to the agreed payment schedule.",
        "Project work may be paused if payments remain overdue.",
        "Advance payments, milestone payments, and final payments are generally non-refundable unless otherwise specified in writing.",
        "Taxes, government charges, and transaction fees may apply where required by law.",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "All pre-existing intellectual property, frameworks, libraries, methodologies, and proprietary tools remain the property of SRM Innovations.",
        "Upon full payment, ownership of custom-developed deliverables may be transferred to the client as specified in the project agreement.",
        "Third-party software, APIs, plugins, and services remain subject to their respective licenses and terms.",
      ],
    },
    {
      title: "Confidentiality",
      content: [
        "Both parties agree to protect confidential information shared during the course of a project or business relationship.",
        "Confidential information shall not be disclosed to third parties without prior written consent unless required by law.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "SRM Innovations shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from the use of our services.",
        "Our total liability shall not exceed the amount paid by the client for the specific service giving rise to the claim.",
      ],
    },
    {
      title: "Third-Party Services",
      content: [
        "Projects may integrate third-party services, hosting providers, payment gateways, APIs, or software products.",
        "We are not responsible for outages, changes, security issues, or performance problems caused by third-party providers.",
      ],
    },
    {
      title: "Warranties Disclaimer",
      content: [
        "Services are provided on an 'as-is' and 'as-available' basis.",
        "We do not guarantee uninterrupted operation, error-free functionality, or compatibility with all third-party systems unless explicitly agreed upon.",
      ],
    },
    {
      title: "Termination",
      content: [
        "Either party may terminate a project or service agreement according to the terms outlined in the applicable contract.",
        "Upon termination, clients remain responsible for payment of completed work and outstanding invoices.",
      ],
    },
    {
      title: "Indemnification",
      content: [
        "Clients agree to indemnify and hold harmless SRM Innovations from claims, damages, liabilities, costs, and expenses arising from materials, content, or instructions provided by the client.",
      ],
    },
    {
      title: "Changes to Terms",
      content: [
        "We reserve the right to update or modify these Terms and Conditions at any time.",
        "Continued use of our website or services after updates constitutes acceptance of the revised terms.",
      ],
    },
    {
      title: "Governing Law",
      content: [
        "These Terms and Conditions shall be governed and interpreted in accordance with the laws applicable in the jurisdiction where SRM Innovations operates.",
        "Any disputes shall be subject to the exclusive jurisdiction of the competent courts in that jurisdiction.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d430,transparent_40%)]" />

        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
              Legal Information
            </span>

            <h1 className="mt-8 text-5xl font-bold md:text-6xl">
              Terms &
              <span className="block text-cyan-400">Conditions</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Please read these Terms and Conditions carefully before using
              our website, products, applications, or professional services.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300">
              Last Updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-cyan-400">
                Introduction
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                These Terms and Conditions govern your use of the SRM
                Innovations website, software products, digital platforms,
                mobile applications, consulting services, and technology
                solutions. By accessing or using our services, you agree to
                comply with these terms.
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-white/10 pb-8 last:border-none"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {section.title}
                  </h3>

                  <div className="mt-4 space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <p
                        key={itemIndex}
                        className="leading-8 text-slate-400"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-16 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-8">
              <h3 className="text-2xl font-semibold text-cyan-400">
                Contact Information
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                For questions regarding these Terms and Conditions, project
                agreements, legal matters, or service-related concerns, please
                contact SRM Innovations through the contact information
                provided on our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}