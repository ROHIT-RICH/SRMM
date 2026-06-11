import { Link } from "@tanstack/react-router";
import logo from "@/assets/new-logo.png";
const cols = [
  {
    title: "Products",
    links: [
      { label: "SRM HRMS", path: "/products/hrms" },
      { label: "SRM CRM", path: "/products/crm" },
      { label: "AutoDealer ERP", path: "/products/auto-dealer-erp" },
      { label: "Wholesale Commerce", path: "/products/wholesale-commerce" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Software", path: "/services/custom-software" },
      { label: "Web Development", path: "/services/web-development" },
      { label: "Mobile Apps", path: "/services/mobile-app-development" },
      { label: "SaaS Development", path: "/services/saas-development" },
      { label: "Business Automation", path: "/services/business-automation" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", path: "/about" },
      { label: "Founder", path: "/founders" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms & Conditions", path: "/terms-and-conditions" },
      { label: "Security Policy", path: "/security-policy" },
      { label: "Cookie Policy", path: "/cookie-policy" },
      { label: "Refund Policy", path: "/refund-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#04060f] pt-16 pb-10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <Link to="/" href="#top" className="flex items-center gap-3">
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

                <div className="leading-tight ">
                  <div className="text-sm font-semibold text-white">SRM Innovations Hub</div>

                  <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-400">
                    Smart Software · Real Results
                  </div>
                </div>
              </Link>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              SRM Innovations builds scalable software solutions including HRMS,
              CRM, ERP, SaaS platforms, mobile applications, and business automation
              systems for growing businesses worldwide.
            </p>

            <div className="mt-5 space-y-2 text-xs text-muted-foreground">
              <div>info@srminnovationshub.com</div>
              <div>Indore, Madhya Pradesh, India</div>

            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-semibold uppercase tracking-widest text-white">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.path}>
                    <Link
                      to={l.path}
                      className="text-sm text-muted-foreground transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} SRM Innovations Hub. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-5">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>

            <Link
              to="/security-policy"
              className="hover:text-white transition-colors"
            >
              Security
            </Link>

            <Link
              to="/cookie-policy"
              className="hover:text-white transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
