import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Users, LineChart, Car, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { CanvasParticles } from "../CanvasParticles";
import { AnimatedVideoBackground } from "../AnimatedVideoBackground";

const metrics = [
  { v: "50+", l: "Enterprise deployments" },
  { v: "12M+", l: "Records processed daily" },
  { v: "99.95%", l: "Platform uptime" },
  { v: "5", l: "Countries served" },
];

const floats = [
  { icon: Users, label: "SRM HRMS", sub: "Payroll processed · 1,284 employees", tint: "from-[#2563ff] to-[#00e5ff]", x: "-58%", y: "-30%", delay: 0 },
  { icon: LineChart, label: "SRM CRM", sub: "+38% pipeline this week", tint: "from-[#00e5ff] to-[#2563ff]", x: "55%", y: "-22%", delay: 0.15 },
  { icon: Car, label: "AutoDealer ERP", sub: "VIN #4G2KX synced · profit ₹1.2L", tint: "from-[#2563ff] to-[#00e5ff]", x: "-50%", y: "38%", delay: 0.3 },
  { icon: ShoppingBag, label: "Wholesale", sub: "Order #18342 · ready to ship", tint: "from-[#00e5ff] to-[#2563ff]", x: "52%", y: "42%", delay: 0.45 },
];

// Particle component
const Particle = ({ delay }: { delay: number }) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomDuration = 8 + Math.random() * 8;
  const randomSize = 1 + Math.random() * 3;
  
  return (
    <motion.div
      initial={{ 
        x: randomX, 
        y: randomY - 50, 
        opacity: 0,
        scale: 0
      }}
      animate={{ 
        x: randomX + (Math.random() - 0.5) * 100, 
        y: randomY + 100, 
        opacity: [0, 1, 0.5, 0],
        scale: 1
      }}
      transition={{
        duration: randomDuration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute rounded-full bg-gradient-to-br from-[#00e5ff] to-[#2563ff]"
      style={{
        width: randomSize,
        height: randomSize,
        filter: 'blur(0.5px)',
      }}
    />
  );
};

export function Hero() {
  const [particles, setParticles] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Generate particles on mount
    setParticles(Array.from({ length: 40 }, (_, i) => i));
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // mouse-reactive parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const tx = useTransform(sx, (v) => v * 14);
  const ty = useTransform(sy, (v) => v * 14);
  const txInv = useTransform(sx, (v) => v * -10);
  const tyInv = useTransform(sy, (v) => v * -10);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden pt-24 pb-20 sm:pt-40 sm:pb-24"
    >
      {/* Animated Video Background */}
      <AnimatedVideoBackground />
      
      {/* Canvas Particle System */}
      <CanvasParticles count={isMobile ? 25 : 50} mobile={isMobile} />

      {/* Particle field */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <AnimatePresence>
          {!isMobile && particles.map((i) => (
            <Particle key={i} delay={i * 0.05} />
          ))}
        </AnimatePresence>
      </div>

      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[800px] bg-radial-glow" />
      
      {/* Enhanced animated background blobs */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-[#2563ff]/25 blur-[160px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ x: txInv, y: tyInv }}
        className="pointer-events-none absolute -bottom-40 right-0 h-[480px] w-[480px] rounded-full bg-[#00E5FF]/15 blur-[140px]"
      />
      
      {/* Extra animated accent blob */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-[#00E5FF]/20 blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8" style={{ zIndex: 20, position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto flex w-fit items-center gap-2 rounded-full liquid-glass px-3.5 py-1.5 text-xs text-muted-foreground"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-[#00E5FF]" />
          </motion.div>
          Custom software · SaaS · Automation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-7 max-w-5xl text-center text-5xl leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-semibold inline-block"
          >
            Smart software.
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif italic text-gradient inline-block"
          >
            Real results.
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-semibold inline-block"
          >
            Built for operators.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-7 max-w-2xl text-center text-base text-muted-foreground sm:text-lg"
        >
          SRM Innovations engineers HRMS, CRM, ERP and SaaS platforms that
          automate operations, cut overhead and scale revenue — for businesses
          that measure outcomes, not features.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="#products"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-[#050816] shadow-[0_10px_40px_-8px_rgba(0,229,255,0.55)] transition-all sm:w-auto"
          >
            Explore the platform
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full liquid-glass px-6 py-3 text-sm font-semibold text-white transition-all sm:w-auto"
          >
            Schedule consultation
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 sm:mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
        >
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-1.5"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-[#00E5FF]" /> Enterprise security
          </motion.span>
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="inline-flex items-center gap-1.5"
          >
            <Zap className="h-3.5 w-3.5 text-[#00E5FF]" /> 99.95% uptime SLA
          </motion.span>
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          >
            SOC-ready architecture · GDPR aware
          </motion.span>
        </motion.div>

          {/* cinematic product canvas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative mx-auto mt-20 h-[440px] w-full max-w-5xl sm:h-[520px] hidden sm:block"
          >
            {/* concentric orbits */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-white/[0.06]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border border-white/[0.05]"
              />
              <div className="absolute inset-32 rounded-full border border-dashed border-[#00E5FF]/15 animate-orbit" />
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 80px rgba(37, 99, 255, 0.15)",
                    "0 0 120px rgba(0, 229, 255, 0.25)",
                    "0 0 80px rgba(37, 99, 255, 0.15)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-[#2563ff]/15 blur-[120px]"
              />
            </div>

          {/* center dashboard mock */}
          <motion.div
            style={{ x: tx, y: ty }}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="absolute left-1/2 top-1/2 w-[min(560px,90%)] -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 40px rgba(0, 229, 255, 0.1)",
                  "0 0 80px rgba(0, 229, 255, 0.25)",
                  "0 0 40px rgba(0, 229, 255, 0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="rounded-2xl liquid-glass p-5 shadow-elevated"
            >
              <div className="flex items-center gap-1.5">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2.5 w-2.5 rounded-full bg-white/15"
                />
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="h-2.5 w-2.5 rounded-full bg-white/15"
                />
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  className="h-2.5 w-2.5 rounded-full bg-white/15"
                />
                <span className="ml-3 text-[11px] uppercase tracking-widest text-muted-foreground">
                  srm · unified console
                </span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { l: "Active automations", v: "1,284", d: 75 },
                  { l: "Pipeline value", v: "$2.4M", d: 62 },
                  { l: "Avg. response", v: "1.2s", d: 88 },
                ].map((s, idx) => (
                  <motion.div
                    key={s.l}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="rounded-xl bg-white/[0.03] p-3 ring-border-soft"
                  >
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {s.l}
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                      className="mt-1 text-xl font-bold text-white"
                    >
                      {s.v}
                    </motion.div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${s.d}%` }}
                        transition={{ duration: 1.2, delay: 0.7 + idx * 0.1 }}
                        className="h-full bg-gradient-accent"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-12 items-end gap-1.5">
                {Array.from({ length: 24 }).map((_, i) => {
                  const h = 16 + ((i * 37) % 60);
                  return (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.8 + i * 0.015, duration: 0.4 }}
                      style={{ height: h, transformOrigin: "bottom" }}
                      className="rounded-sm bg-gradient-to-t from-[#2563ff]/70 to-[#00E5FF]/70"
                    />
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* floating product cards */}
          {floats.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.6 + f.delay, duration: 0.5 }}
                style={{
                  left: `calc(50% + ${f.x})`,
                  top: `calc(50% + ${f.y})`,
                }}
                className="absolute hidden -translate-x-1/2 -translate-y-1/2 md:block"
              >
                <motion.div
                  animate={{ y: [0, i % 2 ? 8 : -8, 0] }}
                  transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.08, y: -15 }}
                  className="w-56 rounded-2xl liquid-glass p-3.5 cursor-pointer transition-all"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(0, 229, 255, 0.1)",
                        "0 0 40px rgba(0, 229, 255, 0.2)",
                        "0 0 20px rgba(0, 229, 255, 0.1)",
                      ],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="flex items-center gap-2.5"
                  >
                    <div className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${f.tint} text-[#050816]`}>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="grid place-items-center"
                      >
                        <Icon className="h-4.5 w-4.5" strokeWidth={2.4} />
                      </motion.div>
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-white">{f.label}</div>
                      <div className="truncate text-[10.5px] text-muted-foreground">{f.sub}</div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-[200px] sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/5"
          >
            {metrics.map((m, i) => (
              <motion.div
                key={m.l}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#070b1a]/80 p-6 text-center backdrop-blur"
              >
                <motion.div
                
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  className="text-3xl font-semibold text-white"
                >
                  {m.v}
                </motion.div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {m.l}
                </div>
              </motion.div>
            ))}
          </motion.div>
      </div>
    </section>
  );
}
