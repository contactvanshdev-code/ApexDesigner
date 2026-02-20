"use client";

import { ArrowRight, Check, Sparkles, WandSparkles } from "lucide-react";

interface ServicesProps {
  onOpenModal: (packageName: string) => void;
}

const services = [
  {
    title: "Profile Launch",
    category: "FOR STUDENTS & CREATORS",
    price: "$129",
    description:
      "A sharp personal website so recruiters and clients stop guessing and start trusting your work.",
    features: [
      "Single-page premium layout",
      "Fast mobile performance",
      "Project and resume sections",
      "14 days of content tweaks"
    ],
    gradient: "from-[#5fe7ff] to-[#9ec4ff]",
    popular: false
  },
  {
    title: "Growth Website",
    category: "FOR SERVICE BUSINESSES",
    price: "$699",
    description:
      "The best price-to-conversion setup: custom pages, lead capture, and clear messaging that sells your service.",
    features: [
      "Up to 6 custom pages",
      "SEO + speed optimization",
      "Lead form + WhatsApp integration",
      "30 days priority modifications"
    ],
    gradient: "from-[#8df9a7] to-[#5fe7ff]",
    popular: true
  }
];

export default function Services({ onOpenModal }: ServicesProps) {
  return (
    <section id="packages" className="relative z-[120] mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-code mb-4 text-xs uppercase tracking-[0.28em] text-[#5fe7ff]">SIMPLE PRICING</p>
        <h2 className="font-display text-4xl leading-[0.92] text-white md:text-6xl">
          Built for Individuals and <span className="text-gradient">Small Businesses</span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-[#abc2e3]">
          Clear scope, clear timeline, and easy modifications after launch.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="glass-panel relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 p-7 md:p-8"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.12] blur-2xl`}
            />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <span
                className={`font-code rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] ${
                  service.popular
                    ? "border border-[#8df9a7]/45 bg-[#8df9a7]/14 text-[#d6ffdf]"
                    : "border border-white/15 bg-white/5 text-white/70"
                }`}
              >
                {service.category}
              </span>
              {service.popular && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#ffc670]">
                  <Sparkles className="h-3.5 w-3.5" /> Popular
                </span>
              )}
            </div>

            <h3 className="font-display mt-7 text-3xl text-white">{service.title}</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-5xl text-white">{service.price}</span>
              <span className="text-sm uppercase tracking-[0.22em] text-white/45">one-time</span>
            </div>

            <p className="mt-5 border-b border-white/10 pb-6 text-sm leading-relaxed text-[#bdd0ed]">
              {service.description}
            </p>

            <ul className="mt-6 space-y-3.5 text-sm text-white/90">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-[2px] rounded-full bg-white/12 p-1 text-[#8df9a7]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onOpenModal(service.title)}
              className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                service.popular
                  ? "bg-[#8df9a7] text-[#05120d] hover:bg-[#a8ffbc]"
                  : "border border-white/20 bg-white/10 text-white hover:border-white/35 hover:bg-white/15"
              }`}
            >
              Start This Plan <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-white/15 bg-[#0b1832]/70 p-6 text-sm text-[#d5e6ff] backdrop-blur-md md:p-7">
        <p className="font-code flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#ffc670]">
          <WandSparkles className="h-4 w-4" />
          Modification Promise
        </p>
        <p className="mt-3 leading-relaxed">
          Need updates after launch? You can request content and section changes, so your website stays fresh and useful.
        </p>
      </div>
    </section>
  );
}
