"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImmersiveScene from "@/components/ui/ImmersiveScene";
import CustomCursor from "@/components/ui/CustomCursor";
import Marquee from "@/components/ui/Marquee";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import ContactModal from "@/components/ui/ContactModal";
import GsapHeadline from "@/components/ui/GsapHeadline";
import {
  ArrowRight,
  ChartNoAxesCombined,
  EyeOff,
  Mail,
  MousePointer2,
  ShieldCheck,
  Wallet
} from "lucide-react";

const keyReasons = [
  {
    title: "People Trust What They Can See",
    description: "A clean profile website shows proof, skills, and clarity in one link.",
    icon: ChartNoAxesCombined
  },
  {
    title: "You Don’t Overpay",
    description: "Simple one-time pricing with modification support, no hidden retainers.",
    icon: Wallet
  },
  {
    title: "You Stay Custom",
    description: "Your site is built around your brand, not forced into a generic template.",
    icon: ShieldCheck
  }
];

export default function Home() {
  const [isUIHidden, setIsUIHidden] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handle3DInteraction = () => {
    setIsUIHidden(true);
    setTimeout(() => {
      setIsUIHidden(false);
    }, 3200);
  };

  const openModal = (pkgName: string = "General Inquiry") => {
    setSelectedPackage(pkgName);
    setIsContactOpen(true);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#050912] selection:bg-[#5fe7ff]/35">
      <CustomCursor />
      <div className="bg-grain" />
      
      <nav className="fixed left-5 top-5 z-[110] md:left-8 md:top-8">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex cursor-pointer items-center gap-3 rounded-full border border-white/15 bg-[#0b1832]/70 px-5 py-3 backdrop-blur-md transition-colors hover:bg-[#102246]/75"
          data-cursor-hover
        >
          <div className="relative h-4 w-4">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#8df9a7]/35" />
            <span className="relative block h-4 w-4 rounded-full bg-gradient-to-tr from-[#5fe7ff] to-[#8df9a7]" />
          </div>
          <span className="font-code text-xs tracking-[0.22em] text-white/90 transition-colors group-hover:text-white">
            Apex Designs
          </span>
        </div>
      </nav>

      <section id="hero" className="relative flex min-h-screen w-full flex-col justify-center px-6 pb-16 pt-24 md:px-10">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ImmersiveScene />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl pointer-events-none">
          <AnimatePresence>
            {!isUIHidden && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="hero-shell max-w-4xl space-y-8 rounded-[2rem] p-7 text-left md:p-10"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="chip inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-md"
                >
                  <div className="h-2 w-2 animate-pulse rounded-full bg-[#8df9a7]" />
                  <span className="font-code text-[10px] uppercase tracking-[0.24em] text-[#d8ffe6]">
                    Fast Launch Slots Open
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <GsapHeadline
                    lines={["Simple Websites", "That Bring Real Clients."]}
                    className="text-5xl tracking-tight text-white md:text-7xl"
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="max-w-2xl text-base leading-relaxed text-[#c8daf5] md:text-lg"
                >
                  I build clean portfolio websites for individuals and conversion-focused websites for small businesses.
                  Fast delivery, clear pricing, and easy edits.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="pointer-events-auto flex flex-col items-start gap-4 pt-3 sm:flex-row"
                >
                  <button
                    onClick={() => scrollToSection("packages")}
                    className="group inline-flex items-center gap-2 rounded-full bg-[#8df9a7] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#04170f] transition hover:scale-[1.02]"
                    data-cursor-hover
                  >
                    See Pricing <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={() => openModal("General Consultation")}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white/35 hover:bg-white/10"
                    data-cursor-hover
                  >
                    Start Project <Mail className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handle3DInteraction}
                    className="inline-flex items-center gap-2 py-4 text-xs font-medium uppercase tracking-[0.22em] text-[#9db7de] transition-colors hover:text-white"
                    data-cursor-hover
                  >
                    {isUIHidden ? <EyeOff className="h-4 w-4" /> : <MousePointer2 className="h-4 w-4" />}
                    {isUIHidden ? "Interface Hidden" : "Try 3D Focus"}
                  </button>
                </motion.div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {keyReasons.map((reason) => (
                    <div
                      key={reason.title}
                      className="rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3"
                    >
                      <div className="mb-2 inline-flex rounded-lg bg-[#0e203f] p-2 text-[#5fe7ff]">
                        <reason.icon className="h-4 w-4" />
                      </div>
                      <p className="font-semibold text-white">{reason.title}</p>
                      <p className="mt-1 text-sm text-[#9db7de]">{reason.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {isUIHidden && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-code pointer-events-none absolute left-0 top-0 text-xs uppercase tracking-[0.2em] text-white/55"
            >
              Interaction Mode Active...
            </motion.div>
          )}
        </div>

        <div
          onClick={() => scrollToSection("projects")}
          className="absolute bottom-8 left-0 z-10 flex w-full cursor-pointer justify-between px-8 text-[10px] uppercase tracking-[0.22em] text-[#89a8d5] transition-colors hover:text-white md:px-12"
          data-cursor-hover
        >
          <span>Remote / Worldwide</span>
          <span className="animate-bounce">Scroll to See Demo Sites ↓</span>
        </div>
      </section>

      <div
        className={`relative z-20 mt-[10vh] border-t border-white/10 bg-[#040a17]/88 backdrop-blur-md transition-opacity duration-300 ${
          isUIHidden ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <Marquee />
        <Projects />
        <Services onOpenModal={openModal} />

        <footer className="mx-auto border-t border-white/10 px-6 py-20 text-center md:px-10">
          <h2 className="font-display mb-8 text-4xl tracking-tight text-white md:text-7xl">
            Build Once.
            <br />
            Own It Forever.
          </h2>
          <button
            onClick={() => openModal("General Consultation")}
            className="inline-flex items-center gap-3 rounded-full bg-[#5fe7ff] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#031219] transition hover:bg-[#7fedff]"
            data-cursor-hover
          >
            <Mail className="h-5 w-5" />
            Book Strategy Call
          </button>

          <div className="font-code mt-16 text-xs uppercase tracking-[0.2em] text-[#6e88b1]">
            © 2026 Apex Designs. All rights reserved.
          </div>
        </footer>
      </div>

      <ContactModal
        key={`${isContactOpen}-${selectedPackage}`}
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        selectedPackage={selectedPackage}
      />
    </main>
  );
}
