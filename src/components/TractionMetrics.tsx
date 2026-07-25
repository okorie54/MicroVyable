import React from 'react';
import { motion } from 'motion/react';
import { METRICS_DATA, CLIENT_LOGOS } from '../data/content';
import { TrendingUp, ShieldCheck, Award, Building2 } from 'lucide-react';

export const TractionMetrics: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-y border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
              Proven Commercial Impact
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              Quantifiable Velocity Across Portfolio Startups
            </h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md font-sans">
            We measure success exclusively in closed contract value, shortened enterprise deal cycles, and sustainable NDR.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm hover:border-neutral-400 dark:hover:border-neutral-700 transition-all shadow-xs group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400">
                  {item.label}
                </span>
                <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {item.change}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-neutral-950 dark:text-white mb-2 group-hover:scale-102 transition-transform">
                {item.value}
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Client Ecosystem Logo Ticker */}
        <div className="mt-16 pt-10 border-t border-neutral-200/80 dark:border-neutral-800/80">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-6">
            Trusted by venture-backed founders & ecosystem partners
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-center opacity-80">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/40 dark:bg-neutral-950/40 text-center hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
              >
                <div className="font-semibold text-sm text-neutral-800 dark:text-neutral-200 tracking-tight">
                  {client.name}
                </div>
                <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                  {client.sector}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
