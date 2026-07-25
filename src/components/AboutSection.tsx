import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Target, TrendingUp, Users } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>About MicroVyable</span>
          </div>
        </motion.div>

        {/* Big Impact Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-center text-white leading-tight mb-10"
        >
          Growing a startup is hard.
        </motion.h2>

        {/* Highlighted Body Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center space-y-6 text-lg sm:text-xl text-neutral-300 leading-relaxed font-sans"
        >
          <p className="text-xl sm:text-2xl font-medium text-white">
            Most startups don&apos;t fail because of bad ideas.
          </p>

          <p className="text-neutral-400 text-base sm:text-lg">
            They struggle because finding customers, growing consistently, and building the right relationships is difficult.
          </p>

          <div className="pt-4">
            <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              That&apos;s where <span className="text-emerald-400 underline decoration-emerald-500/50 underline-offset-8">MicroVyable</span> comes in.
            </p>
          </div>
        </motion.div>

        {/* 3 Core Solution Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <div className="p-6 rounded-2xl border border-white/10 bg-[#0f0f0f] flex flex-col items-start hover:border-white/20 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Find Customers</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Build outbound systems and sales processes that identify, engage, and convert high-value accounts.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-[#0f0f0f] flex flex-col items-start hover:border-white/20 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Grow Faster</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Optimize conversion funnels, unit economics, and recurring revenue pipelines with proven playbooks.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-[#0f0f0f] flex flex-col items-start hover:border-white/20 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Build Partnerships</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Unlock strategic cloud marketplace channels and ecosystem co-selling opportunities.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
