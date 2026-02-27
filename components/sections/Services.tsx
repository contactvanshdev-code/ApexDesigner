"use client";

import { ArrowRight, Check, Sparkles, WandSparkles, Box, ShieldCheck, Zap } from "lucide-react";

interface ServicesProps {
  onOpenModal: (packageName: string) => void;
}

const services = [
  {
    title: "The Identity",
    category: "FOR STUDENTS & CREATORS",
    price: "$149",
    description:
      "High-fidelity professional proof. OCAD/Seneca SlideRoom-ready to beat the 2027 job market.",
    features: [
      "Single-page premium build",
      "100ms load fidelity",
      "Project-first UX architecture",
      "14 days of content tweaks"
    ],
    gradient: "from-[#5fe7ff] to-[#9ec4ff]",
    popular: false,
    icon: <ShieldCheck className="h-5 w-5" />
  },
  {
    title: "Growth Engine",
    category: "FOR SERVICE BUSINESSES",
    price: "$799",
    description:
      "The lead-capture standard for GTA contractors. Turn local search traffic into warm inquiries automatically.",
    features: [
      "Up to 6 performance pages",
      "Localized SEO optimization",
      "Integrated WhatsApp routing",
      "Automated lead-gen forms"
    ],
    gradient: "from-[#8df9a7] to-[#5fe7ff]",
    popular: true,
    icon: <Zap className="h-5 w-5" />
  },
  {
    title: "Terminal",
    category: "LOGISTICS & ENTERPRISE",
    price: "$2,499",
    description:
      "Full digital infrastructure. Escape the 30% delivery commission and own your logistics from end-to-end.",
    features: [
      "Direct-to-Courier API Integration",
      "Zero-commission delivery setup",
      "Multi-location management",
      "Priority 24/7 technical support"
    ],
    gradient: "from-[#ffc670] to-[#ff8d8d]",
    popular: false,
    icon: <Box className="h-5 w-5" />
  }
];

export default function Services({ onOpenModal }: ServicesProps) {
  return (
    <section id="packages" className="relative z-[120] mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-code mb-3 text-[10px] uppercase tracking-[0.18em] text-[#5fe7ff] sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
          STRATEGIC INFRASTRUCTURE
        </p>
        <h2 className="font-display text-3xl leading-[0.92] text-white sm:text-4xl md:text-6xl">
          Built for Impact and <span className="text-gradient">Margin Protection</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#abc2e3] sm:mt-6 sm:text-base">
          Stop building websites. Start deploying digital assets that recover your profits.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:mt-12 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className={`glass-panel relative flex h-full flex-col overflow-hidden rounded-3xl border p-5 sm:p-6 md:p-8 transition-all duration-300 hover:border-white/30 ${
              service.popular ? "border-[#8df9a7]/40 bg-[#0a1a12]/40" : "border-white/15"
            }`}
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.08] blur-3xl`}
            />

            <div className="relative z-10 flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4">
              <span
                className={`font-code rounded-full px-3 py-1.5 text-[9px] uppercase tracking-[0.17em] sm:text-[10px] sm:tracking-[0.24em] ${
                  service.popular
                    ? "border border-[#8df9a7]/45 bg-[#8df9a7]/14 text-[#d6ffdf]"
                    : "border border-white/15 bg-white/5 text-white/70"
                }`}
              >
                {service.category}
              </span>
              {service.popular && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#ffc670]">
                  <Sparkles className="h-3.5 w-3.5" /> Recommended
                </span>
              )}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="text-white/60">{service.icon}</div>
              <h3 className="font-display text-2xl text-white sm:text-3xl">{service.title}</h3>
            </div>
            
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-4xl text-white sm:text-5xl">{service.price}</span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-white/45 sm:text-sm sm:tracking-[0.22em]">
                starting at
              </span>
            </div>

            <p className="mt-4 border-b border-white/10 pb-5 text-sm leading-relaxed text-[#bdd0ed] sm:mt-5 sm:pb-6">
              {service.description}
            </p>

            <ul className="mt-5 space-y-3 text-sm text-white/90 sm:mt-6 sm:space-y-3.5 flex-grow">
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
              className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-semibold uppercase tracking-[0.15em] transition sm:mt-7 sm:py-4 sm:text-sm sm:tracking-[0.18em] ${
                service.popular
                  ? "bg-[#8df9a7] text-[#05120d] hover:bg-[#a8ffbc]"
                  : "border border-white/20 bg-white/10 text-white hover:border-white/35 hover:bg-white/15"
              }`}
            >
              Deploy This Node <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-white/15 bg-[#0b1832]/70 p-5 text-sm text-[#d5e6ff] backdrop-blur-md sm:mt-10 sm:p-6 md:p-7">
        <p className="font-code flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#ffc670] sm:text-xs sm:tracking-[0.22em]">
          <WandSparkles className="h-4 w-4" />
          The Infrastructure Guarantee
        </p>
        <p className="mt-3 leading-relaxed">
          Our builds include lifetime code ownership. No monthly platform fees, no hidden retainers, and 100% data sovereignty for your business.
        </p>
      </div>
    </section>
  );
}