
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/security-policy")({
  component: SecurityPolicyPage,
});

function SecurityPolicyPage() {
  const lastUpdated = "June 9, 2026";

  const sections = [
    {
      title: "Our Commitment to Security",
      content: [
        "At SRM Innovations, security is a fundamental part of how we design, develop, deploy, and maintain software solutions. We are committed to protecting client data, business information, and digital assets through industry-standard security practices.",
        "We continuously review and improve our security controls to address evolving threats and technology requirements."
      ]
    },
    {
      title: "Data Protection",
      content: [
        "We implement appropriate technical and organizational safeguards to protect sensitive information against unauthorized access, disclosure, alteration, and destruction.",
        "Where applicable, data is protected through encryption during transmission and storage."
      ]
    },
    {
      title: "Access Control",
      content: [
        "Access to systems, applications, and customer information is restricted to authorized personnel based on business requirements.",
        "Role-based access control principles are applied to minimize unnecessary access privileges."
      ]
    },
    {
      title: "Application Security",
      content: [
        "Security considerations are integrated throughout the software development lifecycle.",
        "Applications are reviewed, tested, and monitored to identify and address security vulnerabilities."
      ]
    },
    {
      title: "Infrastructure Security",
      content: [
        "Our infrastructure is protected using industry-standard security measures including monitoring, logging, authentication controls, and network protections.",
        "Servers, databases, and cloud environments are maintained with security best practices in mind."
      ]
    },
    {
      title: "Employee Security Practices",
      content: [
        "Team members are required to follow security and confidentiality requirements when handling company and client information.",
        "Access rights are reviewed periodically and removed when no longer required."
      ]
    },
    {
      title: "Third-Party Services",
      content: [
        "Projects may involve third-party services such as cloud providers, APIs, hosting platforms, analytics tools, and payment systems.",
        "While we select reputable providers whenever possible, third-party services remain subject to their own security policies and practices."
      ]
    },
    {
      title: "Security Monitoring",
      content: [
        "We may utilize monitoring, logging, and auditing mechanisms to identify suspicious activities and maintain system integrity.",
        "Detected security events are investigated according to internal procedures."
      ]
    },
    {
      title: "Incident Response",
      content: [
        "Security incidents are evaluated and addressed promptly to minimize operational and business impact.",
        "Where required by law, contractual obligations, or business necessity, affected parties may be notified of significant security incidents."
      ]
    },
    {
      title: "Backup & Recovery",
      content: [
        "Reasonable backup and recovery procedures may be maintained to support business continuity and disaster recovery objectives.",
        "Recovery procedures are reviewed periodically to improve resilience."
      ]
    },
    {
      title: "Client Responsibilities",
      content: [
        "Clients are responsible for protecting account credentials, access tokens, passwords, and user accounts under their control.",
        "Any suspected unauthorized access, vulnerabilities, or security concerns should be reported immediately."
      ]
    },
    {
      title: "Responsible Vulnerability Disclosure",
      content: [
        "Security researchers and users who discover potential vulnerabilities are encouraged to report them responsibly.",
        "We appreciate responsible disclosures and will investigate valid reports in a timely manner."
      ]
    },
    {
      title: "Limitations",
      content: [
        "While we implement reasonable security measures, no system, network, application, or method of transmission can be guaranteed to be completely secure.",
        "Users acknowledge that cybersecurity risks cannot be eliminated entirely."
      ]
    },
    {
      title: "Policy Updates",
      content: [
        "This Security Policy may be updated periodically to reflect operational, technological, legal, or regulatory changes.",
        "Continued use of our website, applications, or services constitutes acceptance of the updated policy."
      ]
    }
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
              Security & Compliance
            </span>

            <h1 className="mt-8 text-5xl font-bold md:text-6xl">
              Security
              <span className="block text-cyan-400">Policy</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Learn how SRM Innovations protects customer data,
              applications, infrastructure, and business operations through
              modern security practices and continuous risk management.
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
                This Security Policy outlines the measures, controls, and
                practices implemented by SRM Innovations to help protect
                customer information, software systems, infrastructure, and
                operational processes. Security remains an ongoing commitment
                across all our services and technology solutions.
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

            <div className="mt-16 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-8">
              <h3 className="text-2xl font-semibold text-cyan-400">
                Report a Security Issue
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                If you believe you have identified a security vulnerability,
                unauthorized access, or any security-related concern involving
                SRM Innovations products, services, or infrastructure, please
                contact us through our official communication channels. We
                appreciate responsible disclosure and will review all legitimate
                reports promptly.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}