import React from 'react';
import { motion } from 'motion/react';
import { Search, Compass, Zap, TrendingUp, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      number: '1',
      title: 'We Learn',
      description: 'We understand your business.',
      icon: <Search className="w-5 h-5 text-emerald-400" />,
    },
    {
      number: '2',
      title: 'We Plan',
      description: 'We build a simple strategy.',
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
    },
    {
      number: '3',
      title: 'We Execute',
      description: 'We work alongside your team.',
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
    },
    {
      number: '4',
      title: 'We Grow',
      description: 'We measure results and improve.',
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#0a0a0a] text-white relative border-t border-white/10 overflow-hidden">
      {/* Subtle background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-4"
          >
            <span>Our Process</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4"
          >
            How We Work
          </motion.h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl border border-white/10 bg-[#0f0f0f] flex flex-col justify-between hover:border-white/25 transition-all duration-300 relative overflow-hidden group shadow-xl"
            >
              {/* Step number badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-lg text-white group-hover:bg-white/10 transition-colors">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-lg bg-white/5 text-emerald-400 border border-white/5">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              {/* Bottom decorative line accent */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>Step {step.number} of 4</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
