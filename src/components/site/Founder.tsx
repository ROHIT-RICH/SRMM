import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Cloud } from "lucide-react";
import founder from "@/assets/founder.png";
import cofounder from "@/assets/co-founder.png";

type Leader = {
  name: string;
  role: string;
  bio: string;
  expertise: { icon: typeof Code2; label: string }[];
  stack: string[];
  image?: string;
  initials: string;
};

const leaders: Leader[] = [
  {
    name: "Rohit Vaishya",
    role: "Founder & Full Stack Developer",
    bio: "Builds production software end-to-end — from architecture and infrastructure to the last pixel. Obsessed with shipping systems that businesses actually depend on.",
    expertise: [
      { icon: Code2, label: "Full Stack Architecture" },
      { icon: Database, label: "Multi-tenant SaaS" },
      { icon: Cloud, label: "Cloud & DevOps" },
    ],
    stack: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Next.js"],
    image: founder,
    initials: "RV",
  },
  {
    name: "Varha Dhaketa",
    role: "Co-Founder & Full Stack Developer",
    bio: "Leads product engineering across web and mobile. Translates real operational workflows into resilient, beautifully crafted product experiences.",
    expertise: [
      { icon: Code2, label: "Product Engineering" },
      { icon: Smartphone, label: "Mobile (React Native)" },
      { icon: Database, label: "API & Data Modeling" },
    ],
    stack: ["React", "React Native", "TypeScript", "Express", "PostgreSQL", "Tailwind"],
    image: cofounder,
    initials: "VD",
  },
];

export function Founder() {
  return (
    <section id="leadership" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-edges opacity-30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full liquid-glass px-3 py-1 text-[11px] uppercase tracking-widest text-[#00E5FF]">
            Leadership
          </div>
          <h2 className="mt-4 text-4xl tracking-tight text-white sm:text-5xl">
            <span className="font-extrabold">The operators</span>{" "}
            <span className="font-serif italic text-gradient">behind SRM.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            A small, senior team that designs, builds and operates every product we ship.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {leaders.map((l, i) => (
            <LeaderCard key={l.name} leader={l} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LeaderCard({ leader, index }: { leader: Leader; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8"
    >
      <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-[#2563ff]/25 blur-3xl transition-opacity group-hover:opacity-100" />
      <div className="flex items-start gap-5">
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-elevated sm:h-24 sm:w-24">
          {leader.image ? (
            <img
              src={leader.image}
              alt={leader.name}
              loading="lazy"
              className="block h-full w-full object-cover"
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-gradient-accent text-2xl font-extrabold text-[#050816]">
              {leader.initials}
            </div>
          )}
        </div>
        <div className="min-w-0">
          <div className="text-xl font-semibold text-white sm:text-2xl">{leader.name}</div>
          <div className="mt-1 text-sm text-[#00E5FF]">{leader.role}</div>
          <p className="mt-3 text-sm text-white/80">{leader.bio}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {leader.expertise.map((e) => {
          const Icon = e.icon;
          return (
            <div
              key={e.label}
              className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2"
            >
              <Icon className="h-3.5 w-3.5 text-[#00E5FF]" />
              <span className="text-xs text-white/85">{e.label}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-5">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Stack
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {leader.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-white/80"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
