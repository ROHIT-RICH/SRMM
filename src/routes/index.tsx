
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Ecosystem } from "@/components/site/Ecosystem";
import { Products } from "@/components/site/Products";
import { WorkflowShowcase } from "@/components/site/WorkflowShowcase";
import { Mobile } from "@/components/site/Mobile";
import { Services } from "@/components/site/Services";
import { TechStack } from "@/components/site/TechStack";
import { Process } from "@/components/site/Process";
import { Why } from "@/components/site/Why";
import { Founder } from "@/components/site/Founder";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";



const TITLE =
  "Custom Software Development Company | ERP, CRM, HRMS & SaaS Development | SRM Innovations Hub";
const DESCRIPTION =
  "SRM Innovations Hub is a custom software development company providing ERP, CRM, HRMS, SaaS, Ecommerce, Web Development, Mobile App Development and Business Automation services worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "custom software development company, HRMS development, CRM development, ERP development, SaaS development, mobile app development company, business automation, React development, MERN stack, enterprise software",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "SRM Innovations Hub" },
      {
        property: "og:image",
        content: "https://srminnovationshub.com/preview.png",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        name: "twitter:image",
        content: "https://srminnovationshub.com/preview.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Playwrite+AU+VIC+Guides&display=swap",
      },

      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-32x32.png",
      },

      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },

      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
      },

      {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SRM Innovations Hub",
          slogan: "Smart Software. Real Results.",
          url: "/",
          founder: {
            "@type": "Person",
            name: "Rohit Vaishya",
            jobTitle: "Founder & Full Stack Developer",
          },
          description: DESCRIPTION,
          areaServed: ["India", "United States", "United Kingdom", "Australia", "Canada"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Custom Software Development",
          provider: { "@type": "Organization", name: "SRM Innovations Hub" },
          areaServed: ["India", "US", "UK", "Australia", "Canada"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Software Services",
            itemListElement: [
              "HRMS Development",
              "CRM Development",
              "ERP Development",
              "SaaS Development",
              "Mobile App Development",
              "Business Automation",
            ].map((n) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: n },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What does SRM Innovations Hub build?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Custom software, HRMS, CRM, ERP, SaaS products, mobile apps and business automation platforms.",
              },
            },
            {
              "@type": "Question",
              name: "Which regions do you serve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "India, the United States, the United Kingdom, Australia and Canada.",
              },
            },
            {
              "@type": "Question",
              name: "What technology stack do you use?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "MERN stack (MongoDB, Express, React, Node.js), TypeScript, React Native for mobile, and cloud platforms like AWS and Vercel.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <Nav />
      <Hero />
      <Ecosystem />
      <Products />
      <WorkflowShowcase />
      <Mobile />
      <Services />
      <TechStack />
      <Process />
      <Why />
      <Founder />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
