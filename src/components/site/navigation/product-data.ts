import hrmsImg from "@/assets/product-hrms.jpg";
import crmImg from "@/assets/product-crm.jpg";
import erpImg from "@/assets/product-erp.jpg";
import wholesaleImg from "@/assets/product-wholesale.jpg";

export const products = [
  {
    id: "hrms",
    name: "SRM HRMS",
    short: "Human Resource Management",
    description:
      "Manage employees, attendance, payroll, leave and performance from a single platform.",

    features: [
      "Attendance",
      "Payroll",
      "Leave Management",
      "Performance Tracking",
    ],

    href: "/products/hrms",

    image: hrmsImg,
  },

  {
    id: "crm",
    name: "SRM CRM",
    short: "Customer Relationship Management",
    description:
      "Track leads, pipelines, sales and customer interactions with complete visibility.",

    features: [
      "Lead Management",
      "Sales Pipeline",
      "Tasks",
      "Automation",
    ],

    href: "/products/crm",

    image: crmImg,
  },

  {
    id: "erp",
    name: "AutoDealer ERP",
    short: "Automobile ERP",

    description:
      "End-to-end dealership management for automobile businesses.",

    features: [
      "Inventory",
      "Sales",
      "Accounts",
      "Reports",
    ],

    href: "/products/auto-dealer-erp",

    image: erpImg,
  },

  {
    id: "wholesale",
    name: "Wholesale Commerce",
    short: "B2B Commerce Platform",

    description:
      "Digitize wholesale ordering, inventory and distributor operations.",

    features: [
      "Inventory",
      "Orders",
      "Distributors",
      "Analytics",
    ],

    href: "/products/wholesale-commerce",

    image: wholesaleImg,
  },
];