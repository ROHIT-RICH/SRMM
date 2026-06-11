import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Nav, F as Footer } from "./Footer-Du5ITjHk.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function PrivacyPolicyPage() {
  const lastUpdated = "June 9, 2026";
  const sections = [{
    title: "Information We Collect",
    content: ["We may collect personal information including your name, email address, phone number, company details, and any information you voluntarily provide through contact forms, project inquiries, consultations, or support requests.", "We may also collect technical information such as IP address, browser type, device information, operating system, pages visited, and website usage analytics."]
  }, {
    title: "How We Use Your Information",
    content: ["To respond to inquiries and provide requested services.", "To manage projects, contracts, proposals, and client relationships.", "To improve website performance, user experience, and service offerings.", "To send important business communications, updates, and support information.", "To comply with legal obligations and protect our legitimate business interests."]
  }, {
    title: "Cookies & Analytics",
    content: ["Our website may use cookies and similar technologies to enhance functionality, analyze traffic, and improve user experience.", "Third-party analytics services may collect anonymous usage data to help us understand visitor behavior and website performance."]
  }, {
    title: "Information Sharing",
    content: ["We do not sell, rent, or trade your personal information.", "Information may be shared with trusted service providers, contractors, or partners strictly for delivering services on our behalf.", "We may disclose information when required by law or to protect our legal rights and business operations."]
  }, {
    title: "Data Security",
    content: ["We implement appropriate technical and organizational measures to safeguard personal information against unauthorized access, disclosure, alteration, or destruction.", "While we strive to protect your data, no internet transmission or storage system can be guaranteed to be completely secure."]
  }, {
    title: "Data Retention",
    content: ["We retain personal information only for as long as necessary to fulfill business, contractual, legal, or operational requirements.", "Information that is no longer required may be securely deleted or anonymized."]
  }, {
    title: "Your Rights",
    content: ["You may request access to your personal data.", "You may request correction of inaccurate information.", "You may request deletion of data where legally permissible.", "You may withdraw consent for certain processing activities."]
  }, {
    title: "Third-Party Links",
    content: ["Our website may contain links to external websites. We are not responsible for the privacy practices, content, or security of third-party websites."]
  }, {
    title: "Children's Privacy",
    content: ["Our services are not directed toward individuals under the age of 18. We do not knowingly collect personal information from minors."]
  }, {
    title: "Policy Updates",
    content: ["We reserve the right to update this Privacy Policy at any time. Changes will become effective immediately upon posting the revised policy on this website."]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-[#050816] text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d430,transparent_40%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 25
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5
      }, className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400", children: "Legal Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 text-5xl font-bold md:text-6xl", children: [
          "Privacy",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-cyan-400", children: "Policy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400", children: "At SRM Innovations, we value your privacy and are committed to protecting the personal information entrusted to us by clients, partners, and website visitors." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300", children: [
          "Last Updated: ",
          lastUpdated
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-cyan-400", children: "Introduction" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-8 text-slate-300", children: "This Privacy Policy explains how SRM Innovations collects, uses, stores, and protects information obtained through our website, software products, business communications, and professional services. By using our website or services, you agree to the practices described in this policy." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: sections.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: index * 0.05
      }, className: "border-b border-white/10 pb-8 last:border-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white", children: section.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: section.content.map((item, itemIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-8 text-slate-400", children: item }, itemIndex)) })
      ] }, section.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-cyan-400", children: "Contact Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-8 text-slate-300", children: "If you have any questions regarding this Privacy Policy, data handling practices, or privacy-related requests, please contact SRM Innovations through our official contact channels available on the website." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  PrivacyPolicyPage as component
};
