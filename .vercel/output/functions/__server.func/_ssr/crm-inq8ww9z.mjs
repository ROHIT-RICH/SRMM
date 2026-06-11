import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./button-DLB67tUv.mjs";
import { N as Nav, c as crmImage, F as Footer } from "./Footer-Du5ITjHk.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { J as UserPlus, N as SquareKanban, O as Contact, Q as MessageSquareMore, I as Briefcase, V as SquareCheckBig, a as TrendingUp, j as ChartColumn, M as Mail, X as Activity, U as Users, Y as ChartPie, y as Link } from "../_libs/lucide-react.mjs";
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
function CRMPage() {
  const features = [{
    title: "Lead Management",
    icon: UserPlus
  }, {
    title: "Sales Pipeline",
    icon: SquareKanban
  }, {
    title: "Contact Management",
    icon: Contact
  }, {
    title: "WhatsApp Integration",
    icon: MessageSquareMore
  }, {
    title: "Deal Tracking",
    icon: Briefcase
  }, {
    title: "Task Management",
    icon: SquareCheckBig
  }, {
    title: "Revenue Analytics",
    icon: TrendingUp
  }, {
    title: "Sales Reports",
    icon: ChartColumn
  }];
  const modules = [{
    name: "Leads",
    icon: UserPlus
  }, {
    name: "Contacts",
    icon: Contact
  }, {
    name: "Deals",
    icon: Briefcase
  }, {
    name: "Tasks",
    icon: SquareCheckBig
  }, {
    name: "Sales Pipeline",
    icon: SquareKanban
  }, {
    name: "Reports",
    icon: ChartColumn
  }, {
    name: "WhatsApp",
    icon: MessageSquareMore
  }, {
    name: "Analytics",
    icon: ChartPie
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400", children: "Smart CRM Platform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 text-5xl font-black leading-tight md:text-7xl", children: [
            "Convert More",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent", children: "Leads Into Customers" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-slate-400", children: "Manage leads, sales pipelines, customer relationships, follow-ups, deals and revenue forecasting from a single CRM dashboard." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", children: "Get CRM Consultation" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-cyan-400", children: "10K+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "Leads Managed" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-cyan-400", children: "45%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "More Conversions" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-cyan-400", children: "3X" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "Faster Sales" })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: crmImage, alt: "SRM CRM Dashboard", className: "w-full" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-5xl font-bold", children: "Complete CRM Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-3xl text-center text-slate-400", children: "Everything your sales team needs to manage prospects and close more deals." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: features.map((item) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
          y: -8
        }, className: "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-cyan-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-slate-400", children: "Streamline customer relationships and sales operations." })
        ] }, item.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl font-bold", children: "Powerful Sales Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-slate-400", children: "Track leads, manage pipelines, monitor team performance and forecast revenue with real-time insights." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Lead Capture & Qualification" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Sales Pipeline Tracking" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ WhatsApp & Email Integration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Revenue Forecasting" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: crmImage, alt: "CRM Dashboard", className: "w-full" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-5xl font-bold", children: "Why Businesses Choose SRM CRM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-8 md:grid-cols-2", children: [{
        title: "Increase Lead Conversion",
        icon: TrendingUp
      }, {
        title: "Automate Follow-Ups",
        icon: Mail
      }, {
        title: "Improve Sales Productivity",
        icon: Activity
      }, {
        title: "Complete Customer Visibility",
        icon: Users
      }].map((item) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/5 p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mb-4 h-10 w-10 text-cyan-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-slate-400", children: "Powerful CRM workflows designed for growing businesses and sales teams." })
        ] }, item.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-5xl font-bold", children: "CRM Modules" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-4", children: modules.map((module) => {
        const Icon = module.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5 text-center hover:border-cyan-400 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mx-auto mb-3 h-8 w-8 text-cyan-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: module.name })
        ] }, module.name);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-6xl font-black", children: "Grow Sales Faster With SRM CRM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-slate-400", children: "Manage leads, automate follow-ups and close more deals with an intelligent CRM platform." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#contact", className: "flex items-center gap-2", children: "Get Started" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  CRMPage as component
};
