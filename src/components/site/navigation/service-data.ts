import customSoftwareImg from "@/assets/custom.png";
import webDevelopmentImg from "@/assets/web-dev.png";
import mobileAppsImg from "@/assets/mobile-app.png";
import saasImg from "@/assets/product-crm.jpg";
import automationImg from "@/assets/Business-auto.png";

export const services = [
  {
    id: "custom-software",
    name: "Custom Software",
    short: "Tailored Business Solutions",

    description:
      "Custom software designed around your workflows, processes and business goals.",

    features: [
      "Enterprise Apps",
      "Internal Portals",
      "Workflow Automation",
      "Custom Dashboards",
    ],

    href: "/services/custom-software",

    image: customSoftwareImg,
  },

  {
    id: "web-development",
    name: "Web Development",
    short: "Modern Web Applications",

    description:
      "Fast, scalable and conversion-focused websites and web applications.",

    features: [
      "React",
      "Next.js",
      "SEO",
      "Performance",
    ],

    href: "/services/web-development",

    image: webDevelopmentImg,
  },

  {
    id: "mobile-apps",
    name: "Mobile Apps",
    short: "Android & iOS Apps",

    description:
      "Cross-platform mobile applications built using modern technologies.",

    features: [
      "React Native",
      "Android",
      "iOS",
      "Publishing",
    ],

    href: "/services/mobile-app-development",

    image: mobileAppsImg,
  },

  {
    id: "saas",
    name: "SaaS Development",
    short: "Cloud-Based Products",

    description:
      "Multi-tenant SaaS platforms designed for growth and scalability.",

    features: [
      "Multi Tenant",
      "Subscriptions",
      "RBAC",
      "Billing",
    ],

    href: "/services/saas-development",

    image: saasImg,
  },

  {
    id: "automation",
    name: "Business Automation",
    short: "Process Optimization",

    description:
      "Automate repetitive tasks and streamline business operations.",

    features: [
      "Automation",
      "Integrations",
      "Workflows",
      "Reporting",
    ],

    href: "/services/business-automation",

    image: automationImg,
  },
];