import { motion } from "framer-motion";
import { Mail, MessageCircle, Calendar } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SectionHeader } from "./Products";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Tell us about the system you need to build."
          subtitle="We respond within one business day. No sales scripts, no generic decks."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_360px]">
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const formData = new FormData(form);

              // Get values for WhatsApp
              const name = formData.get("name") || "";
              const company = formData.get("company") || "";
              const email = formData.get("email") || "";
              const phone = formData.get("phone") || "";
              const type = formData.get("type") || "";
              const budget = formData.get("budget") || "";
              const description = formData.get("description") || "";

              // Web3Forms fields
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
                // Send email
                const response = await fetch(
                  "https://api.web3forms.com/submit",
                  {
                    method: "POST",
                    body: formData,
                  }
                );

                const result = await response.json();

                if (result.success) {
                  // WhatsApp message
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
            }}
            className="glass-strong rounded-3xl p-7 sm:p-9"
          >

            {/* Hidden fields for Web3Forms */}
            <input
              type="hidden"
              name="subject"
              value="New Lead - SRM Innovations"
            />

            <input
              type="hidden"
              name="from_name"
              value="SRM Innovations Website"
            />
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent text-[#050816]">
                  ✓
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">
                  Thanks — we're on it.
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  A founder will reach out within one business day to schedule a
                  call.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
                <Select
                  label="Project type"
                  name="type"
                  options={[
                    "Custom Software",
                    "HRMS",
                    "CRM",
                    "ERP",
                    "Mobile App",
                    "SaaS Product",
                    "Automation",
                  ]}
                />
                <Select
                  label="Budget"
                  name="budget"
                  options={[
                    "Under ₹2 Lakhs",
                    "₹2 Lakhs – ₹5 Lakhs",
                    "₹5 Lakhs – ₹15 Lakhs",
                    "₹15 Lakhs – ₹50 Lakhs",
                    "₹50 Lakhs+",
                  ]}
                />
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Project description
                  </label>
                  <textarea
                    name="description"
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:border-[#2563ff] focus:outline-none"
                    placeholder="Briefly describe the problem you want to solve."
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-[#050816] shadow-[0_10px_40px_-8px_rgba(0,229,255,0.55)] transition-transform hover:scale-[1.01]"
                  >
                    Send request
                  </button>
                </div>
              </div>
            )}
          </motion.form>

          <div className="space-y-4">
            <Quick
              icon={Calendar}
              title="Schedule consultation"
              desc="30-min call with the founder."
              cta="Book a slot"
              href="#"
            />
            <Quick
              icon={MessageCircle}
              title="WhatsApp"
              desc="Fastest response, business hours."
              cta="Open chat"
              href="https://wa.me/9630970989"
            />
            <Quick
              icon={Mail}
              title="Email"
              desc="info@srminnovationshub.com"
              cta="Send email"
              href="mailto:info@srminnovationshub.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-[#00E5FF]"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:border-[#2563ff] focus:outline-none"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <select
        name={name}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white focus:border-[#2563ff] focus:outline-none"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#0a0f1c]">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function Quick({
  icon: Icon,
  title,
  desc,
  cta,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  cta: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-accent text-[#050816]">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="text-xs text-muted-foreground">{desc}</div>
        </div>
      </div>
      <div className="mt-4 text-xs font-semibold text-[#00E5FF]">
        {cta} →
      </div>
    </a>
  );
}