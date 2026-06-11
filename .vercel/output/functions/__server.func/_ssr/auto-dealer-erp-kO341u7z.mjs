import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./button-DLB67tUv.mjs";
import { N as Nav, d as dealerImage, F as Footer } from "./Footer-Du5ITjHk.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { U as Users, _ as CarFront, $ as CalendarCheck, v as BadgeDollarSign, a0 as HandCoins, c as ShieldCheck, a1 as Wrench, a as TrendingUp, y as Link } from "../_libs/lucide-react.mjs";
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
function AutoDealerERPPage() {
  const features = [{
    title: "Lead Management",
    icon: Users
  }, {
    title: "Vehicle Inventory",
    icon: CarFront
  }, {
    title: "Test Drive Booking",
    icon: CalendarCheck
  }, {
    title: "Sales Management",
    icon: BadgeDollarSign
  }, {
    title: "Loan Processing",
    icon: HandCoins
  }, {
    title: "Insurance Tracking",
    icon: ShieldCheck
  }, {
    title: "Workshop Management",
    icon: Wrench
  }, {
    title: "Analytics Dashboard",
    icon: TrendingUp
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400", children: "Automobile Dealership ERP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 text-5xl font-black leading-tight md:text-7xl", children: [
            "Complete",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent", children: "Dealer Management" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-slate-400", children: "Manage leads, vehicle inventory, test drives, finance approvals, insurance, deliveries, workshops and dealer operations from one platform." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", children: "Get Auto-Dealer Consultation" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-cyan-400", children: "50K+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "Vehicles Managed" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-cyan-400", children: "35%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "Faster Deliveries" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-cyan-400", children: "100%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "Process Visibility" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0.9
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          duration: 0.8
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: dealerImage, alt: "Auto Dealer ERP Dashboard", className: "w-full" }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-5xl font-bold", children: "Complete Dealer ERP Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: features.map((item) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
          y: -8
        }, className: "rounded-2xl border border-white/10 bg-white/5 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-cyan-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-slate-400", children: "Streamline dealership operations with automation." })
        ] }, item.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl font-bold", children: "End-to-End Dealership Operations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-slate-400", children: "Track every vehicle from enquiry to delivery while managing finance, insurance, registration and service operations from a unified system." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Vehicle Inventory Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Lead & Enquiry Tracking" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Test Drive Scheduling" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Loan & Finance Processing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Insurance Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Registration Workflow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Workshop Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Multi-Branch Operations" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: dealerImage, alt: "Dealer ERP", className: "w-full h-full object-cover" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-5xl font-bold", children: "ERP Modules" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-4", children: ["Lead CRM", "Vehicle Stock", "Sales", "Finance", "Insurance", "Workshop", "Spare Parts", "Reports"].map((module) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5 text-center", children: module }, module)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-6xl font-black", children: "Modernize Your Dealership Operations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-slate-400", children: "Automate sales, inventory, workshop and customer management with AutoDealer ERP." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "mt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#contact", className: "flex items-center gap-2" }),
        "Get Started"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  AutoDealerERPPage as component
};
