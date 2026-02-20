"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string;
}

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

    const subject = encodeURIComponent(
      `${selectedPackage ?? "Website Inquiry"} | ${formData.name || "New Lead"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.message}`
    );

    const mailto = `mailto:hello@apexdesigns.dev?subject=${subject}&body=${body}`;

    await new Promise((resolve) => setTimeout(resolve, 700));
    window.location.href = mailto;
    setLoading(false);
    setSuccess(true);

    setTimeout(() => {
      onClose();
      setSuccess(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1800);
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
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-[#07112a] p-8 shadow-2xl pointer-events-auto md:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(95,231,255,0.2),transparent_40%)]" />

              <button
                onClick={onClose} 
                className="absolute right-6 top-6 text-gray-400 transition-colors hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              {success ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-10 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#8df9a7]/20 text-[#8df9a7]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl text-white">Request Sent</h3>
                  <p className="text-[#b7cceb]">Your email draft is ready. I usually reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div>
                    <h3 className="font-display mb-2 text-3xl text-white">Let’s Build This</h3>
                    <p className="text-sm text-[#b7cceb]">
                      Drop your details and I’ll share a practical roadmap with timeline and pricing.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="font-code text-xs uppercase tracking-[0.22em] text-[#5fe7ff]">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-[#7f97be] transition-colors focus:border-[#5fe7ff] focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-code text-xs uppercase tracking-[0.22em] text-[#5fe7ff]">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-[#7f97be] transition-colors focus:border-[#5fe7ff] focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-code text-xs uppercase tracking-[0.22em] text-[#5fe7ff]">Project Details</label>
                    <textarea 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-[#7f97be] transition-colors focus:border-[#5fe7ff] focus:outline-none"
                      placeholder="Tell me your goal, audience, and deadline..."
                    />
                  </div>

                  <button 
                    disabled={loading}
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#8df9a7] py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#052012] transition hover:bg-[#a7ffba] disabled:cursor-not-allowed disabled:opacity-60"
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
