import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useLocation } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-CCpUw3Ue.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$k = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SRM Innovations" },
      { name: "description", content: "Smart Software. Real Results." },
      { name: "theme-color", content: "#050816" },
      {
        name: "google-site-verification",
        content: "T2jT-8yq-c_Pwp87Qta7r_nX-CtxxbbQRcGbE8kutAw"
      },
      { property: "og:site_name", content: "SRM Innovations Hub" },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://srminnovationshub.com/preview.png"
      },
      {
        name: "twitter:image",
        content: "https://srminnovationshub.com/preview.png"
      },
      {
        property: "og:image",
        content: "https://srminnovationshub.com/favicon-512.png"
      },
      {
        name: "twitter:image",
        content: "https://srminnovationshub.com/favicon-512.png"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "icon",
        href: "/favicon.ico"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon.png"
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function ScrollManager() {
  const location = useLocation();
  reactExports.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 100);
        return;
      }
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location.pathname, location.search]);
  return null;
}
function RootComponent() {
  const { queryClient } = Route$k.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollManager, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
const $$splitComponentImporter$i = () => import("./terms-and-conditions-Dxh37fBc.mjs");
const Route$j = createFileRoute("/terms-and-conditions")({
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const BASE_URL = "";
const Route$i = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [{ path: "/", changefreq: "weekly", priority: "1.0" }];
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$h = () => import("./security-policy-C7Ar_-N8.mjs");
const Route$h = createFileRoute("/security-policy")({
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./refund-policy-BB4HVY1a.mjs");
const Route$g = createFileRoute("/refund-policy")({
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./privacy-policy-DpND30w7.mjs");
const Route$f = createFileRoute("/privacy-policy")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./founders-CwlGXGe7.mjs");
const Route$e = createFileRoute("/founders")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./cookie-policy-Bgynfh0W.mjs");
const Route$d = createFileRoute("/cookie-policy")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./contact-BjgGgtxd.mjs");
const Route$c = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./case-studies-BltvR5ru.mjs");
const Route$b = createFileRoute("/case-studies")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./about-JCKxV1N5.mjs");
const Route$a = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./index-Dfn4cKYt.mjs");
const TITLE$9 = "Custom Software Development Company | ERP, CRM, HRMS & SaaS Development | SRM Innovations Hub";
const DESCRIPTION$9 = "SRM Innovations Hub is a custom software development company providing ERP, CRM, HRMS, SaaS, Ecommerce, Web Development, Mobile App Development and Business Automation services worldwide.";
const Route$9 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: TITLE$9
    }, {
      name: "description",
      content: DESCRIPTION$9
    }, {
      name: "keywords",
      content: "custom software development company, HRMS development, CRM development, ERP development, SaaS development, mobile app development company, business automation, React development, MERN stack, enterprise software"
    }, {
      property: "og:title",
      content: TITLE$9
    }, {
      property: "og:description",
      content: DESCRIPTION$9
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }, {
      property: "og:site_name",
      content: "SRM Innovations Hub"
    }, {
      property: "og:image",
      content: "https://srminnovationshub.com/preview.png"
    }, {
      property: "og:image:width",
      content: "1200"
    }, {
      property: "og:image:height",
      content: "630"
    }, {
      name: "twitter:image",
      content: "https://srminnovationshub.com/preview.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: TITLE$9
    }, {
      name: "twitter:description",
      content: DESCRIPTION$9
    }],
    links: [{
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Playwrite+AU+VIC+Guides&display=swap"
    }, {
      rel: "icon",
      type: "image/png",
      href: "/favicon-32x32.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    }, {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png"
    }, {
      rel: "shortcut icon",
      href: "/favicon.ico"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "SRM Innovations Hub",
        slogan: "Smart Software. Real Results.",
        url: "/",
        founder: {
          "@type": "Person",
          name: "Rohit Vaishya",
          jobTitle: "Founder & Full Stack Developer"
        },
        description: DESCRIPTION$9,
        areaServed: ["India", "United States", "United Kingdom", "Australia", "Canada"]
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Custom Software Development",
        provider: {
          "@type": "Organization",
          name: "SRM Innovations Hub"
        },
        areaServed: ["India", "US", "UK", "Australia", "Canada"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software Services",
          itemListElement: ["HRMS Development", "CRM Development", "ERP Development", "SaaS Development", "Mobile App Development", "Business Automation"].map((n) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: n
            }
          }))
        }
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{
          "@type": "Question",
          name: "What does SRM Innovations Hub build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Custom software, HRMS, CRM, ERP, SaaS products, mobile apps and business automation platforms."
          }
        }, {
          "@type": "Question",
          name: "Which regions do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "India, the United States, the United Kingdom, Australia and Canada."
          }
        }, {
          "@type": "Question",
          name: "What technology stack do you use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MERN stack (MongoDB, Express, React, Node.js), TypeScript, React Native for mobile, and cloud platforms like AWS and Vercel."
          }
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./web-development-CnFjkBAt.mjs");
const TITLE$8 = "Web Development Services | SRM Innovations";
const DESCRIPTION$8 = "Professional web development services for business websites, ecommerce platforms, SaaS applications and enterprise web solutions.";
const Route$8 = createFileRoute("/services/web-development")({
  head: () => ({
    meta: [{
      title: TITLE$8
    }, {
      name: "description",
      content: DESCRIPTION$8
    }, {
      name: "keywords",
      content: "web development company, website development services, ecommerce website development, SaaS development, business website design"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./saas-development-Bo8WwjG0.mjs");
const TITLE$7 = "SaaS Development Services | Build Scalable SaaS Products";
const DESCRIPTION$7 = "SRM Innovations helps startups and enterprises design, develop and scale SaaS products with modern cloud-native architecture.";
const Route$7 = createFileRoute("/services/saas-development")({
  head: () => ({
    meta: [{
      title: TITLE$7
    }, {
      name: "description",
      content: DESCRIPTION$7
    }, {
      name: "keywords",
      content: "SaaS Development Company, SaaS Product Development, Multi Tenant SaaS, Cloud Software Development, SaaS Platform Development"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./mobile-app-development-DQL-uLq5.mjs");
const TITLE$6 = "Mobile App Development Services | Android & iOS Apps";
const DESCRIPTION$6 = "SRM Innovations develops high-performance Android, iOS and cross-platform mobile applications for startups, enterprises and growing businesses.";
const Route$6 = createFileRoute("/services/mobile-app-development")({
  head: () => ({
    meta: [{
      title: TITLE$6
    }, {
      name: "description",
      content: DESCRIPTION$6
    }, {
      name: "keywords",
      content: "Mobile App Development, Android App Development, iOS App Development, React Native Development, Flutter Development"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./custom-software-OpPzW4l5.mjs");
const TITLE$5 = "Custom Software Development Services | SRM Innovations";
const DESCRIPTION$5 = "Custom software development company building enterprise applications, SaaS platforms, business automation solutions, CRM, ERP and scalable digital products.";
const Route$5 = createFileRoute("/services/custom-software")({
  head: () => ({
    meta: [{
      title: TITLE$5
    }, {
      name: "description",
      content: DESCRIPTION$5
    }, {
      name: "keywords",
      content: "Custom Software Development, Enterprise Software Development, SaaS Development, Business Automation Software, Web Application Development"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./business-automation-DEjbHMiL.mjs");
const TITLE$4 = "Business Automation Services | Workflow & Process Automation";
const DESCRIPTION$4 = "Automate repetitive business processes, sales workflows, HR operations, customer communication and internal systems with SRM Innovations.";
const Route$4 = createFileRoute("/services/business-automation")({
  head: () => ({
    meta: [{
      title: TITLE$4
    }, {
      name: "description",
      content: DESCRIPTION$4
    }, {
      name: "keywords",
      content: "Business Automation, Workflow Automation, Process Automation, CRM Automation, WhatsApp Automation, Sales Automation, Business Process Automation"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./wholesale-commerce-ChM7sfuf.mjs");
const TITLE$3 = "Wholesale Commerce Platform | B2B Ecommerce Software";
const DESCRIPTION$3 = "Wholesale Commerce helps manufacturers, distributors and wholesalers manage B2B ecommerce, inventory, orders, dealers, pricing and business operations from a single platform.";
const Route$3 = createFileRoute("/products/wholesale-commerce")({
  head: () => ({
    meta: [{
      title: TITLE$3
    }, {
      name: "description",
      content: DESCRIPTION$3
    }, {
      name: "keywords",
      content: "B2B Ecommerce Platform, Wholesale Ecommerce Software, Distributor Management Software, Dealer Management System, Inventory Management Software"
    }, {
      property: "og:title",
      content: TITLE$3
    }, {
      property: "og:description",
      content: DESCRIPTION$3
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./hrms-DuRFcwhK.mjs");
const TITLE$2 = "SRM HRMS Software | Human Resource Management System";
const DESCRIPTION$2 = "SRM HRMS Software helps businesses automate payroll, attendance, employee management, recruitment, leave management and workforce operations.";
const Route$2 = createFileRoute("/products/hrms")({
  head: () => ({
    meta: [{
      title: TITLE$2
    }, {
      name: "description",
      content: DESCRIPTION$2
    }, {
      name: "keywords",
      content: "HRMS Software, Payroll Management Software, Attendance Management System, Employee Management Software, Human Resource Management System"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./crm-inq8ww9z.mjs");
const TITLE$1 = "SRM CRM Software | Customer Relationship Management Platform";
const DESCRIPTION$1 = "SRM CRM helps businesses manage leads, customers, sales pipelines, follow-ups, deals and revenue growth from a single platform.";
const Route$1 = createFileRoute("/products/crm")({
  head: () => ({
    meta: [{
      title: TITLE$1
    }, {
      name: "description",
      content: DESCRIPTION$1
    }, {
      name: "keywords",
      content: "CRM Software, Customer Relationship Management Software, Lead Management Software, Sales CRM, Pipeline Management Software, WhatsApp CRM"
    }, {
      property: "og:title",
      content: TITLE$1
    }, {
      property: "og:description",
      content: DESCRIPTION$1
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./auto-dealer-erp-kO341u7z.mjs");
const TITLE = "AutoDealer ERP | Dealership Management Software";
const DESCRIPTION = "AutoDealer ERP helps automobile dealerships manage inventory, leads, vehicle sales, finance, insurance, workshop operations and multi-branch dealer networks.";
const Route = createFileRoute("/products/auto-dealer-erp")({
  head: () => ({
    meta: [{
      title: TITLE
    }, {
      name: "description",
      content: DESCRIPTION
    }, {
      name: "keywords",
      content: "Dealer Management Software, Auto Dealer ERP, Automobile ERP, Vehicle Inventory Management, Dealership CRM, Workshop Management Software"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TermsAndConditionsRoute = Route$j.update({
  id: "/terms-and-conditions",
  path: "/terms-and-conditions",
  getParentRoute: () => Route$k
});
const SitemapDotxmlRoute = Route$i.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$k
});
const SecurityPolicyRoute = Route$h.update({
  id: "/security-policy",
  path: "/security-policy",
  getParentRoute: () => Route$k
});
const RefundPolicyRoute = Route$g.update({
  id: "/refund-policy",
  path: "/refund-policy",
  getParentRoute: () => Route$k
});
const PrivacyPolicyRoute = Route$f.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$k
});
const FoundersRoute = Route$e.update({
  id: "/founders",
  path: "/founders",
  getParentRoute: () => Route$k
});
const CookiePolicyRoute = Route$d.update({
  id: "/cookie-policy",
  path: "/cookie-policy",
  getParentRoute: () => Route$k
});
const ContactRoute = Route$c.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$k
});
const CaseStudiesRoute = Route$b.update({
  id: "/case-studies",
  path: "/case-studies",
  getParentRoute: () => Route$k
});
const AboutRoute = Route$a.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$k
});
const IndexRoute = Route$9.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$k
});
const ServicesWebDevelopmentRoute = Route$8.update({
  id: "/services/web-development",
  path: "/services/web-development",
  getParentRoute: () => Route$k
});
const ServicesSaasDevelopmentRoute = Route$7.update({
  id: "/services/saas-development",
  path: "/services/saas-development",
  getParentRoute: () => Route$k
});
const ServicesMobileAppDevelopmentRoute = Route$6.update({
  id: "/services/mobile-app-development",
  path: "/services/mobile-app-development",
  getParentRoute: () => Route$k
});
const ServicesCustomSoftwareRoute = Route$5.update({
  id: "/services/custom-software",
  path: "/services/custom-software",
  getParentRoute: () => Route$k
});
const ServicesBusinessAutomationRoute = Route$4.update({
  id: "/services/business-automation",
  path: "/services/business-automation",
  getParentRoute: () => Route$k
});
const ProductsWholesaleCommerceRoute = Route$3.update({
  id: "/products/wholesale-commerce",
  path: "/products/wholesale-commerce",
  getParentRoute: () => Route$k
});
const ProductsHrmsRoute = Route$2.update({
  id: "/products/hrms",
  path: "/products/hrms",
  getParentRoute: () => Route$k
});
const ProductsCrmRoute = Route$1.update({
  id: "/products/crm",
  path: "/products/crm",
  getParentRoute: () => Route$k
});
const ProductsAutoDealerErpRoute = Route.update({
  id: "/products/auto-dealer-erp",
  path: "/products/auto-dealer-erp",
  getParentRoute: () => Route$k
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CaseStudiesRoute,
  ContactRoute,
  CookiePolicyRoute,
  FoundersRoute,
  PrivacyPolicyRoute,
  RefundPolicyRoute,
  SecurityPolicyRoute,
  SitemapDotxmlRoute,
  TermsAndConditionsRoute,
  ProductsAutoDealerErpRoute,
  ProductsCrmRoute,
  ProductsHrmsRoute,
  ProductsWholesaleCommerceRoute,
  ServicesBusinessAutomationRoute,
  ServicesCustomSoftwareRoute,
  ServicesMobileAppDevelopmentRoute,
  ServicesSaasDevelopmentRoute,
  ServicesWebDevelopmentRoute
};
const routeTree = Route$k._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
