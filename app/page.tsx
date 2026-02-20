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
      
      <nav className="fixed left-3 top-3 z-[110] sm:left-5 sm:top-5 md:left-8 md:top-8">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-[#0b1832]/70 px-3 py-2 backdrop-blur-md transition-colors hover:bg-[#102246]/75 sm:gap-3 sm:px-5 sm:py-3"
          data-cursor-hover
        >
          <div className="relative h-4 w-4">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#8df9a7]/35" />
            <span className="relative block h-4 w-4 rounded-full bg-gradient-to-tr from-[#5fe7ff] to-[#8df9a7]" />
          </div>
          <span className="font-code text-[10px] tracking-[0.16em] text-white/90 transition-colors group-hover:text-white sm:text-xs sm:tracking-[0.22em]">
            Apex Designs
          </span>
        </div>
      </nav>

      <section
        id="hero"
        className="relative flex min-h-screen w-full flex-col justify-center px-4 pb-14 pt-20 sm:px-6 sm:pt-24 md:px-10"
      >
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
                className="hero-shell max-w-4xl space-y-6 rounded-[1.5rem] p-5 text-left sm:space-y-7 sm:p-7 md:space-y-8 md:rounded-[2rem] md:p-10"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="chip inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-md"
                >
                  <div className="h-2 w-2 animate-pulse rounded-full bg-[#8df9a7]" />
                  <span className="font-code text-[9px] uppercase tracking-[0.17em] text-[#d8ffe6] sm:text-[10px] sm:tracking-[0.24em]">
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
                    className="text-[clamp(2rem,10vw,4.5rem)] tracking-tight text-white"
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="max-w-2xl text-sm leading-relaxed text-[#c8daf5] sm:text-base md:text-lg"
                >
                  I build clean portfolio websites for individuals and conversion-focused websites for small businesses.
                  Fast delivery, clear pricing, and easy edits.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="pointer-events-auto flex w-full flex-col items-stretch gap-3 pt-3 sm:w-auto sm:flex-row sm:items-start sm:gap-4"
                >
                  <button
                    onClick={() => scrollToSection("packages")}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8df9a7] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[#04170f] transition hover:scale-[1.02] sm:w-auto sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.16em]"
                    data-cursor-hover
                  >
                    See Pricing <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={() => openModal("General Consultation")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:border-white/35 hover:bg-white/10 sm:w-auto sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.16em]"
                    data-cursor-hover
                  >
                    Start Project <Mail className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handle3DInteraction}
                    className="inline-flex items-center justify-center gap-2 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#9db7de] transition-colors hover:text-white sm:justify-start sm:py-4 sm:text-xs sm:tracking-[0.22em]"
                    data-cursor-hover
                  >
                    {isUIHidden ? <EyeOff className="h-4 w-4" /> : <MousePointer2 className="h-4 w-4" />}
                    {isUIHidden ? "Interface Hidden" : "Try 3D Focus"}
                  </button>
                </motion.div>

                <div className="mt-3 grid gap-2.5 sm:mt-4 sm:gap-3 sm:grid-cols-2">
                  {keyReasons.map((reason) => (
                    <div
                      key={reason.title}
                      className="rounded-2xl border border-white/12 bg-white/[0.03] px-3.5 py-3 sm:px-4"
                    >
                      <div className="mb-2 inline-flex rounded-lg bg-[#0e203f] p-1.5 text-[#5fe7ff] sm:p-2">
                        <reason.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                      <p className="text-sm font-semibold text-white sm:text-base">{reason.title}</p>
                      <p className="mt-1 text-xs text-[#9db7de] sm:text-sm">{reason.description}</p>
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
          className="absolute bottom-5 left-0 z-10 flex w-full cursor-pointer justify-center px-4 text-[10px] uppercase tracking-[0.2em] text-[#89a8d5] transition-colors hover:text-white sm:bottom-8 sm:justify-between sm:px-8 sm:tracking-[0.22em] md:px-12"
          data-cursor-hover
        >
          <span className="hidden sm:block">Remote / Worldwide</span>
          <span className="animate-bounce">Scroll to See Demo Sites ↓</span>
        </div>
      </section>

      <div
        className={`relative z-20 mt-12 border-t border-white/10 bg-[#040a17]/88 backdrop-blur-md transition-opacity duration-300 md:mt-[10vh] ${
          isUIHidden ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <Marquee />
        <Projects />
        <Services onOpenModal={openModal} />

        <footer className="mx-auto border-t border-white/10 px-4 py-14 text-center sm:px-6 sm:py-16 md:px-10 md:py-20">
          <h2 className="font-display mb-7 text-3xl tracking-tight text-white sm:mb-8 sm:text-4xl md:text-7xl">
            Build Once.
            <br />
            Own It Forever.
          </h2>
          <button
            onClick={() => openModal("General Consultation")}
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#5fe7ff] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#031219] transition hover:bg-[#7fedff] sm:w-auto sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.16em]"
            data-cursor-hover
          >
            <Mail className="h-5 w-5" />
            Book Strategy Call
          </button>

          <div className="font-code mt-10 text-[10px] uppercase tracking-[0.16em] text-[#6e88b1] sm:mt-14 sm:text-xs sm:tracking-[0.2em]">
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
