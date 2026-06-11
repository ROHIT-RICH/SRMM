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
function CookiePolicyPage() {
  const lastUpdated = "June 9, 2026";
  const sections = [{
    title: "What Are Cookies?",
    content: ["Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit and improve your browsing experience.", "Cookies may be temporary (session cookies) or remain on your device for a specified period (persistent cookies)."]
  }, {
    title: "How We Use Cookies",
    content: ["SRM Innovations uses cookies to improve website performance, enhance user experience, analyze website traffic, and support security measures.", "Cookies help us understand how visitors interact with our website and allow us to improve our products and services."]
  }, {
    title: "Essential Cookies",
    content: ["These cookies are necessary for the website to function properly.", "They support core features such as navigation, security, accessibility, and basic website functionality."]
  }, {
    title: "Analytics Cookies",
    content: ["Analytics cookies help us understand visitor behavior, page performance, and website usage patterns.", "Information collected through analytics cookies is generally aggregated and does not directly identify individual users."]
  }, {
    title: "Performance Cookies",
    content: ["Performance cookies help improve website speed, reliability, and functionality.", "These cookies allow us to monitor and optimize technical performance."]
  }, {
    title: "Marketing & Third-Party Cookies",
    content: ["Third-party services such as analytics providers, advertising platforms, embedded content providers, or social media integrations may place cookies on your device.", "These third parties maintain their own privacy and cookie policies."]
  }, {
    title: "Managing Cookies",
    content: ["Most web browsers allow you to manage, block, or delete cookies through browser settings.", "Disabling certain cookies may affect website functionality and user experience."]
  }, {
    title: "Cookie Consent",
    content: ["By continuing to use our website, you consent to the use of cookies as described in this Cookie Policy unless you disable them through your browser settings."]
  }, {
    title: "Third-Party Services",
    content: ["Our website may use third-party tools for analytics, performance monitoring, customer support, or embedded content.", "These services may collect information in accordance with their own privacy policies."]
  }, {
    title: "Data Protection",
    content: ["Any information collected through cookies is handled in accordance with our Privacy Policy and applicable data protection requirements."]
  }, {
    title: "Policy Updates",
    content: ["We may update this Cookie Policy from time to time to reflect changes in technology, regulations, or website functionality.", "Updates become effective immediately upon publication on our website."]
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400", children: "Website Compliance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 text-5xl font-bold md:text-6xl", children: [
          "Cookie",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-cyan-400", children: "Policy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400", children: "This Cookie Policy explains how SRM Innovations uses cookies and similar technologies to improve website performance, security, and user experience." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300", children: [
          "Last Updated: ",
          lastUpdated
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-cyan-400", children: "Introduction" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-8 text-slate-300", children: "This Cookie Policy explains how SRM Innovations uses cookies, tracking technologies, and similar tools when visitors access our website. These technologies help improve security, functionality, analytics, and overall user experience." })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-cyan-400", children: "Questions About Cookies?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-8 text-slate-300", children: "If you have questions regarding our use of cookies, tracking technologies, or website privacy practices, please contact SRM Innovations through the official contact information provided on our website." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  CookiePolicyPage as component
};
