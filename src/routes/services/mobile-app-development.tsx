import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";


const TITLE =
  "Mobile App Development Services | Android & iOS Apps";

const DESCRIPTION =
  "SRM Innovations develops high-performance Android, iOS and cross-platform mobile applications for startups, enterprises and growing businesses.";

export const Route = createFileRoute("/services/mobile-app-development")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Mobile App Development, Android App Development, iOS App Development, React Native Development, Flutter Development",
      },
    ],
  }),
  component: MobileAppPage,
});

function MobileAppPage() {
  const apps = [
    "Ecommerce Apps",
    "Food Delivery Apps",
    "Healthcare Apps",
    "Fintech Apps",
    "Booking Apps",
    "Business Apps",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d455,transparent_40%)]" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                Mobile App Development Services
              </span>

              <h1 className="mt-8 text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
                Mobile Apps
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  Built For Growth
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl text-slate-400">
                Build powerful Android, iOS and cross-platform mobile
                applications that deliver exceptional user experiences
                and business results.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                  Start App Project
                </Button>

                <Button variant="outline" size="lg">
                  Get Free Consultation
                </Button>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    50+
                  </h3>
                  <p className="text-sm text-slate-400">
                    Apps Delivered
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    iOS
                  </h3>
                  <p className="text-sm text-slate-400">
                    Native Support
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    Android
                  </h3>
                  <p className="text-sm text-slate-400">
                    Native Support
                  </p>
                </div>
              </div>
            </div>

            {/* PHONE MOCKUPS */}
            <div className="relative flex justify-center items-center gap-6">

            <motion.div
  animate={{ y: [0, 20, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
 className="
  hidden
  lg:block
  h-[600px]
  w-[280px]
  rounded-[40px]
  border
  border-white/10
  bg-white/5
  p-3
  backdrop-blur-xl
"
>
  <div className="h-full rounded-[30px] overflow-hidden bg-[#081327]">

    <div className="flex h-10 items-center justify-center">
      <div className="h-1.5 w-20 rounded-full bg-white/20" />
    </div>

    <div className="px-5 pt-5">
      <h3 className="text-xl font-bold text-white">
        Food Delivery
      </h3>

      <p className="text-sm text-slate-400">
        Order Tracking
      </p>
    </div>

     <div className="mt-5 px-5">
    <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 p-5">
      <div className="text-xl font-bold text-white/80">
       Margherita Pizza
      </div>

      <div className="mt-2 font-bold text-white">
        🍕
      </div>
    </div>
  </div>

    {/* <div className="mt-5 space-y-3 px-5">
      <div className="h-4 rounded bg-white/10" />
      <div className="h-4 w-3/4 rounded bg-white/10" />
      <div className="h-4 w-2/4 rounded bg-white/10" />
    </div> */}

    <div className="mt-4 grid grid-cols-3 gap-2 px-5">
  <div className="flex h-14 items-center justify-center rounded-xl bg-cyan-500/20 text-2xl">
    🍔
  </div>

  <div className="flex h-14 items-center justify-center rounded-xl bg-blue-500/20 text-2xl">
    🚚
  </div>

  <div className="flex h-14 items-center justify-center rounded-xl bg-violet-500/20 text-2xl">
    💳
  </div>
</div>

<div className="mt-3 px-5">
  <h4 className="mb-3 text-sm font-semibold text-white">
    Popular Restaurants
  </h4>

  <div className="space-y-3">
    <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
      <div className="flex h-12 items-center justify-center text-2xl">
        🍕
      </div>

      <div>
        <p className="text-sm font-medium">
          Pizza House
        </p>

        <p className="text-xs text-slate-400">
          4.8 ★
        </p>
      </div>
    </div>

    <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
    <div className="flex h-12 items-center justify-center text-2xl">
    🍔
  </div>

      <div>
        <p className="text-sm font-medium">
          Burger Hub
        </p>

        <p className="text-xs text-slate-400">
          4.7 ★
        </p>
      </div>
    </div>
  </div>
</div>

<div className="mt-4 px-5">
  <Button className="w-full bg-cyan-500 hover:bg-cyan-600">
    Order Now
  </Button>
</div>

</div>
</motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
           className="
  h-[600px]
  w-[280px]
  rounded-[40px]
  border
  border-white/10
  bg-white/5
  p-3
  backdrop-blur-xl
"
              >
               <div className="h-full rounded-[30px] overflow-hidden bg-[#081327]">

  <div className="flex h-10 items-center justify-center">
    <div className="h-1.5 w-20 rounded-full bg-white/20" />
  </div>

  <div className="px-5 pt-5">
    <h3 className="text-xl font-bold text-white">
      Banking App
    </h3>

    <p className="text-sm text-slate-400">
      Analytics Dashboard
    </p>
  </div>

  <div className="mt-5 px-5">
    <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 p-5">
      <div className="text-sm text-white/80">
        Balance
      </div>

      <div className="mt-2 text-3xl font-bold text-white">
        ₹2,45,000
      </div>
    </div>
  </div>

 <div className="mt-3 px-5">
  <div className="flex h-32 items-end gap-2">
    <div className="h-16 w-full rounded-t-2xl bg-cyan-500/40" />
<div className="h-28 w-full rounded-t-2xl bg-cyan-500/70" />
<div className="h-20 w-full rounded-t-2xl bg-cyan-500/50" />
<div className="h-30 w-full rounded-t-2xl bg-cyan-500" />
  </div>
</div>

<div className="mt-5 px-5">
  <div className="rounded-xl bg-white/5 p-4">
    <div className="flex justify-between">
      <span className="text-sm text-slate-400">
        Income
      </span>

      <span className="font-semibold text-green-400">
        +₹52,000
      </span>
    </div>

    <div className="mt-3 flex justify-between">
      <span className="text-sm text-slate-400">
        Expenses
      </span>

      <span className="font-semibold text-red-400">
        -₹18,400
      </span>
    </div>
  </div>
</div>

<div className="mt-4 px-5">
  <Button className="w-full bg-violet-500 hover:bg-violet-600">
    View Analytics
  </Button>
</div>

</div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* APP TYPES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-black">
            Mobile Apps We Build
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => (
              <motion.div
                key={app}
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold">
                  {app}
                </h3>

                <p className="mt-4 text-slate-400">
                  Beautiful, scalable and performance-driven applications.
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-black">
            Platforms & Technologies
          </h2>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {[
              "React Native",
              "Flutter",
              "Android",
              "iOS",
              "Firebase",
              "Node.js",
              "MongoDB",
              "AWS",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3"
              >
                {item}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-black">
            App Development Process
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Research",
              "Wireframes",
              "UI Design",
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

      {/* BENEFITS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-black">
            Why Choose SRM Innovations
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              "Cross Platform Expertise",
              "Modern UI/UX Design",
              "Scalable Architecture",
              "App Store Deployment",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-2xl font-semibold">
                  {item}
                </h3>

                <p className="mt-4 text-slate-400">
                  Enterprise-grade mobile solutions built for growth.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-black md:text-7xl">
            Launch Your Next
            <span className="block text-cyan-400">
              Mobile App
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400">
            Turn your app idea into a powerful digital product
            with SRM Innovations.
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