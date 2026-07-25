import React from 'react';
import { motion } from 'motion/react';
import { SERVICE_PILLARS } from '../data/content';
import { TrendingUp, Zap, Share2, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-400" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-emerald-400" />;
      default:
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0a0a0a] text-white relative border-t border-white/10 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-white/5 rounded-full blur-[130px] pointer-events-none" />

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
            <span>Our Offerings</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-400 font-sans"
          >
            We help early-stage startups build predictable revenue engines, unlock scalable growth, and forge high-impact partnerships.
          </motion.p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_PILLARS.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl border border-white/10 bg-[#0f0f0f] flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Icon & Title Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Tagline / Subtitle */}
                <p className="text-sm font-medium text-emerald-400 mb-6 font-sans">
                  {service.subtitle}
                </p>

                {/* List of Outcomes */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  {service.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-200 font-medium">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
