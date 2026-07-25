import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Lightbulb, TrendingUp, HeartHandshake, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const points = [
    {
      title: "We don't just give advice.",
      description: "We help you get things done.",
      icon: <Wrench className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "We think like founders.",
      description: "We understand startup challenges.",
      icon: <Lightbulb className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "We focus on growth.",
      description: "Everything we do should help your business move forward.",
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "We become part of your team.",
      description: "Your success becomes our success.",
      icon: <HeartHandshake className="w-6 h-6 text-emerald-400" />,
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#0a0a0a] text-white relative border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-4"
          >
            <span>Why Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4"
          >
            Why Choose MicroVyable?
          </motion.h2>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-2xl border border-white/10 bg-[#0f0f0f] flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10 mb-6 group-hover:scale-105 transition-transform">
                  {point.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  {point.title}
                </h3>

                <p className="text-base text-neutral-300 font-sans leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
