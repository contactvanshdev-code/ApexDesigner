"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FolderKanban,
  UserRoundCheck,
  Utensils
} from "lucide-react";

const opportunities = [
  {
    id: "01",
    title: "Profile Website",
    label: "FOR INDIVIDUALS",
    problem: "A resume alone does not show your real work.",
    outcome: "Get one clean link that presents your projects, skills, and personality properly.",
    metric: "Perfect for students, freelancers, and job seekers.",
    stack: ["Portfolio UX", "Fast Load", "Mobile-first"],
    icon: UserRoundCheck,
    color: "#5fe7ff",
    link: "https://sample-portfolio-sandy-delta.vercel.app/"
  },
  {
    id: "02",
    title: "Creative Portfolio",
    label: "FOR CREATORS",
    problem: "Social profiles compress your work and hide your quality.",
    outcome: "Show photos and video work in a premium format with better first impression.",
    metric: "Ideal for photographers, editors, and creative students.",
    stack: ["Visual Layout", "Smooth Motion", "Gallery Flow"],
    icon: FolderKanban,
    color: "#9ec4ff",
    link: "https://sample-photo-website.vercel.app/"
  },
  {
    id: "03",
    title: "Service Business Site",
    label: "FOR SMALL BUSINESS",
    problem: "Most small businesses lose leads because their website is old or unclear.",
    outcome: "Get a modern site that explains your service and converts visitors into inquiries.",
    metric: "Built for local trust, clear CTA, and mobile users.",
    stack: ["SEO Structure", "Conversion Copy", "Lead Forms"],
    icon: BriefcaseBusiness,
    color: "#8df9a7",
    link: "https://business-website-wheat-kappa.vercel.app/"
  },
  {
    id: "04",
    title: "Restaurant Menu System",
    label: "FOR FOOD & HOSPITALITY",
    problem: "Blurry PDF menus and high-fee apps eat your profits.",
    outcome: "A high-speed digital menu with direct booking and contact integration.",
    metric: "Designed for high conversion from Google Maps traffic.",
    stack: ["Mobile Menu", "Booking Sync", "Instant Load"],
    icon: Utensils,
    color: "#ffc15f", // Warm amber tone
    link: "https://restaurant-website-self-zeta.vercel.app/" // Replace with your actual link
  }
];

type Opportunity = (typeof opportunities)[number];

function OpportunityCard({ item, index }: { item: Opportunity; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glow = useMotionTemplate`radial-gradient(
    260px circle at ${mouseX}px ${mouseY}px,
    ${item.color}33,
    transparent 75%
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
      className="group glass-panel border-glow relative overflow-hidden rounded-3xl p-5 sm:p-6 md:p-8"
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: glow }} />
      <div className="scan-line" />
      <div className="relative z-10">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5 sm:px-3">
            <item.icon className="h-4 w-4" style={{ color: item.color }} />
            <span className="font-code text-[9px] uppercase tracking-[0.18em] text-white/75 sm:text-[10px] sm:tracking-[0.25em]">
              SYS_{item.id}
            </span>
          </div>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] text-white/90 transition hover:border-white/40 hover:bg-white/15 sm:text-xs"
            data-cursor-hover
          >
            Preview <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <p className="font-code mt-4 text-[9px] uppercase tracking-[0.2em] sm:mt-5 sm:text-[10px] sm:tracking-[0.3em]" style={{ color: item.color }}>
          {item.label}
        </p>

        <h3 className="font-display mt-2.5 text-xl text-white sm:mt-3 sm:text-2xl md:text-3xl">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#c9d8f0]">{item.problem}</p>
        <p className="mt-2.5 text-sm leading-relaxed text-white/95">{item.outcome}</p>

        <div className="mt-4 rounded-2xl border border-white/12 bg-white/5 p-3.5 sm:mt-5 sm:p-4">
          <p className="font-code text-[10px] uppercase tracking-[0.16em] text-[#8cb0e5] sm:text-[11px] sm:tracking-[0.23em]">Reality Check</p>
          <p className="mt-2 text-sm text-white/90">{item.metric}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
          {item.stack.map((tech) => (
            <span
              key={tech}
              className="font-code rounded-md border border-white/15 bg-[#0f1c35] px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-[#acc6f0] sm:text-[10px] sm:tracking-[0.2em]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
      <div className="max-w-3xl">
        <p className="font-code mb-3 text-[10px] uppercase tracking-[0.18em] text-[#8df9a7] sm:mb-4 sm:text-xs sm:tracking-[0.25em]">
          RECENT DEMO WEBSITES
        </p>
        <h2 className="font-display text-3xl leading-[0.95] text-white sm:text-4xl md:text-6xl">
          Portfolio + Small Business <span className="text-gradient">Websites That Work</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#a9c0e2] sm:mt-6 sm:text-base">
          Click preview to open each live demo in a new tab.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:mt-12 md:grid-cols-2">
        {opportunities.map((item, index) => (
          <OpportunityCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
