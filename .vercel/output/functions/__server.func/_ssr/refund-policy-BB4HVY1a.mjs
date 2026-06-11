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
function RefundPolicyPage() {
  const lastUpdated = "June 9, 2026";
  const sections = [{
    title: "General Policy",
    content: ["SRM Innovations provides digital services, software development, consulting, and technology solutions. Due to the nature of these services, refunds are subject to the conditions outlined in this policy.", "By purchasing our services, you acknowledge and agree to this Refund Policy."]
  }, {
    title: "Non-Refundable Services",
    content: ["Payments made for completed work, delivered milestones, consultations, discovery sessions, project planning, design work, development services, deployment activities, and implementation services are non-refundable.", "Any hours spent by our team on a project are considered billable and non-refundable."]
  }, {
    title: "Advance Payments",
    content: ["Project initiation fees, booking fees, and advance payments secure project resources and scheduling commitments.", "Such payments are generally non-refundable once project work has commenced."]
  }, {
    title: "Milestone-Based Projects",
    content: ["For milestone-based projects, payments already made for completed milestones are non-refundable.", "Clients remain responsible for payment of approved or completed work performed before any project termination."]
  }, {
    title: "Subscription Services",
    content: ["For SaaS products, software subscriptions, maintenance plans, or support agreements, fees already charged are generally non-refundable unless otherwise specified in a separate agreement.", "Cancellation of a subscription does not automatically entitle a customer to a refund for the current billing period."]
  }, {
    title: "Eligible Refund Requests",
    content: ["Refund requests may be considered only in exceptional circumstances where SRM Innovations is unable to deliver services due solely to factors within our direct control.", "Each request is reviewed individually and approval is at the sole discretion of SRM Innovations."]
  }, {
    title: "Client-Caused Delays",
    content: ["Refunds will not be issued for project delays caused by incomplete requirements, lack of communication, delayed approvals, missing content, or other client-side factors."]
  }, {
    title: "Third-Party Costs",
    content: ["Payments made for domain registrations, hosting services, cloud infrastructure, software licenses, API subscriptions, payment gateway fees, or other third-party services are non-refundable."]
  }, {
    title: "Chargebacks",
    content: ["Clients agree to contact SRM Innovations before initiating a chargeback or payment dispute.", "Any fraudulent or unjustified chargebacks may result in immediate suspension of services and legal recovery of associated costs."]
  }, {
    title: "Refund Processing",
    content: ["Approved refunds, if any, will be processed through the original payment method where possible.", "Processing times may vary depending on financial institutions and payment providers."]
  }, {
    title: "Policy Updates",
    content: ["SRM Innovations reserves the right to modify this Refund Policy at any time without prior notice.", "Updated versions will be published on our website."]
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400", children: "Billing & Payments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 text-5xl font-bold md:text-6xl", children: [
          "Refund",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-cyan-400", children: "Policy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400", children: "This Refund Policy outlines the circumstances under which refunds may or may not be issued for services provided by SRM Innovations." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300", children: [
          "Last Updated: ",
          lastUpdated
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-cyan-400", children: "Introduction" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-8 text-slate-300", children: "Because software development and digital services involve dedicated resources, planning, and labor, refunds are limited and subject to the conditions outlined below." })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-cyan-400", children: "Refund Requests" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-8 text-slate-300", children: "For questions regarding payments, invoices, billing disputes, or refund requests, please contact SRM Innovations through the official contact information available on our website." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  RefundPolicyPage as component
};
