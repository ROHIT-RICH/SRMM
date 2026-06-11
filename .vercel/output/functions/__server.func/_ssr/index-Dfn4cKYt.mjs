import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Nav, F as Footer, h as hrmsImage, c as crmImage, d as dealerImage, w as wholesaleImage } from "./Footer-Du5ITjHk.mjs";
import { u as useMotionValue, a as useSpring, b as useTransform, A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { S as Sparkles, A as ArrowRight, c as ShieldCheck, Z as Zap, U as Users, d as ChartLine, e as Car, f as ShoppingBag, g as Boxes, h as ShoppingCart, i as Bell, j as ChartColumn, k as Smartphone, l as CodeXml, G as Globe, m as Cloud, a as TrendingUp, n as Settings2, W as Workflow, T as Target, L as Layers, o as Lock, p as Cpu, q as LifeBuoy, H as Handshake, D as Database, r as Calendar, s as MessageCircle, M as Mail, t as Check } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function CanvasParticles({ count = 50, mobile = false }) {
  const canvasRef = reactExports.useRef(null);
  const particlesRef = reactExports.useRef([]);
  const animationRef = reactExports.useRef(null);
  const isMobileRef = reactExports.useRef(mobile);
  reactExports.useEffect(() => {
    isMobileRef.current = mobile;
  }, [mobile]);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const initParticles = () => {
      const particleCount = isMobileRef.current ? count / 2 : count;
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        color: ["#00e5ff", "#2563ff", "#06ffa5"][Math.floor(Math.random() * 3)]
      }));
    };
    initParticles();
    const animate = () => {
      ctx.fillStyle = "rgba(5, 8, 22, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        gradient.addColorStop(0, `${particle.color}80`);
        gradient.addColorStop(1, `${particle.color}00`);
        ctx.fillStyle = gradient;
        ctx.fillRect(
          particle.x - particle.size * 3,
          particle.y - particle.size * 3,
          particle.size * 6,
          particle.size * 6
        );
        ctx.fillStyle = `${particle.color}${Math.round(particle.opacity * 255).toString(16).padStart(2, "0")}`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        for (let i = index + 1; i < particlesRef.current.length; i++) {
          const other = particlesRef.current[i];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [count]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "absolute inset-0 pointer-events-none",
      style: {
        background: "transparent",
        zIndex: 0
      }
    }
  );
}
function AnimatedVideoBackground() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#070b1a] via-[#0a1e3a] to-[#050816]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#050816]/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(0, 229, 255, 0.03) 2px,
              rgba(0, 229, 255, 0.03) 4px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(37, 99, 255, 0.03) 2px,
              rgba(37, 99, 255, 0.03) 4px
            )
          `,
          animation: "shift-bg 20s linear infinite"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        className: "absolute inset-0 opacity-20",
        viewBox: "0 0 1200 600",
        preserveAspectRatio: "none",
        style: { animation: "wave-animation 8s ease-in-out infinite" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "wave-gradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "rgba(0, 229, 255, 0.3)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "rgba(37, 99, 255, 0.1)" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z",
              fill: "url(#wave-gradient)",
              style: {
                filter: "blur(2px)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M0,350 Q300,250 600,350 T1200,350 L1200,600 L0,600 Z",
              fill: "rgba(0, 229, 255, 0.1)",
              style: {
                filter: "blur(1px)",
                animation: "wave-move 15s linear infinite"
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes shift-bg {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
        
        @keyframes wave-animation {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(20px) scaleY(1.1); }
        }
        
        @keyframes wave-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(1200px); }
        }
      ` })
  ] });
}
const metrics = [
  { v: "50+", l: "Enterprise deployments" },
  { v: "12M+", l: "Records processed daily" },
  { v: "99.95%", l: "Platform uptime" },
  { v: "5", l: "Countries served" }
];
const floats = [
  { icon: Users, label: "SRM HRMS", sub: "Payroll processed · 1,284 employees", tint: "from-[#2563ff] to-[#00e5ff]", x: "-58%", y: "-30%", delay: 0 },
  { icon: ChartLine, label: "SRM CRM", sub: "+38% pipeline this week", tint: "from-[#00e5ff] to-[#2563ff]", x: "55%", y: "-22%", delay: 0.15 },
  { icon: Car, label: "AutoDealer ERP", sub: "VIN #4G2KX synced · profit ₹1.2L", tint: "from-[#2563ff] to-[#00e5ff]", x: "-50%", y: "38%", delay: 0.3 },
  { icon: ShoppingBag, label: "Wholesale", sub: "Order #18342 · ready to ship", tint: "from-[#00e5ff] to-[#2563ff]", x: "52%", y: "42%", delay: 0.45 }
];
const Particle = ({ delay }) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomDuration = 8 + Math.random() * 8;
  const randomSize = 1 + Math.random() * 3;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: {
        x: randomX,
        y: randomY - 50,
        opacity: 0,
        scale: 0
      },
      animate: {
        x: randomX + (Math.random() - 0.5) * 100,
        y: randomY + 100,
        opacity: [0, 1, 0.5, 0],
        scale: 1
      },
      transition: {
        duration: randomDuration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      },
      className: "absolute rounded-full bg-gradient-to-br from-[#00e5ff] to-[#2563ff]",
      style: {
        width: randomSize,
        height: randomSize,
        filter: "blur(0.5px)"
      }
    }
  );
};
function Hero() {
  const [particles, setParticles] = reactExports.useState([]);
  const [isMobile, setIsMobile] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    setParticles(Array.from({ length: 40 }, (_, i) => i));
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const tx = useTransform(sx, (v) => v * 14);
  const ty = useTransform(sy, (v) => v * 14);
  const txInv = useTransform(sx, (v) => v * -10);
  const tyInv = useTransform(sy, (v) => v * -10);
  reactExports.useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth * 2 - 1;
      const y = e.clientY / window.innerHeight * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative min-h-screen overflow-hidden pt-24 pb-20 sm:pt-40 sm:pb-24",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedVideoBackground, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CanvasParticles, { count: isMobile ? 25 : 50, mobile: isMobile }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !isMobile && particles.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Particle, { delay: i * 0.05 }, i)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[800px] bg-radial-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: {
              x: [0, 30, -30, 0],
              y: [0, -40, 40, 0]
            },
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            },
            className: "pointer-events-none absolute -top-40 left-1/2 h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-[#2563ff]/25 blur-[160px]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: {
              x: [0, -40, 40, 0],
              y: [0, 50, -50, 0]
            },
            transition: {
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            },
            style: { x: txInv, y: tyInv },
            className: "pointer-events-none absolute -bottom-40 right-0 h-[480px] w-[480px] rounded-full bg-[#00E5FF]/15 blur-[140px]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: {
              x: [0, 50, -50, 0],
              y: [0, -30, 30, 0]
            },
            transition: {
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            },
            className: "pointer-events-none absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-[#00E5FF]/20 blur-[140px]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-7xl px-5 sm:px-8", style: { zIndex: 20, position: "relative" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.4 },
              className: "mx-auto flex w-fit items-center gap-2 rounded-full liquid-glass px-3.5 py-1.5 text-xs text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    animate: { rotate: 360 },
                    transition: { duration: 3, repeat: Infinity, ease: "linear" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-[#00E5FF]" })
                  }
                ),
                "Custom software · SaaS · Automation"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.05 },
              className: "mx-auto mt-7 max-w-5xl text-center text-5xl leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.6, delay: 0.1 },
                    className: "font-semibold inline-block",
                    children: "Smart software."
                  }
                ),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.6, delay: 0.15 },
                    className: "font-serif italic text-gradient inline-block",
                    children: "Real results."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.2 },
                    className: "font-semibold inline-block",
                    children: "Built for operators."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.25 },
              className: "mx-auto mt-7 max-w-2xl text-center text-base text-muted-foreground sm:text-lg",
              children: "SRM Innovations engineers HRMS, CRM, ERP and SaaS platforms that automate operations, cut overhead and scale revenue — for businesses that measure outcomes, not features."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.3 },
              className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.a,
                  {
                    whileHover: { scale: 1.05, y: -5 },
                    whileTap: { scale: 0.95 },
                    href: "#products",
                    className: "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-[#050816] shadow-[0_10px_40px_-8px_rgba(0,229,255,0.55)] transition-all sm:w-auto",
                    children: [
                      "Explore the platform",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          animate: { x: [0, 4, 0] },
                          transition: { duration: 1.5, repeat: Infinity },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.a,
                  {
                    whileHover: { scale: 1.05, y: -5 },
                    whileTap: { scale: 0.95 },
                    href: "#contact",
                    className: "inline-flex w-full items-center justify-center gap-2 rounded-full liquid-glass px-6 py-3 text-sm font-semibold text-white transition-all sm:w-auto",
                    children: "Schedule consultation"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.4, duration: 0.5 },
              className: "mt-12 sm:mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.span,
                  {
                    animate: { y: [0, -3, 0] },
                    transition: { duration: 2, repeat: Infinity },
                    className: "inline-flex items-center gap-1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-[#00E5FF]" }),
                      " Enterprise security"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.span,
                  {
                    animate: { y: [0, -3, 0] },
                    transition: { duration: 2, repeat: Infinity, delay: 0.2 },
                    className: "inline-flex items-center gap-1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5 text-[#00E5FF]" }),
                      " 99.95% uptime SLA"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    animate: { y: [0, -3, 0] },
                    transition: { duration: 2, repeat: Infinity, delay: 0.4 },
                    children: "SOC-ready architecture · GDPR aware"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.3, duration: 0.6 },
              className: "relative mx-auto mt-20 h-[440px] w-full max-w-5xl sm:h-[520px] hidden sm:block",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-1/2 top-1/2 -z-10 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      animate: { rotate: 360 },
                      transition: { duration: 30, repeat: Infinity, ease: "linear" },
                      className: "absolute inset-0 rounded-full border border-white/[0.06]"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      animate: { rotate: -360 },
                      transition: { duration: 40, repeat: Infinity, ease: "linear" },
                      className: "absolute inset-16 rounded-full border border-white/[0.05]"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-32 rounded-full border border-dashed border-[#00E5FF]/15 animate-orbit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      animate: {
                        boxShadow: [
                          "0 0 80px rgba(37, 99, 255, 0.15)",
                          "0 0 120px rgba(0, 229, 255, 0.25)",
                          "0 0 80px rgba(37, 99, 255, 0.15)"
                        ]
                      },
                      transition: { duration: 4, repeat: Infinity },
                      className: "absolute inset-0 rounded-full bg-[#2563ff]/15 blur-[120px]"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    style: { x: tx, y: ty },
                    initial: { opacity: 0, y: 30, scale: 0.96 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    transition: { duration: 0.7, delay: 0.35 },
                    className: "absolute left-1/2 top-1/2 w-[min(560px,90%)] -translate-x-1/2 -translate-y-1/2",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        animate: {
                          boxShadow: [
                            "0 0 40px rgba(0, 229, 255, 0.1)",
                            "0 0 80px rgba(0, 229, 255, 0.25)",
                            "0 0 40px rgba(0, 229, 255, 0.1)"
                          ]
                        },
                        transition: { duration: 3, repeat: Infinity },
                        className: "rounded-2xl liquid-glass p-5 shadow-elevated",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.span,
                              {
                                animate: { scale: [1, 1.2, 1] },
                                transition: { duration: 2, repeat: Infinity },
                                className: "h-2.5 w-2.5 rounded-full bg-white/15"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.span,
                              {
                                animate: { scale: [1, 1.2, 1] },
                                transition: { duration: 2, repeat: Infinity, delay: 0.3 },
                                className: "h-2.5 w-2.5 rounded-full bg-white/15"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.span,
                              {
                                animate: { scale: [1, 1.2, 1] },
                                transition: { duration: 2, repeat: Infinity, delay: 0.6 },
                                className: "h-2.5 w-2.5 rounded-full bg-white/15"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-[11px] uppercase tracking-widest text-muted-foreground", children: "srm · unified console" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-3 gap-3", children: [
                            { l: "Active automations", v: "1,284", d: 75 },
                            { l: "Pipeline value", v: "$2.4M", d: 62 },
                            { l: "Avg. response", v: "1.2s", d: 88 }
                          ].map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              initial: { opacity: 0, y: 10 },
                              animate: { opacity: 1, y: 0 },
                              transition: { delay: 0.5 + idx * 0.1 },
                              className: "rounded-xl bg-white/[0.03] p-3 ring-border-soft",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: s.l }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  motion.div,
                                  {
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    transition: { delay: 0.6 + idx * 0.1, duration: 0.5 },
                                    className: "mt-1 text-xl font-bold text-white",
                                    children: s.v
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  motion.div,
                                  {
                                    initial: { width: 0 },
                                    animate: { width: `${s.d}%` },
                                    transition: { duration: 1.2, delay: 0.7 + idx * 0.1 },
                                    className: "h-full bg-gradient-accent"
                                  }
                                ) })
                              ]
                            },
                            s.l
                          )) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-12 items-end gap-1.5", children: Array.from({ length: 24 }).map((_, i) => {
                            const h = 16 + i * 37 % 60;
                            return /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.div,
                              {
                                initial: { scaleY: 0 },
                                animate: { scaleY: 1 },
                                transition: { delay: 0.8 + i * 0.015, duration: 0.4 },
                                style: { height: h, transformOrigin: "bottom" },
                                className: "rounded-sm bg-gradient-to-t from-[#2563ff]/70 to-[#00E5FF]/70"
                              },
                              i
                            );
                          }) })
                        ]
                      }
                    )
                  }
                ),
                floats.map((f, i) => {
                  const Icon = f.icon;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, scale: 0.85, y: 20 },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      transition: { delay: 0.6 + f.delay, duration: 0.5 },
                      style: {
                        left: `calc(50% + ${f.x})`,
                        top: `calc(50% + ${f.y})`
                      },
                      className: "absolute hidden -translate-x-1/2 -translate-y-1/2 md:block",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          animate: { y: [0, i % 2 ? 8 : -8, 0] },
                          transition: { duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
                          whileHover: { scale: 1.08, y: -15 },
                          className: "w-56 rounded-2xl liquid-glass p-3.5 cursor-pointer transition-all",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              animate: {
                                boxShadow: [
                                  "0 0 20px rgba(0, 229, 255, 0.1)",
                                  "0 0 40px rgba(0, 229, 255, 0.2)",
                                  "0 0 20px rgba(0, 229, 255, 0.1)"
                                ]
                              },
                              transition: { duration: 2.5, repeat: Infinity },
                              className: "flex items-center gap-2.5",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${f.tint} text-[#050816]`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  motion.div,
                                  {
                                    animate: { rotate: 360 },
                                    transition: { duration: 4, repeat: Infinity, ease: "linear" },
                                    className: "grid place-items-center",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4.5 w-4.5", strokeWidth: 2.4 })
                                  }
                                ) }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-semibold text-white", children: f.label }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-[10.5px] text-muted-foreground", children: f.sub })
                                ] })
                              ]
                            }
                          )
                        }
                      )
                    },
                    f.label
                  );
                })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              className: "mt-[200px] sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/5",
              children: metrics.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: i * 0.08 },
                  className: "bg-[#070b1a]/80 p-6 text-center backdrop-blur",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        transition: { duration: 2, repeat: Infinity, delay: i * 0.2 },
                        className: "text-3xl font-semibold text-white",
                        children: m.v
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground", children: m.l })
                  ]
                },
                m.l
              ))
            }
          )
        ] })
      ]
    }
  );
}
const products = [
  {
    tag: "HRMS Platform",
    name: "SRM HRMS",
    tagline: "Run your entire people operation on one platform.",
    description: "Multi-tenant HRMS that unifies attendance, payroll, leave and employee lifecycle for distributed teams across branches and regions.",
    features: [
      "Employee & branch management",
      "Attendance and biometric sync",
      "Automated payroll runs",
      "Leave and approvals engine",
      "Role-based access control",
      "Multi-tenant architecture"
    ],
    image: hrmsImage
  },
  {
    tag: "Revenue OS",
    name: "SRM CRM",
    tagline: "From first touch to closed-won, in one pipeline.",
    description: "A modern CRM built for sales teams that need real visibility — lead routing, deal stages, customer history and reporting that drives revenue.",
    features: [
      "Lead capture and routing",
      "Deal pipeline & forecasting",
      "Customer 360 timeline",
      "Sales dashboards",
      "Team collaboration",
      "WhatsApp & email integration"
    ],
    image: crmImage,
    reverse: true
  },
  {
    tag: "Dealer ERP",
    name: "AutoDealer ERP",
    tagline: "Built for dealerships that move serious volume.",
    description: "End-to-end dealership management — vehicle inventory, purchases, sales, expenses and profitability — replacing four disconnected tools.",
    features: [
      "Vehicle inventory & VIN tracking",
      "Purchase management",
      "Sales & invoicing",
      "Expense tracking",
      "Profit & loss reporting",
      "Customer & finance records"
    ],
    image: dealerImage
  },
  {
    tag: "Mobile Commerce",
    name: "Wholesale Commerce Platform",
    tagline: "A native mobile ordering channel for B2B sellers.",
    description: "Mobile-first wholesale platform with a customer app, admin panel, order workflow and inventory — purpose-built for distributors and wholesalers.",
    features: [
      "Native customer mobile app",
      "Product catalog & pricing tiers",
      "Order management",
      "Inventory & stock alerts",
      "Admin control panel",
      "Customer accounts & history"
    ],
    image: wholesaleImage,
    reverse: true
  }
];
function Products() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "products", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Products",
        title: "Software that ships, scales and gets used every day.",
        subtitle: "Four production platforms powering operations, sales and commerce across India, the US, UK, Australia and Canada."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 space-y-28", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        id: p.name === "SRM HRMS" ? "hrms" : p.name === "SRM CRM" ? "crm" : p.name === "AutoDealer ERP" ? "autodealer" : "wholesale",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductRow, { product: p })
      },
      p.name
    )) })
  ] }) });
}
function ProductRow({ product }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${product.reverse ? "lg:[&>*:first-child]:order-2" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-widest text-[#00E5FF]", children: product.tag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-3xl font-extrabold text-white sm:text-4xl", children: product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-lg text-white/80", children: product.tagline }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: product.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2", children: product.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2.5 text-sm text-white/85",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#2563ff]/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-[#00E5FF]" }) }),
                    f
                  ]
                },
                f
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#contact",
                    className: "inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#050816] transition-transform hover:scale-[1.02]",
                    children: "Request a demo"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#contact",
                    className: "inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/[0.05]",
                    children: "Talk to sales"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.7 },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 -z-10 rounded-3xl bg-[#2563ff]/20 blur-3xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1c] shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: product.image,
                  alt: `${product.name} interface`,
                  loading: "lazy",
                  width: 1920,
                  height: 1080,
                  className: "block w-full transition-transform duration-700 hover:scale-[1.02]"
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: center ? "mx-auto max-w-3xl text-center" : "max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-widest text-[#00E5FF]", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground sm:text-lg", children: subtitle })
  ] });
}
const nodes = [
  { key: "hrms", label: "SRM HRMS", sub: "People OS", icon: Users, angle: 0 },
  { key: "crm", label: "SRM CRM", sub: "Revenue OS", icon: ChartLine, angle: 90 },
  { key: "erp", label: "AutoDealer ERP", sub: "Dealer OS", icon: Car, angle: 180 },
  { key: "wholesale", label: "Wholesale", sub: "Commerce OS", icon: ShoppingBag, angle: 270 }
];
function Ecosystem() {
  const R = 210;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "ecosystem", className: "relative py-24 sm:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-grid mask-fade-edges opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563ff]/15 blur-[140px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "The Product Ecosystem",
          title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "One ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient", children: "connected " }),
            " operating system for your business"
          ] }),
          subtitle: "HRMS, CRM, ERP and Commerce — designed to share data, automate workflows and scale together."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col gap-4 sm:hidden", children: [
        nodes.map((n, i) => {
          const Icon = n.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-2xl liquid-glass p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-accent text-[#050816]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-white", children: n.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: n.sub })
                ] })
              ] }) })
            },
            n.key
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid h-24 w-24 place-items-center rounded-3xl liquid-glass", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Boxes, { className: "h-7 w-7 text-[#00E5FF]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground", children: "SRM Platform" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto mt-20 hidden h-[560px] w-full max-w-[560px] sm:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full border border-white/[0.06]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-10 rounded-full border border-white/[0.05]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-24 rounded-full border border-white/[0.04]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-full border border-dashed border-[#00E5FF]/20 animate-orbit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            viewBox: "-280 -280 560 560",
            className: "absolute inset-0 h-full w-full",
            "aria-hidden": true,
            children: [
              nodes.map((n) => {
                const rad = n.angle * Math.PI / 180;
                const x = Math.cos(rad) * R;
                const y = Math.sin(rad) * R;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "0",
                    y1: "0",
                    x2: x,
                    y2: y,
                    stroke: "url(#flowGrad)",
                    strokeWidth: "1.5",
                    className: "animate-flow"
                  },
                  n.key
                );
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "flowGrad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#00E5FF", stopOpacity: "0.9" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#2563FF", stopOpacity: "0.3" })
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scale: 0.85, opacity: 0 },
            whileInView: { scale: 1, opacity: 1 },
            viewport: { once: true },
            transition: { duration: 0.7 },
            className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid h-32 w-32 place-items-center rounded-3xl liquid-glass", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Boxes, { className: "h-8 w-8 text-[#00E5FF]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-9 whitespace-nowrap text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground", children: "SRM Platform" })
            ] })
          }
        ),
        nodes.map((n, i) => {
          const rad = n.angle * Math.PI / 180;
          const x = Math.cos(rad) * R;
          const y = Math.sin(rad) * R;
          const Icon = n.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.6 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: {
                delay: 0.15 + i * 0.1,
                duration: 0.6
              },
              style: {
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`
              },
              className: "absolute -translate-x-1/2 -translate-y-1/2",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-3 rounded-2xl bg-[#2563ff]/30 opacity-0 blur-xl transition-opacity group-hover:opacity-100" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex w-44 items-center gap-3 rounded-2xl liquid-glass p-3.5 transition-transform group-hover:-translate-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-accent text-[#050816]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-semibold text-white", children: n.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-[11px] uppercase tracking-wider text-muted-foreground", children: n.sub })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-pulse-soft" })
                ] })
              ] })
            },
            n.key
          );
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground", children: "Unified identity, shared data layer, single audit trail — switch on what you need, scale into the rest." })
    ] })
  ] });
}
const flows = [
  {
    id: "hrms",
    product: "SRM HRMS",
    tag: "People OS",
    icon: Users,
    steps: [
      { label: "Employee Created", meta: "EMP-4821 · Engineering" },
      { label: "Attendance Marked", meta: "Biometric · 09:02 AM" },
      { label: "Leave Approved", meta: "2 days · Manager · auto" },
      { label: "Payroll Generated", meta: "₹84,200 · Nov 2025" }
    ]
  },
  {
    id: "crm",
    product: "SRM CRM",
    tag: "Revenue OS",
    icon: ChartLine,
    steps: [
      { label: "Lead Created", meta: "Acme Corp · inbound form" },
      { label: "Lead Qualified", meta: "BANT · score 87" },
      { label: "Proposal Sent", meta: "v2 · $48,000 ARR" },
      { label: "Deal Won", meta: "Closed-won · 14 days" }
    ]
  },
  {
    id: "erp",
    product: "AutoDealer ERP",
    tag: "Dealer OS",
    icon: Car,
    steps: [
      { label: "Vehicle Purchased", meta: "VIN 4G2KX · ₹6.8L" },
      { label: "Inventory Updated", meta: "Lot A-12 · ready" },
      { label: "Vehicle Sold", meta: "Invoice INV-2204" },
      { label: "Profit Generated", meta: "+₹1.2L · 17.6%" }
    ]
  },
  {
    id: "wholesale",
    product: "Wholesale Commerce",
    tag: "Commerce OS",
    icon: ShoppingBag,
    steps: [
      { label: "Order Placed", meta: "#18342 · 24 SKUs" },
      { label: "Inventory Updated", meta: "Stock synced · WH-2" },
      { label: "Customer Notified", meta: "WhatsApp + email" },
      { label: "Admin Updated", meta: "Dashboard · realtime" }
    ]
  }
];
function WorkflowShowcase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "workflows", className: "relative py-24 sm:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-dots opacity-30 mask-fade-edges" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "Live Workflows",
          title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Real workflows.",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient", children: "Real outcomes." })
          ] }),
          subtitle: "A glimpse into what runs every day on SRM products — across HR, sales, dealerships and commerce."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-5 md:grid-cols-2", children: flows.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FlowCard, { flow: f, index: i }, f.id)) })
    ] })
  ] });
}
function FlowCard({ flow, index }) {
  const Icon = flow.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6, delay: index * 0.06 },
      className: "relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-[#2563ff]/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent text-[#050816]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold text-white", children: flow.product }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest text-[#00E5FF]", children: flow.tag })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-pulse-soft" }),
            "Live"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "relative mt-7 space-y-4 pl-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00E5FF]/60 via-[#2563ff]/40 to-transparent" }),
          flow.steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.li,
            {
              initial: { opacity: 0, x: -10 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: 0.2 + i * 0.18 },
              className: "relative",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    initial: { scale: 0.5, opacity: 0 },
                    whileInView: { scale: 1, opacity: 1 },
                    viewport: { once: true },
                    transition: { delay: 0.25 + i * 0.18, type: "spring", stiffness: 220 },
                    className: "absolute -left-7 top-0.5 grid h-5 w-5 place-items-center rounded-full bg-gradient-accent text-[#050816] shadow-[0_0_20px_rgba(0,229,255,0.35)]",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3", strokeWidth: 3 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-white", children: s.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.meta })
              ]
            },
            s.label
          ))
        ] })
      ]
    }
  );
}
const callouts = [
  { icon: ShoppingCart, title: "Native checkout", desc: "Cart, orders, payments — fully native." },
  { icon: Bell, title: "Push automations", desc: "Stock alerts, order status, promotions." },
  { icon: ChartColumn, title: "Live inventory", desc: "Real-time sync with admin panel." },
  { icon: Smartphone, title: "Offline-first", desc: "Field-ready, syncs when reconnected." }
];
function Mobile() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 sm:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-radial-glow opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "Mobile Apps",
          title: "Production-grade mobile experiences.",
          subtitle: "React Native apps that look native, perform native and ship to Play Store and App Store with confidence."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid items-center gap-12 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { duration: 0.7 },
            className: "relative flex justify-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-[#2563ff]/30 blur-[100px]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.img,
                {
                  animate: { y: [0, -14, 0] },
                  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  src: wholesaleImage,
                  alt: "Wholesale commerce mobile app",
                  loading: "lazy",
                  width: 1600,
                  height: 900,
                  className: "w-full max-w-md rounded-2xl border border-white/10 shadow-elevated"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: callouts.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            className: "glass rounded-xl p-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-accent text-[#050816]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-base font-semibold text-white", children: c.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: c.desc })
            ]
          },
          c.title
        )) })
      ] })
    ] })
  ] });
}
const services = [
  { icon: CodeXml, name: "Custom Software Development", desc: "Bespoke platforms engineered for your operating model." },
  { icon: Globe, name: "Web Development", desc: "High-performance React applications and marketing sites." },
  { icon: Smartphone, name: "Mobile App Development", desc: "React Native apps for iOS and Android, single codebase." },
  { icon: Cloud, name: "SaaS Development", desc: "Multi-tenant SaaS products, from MVP to scale." },
  { icon: Users, name: "HRMS Development", desc: "Attendance, payroll and people ops platforms." },
  { icon: TrendingUp, name: "CRM Development", desc: "Sales pipelines, customer 360, revenue dashboards." },
  { icon: Settings2, name: "ERP Solutions", desc: "Operations, inventory, finance and reporting." },
  { icon: Workflow, name: "Business Automation", desc: "Workflow engines that remove manual overhead." }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Services",
        title: "Engineering teams plug in across the entire stack.",
        subtitle: "From discovery to long-term partnership — one team, accountable for outcomes."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.04 },
        className: "group relative bg-[#070b1a] p-6 transition-colors hover:bg-[#0b1226]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#2563ff]/30 to-[#00e5ff]/10 text-[#00E5FF] transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-base font-semibold text-white", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: s.desc })
        ]
      },
      s.name
    )) })
  ] }) });
}
const groups = [
  { label: "Frontend", items: ["React", "TypeScript", "Tailwind", "Next.js"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT"] },
  { label: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"] },
  { label: "Mobile", items: ["React Native", "Expo", "Push", "OTA"] },
  { label: "Cloud", items: ["AWS", "Vercel", "Cloudflare", "Docker"] }
];
function TechStack() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Technology",
        title: "A modern, boring-when-it-needs-to-be stack.",
        subtitle: "MERN at the core, extended with the cloud and mobile tooling each project actually needs."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5", children: groups.map((g, gi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: gi * 0.06 },
        className: "glass rounded-2xl p-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest text-[#00E5FF]", children: g.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/85",
              children: it
            },
            it
          )) })
        ]
      },
      g.label
    )) })
  ] }) });
}
const steps = [
  { n: "01", t: "Discovery", d: "Map operations, KPIs and the real bottleneck." },
  { n: "02", t: "Planning", d: "Scope, milestones, budget — written, signed, predictable." },
  { n: "03", t: "Design", d: "Product flows and UI built around the user's job." },
  { n: "04", t: "Development", d: "Sprints with weekly demos, no surprises at the end." },
  { n: "05", t: "Testing", d: "Manual + automated. We break it before users do." },
  { n: "06", t: "Deployment", d: "Cloud rollout, observability, rollback strategy." },
  { n: "07", t: "Support", d: "SLAs, roadmap and a long-term technical partner." }
];
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "process", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Process",
        title: "A delivery process built for predictability.",
        subtitle: "Seven stages, weekly demos, fixed milestones. Built for clients who need software to ship, not slip."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563ff]/60 via-white/10 to-transparent lg:left-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: i % 2 === 0 ? -24 : 24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.5 },
          className: `relative flex items-start gap-6 lg:items-center ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 -translate-x-1/2 lg:left-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-gradient-accent shadow-[0_0_20px_rgba(0,229,255,0.7)]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-12 flex-1 lg:ml-0 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-2xl p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-[#00E5FF]", children: s.n }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white", children: s.t })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.d })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden flex-1 lg:block" })
          ]
        },
        s.n
      )) })
    ] })
  ] }) });
}
const items = [
  { icon: Target, t: "Business-focused", d: "Every feature ties back to revenue, cost or time saved." },
  { icon: Layers, t: "Scalable architecture", d: "Multi-tenant, modular, ready for 10× growth." },
  { icon: Lock, t: "Enterprise security", d: "Role-based access, audit trails, encrypted at rest." },
  { icon: Cpu, t: "Modern technology", d: "MERN, React Native, cloud-native by default." },
  { icon: LifeBuoy, t: "Reliable support", d: "SLAs, on-call rotation, real humans answering." },
  { icon: Handshake, t: "Long-term partnership", d: "We stay after launch. Roadmaps, not handoffs." }
];
function Why() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Why SRM",
        title: "Built for businesses that need software to actually work.",
        subtitle: "Six reasons enterprise teams keep choosing SRM over agencies and offshore vendors."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.05 },
        className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 transition-colors hover:border-white/20",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#2563ff]/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#00E5FF]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-semibold text-white", children: it.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: it.d })
        ]
      },
      it.t
    )) })
  ] }) });
}
const founder = "/assets/founder-BEPibO6i.png";
const cofounder = "/assets/co-founder-DCYq_75l.png";
const leaders = [
  {
    name: "Rohit Vaishya",
    role: "Founder & Full Stack Developer",
    bio: "Builds production software end-to-end — from architecture and infrastructure to the last pixel. Obsessed with shipping systems that businesses actually depend on.",
    expertise: [
      { icon: CodeXml, label: "Full Stack Architecture" },
      { icon: Database, label: "Multi-tenant SaaS" },
      { icon: Cloud, label: "Cloud & DevOps" }
    ],
    stack: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Next.js"],
    image: founder,
    initials: "RV"
  },
  {
    name: "Varha Dhaketa",
    role: "Co-Founder & Full Stack Developer",
    bio: "Leads product engineering across web and mobile. Translates real operational workflows into resilient, beautifully crafted product experiences.",
    expertise: [
      { icon: CodeXml, label: "Product Engineering" },
      { icon: Smartphone, label: "Mobile (React Native)" },
      { icon: Database, label: "API & Data Modeling" }
    ],
    stack: ["React", "React Native", "TypeScript", "Express", "PostgreSQL", "Tailwind"],
    image: cofounder,
    initials: "VD"
  }
];
function Founder() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "leadership", className: "relative py-24 sm:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-grid mask-fade-edges opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center rounded-full liquid-glass px-3 py-1 text-[11px] uppercase tracking-widest text-[#00E5FF]", children: "Leadership" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl tracking-tight text-white sm:text-5xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold", children: "The operators" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-gradient", children: "behind SRM." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground sm:text-lg", children: "A small, senior team that designs, builds and operates every product we ship." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 lg:grid-cols-2", children: leaders.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(LeaderCard, { leader: l, index: i }, l.name)) })
    ] })
  ] });
}
function LeaderCard({ leader, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6, delay: index * 0.1 },
      className: "group relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-[#2563ff]/25 blur-3xl transition-opacity group-hover:opacity-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-elevated sm:h-24 sm:w-24", children: leader.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: leader.image,
              alt: leader.name,
              loading: "lazy",
              className: "block h-full w-full object-cover"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-full w-full place-items-center bg-gradient-accent text-2xl font-extrabold text-[#050816]", children: leader.initials }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-semibold text-white sm:text-2xl", children: leader.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-[#00E5FF]", children: leader.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-white/80", children: leader.bio })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3", children: leader.expertise.map((e) => {
          const Icon = e.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 text-[#00E5FF]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/85", children: e.label })
              ]
            },
            e.label
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Stack" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-1.5", children: leader.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-white/80",
              children: s
            },
            s
          )) })
        ] })
      ]
    }
  );
}
const cases = [
  {
    title: "Multi-Tenant HRMS",
    industry: "Enterprise · 12 branches",
    image: hrmsImage,
    metrics: [
      { v: "73%", l: "Less HR admin time" },
      { v: "4×", l: "Faster payroll runs" }
    ],
    stack: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "WhatsApp CRM",
    industry: "B2C sales · 80 agents",
    image: crmImage,
    metrics: [
      { v: "2.4×", l: "Lead response rate" },
      { v: "31%", l: "Higher conversion" }
    ],
    stack: ["React", "Node.js", "WhatsApp API"]
  },
  {
    title: "AutoDealer ERP",
    industry: "Automotive dealership",
    image: dealerImage,
    metrics: [
      { v: "100%", l: "Inventory accuracy" },
      { v: "5h", l: "Saved per day" }
    ],
    stack: ["React", "Express", "MySQL"]
  },
  {
    title: "Wholesale Commerce App",
    industry: "B2B distribution",
    image: wholesaleImage,
    metrics: [
      { v: "+62%", l: "Reorder rate" },
      { v: "10k+", l: "Monthly orders" }
    ],
    stack: ["React Native", "Node.js", "MongoDB"]
  }
];
function CaseStudies() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cases", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Case Studies",
        title: "Real systems. Real numbers.",
        subtitle: "A snapshot of platforms now operating in production across multiple regions."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 lg:grid-cols-2", children: cases.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.08 },
        className: "group overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1c]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: c.image,
                alt: `${c.title} screenshot`,
                loading: "lazy",
                width: 1920,
                height: 1080,
                className: "block w-full transition-transform duration-700 group-hover:scale-[1.04]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-[#00E5FF]", children: c.industry }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1.5 text-xl font-semibold text-white", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-2 gap-4", children: c.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/10 bg-white/[0.03] p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-extrabold text-white", children: m.v }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-xs text-muted-foreground", children: m.l })
            ] }, m.l)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: c.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-white/75",
                children: s
              },
              s
            )) })
          ] })
        ]
      },
      c.title
    )) })
  ] }) });
}
const quotes = [
  {
    q: "SRM rebuilt our HR stack from scratch in eight weeks. Payroll that used to take three days now runs in twenty minutes.",
    a: "Director of Operations",
    c: "Logistics group · India"
  },
  {
    q: "We replaced four disconnected tools with one ERP. Inventory accuracy went from 'guessing' to 100%.",
    a: "Owner",
    c: "Auto dealership · UAE"
  },
  {
    q: "The mobile app SRM built drives 60% of our reorders. It just works — and the team actually answers the phone.",
    a: "Head of Sales",
    c: "B2B distributor · UK"
  },
  {
    q: "They behave like an internal team. Weekly demos, predictable milestones, zero drama.",
    a: "CTO",
    c: "SaaS startup · US"
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Testimonials",
        title: "Operators who've shipped with us."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-2", children: quotes.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.08 },
        className: "glass-strong rounded-2xl p-7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl leading-none text-[#00E5FF]", children: "“" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-2 text-base leading-relaxed text-white/90", children: t.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-white", children: t.a }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              " · ",
              t.c
            ] })
          ] })
        ]
      },
      i
    )) })
  ] }) });
}
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative py-24 sm:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-radial-glow opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-6xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "Contact",
          title: "Tell us about the system you need to build.",
          subtitle: "We respond within one business day. No sales scripts, no generic decks."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-8 lg:grid-cols-[1fr_360px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.form,
          {
            initial: { opacity: 0, y: 18 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            onSubmit: async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              const name = formData.get("name") || "";
              const company = formData.get("company") || "";
              const email = formData.get("email") || "";
              const phone = formData.get("phone") || "";
              const type = formData.get("type") || "";
              const budget = formData.get("budget") || "";
              const description = formData.get("description") || "";
              formData.append(
                "access_key",
                "71b01595-f301-4356-a030-5e3c66b31717"
              );
              formData.append(
                "subject",
                "New Lead - SRM Innovations"
              );
              formData.append(
                "from_name",
                "SRM Innovations Website"
              );
              try {
                const response = await fetch(
                  "https://api.web3forms.com/submit",
                  {
                    method: "POST",
                    body: formData
                  }
                );
                const result = await response.json();
                if (result.success) {
                  const whatsappMessage = `
🚀 New Project Inquiry

👤 Name: ${name}
🏢 Company: ${company}
📧 Email: ${email}
📱 Phone: ${phone}

💼 Project Type: ${type}
💰 Budget: ${budget}

📝 Description:
${description}
      `;
                  window.open(
                    `https://wa.me/919630970989?text=${encodeURIComponent(
                      whatsappMessage
                    )}`,
                    "_blank"
                  );
                  setSent(true);
                  form.reset();
                }
              } catch (error) {
                console.error(error);
                alert("Something went wrong. Please try again.");
              }
            },
            className: "glass-strong rounded-3xl p-7 sm:p-9",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "hidden",
                  name: "subject",
                  value: "New Lead - SRM Innovations"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "hidden",
                  name: "from_name",
                  value: "SRM Innovations Website"
                }
              ),
              sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-[420px] flex-col items-center justify-center text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent text-[#050816]", children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-2xl font-semibold text-white", children: "Thanks — we're on it." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-sm text-sm text-muted-foreground", children: "A founder will reach out within one business day to schedule a call." })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Select,
                  {
                    label: "Project type",
                    name: "type",
                    options: [
                      "Custom Software",
                      "HRMS",
                      "CRM",
                      "ERP",
                      "Mobile App",
                      "SaaS Product",
                      "Automation"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Select,
                  {
                    label: "Budget",
                    name: "budget",
                    options: [
                      "Under ₹2 Lakhs",
                      "₹2 Lakhs – ₹5 Lakhs",
                      "₹5 Lakhs – ₹15 Lakhs",
                      "₹15 Lakhs – ₹50 Lakhs",
                      "₹50 Lakhs+"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Project description" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      name: "description",
                      rows: 5,
                      className: "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:border-[#2563ff] focus:outline-none",
                      placeholder: "Briefly describe the problem you want to solve."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    className: "inline-flex w-full items-center justify-center rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-[#050816] shadow-[0_10px_40px_-8px_rgba(0,229,255,0.55)] transition-transform hover:scale-[1.01]",
                    children: "Send request"
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Quick,
            {
              icon: Calendar,
              title: "Schedule consultation",
              desc: "30-min call with the founder.",
              cta: "Book a slot",
              href: "#"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Quick,
            {
              icon: MessageCircle,
              title: "WhatsApp",
              desc: "Fastest response, business hours.",
              cta: "Open chat",
              href: "https://wa.me/9630970989"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Quick,
            {
              icon: Mail,
              title: "Email",
              desc: "info@srminnovationshub.com",
              cta: "Send email",
              href: "mailto:info@srminnovationshub.com"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00E5FF]", children: " *" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        name,
        required,
        className: "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:border-[#2563ff] focus:outline-none"
      }
    )
  ] });
}
function Select({
  label,
  name,
  options
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        name,
        className: "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white focus:border-[#2563ff] focus:outline-none",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select…" }),
          options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, className: "bg-[#0a0f1c]", children: o }, o))
        ]
      }
    )
  ] });
}
function Quick({
  icon: Icon,
  title,
  desc,
  cta,
  href
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href,
      className: "block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.05]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-accent text-[#050816]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-white", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: desc })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-xs font-semibold text-[#00E5FF]", children: [
          cta,
          " →"
        ] })
      ]
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen overflow-x-hidden bg-[#050816] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ecosystem, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Products, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WorkflowShowcase, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Mobile, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TechStack, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Why, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Founder, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudies, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
