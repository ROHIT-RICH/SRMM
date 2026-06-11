import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const hrmsImage = "/assets/product-hrms-DFM2c2-J.jpg";
const crmImage = "/assets/product-crm-BfbUv5tK.jpg";
const dealerImage = "/assets/product-erp-Bz5YRIg_.jpg";
const wholesaleImage = "/assets/product-wholesale-Dh-k86PB.jpg";
const products = [
  {
    id: "hrms",
    name: "SRM HRMS",
    short: "Human Resource Management",
    description: "Manage employees, attendance, payroll, leave and performance from a single platform.",
    features: [
      "Attendance",
      "Payroll",
      "Leave Management",
      "Performance Tracking"
    ],
    href: "/products/hrms",
    image: hrmsImage
  },
  {
    id: "crm",
    name: "SRM CRM",
    short: "Customer Relationship Management",
    description: "Track leads, pipelines, sales and customer interactions with complete visibility.",
    features: [
      "Lead Management",
      "Sales Pipeline",
      "Tasks",
      "Automation"
    ],
    href: "/products/crm",
    image: crmImage
  },
  {
    id: "erp",
    name: "AutoDealer ERP",
    short: "Automobile ERP",
    description: "End-to-end dealership management for automobile businesses.",
    features: [
      "Inventory",
      "Sales",
      "Accounts",
      "Reports"
    ],
    href: "/products/auto-dealer-erp",
    image: dealerImage
  },
  {
    id: "wholesale",
    name: "Wholesale Commerce",
    short: "B2B Commerce Platform",
    description: "Digitize wholesale ordering, inventory and distributor operations.",
    features: [
      "Inventory",
      "Orders",
      "Distributors",
      "Analytics"
    ],
    href: "/products/wholesale-commerce",
    image: wholesaleImage
  }
];
function ProductMegaMenu() {
  const [active, setActive] = reactExports.useState(products[0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "\r\n      invisible\r\n      absolute\r\n      left-1/2\r\n      top-full\r\n      z-50\r\n      mt-2\r\n      w-[1050px]\r\n      -translate-x-1/2\r\n      rounded-[32px]\r\n      border\r\n      border-white/10\r\n      bg-[#08111f]/95\r\nbackdrop-blur-2xl\r\n      opacity-0\r\n      transition-all\r\n      duration-300\r\n      group-hover:visible\r\n      group-hover:opacity-100\r\n\r\n      \r\n    ",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[300px_1fr] min-h-[520px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-r border-white/10 p-6", children: products.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onMouseEnter: () => setActive(product),
              className: "\r\n                w-full\r\n                rounded-2xl\r\n                p-4\r\n                text-left\r\n                transition-all\r\n                hover:bg-white/[0.04]\r\n              ",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white", children: product.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/50", children: product.short })
              ]
            },
            product.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: active.image,
                alt: active.name,
                className: "\r\n              h-[260px]\r\n              w-full\r\n              rounded-3xl\r\n              object-cover\r\n            "
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-8 text-3xl font-bold text-white", children: active.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-white/60", children: active.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: active.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "\r\n                  rounded-full\r\n                  border\r\n                  border-cyan-400/20\r\n                  bg-cyan-400/10\r\n                  px-3\r\n                  py-1\r\n                  text-sm\r\n                  text-cyan-400\r\n                ",
                children: feature
              },
              feature
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: active.href,
                className: "\r\n              mt-8\r\n              inline-flex\r\n              rounded-full\r\n              bg-gradient-accent\r\n              px-6\r\n              py-3\r\n              font-medium\r\n              text-[#050816]\r\n            ",
                children: "Explore Product →"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const customSoftwareImg = "/assets/custom-B2fwU_I6.png";
const webDevelopmentImg = "/assets/web-dev-CRgzineY.png";
const mobileAppsImg = "/assets/mobile-app-dlMOSFv8.png";
const automationImg = "/assets/Business-auto-BaLiOOx1.png";
const services = [
  {
    id: "custom-software",
    name: "Custom Software",
    short: "Tailored Business Solutions",
    description: "Custom software designed around your workflows, processes and business goals.",
    features: [
      "Enterprise Apps",
      "Internal Portals",
      "Workflow Automation",
      "Custom Dashboards"
    ],
    href: "/services/custom-software",
    image: customSoftwareImg
  },
  {
    id: "web-development",
    name: "Web Development",
    short: "Modern Web Applications",
    description: "Fast, scalable and conversion-focused websites and web applications.",
    features: [
      "React",
      "Next.js",
      "SEO",
      "Performance"
    ],
    href: "/services/web-development",
    image: webDevelopmentImg
  },
  {
    id: "mobile-apps",
    name: "Mobile Apps",
    short: "Android & iOS Apps",
    description: "Cross-platform mobile applications built using modern technologies.",
    features: [
      "React Native",
      "Android",
      "iOS",
      "Publishing"
    ],
    href: "/services/mobile-app-development",
    image: mobileAppsImg
  },
  {
    id: "saas",
    name: "SaaS Development",
    short: "Cloud-Based Products",
    description: "Multi-tenant SaaS platforms designed for growth and scalability.",
    features: [
      "Multi Tenant",
      "Subscriptions",
      "RBAC",
      "Billing"
    ],
    href: "/services/saas-development",
    image: crmImage
  },
  {
    id: "automation",
    name: "Business Automation",
    short: "Process Optimization",
    description: "Automate repetitive tasks and streamline business operations.",
    features: [
      "Automation",
      "Integrations",
      "Workflows",
      "Reporting"
    ],
    href: "/services/business-automation",
    image: automationImg
  }
];
function ServiceMegaMenu() {
  const [active, setActive] = reactExports.useState(services[0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "\r\n      invisible\r\n      absolute\r\n      left-1/2\r\n      top-full\r\n      z-50\r\n      mt-2\r\n      w-[1050px]\r\n      -translate-x-1/2\r\n      rounded-[32px]\r\n      border\r\n      border-white/10\r\n      bg-[#08111f]/95\r\nbackdrop-blur-2xl\r\n      opacity-0\r\n      transition-all\r\n      duration-300\r\n      group-hover:visible\r\n      group-hover:opacity-100\r\n\r\n      \r\n    ",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[300px_1fr] min-h-[520px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-r border-white/10 p-6", children: services.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onMouseEnter: () => setActive(service),
              className: "\r\n                w-full\r\n                rounded-2xl\r\n                p-4\r\n                text-left\r\n                transition-all\r\n                hover:bg-white/[0.04]\r\n              ",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white", children: service.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/50", children: service.short })
              ]
            },
            service.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: active.image,
                alt: active.name,
                className: "\r\n              h-[260px]\r\n              w-full\r\n              rounded-3xl\r\n              object-contain\r\n            "
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-8 text-3xl font-bold text-white", children: active.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-white/60", children: active.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: active.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "\r\n                  rounded-full\r\n                  border\r\n                  border-cyan-400/20\r\n                  bg-cyan-400/10\r\n                  px-3\r\n                  py-1\r\n                  text-sm\r\n                  text-cyan-400\r\n                ",
                children: feature
              },
              feature
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: active.href,
                className: "\r\n              mt-8\r\n              inline-flex\r\n              rounded-full\r\n              bg-gradient-accent\r\n              px-6\r\n              py-3\r\n              font-medium\r\n              text-[#050816]\r\n            ",
                children: "Explore Service →"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const logo = "/assets/new-logo-8wfPu8GQ.png";
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -24, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-white/5 bg-[#050816]/95 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "\n      relative\n      flex\n      items-center\n      justify-center\n    ",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: logo,
                        alt: "SRM Innovations Hub",
                        className: "\n        h-14\n        w-auto\n        object-contain\n        drop-shadow-[0_0_20px_rgba(0,229,255,0.8)]\n      "
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight  sm:block", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-white", children: "SRM Innovations Hub" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-cyan-400", children: "Smart Software · Real Results" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-1 md:flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1 rounded-md px-3.5 py-2 text-sm text-muted-foreground hover:text-white", children: [
                "Products",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "h-3 w-3 transition-transform group-hover:rotate-180",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M19 9l-7 7-7-7"
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ProductMegaMenu, {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1 rounded-md px-3.5 py-2 text-sm text-muted-foreground hover:text-white", children: [
                "Services",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "h-3 w-3 transition-transform group-hover:rotate-180",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M19 9l-7 7-7-7"
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceMegaMenu, {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/",
                hash: "process",
                className: "rounded-md px-3.5 py-2 text-sm text-muted-foreground hover:text-white",
                children: "Process"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/",
                hash: "cases",
                className: "rounded-md px-3.5 py-2 text-sm text-muted-foreground hover:text-white",
                children: "Case Studies"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/",
                hash: "contact",
                className: "rounded-md px-3.5 py-2 text-sm text-muted-foreground hover:text-white",
                children: "Contact"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/",
                hash: "contact",
                className: "hidden sm:inline-flex items-center rounded-full bg-gradient-accent px-4 py-2 text-sm font-semibold text-[#050816] shadow-[0_8px_30px_-8px_rgba(0,229,255,0.6)] transition-transform hover:scale-[1.03]",
                children: "Schedule consultation"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setOpen((o) => !o),
                className: "rounded-md p-2 text-white md:hidden",
                "aria-label": "Toggle menu",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-0.5 w-5 bg-white" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block h-0.5 w-5 bg-white" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block h-0.5 w-5 bg-white" })
                ]
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/5 bg-[#050816]/95 px-5 py-4 md:hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "border-b border-white/10 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "cursor-pointer text-white", children: "Products" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2 pl-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/hrms", className: "block text-sm text-white/70", children: "SRM HRMS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/crm", className: "block text-sm text-white/70", children: "SRM CRM" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/auto-dealer-erp", className: "block text-sm text-white/70", children: "AutoDealer ERP" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/wholesale-commerce", className: "block text-sm text-white/70", children: "Wholesale Commerce" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "border-b border-white/10 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "cursor-pointer text-white", children: "Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2 pl-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/custom-software", className: "block text-sm text-white/70", children: "Custom Software" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/web-development", className: "block text-sm text-white/70", children: "Web Development" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/mobile-app-development", className: "block text-sm text-white/70", children: "Mobile Apps" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/saas-development", className: "block text-sm text-white/70", children: "SaaS Development" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/business-automation", className: "block text-sm text-white/70", children: "Business Automation" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", href: "#process", className: "block py-3 text-white", children: "Process" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", href: "#cases", className: "block py-3 text-white", children: "Case Studies" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", href: "#contact", className: "block py-3 text-white", children: "Contact" })
        ] })
      ]
    }
  );
}
const cols = [
  {
    title: "Products",
    links: [
      { label: "SRM HRMS", path: "/products/hrms" },
      { label: "SRM CRM", path: "/products/crm" },
      { label: "AutoDealer ERP", path: "/products/auto-dealer-erp" },
      { label: "Wholesale Commerce", path: "/products/wholesale-commerce" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Custom Software", path: "/services/custom-software" },
      { label: "Web Development", path: "/services/web-development" },
      { label: "Mobile Apps", path: "/services/mobile-app-development" },
      { label: "SaaS Development", path: "/services/saas-development" },
      { label: "Business Automation", path: "/services/business-automation" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", path: "/about" },
      { label: "Founder", path: "/founders" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "Contact", path: "/contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms & Conditions", path: "/terms-and-conditions" },
      { label: "Security Policy", path: "/security-policy" },
      { label: "Cookie Policy", path: "/cookie-policy" },
      { label: "Refund Policy", path: "/refund-policy" }
    ]
  }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative overflow-hidden border-t border-white/5 bg-[#04060f] pt-16 pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", href: "#top", className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "\n      relative\n      flex\n      items-center\n      justify-center\n    ",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: logo,
                  alt: "SRM Innovations Hub",
                  className: "\n        h-14\n        w-auto\n        object-contain\n        drop-shadow-[0_0_20px_rgba(0,229,255,0.8)]\n      "
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-white", children: "SRM Innovations Hub" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-cyan-400", children: "Smart Software · Real Results" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-sm text-sm leading-6 text-muted-foreground", children: "SRM Innovations builds scalable software solutions including HRMS, CRM, ERP, SaaS platforms, mobile applications, and business automation systems for growing businesses worldwide." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "info@srminnovationshub.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Indore, Madhya Pradesh, India" })
        ] })
      ] }),
      cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-white", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5", children: c.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: l.path,
            className: "text-sm text-muted-foreground transition-colors hover:text-white",
            children: l.label
          }
        ) }, l.path)) })
      ] }, c.title))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " SRM Innovations Hub. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "hover:text-white transition-colors", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/terms-and-conditions",
            className: "hover:text-white transition-colors",
            children: "Terms"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/security-policy",
            className: "hover:text-white transition-colors",
            children: "Security"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/cookie-policy",
            className: "hover:text-white transition-colors",
            children: "Cookies"
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  Footer as F,
  Nav as N,
  crmImage as c,
  dealerImage as d,
  hrmsImage as h,
  wholesaleImage as w
};
