"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FolderKanban,
  UserRoundCheck,
  Utensils,
  Terminal
} from "lucide-react";

const opportunities = [
  {
    id: "01",
    title: "The Identity Arch",
    label: "FOR INDIVIDUALS",
    problem: "A resume alone doesn't prove your capability.",
    outcome: "High-fidelity professional proof for OCAD/Seneca students.",
    metric: "100ms load speed. SlideRoom compliant.",
    stack: ["Portfolio UX", "Performance", "Clean Code"],
    icon: UserRoundCheck,
    color: "#5fe7ff",
    link: "https://sample-portfolio-sandy-delta.vercel.app/"
  },
  {
    id: "02",
    title: "Visual Vault",
    label: "FOR CREATORS",
    problem: "Social platforms compress your work and hide your quality.",
    outcome: "Lossless media rendering for photographers and editors.",
    metric: "Cinematic flow. Premium first impressions.",
    stack: ["Visual Layout", "Motion FX", "Gallery Flow"],
    icon: FolderKanban,
    color: "#9ec4ff",
    link: "https://sample-photo-website.vercel.app/"
  },
  {
    id: "03",
    title: "Service Terminal",
    label: "FOR SMALL BUSINESS",
    problem: "Stale websites act as a leak in your sales funnel.",
    outcome: "Lead-capture engines for GTA contractors and service pros.",
    metric: "Direct WhatsApp routing. 24/7 lead-gen.",
    stack: ["SEO Structure", "Lead Forms", "Mobile First"],
    icon: BriefcaseBusiness,
    color: "#8df9a7",
    link: "https://business-website-wheat-kappa.vercel.app/"
  },
  {
    id: "04",
    title: "Logistics Node",
    label: "FOR FOOD & HOSPITALITY",
    problem: "Third-party apps take 30% of your food margin.",
    outcome: "Commission-free delivery via direct courier API integration.",
    metric: "Recover your profit. Own your customer data.",
    stack: ["Logistics API", "Booking Sync", "Instant Menu"],
    icon: Utensils,
    color: "#ffc15f",
    link: "https://restaurant-website-self-zeta.vercel.app/"
  }
];

type Opportunity = (typeof opportunities)[number];

function OpportunityCard({ item, index }: { item: Opportunity; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glow = useMotionTemplate`radial-gradient(
    300px circle at ${mouseX}px ${mouseY}px,
    ${item.color}22,
    transparent 80%
  )`;

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      className="group glass-panel relative flex flex-col overflow-hidden rounded-3xl border border-white/15 transition-all duration-300 hover:border-white/25"
    >
      <motion.div 
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
        style={{ background: glow }} 
      />
      
      <div className="relative z-10 flex flex-grow flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5 sm:px-3">
            <item.icon className="h-4 w-4" style={{ color: item.color }} />
            <span className="font-code text-[9px] uppercase tracking-[0.18em] text-white/75 sm:text-[10px] sm:tracking-[0.25em]">
              SYS_{item.id}
            </span>
          </div>
          {/* Pulsing Status Dot to show it's a "Live" system */}
          <div className="h-1.5 w-1.5 rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ backgroundColor: item.color }} />
        </div>

        <p className="font-code mt-6 text-[9px] uppercase tracking-[0.3em] sm:text-[10px]" style={{ color: item.color }}>
          {item.label}
        </p>

        <h3 className="font-display mt-2 text-2xl text-white sm:text-3xl leading-tight">{item.title}</h3>
        
        <div className="mt-5 space-y-4">
          <p className="text-sm leading-relaxed text-[#bdd0ed]">
            <span className="text-white/30 font-code text-[10px] uppercase tracking-widest block mb-1">Problem:</span>
            {item.problem}
          </p>
          <p className="text-sm leading-relaxed text-white">
             <span className="text-white/30 font-code text-[10px] uppercase tracking-widest block mb-1">Outcome:</span>
            {item.outcome}
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-white/12 bg-white/5 p-4">
          <p className="font-code text-[10px] uppercase tracking-[0.16em] text-[#8cb0e5]">Reality Check</p>
          <p className="mt-2 text-sm text-white/90">{item.metric}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <span
              key={tech}
              className="font-code rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-white/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* NEW HIGH-VISIBILITY FOOTER LINK */}
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 mt-auto flex items-center justify-between border-t border-white/10 bg-white/5 px-6 py-5 transition-all hover:bg-white/10"
      >
        <div className="flex items-center gap-3">
            <Terminal size={14} className="text-white/40" />
            <span className="font-code text-[10px] uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors">
                Launch System Node
            </span>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all group-hover:bg-[#8df9a7] group-hover:text-[#05120d] group-hover:rotate-45">
            <ArrowUpRight size={16} />
        </div>
      </a>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
      <div className="max-w-3xl mb-12">
        <p className="font-code mb-3 text-[10px] uppercase tracking-[0.18em] text-[#8df9a7] sm:mb-4 sm:text-xs sm:tracking-[0.25em]">
          INFRASTRUCTURE DEMOS
        </p>
        <h2 className="font-display text-3xl leading-[0.95] text-white sm:text-4xl md:text-6xl">
          Systems Built for <span className="text-gradient">Real Conversion</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#abc2e3] sm:mt-6 sm:text-base">
          Click a node to launch a live environment in a new tab.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {opportunities.map((item, index) => (
          <OpportunityCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}