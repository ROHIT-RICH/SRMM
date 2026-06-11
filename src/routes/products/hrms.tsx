import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import hrmsImage from "@/assets/product-hrms.jpg";
import {
  Users,
  Clock3,
  Wallet,
  CalendarDays,
  Briefcase,
  BarChart3,
  UserPlus,
  FileText,
  Link,
} from "lucide-react";

const TITLE =
  "SRM HRMS Software | Human Resource Management System";

const DESCRIPTION =
  "SRM HRMS Software helps businesses automate payroll, attendance, employee management, recruitment, leave management and workforce operations.";

export const Route = createFileRoute("/products/hrms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "HRMS Software, Payroll Management Software, Attendance Management System, Employee Management Software, Human Resource Management System",
      },
    ],
  }),
  component: HRMSPage,
});

function HRMSPage() {
 const features = [
  {
    title: "Employee Management",
    icon: Users,
  },
  {
    title: "Attendance Tracking",
    icon: Clock3,
  },
  {
    title: "Payroll Automation",
    icon: Wallet,
  },
  {
    title: "Leave Management",
    icon: CalendarDays,
  },
  {
    title: "Recruitment",
    icon: Briefcase,
  },
  {
    title: "Performance Reviews",
    icon: BarChart3,
  },
  {
    title: "Onboarding",
    icon: UserPlus,
  },
  {
    title: "Reports & Analytics",
    icon: FileText,
  },
];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Nav />

      {/* HERO */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d430,transparent_45%)]" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                Next Generation HRMS Platform
              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
                Smart HR
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Workforce Automation
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-slate-400">
                Manage employees, payroll, attendance, recruitment,
                onboarding and performance tracking from a single
                intelligent platform.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                  Get HRMS Consultation
                </Button>

               
              </div>

              <div className="mt-14 grid grid-cols-3 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    500+
                  </h3>
                  <p className="text-sm text-slate-400">
                    Employees Managed
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    99.9%
                  </h3>
                  <p className="text-sm text-slate-400">
                    Payroll Accuracy
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    60%
                  </h3>
                  <p className="text-sm text-slate-400">
                    HR Time Saved
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <img
                  src={hrmsImage}
                  alt="SRM HRMS Dashboard"
                  className="w-full"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-bold">
            Complete HRMS Features
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-slate-400">
            Everything your HR team needs to automate operations and
            improve employee experience.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      key={item.title}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15">
        <Icon className="h-7 w-7 text-cyan-400" />
      </div>

      <h3 className="text-lg font-semibold text-white">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        Enterprise-grade automation and workforce management.
      </p>
    </motion.div>
  );
})}
          </div>
        </div>
      </section>

      {/* SCREENSHOT SECTION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <h2 className="text-5xl font-bold">
                Powerful Dashboard
              </h2>

              <p className="mt-6 text-slate-400">
                Gain complete visibility into employee attendance,
                payroll processing, leave requests, recruitment and
                performance metrics.
              </p>

              <ul className="mt-8 space-y-4">
                <li>✓ Real-time workforce insights</li>
                <li>✓ Automated payroll processing</li>
                <li>✓ Recruitment workflow management</li>
                <li>✓ Attendance and leave tracking</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img
                src={hrmsImage}
                alt="HRMS Dashboard"
                className="w-full"
              />
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-bold">
            Why Choose SRM HRMS
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              "Reduce Manual HR Work",
              "Improve Employee Productivity",
              "Automate Payroll Processing",
              "Scale Across Multiple Branches",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-2xl font-semibold">
                  {item}
                </h3>

                <p className="mt-4 text-slate-400">
                  Modern HR automation tools designed for growing
                  businesses and enterprises.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-6xl font-black">
            Ready To Modernize HR?
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Transform employee management, payroll and workforce
            operations with SRM HRMS Software.
          </p>

          <Button size="lg" className="mt-10">
            <Link to ="#contact" className="flex items-center gap-2">
             
            </Link>
             Get Started
          </Button>

        </div>
      </section>

      <Footer />
    </main>
  );
}