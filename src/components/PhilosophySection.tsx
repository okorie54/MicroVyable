import React from 'react';
import { motion } from 'motion/react';
import { PHILOSOPHY_POINTS } from '../data/content';
import { ShieldAlert, Cpu, Share2, BarChart3, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-amber-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-500" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-emerald-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-purple-500" />;
      default:
        return <ShieldAlert className="w-5 h-5" />;
    }
  };

  return (
    <section id="philosophy" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Thesis Hero Banner */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-xs font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-6">
            Our Thesis on Startup Survival
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-[1.1] mb-6">
            Startups don’t fail because they lack great products. They fail because they lack{' '}
            <span className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-8">
              repeatable commercial systems.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-sans leading-relaxed">
            The market is littered with superior technical architectures that went bankrupt because founders assumed product quality alone creates revenue velocity.
          </p>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {PHILOSOPHY_POINTS.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm hover:border-neutral-400 dark:hover:border-neutral-700 transition-all shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  {getIcon(point.icon)}
                </div>
                <h3 className="font-bold text-lg text-neutral-950 dark:text-white tracking-tight">
                  {point.title}
                </h3>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Editorial Matrix */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8 md:p-10 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-2">
              The Paradigm Shift Required for Series A & Beyond
            </h3>
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Comparing Common Founder Traps vs. Engineered Revenue Systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
            {/* Common Traps */}
            <div className="space-y-4 md:pr-6">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm uppercase tracking-wider font-mono">
                <AlertTriangle className="w-4 h-4" />
                <span>Product-Obsessed Traps</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Relying on founder charisma to close every enterprise deal manually.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Treating pricing as an afterthought or discounting aggressively to win logos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Expecting cloud partner badges to magically generate unsolicited pipeline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Hiring senior sales leaders before codifying the initial outbound playbook.</span>
                </li>
              </ul>
            </div>

            {/* Revenue Engineered */}
            <div className="space-y-4 pt-6 md:pt-0 md:pl-6">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-wider font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>MicroVyable Engineered Realities</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Codified outbound sequences and MEDDPICC deal desks executed by hired AEs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Value-based pricing linked to buyer ROI metrics with expanding contract values.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Active co-selling agreements with partner rep quota commission alignment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Repeatable, board-ready sales operations with less than 5% forecast variance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
