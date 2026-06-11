import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./button-DLB67tUv.mjs";
import { N as Nav, h as hrmsImage, F as Footer } from "./Footer-Du5ITjHk.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { U as Users, z as Clock3, E as Wallet, F as CalendarDays, I as Briefcase, j as ChartColumn, J as UserPlus, K as FileText, y as Link } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
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
function HRMSPage() {
  const features = [{
    title: "Employee Management",
    icon: Users
  }, {
    title: "Attendance Tracking",
    icon: Clock3
  }, {
    title: "Payroll Automation",
    icon: Wallet
  }, {
    title: "Leave Management",
    icon: CalendarDays
  }, {
    title: "Recruitment",
    icon: Briefcase
  }, {
    title: "Performance Reviews",
    icon: ChartColumn
  }, {
    title: "Onboarding",
    icon: UserPlus
  }, {
    title: "Reports & Analytics",
    icon: FileText
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen overflow-hidden bg-[#050816] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d430,transparent_45%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 40
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400", children: "Next Generation HRMS Platform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 text-5xl font-black leading-tight md:text-7xl", children: [
            "Smart HR",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent", children: "Workforce Automation" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-slate-400", children: "Manage employees, payroll, attendance, recruitment, onboarding and performance tracking from a single intelligent platform." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", children: "Get HRMS Consultation" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-cyan-400", children: "500+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "Employees Managed" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-cyan-400", children: "99.9%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "Payroll Accuracy" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-cyan-400", children: "60%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "HR Time Saved" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 0.9
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          duration: 0.8
        }, className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hrmsImage, alt: "SRM HRMS Dashboard", className: "w-full" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-5xl font-bold", children: "Complete HRMS Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-3xl text-center text-slate-400", children: "Everything your HR team needs to automate operations and improve employee experience." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: features.map((item) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
          y: -8
        }, className: "group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-cyan-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-white", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-6 text-slate-400", children: "Enterprise-grade automation and workforce management." })
        ] }, item.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl font-bold", children: "Powerful Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-slate-400", children: "Gain complete visibility into employee attendance, payroll processing, leave requests, recruitment and performance metrics." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Real-time workforce insights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Automated payroll processing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Recruitment workflow management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Attendance and leave tracking" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hrmsImage, alt: "HRMS Dashboard", className: "w-full" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-5xl font-bold", children: "Why Choose SRM HRMS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-8 md:grid-cols-2", children: ["Reduce Manual HR Work", "Improve Employee Productivity", "Automate Payroll Processing", "Scale Across Multiple Branches"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/5 p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: item }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-slate-400", children: "Modern HR automation tools designed for growing businesses and enterprises." })
      ] }, item)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-6xl font-black", children: "Ready To Modernize HR?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-slate-400", children: "Transform employee management, payroll and workforce operations with SRM HRMS Software." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "mt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#contact", className: "flex items-center gap-2" }),
        "Get Started"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  HRMSPage as component
};
