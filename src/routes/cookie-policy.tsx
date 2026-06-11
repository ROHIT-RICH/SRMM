
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/cookie-policy")({
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  const lastUpdated = "June 9, 2026";

  const sections = [
    {
      title: "What Are Cookies?",
      content: [
        "Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit and improve your browsing experience.",
        "Cookies may be temporary (session cookies) or remain on your device for a specified period (persistent cookies).",
      ],
    },
    {
      title: "How We Use Cookies",
      content: [
        "SRM Innovations uses cookies to improve website performance, enhance user experience, analyze website traffic, and support security measures.",
        "Cookies help us understand how visitors interact with our website and allow us to improve our products and services.",
      ],
    },
    {
      title: "Essential Cookies",
      content: [
        "These cookies are necessary for the website to function properly.",
        "They support core features such as navigation, security, accessibility, and basic website functionality.",
      ],
    },
    {
      title: "Analytics Cookies",
      content: [
        "Analytics cookies help us understand visitor behavior, page performance, and website usage patterns.",
        "Information collected through analytics cookies is generally aggregated and does not directly identify individual users.",
      ],
    },
    {
      title: "Performance Cookies",
      content: [
        "Performance cookies help improve website speed, reliability, and functionality.",
        "These cookies allow us to monitor and optimize technical performance.",
      ],
    },
    {
      title: "Marketing & Third-Party Cookies",
      content: [
        "Third-party services such as analytics providers, advertising platforms, embedded content providers, or social media integrations may place cookies on your device.",
        "These third parties maintain their own privacy and cookie policies.",
      ],
    },
    {
      title: "Managing Cookies",
      content: [
        "Most web browsers allow you to manage, block, or delete cookies through browser settings.",
        "Disabling certain cookies may affect website functionality and user experience.",
      ],
    },
    {
      title: "Cookie Consent",
      content: [
        "By continuing to use our website, you consent to the use of cookies as described in this Cookie Policy unless you disable them through your browser settings.",
      ],
    },
    {
      title: "Third-Party Services",
      content: [
        "Our website may use third-party tools for analytics, performance monitoring, customer support, or embedded content.",
        "These services may collect information in accordance with their own privacy policies.",
      ],
    },
    {
      title: "Data Protection",
      content: [
        "Any information collected through cookies is handled in accordance with our Privacy Policy and applicable data protection requirements.",
      ],
    },
    {
      title: "Policy Updates",
      content: [
        "We may update this Cookie Policy from time to time to reflect changes in technology, regulations, or website functionality.",
        "Updates become effective immediately upon publication on our website.",
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
              Website Compliance
            </span>

            <h1 className="mt-8 text-5xl font-bold md:text-6xl">
              Cookie
              <span className="block text-cyan-400">Policy</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              This Cookie Policy explains how SRM Innovations uses cookies and
              similar technologies to improve website performance, security,
              and user experience.
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
                This Cookie Policy explains how SRM Innovations uses cookies,
                tracking technologies, and similar tools when visitors access
                our website. These technologies help improve security,
                functionality, analytics, and overall user experience.
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
                Questions About Cookies?
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                If you have questions regarding our use of cookies,
                tracking technologies, or website privacy practices,
                please contact SRM Innovations through the official
                contact information provided on our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
