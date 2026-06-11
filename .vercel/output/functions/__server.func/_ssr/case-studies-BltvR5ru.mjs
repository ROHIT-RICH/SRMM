import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Nav, F as Footer } from "./Footer-Du5ITjHk.mjs";
import { B as Button } from "./button-DLB67tUv.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function CaseStudiesPage() {
  const studies = [{
    title: "Wholesale Commerce Platform",
    industry: "Wholesale Distribution",
    challenge: "Manual order processing, inventory mismatches and delayed reporting.",
    solution: "Built a centralized ERP platform with inventory tracking, order management and analytics.",
    results: ["60% Faster Order Processing", "40% Less Manual Work", "3x Better Inventory Visibility"]
  }, {
    title: "HRMS Platform",
    industry: "Human Resources",
    challenge: "Managing attendance, leave and employee records across multiple branches.",
    solution: "Developed a multi-tenant HRMS platform with role-based access and automation.",
    results: ["75% Less Administrative Work", "1000+ Employee Records Managed", "50% Faster HR Operations"]
  }, {
    title: "CRM System",
    industry: "Sales & Marketing",
    challenge: "Leads scattered across spreadsheets and inconsistent follow-up processes.",
    solution: "Created a centralized CRM with pipelines, lead tracking and reporting dashboards.",
    results: ["3x Faster Lead Management", "100% Lead Visibility", "Improved Sales Follow-Up"]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-[#050816] text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d430,transparent_45%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400", children: "Case Studies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 text-5xl font-semibold leading-tight md:text-6xl", children: [
          "Real Business Problems.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-cyan-400", children: "Real Software Solutions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400", children: "Explore how SRM Innovations helps businesses streamline operations, automate workflows and scale through technology." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: studies.map((study, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: index * 0.1
    }, className: "rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm uppercase tracking-[3px] text-cyan-400", children: study.industry }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-semibold", children: study.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white", children: "Challenge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 leading-8 text-slate-400", children: study.challenge })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white", children: "Solution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 leading-8 text-slate-400", children: study.solution })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white", children: "Results" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-4", children: study.results.map((result) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-cyan-400", children: result }) }, result)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-10", children: "View Full Case Study" })
      ] })
    ] }) }, study.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-white/10 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-4xl font-semibold", children: "How We Measure Success" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-10 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-cyan-400", children: "500+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-slate-400", children: "Hours Saved" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-cyan-400", children: "60%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-slate-400", children: "Faster Operations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-cyan-400", children: "100%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-slate-400", children: "Process Visibility" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-cyan-400", children: "3X" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-slate-400", children: "Better Efficiency" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl font-semibold md:text-6xl", children: [
        "Your Business Could Be",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-cyan-400", children: "The Next Success Story" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-3xl text-lg text-slate-400", children: "Let's discuss your goals and build a solution that improves efficiency, productivity and growth." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "mt-10", children: "Schedule A Consultation" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  CaseStudiesPage as component
};
