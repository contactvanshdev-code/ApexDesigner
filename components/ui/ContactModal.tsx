"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string;
}

const CONTACT_EMAIL = "contact.vanshdev@gmail.com";

export default function ContactModal({ isOpen, onClose, selectedPackage }: ContactModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: selectedPackage
      ? `I'm interested in the ${selectedPackage} plan. Please share the next steps and timeline.`
      : ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = selectedPackage
      ? `Website Inquiry: ${selectedPackage}`
      : "New Website Inquiry";

    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.message}`;

    const gmailComposeUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}` +
      `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const composerTab = window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
    if (!composerTab) {
      window.location.href = mailtoUrl;
    }

    setLoading(false);
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      onClose();
      setSuccess(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-[#07112a] p-5 shadow-2xl pointer-events-auto sm:p-7 md:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(95,231,255,0.2),transparent_40%)]" />

              <button
                onClick={onClose} 
                className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white sm:right-6 sm:top-6"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              {success ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center sm:py-10">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#8df9a7]/20 text-[#8df9a7] sm:mb-4 sm:h-16 sm:w-16">
                    <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="font-display text-2xl text-white sm:text-3xl">Email Composer Opened</h3>
                  <p className="text-sm text-[#b7cceb] sm:text-base">
                    Send it from your email app to deliver the message to {CONTACT_EMAIL}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-5 sm:space-y-6">
                  <div>
                    <h3 className="font-display mb-2 text-2xl text-white sm:text-3xl">Let’s Build This</h3>
                    <p className="text-xs text-[#b7cceb] sm:text-sm">
                      Drop your details and I’ll share a practical roadmap with timeline and pricing.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="font-code text-[10px] uppercase tracking-[0.18em] text-[#5fe7ff] sm:text-xs sm:tracking-[0.22em]">
                      Name
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-3 text-sm text-white placeholder:text-[#7f97be] transition-colors focus:border-[#5fe7ff] focus:outline-none sm:px-4"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-code text-[10px] uppercase tracking-[0.18em] text-[#5fe7ff] sm:text-xs sm:tracking-[0.22em]">
                      Email
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-3 text-sm text-white placeholder:text-[#7f97be] transition-colors focus:border-[#5fe7ff] focus:outline-none sm:px-4"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-code text-[10px] uppercase tracking-[0.18em] text-[#5fe7ff] sm:text-xs sm:tracking-[0.22em]">
                      Project Details
                    </label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-3.5 py-3 text-sm text-white placeholder:text-[#7f97be] transition-colors focus:border-[#5fe7ff] focus:outline-none sm:px-4"
                      placeholder="Tell me your goal, audience, and deadline..."
                    />
                  </div>

                  <button 
                    disabled={loading}
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#8df9a7] py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[#052012] transition hover:bg-[#a7ffba] disabled:cursor-not-allowed disabled:opacity-60 sm:py-4 sm:text-sm sm:tracking-[0.2em]"
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Send Request <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
