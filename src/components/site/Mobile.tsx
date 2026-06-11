import { motion } from "framer-motion";
import wholesale from "@/assets/product-wholesale.jpg";
import { SectionHeader } from "./Products";
import { Smartphone, Bell, ShoppingCart, BarChart3 } from "lucide-react";

const callouts = [
  { icon: ShoppingCart, title: "Native checkout", desc: "Cart, orders, payments — fully native." },
  { icon: Bell, title: "Push automations", desc: "Stock alerts, order status, promotions." },
  { icon: BarChart3, title: "Live inventory", desc: "Real-time sync with admin panel." },
  { icon: Smartphone, title: "Offline-first", desc: "Field-ready, syncs when reconnected." },
];

export function Mobile() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-50" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Mobile Apps"
          title="Production-grade mobile experiences."
          subtitle="React Native apps that look native, perform native and ship to Play Store and App Store with confidence."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 -z-10 bg-[#2563ff]/30 blur-[100px]" />
            <motion.img
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src={wholesale}
              alt="Wholesale commerce mobile app"
              loading="lazy"
              width={1600}
              height={900}
              className="w-full max-w-md rounded-2xl border border-white/10 shadow-elevated"
            />
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {callouts.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-accent text-[#050816]">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-base font-semibold text-white">
                  {c.title}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
