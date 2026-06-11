import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const lastUpdated = "June 9, 2026";

  const sections = [
    {
      title: "Information We Collect",
      content: [
        "We may collect personal information including your name, email address, phone number, company details, and any information you voluntarily provide through contact forms, project inquiries, consultations, or support requests.",
        "We may also collect technical information such as IP address, browser type, device information, operating system, pages visited, and website usage analytics.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To respond to inquiries and provide requested services.",
        "To manage projects, contracts, proposals, and client relationships.",
        "To improve website performance, user experience, and service offerings.",
        "To send important business communications, updates, and support information.",
        "To comply with legal obligations and protect our legitimate business interests.",
      ],
    },
    {
      title: "Cookies & Analytics",
      content: [
        "Our website may use cookies and similar technologies to enhance functionality, analyze traffic, and improve user experience.",
        "Third-party analytics services may collect anonymous usage data to help us understand visitor behavior and website performance.",
      ],
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell, rent, or trade your personal information.",
        "Information may be shared with trusted service providers, contractors, or partners strictly for delivering services on our behalf.",
        "We may disclose information when required by law or to protect our legal rights and business operations.",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to safeguard personal information against unauthorized access, disclosure, alteration, or destruction.",
        "While we strive to protect your data, no internet transmission or storage system can be guaranteed to be completely secure.",
      ],
    },
    {
      title: "Data Retention",
      content: [
        "We retain personal information only for as long as necessary to fulfill business, contractual, legal, or operational requirements.",
        "Information that is no longer required may be securely deleted or anonymized.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "You may request access to your personal data.",
        "You may request correction of inaccurate information.",
        "You may request deletion of data where legally permissible.",
        "You may withdraw consent for certain processing activities.",
      ],
    },
    {
      title: "Third-Party Links",
      content: [
        "Our website may contain links to external websites. We are not responsible for the privacy practices, content, or security of third-party websites.",
      ],
    },
    {
      title: "Children's Privacy",
      content: [
        "Our services are not directed toward individuals under the age of 18. We do not knowingly collect personal information from minors.",
      ],
    },
    {
      title: "Policy Updates",
      content: [
        "We reserve the right to update this Privacy Policy at any time. Changes will become effective immediately upon posting the revised policy on this website.",
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
              Privacy
              <span className="block text-cyan-400">Policy</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              At SRM Innovations, we value your privacy and are committed to
              protecting the personal information entrusted to us by clients,
              partners, and website visitors.
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
                This Privacy Policy explains how SRM Innovations collects,
                uses, stores, and protects information obtained through our
                website, software products, business communications, and
                professional services. By using our website or services, you
                agree to the practices described in this policy.
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
                Contact Us
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                If you have any questions regarding this Privacy Policy, data
                handling practices, or privacy-related requests, please contact
                SRM Innovations through our official contact channels available
                on the website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}