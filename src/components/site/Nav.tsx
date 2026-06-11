import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ProductMegaMenu } from "./navigation/ProductMegaMenu";
import { ServiceMegaMenu } from "./navigation/ServiceMegaMenu";
import logo from "@/assets/new-logo.png";

const links = [
  {
    href: "#products",
    label: "Products",
    dropdown: [
      { href: "/products/hrms", label: "SRM HRMS" },
      { href: "/products/crm", label: "SRM CRM" },
      { href: "/products/auto-dealer-erp", label: "AutoDealer ERP" },
      { href: "/products/wholesale-commerce", label: "Wholesale Commerce" },
    ],
  },
  {
    href: "#services",
    label: "Services",
    dropdown: [
      { href: "/services/custom-software", label: "Custom Software" },
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/mobile-app-development", label: "Mobile Apps" },
      { href: "/services/saas-development", label: "SaaS Development" },
      { href: "/services/business-automation", label: "Business Automation" },
    ],
  },
  { href: "#process", label: "Process" },
  { href: "#cases", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled
        ? "border-b border-white/5 bg-[#050816]/95 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          
          className="flex items-center gap-3"
        >
          <div
            className="
      relative
      flex
      items-center
      justify-center
    "
          >
            <img
              src={logo}
              alt="SRM Innovations Hub"
              className="
        h-14
        w-auto
        object-contain
        drop-shadow-[0_0_20px_rgba(0,229,255,0.8)]
      "
            />
          </div>

          <div className="leading-tight  sm:block">
            <div className="text-sm font-semibold text-white">SRM Innovations Hub</div>

            <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-400">
              Smart Software · Real Results
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {/* Products */}

          <div className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3.5 py-2 text-sm text-muted-foreground hover:text-white">
              Products
              <svg
                className="h-3 w-3 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <ProductMegaMenu />
          </div>

          {/* Services */}

          <div className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3.5 py-2 text-sm text-muted-foreground hover:text-white">
              Services
              <svg
                className="h-3 w-3 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <ServiceMegaMenu />
          </div>

          {/* Process */}

          <Link
            to="/"
            hash="process"
            className="rounded-md px-3.5 py-2 text-sm text-muted-foreground hover:text-white"
          >
            Process
          </Link>

          {/* Case Studies */}

          <Link
            to="/"
            hash="cases"
            className="rounded-md px-3.5 py-2 text-sm text-muted-foreground hover:text-white"
          >
            Case Studies
          </Link>

          {/* Contact */}

          <Link
            to="/"
            hash="contact"
            className="rounded-md px-3.5 py-2 text-sm text-muted-foreground hover:text-white"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            hash="contact"
            className="hidden sm:inline-flex items-center rounded-full bg-gradient-accent px-4 py-2 text-sm font-semibold text-[#050816] shadow-[0_8px_30px_-8px_rgba(0,229,255,0.6)] transition-transform hover:scale-[1.03]"
          >
            Schedule consultation
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-md p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-5 bg-white" />
            <span className="mt-1 block h-0.5 w-5 bg-white" />
            <span className="mt-1 block h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-[#050816]/95 px-5 py-4 md:hidden">
          {/* Products */}

          <details className="border-b border-white/10 py-3">
            <summary className="cursor-pointer text-white">Products</summary>

            <div className="mt-3 space-y-2 pl-4">
              <Link to="/products/hrms" className="block text-sm text-white/70">
                SRM HRMS
              </Link>

              <Link to="/products/crm" className="block text-sm text-white/70">
                SRM CRM
              </Link>

              <Link to="/products/auto-dealer-erp" className="block text-sm text-white/70">
                AutoDealer ERP
              </Link>

              <Link to="/products/wholesale-commerce" className="block text-sm text-white/70">
                Wholesale Commerce
              </Link>
            </div>
          </details>

          {/* Services */}

          <details className="border-b border-white/10 py-3">
            <summary className="cursor-pointer text-white">Services</summary>

            <div className="mt-3 space-y-2 pl-4">
              <Link to="/services/custom-software" className="block text-sm text-white/70">
                Custom Software
              </Link>

              <Link to="/services/web-development" className="block text-sm text-white/70">
                Web Development
              </Link>

              <Link to="/services/mobile-app-development" className="block text-sm text-white/70">
                Mobile Apps
              </Link>

              <Link to="/services/saas-development" className="block text-sm text-white/70">
                SaaS Development
              </Link>

              <Link to="/services/business-automation" className="block text-sm text-white/70">
                Business Automation
              </Link>
            </div>
          </details>

          <Link to="/" href="#process" className="block py-3 text-white">
            Process
          </Link>

          <Link to="/" href="#cases" className="block py-3 text-white">
            Case Studies
          </Link>

          <Link to="/" href="#contact" className="block py-3 text-white">
            Contact
          </Link>
        </div>
      )}
    </motion.header>
  );
}
