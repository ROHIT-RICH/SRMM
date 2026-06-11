import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import {
  Globe,
  ShoppingCart,
  Database,
  Smartphone,
} from "lucide-react";

const TITLE =
  "Web Development Services | SRM Innovations";

const DESCRIPTION =
  "Professional web development services for business websites, ecommerce platforms, SaaS applications and enterprise web solutions.";

export const Route = createFileRoute("/services/web-development")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "web development company, website development services, ecommerce website development, SaaS development, business website design",
      },
    ],
  }),
  component: WebDevelopmentPage,
});

function WebDevelopmentPage() {
  const websiteTypes = [
    "Business Website",
    "Ecommerce Store",
    "Portfolio Website",
    "SaaS Platform",
    "Landing Page",
    "Web Application",
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Vercel",
  ];

  const cards = [
  { title: "Websites", icon: Globe },
  { title: "Ecommerce", icon: ShoppingCart },
  { title: "SaaS", icon: Database },
  { title: "Apps", icon: Smartphone },
];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d455,transparent_40%)]" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                Professional Web Development Services
              </span>

              <h1 className="mt-8 text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
                Websites That
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  Generate Business
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl text-slate-400">
                We build high-performance websites, ecommerce platforms,
                SaaS applications and enterprise web solutions designed
                to drive growth and conversions.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                  Start Your Project
                </Button>

                <Button variant="outline" size="lg">
                  Get Free Consultation
                </Button>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    100+
                  </h3>
                  <p className="text-sm text-slate-400">
                    Projects Delivered
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    99%
                  </h3>
                  <p className="text-sm text-slate-400">
                    Client Satisfaction
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    5X
                  </h3>
                  <p className="text-sm text-slate-400">
                    Faster Growth
                  </p>
                </div>
              </div>
            </motion.div>

           <motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative"
>
  {/* Glow */}
  <div className="absolute -inset-10 rounded-[40px] bg-cyan-500/20 blur-[100px]" />

  {/* Browser */}
  <div className="relative mx-auto w-full max-w-[380px] overflow-hidden rounded-[24px] border border-cyan-500/20 bg-[#081425] lg:max-w-none lg:rounded-[32px]">

    {/* Browser Header */}
    <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
      <div className="flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

     <div className="hidden h-10 w-72 items-center rounded-full border border-white/10 bg-white/5 px-4 md:flex">
  <div className="h-2 w-2 rounded-full bg-green-400" />
  <span className="ml-3 text-xs text-slate-400">
    https://srminnovations.com
  </span>
</div>
    </div>

    {/* Hero Section */}
    <div className="p-8">

  <div className="flex items-center justify-between">
    <h3 className="text-xl font-bold text-cyan-400">
      WebCraft
    </h3>

    <div className="flex gap-4 text-sm text-slate-400">
      <span>Home</span>
      <span>Services</span>
      <span>Projects</span>
    </div>
  </div>

  <div className="mt-8 grid gap-6 md:grid-cols-2">

    <div>
      <h3 className="text-2xl font-black leading-tight md:text-3xl">
        Digital Experiences
        <span className="block text-cyan-400">
          That Drive Results
        </span>
      </h3>

      <p className="mt-3 text-sm text-slate-400">
        Modern websites and SaaS platforms designed for growth.
      </p>

      <button className="mt-5 rounded-xl bg-cyan-500 px-4 py-2 text-black font-semibold">
        Get Started
      </button>
    </div>

    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
  <div className="text-xs text-slate-400">
    Performance
  </div>

  <div className="mt-2 text-5xl font-black text-cyan-400">
    98
  </div>

  <div className="text-green-400 text-sm">
    Excellent Score
  </div>

  <div className="mt-6 space-y-3">

    <div>
      <div className="mb-1 flex justify-between text-xs">
        <span>SEO</span>
        <span>100%</span>
      </div>

      <div className="h-2 rounded-full bg-white/10">
        <div className="h-full w-full rounded-full bg-cyan-400" />
      </div>
    </div>

    <div>
      <div className="mb-1 flex justify-between text-xs">
        <span>Speed</span>
        <span>96%</span>
      </div>

      <div className="h-2 rounded-full bg-white/10">
        <div className="h-full w-[96%] rounded-full bg-blue-400" />
      </div>
    </div>

    <div>
      <div className="mb-1 flex justify-between text-xs">
        <span>Security</span>
        <span>99%</span>
      </div>

      <div className="h-2 rounded-full bg-white/10">
        <div className="h-full w-[99%] rounded-full bg-green-400" />
      </div>
    </div>

  </div>
</div>

  </div>

  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

  {cards.map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.title}
        className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
      >
        <Icon
          size={28}
          className="mx-auto text-cyan-400"
        />

        <div className="mt-3 text-sm font-medium">
          {item.title}
        </div>
      </div>
    );
  })}

</div>

  <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#0d1b2f] to-[#132b4c] p-5">

    <div className="flex justify-between">
      <div>
        <div className="text-xs text-slate-400">
          Visitors
        </div>

        <div className="text-2xl font-bold">
          124K
        </div>
      </div>

      <div>
        <div className="text-xs text-slate-400">
          Conversion
        </div>

        <div className="text-2xl font-bold text-cyan-400">
          +245%
        </div>
      </div>
    </div>

    <div className="mt-6 flex h-32 items-end gap-2">

      {[30,50,40,70,60,85,100].map((h, i) => (
        <motion.div
          key={i}
          animate={{
            height: [`${h - 10}%`, `${h}%`, `${h - 10}%`],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: i * 0.15,
          }}
          className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500 to-blue-500"
        />
      ))}

    </div>

  </div>

</div>
  </div>
</motion.div>
          </div>
        </div>
      </section>

      {/* WEBSITE TYPES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black">
            Websites We Build
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {websiteTypes.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>

                <p className="mt-4 text-slate-400">
                  Modern, scalable and conversion-focused solutions.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black">
            Technology Stack
          </h2>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black">
            Development Process
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Discovery",
              "Planning",
              "Design",
              "Development",
              "Testing",
              "Launch",
            ].map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 text-center"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-black md:text-7xl">
            Ready To Launch
            <span className="block text-cyan-400">
              Your Next Website?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400">
            Let's build a modern website that attracts customers,
            increases conversions and grows your business.
          </p>

          <Button size="lg" className="mt-10">
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}