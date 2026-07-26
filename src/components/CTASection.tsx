import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

interface CTASectionProps {
  onOpenBooking?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-[#0a0a0a] text-white border-t border-white/10">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-6">
            <span>Contact</span>
          </div>

          {/* Minimal Heading requested */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Let&apos;s Talk
          </h2>

          {/* Minimal Text requested */}
          <p className="text-lg sm:text-2xl text-neutral-300 max-w-2xl mx-auto font-sans leading-relaxed mb-8 font-light">
            Whether you&apos;re building your first startup or looking to grow your business, we&apos;d love to hear from you
          </p>

          {/* Prominent Direct Email Link requested by user */}
          <div className="mb-10">
            <button
              onClick={onOpenBooking}
              className="inline-block text-2xl sm:text-4xl font-mono font-bold text-white hover:text-emerald-400 transition-colors underline decoration-white/30 underline-offset-8 tracking-wider cursor-pointer"
            >
              MICROVYABLE@GMAIL.COM
            </button>
          </div>

          {/* Primary CTA button + direct email option */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 cursor-pointer shadow-xl hover:shadow-white/20 group"
            >
              <span>Book a Discovery Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/10 transition-colors text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>MICROVYABLE@GMAIL.COM</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
