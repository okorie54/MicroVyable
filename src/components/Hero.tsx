import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { MicroVyableLogo } from './MicroVyableLogo';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreMore }) => {
  // Words breakdown for staggered bounce animation
  const headingWords = [
    { text: 'Helping', highlight: false },
    { text: 'startups', highlight: 'startups' },
    { text: 'become', highlight: false },
    { text: 'commercially', highlight: 'dim' },
    { text: 'vyable.', highlight: 'vyable' },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Logo display with tagline badge */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
            <MicroVyableLogo size="sm" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest hidden sm:inline">
              Commercial Advisory
            </span>
          </div>
        </motion.div>

        {/* Animated Bouncy Heading */}
        <div className="mb-6 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight leading-[1.05] flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 gap-y-2 select-none">
            {headingWords.map((item, i) => {
              if (item.highlight === 'startups') {
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40, scale: 0.6, rotate: -5 }}
                    animate={{
                      opacity: 1,
                      y: [0, -6, 0],
                      scale: 1,
                      rotate: 0,
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: -3,
                      y: -8,
                      transition: { type: 'spring', stiffness: 500, damping: 10 },
                    }}
                    transition={{
                      opacity: { duration: 0.4, delay: i * 0.08 },
                      y: {
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                        delay: 0.6,
                      },
                      scale: { type: 'spring', stiffness: 400, damping: 12, delay: i * 0.08 },
                    }}
                    className="inline-block px-3 py-0.5 rounded-2xl bg-white/10 border border-white/20 text-white font-extrabold shadow-sm cursor-pointer"
                  >
                    startups
                  </motion.span>
                );
              }

              if (item.highlight === 'vyable') {
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40, scale: 0.7 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{
                      scale: 1.18,
                      y: -10,
                      transition: { type: 'spring', stiffness: 450, damping: 10 },
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 12,
                      delay: i * 0.09,
                    }}
                    className="inline-block text-white font-extrabold underline decoration-emerald-400 decoration-wavy underline-offset-8 cursor-pointer"
                  >
                    vyable.
                  </motion.span>
                );
              }

              if (item.highlight === 'dim') {
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 15,
                      delay: i * 0.08,
                    }}
                    className="inline-block text-neutral-500 font-normal cursor-pointer"
                  >
                    commercially
                  </motion.span>
                );
              }

              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{
                    scale: 1.12,
                    y: -6,
                    transition: { type: 'spring', stiffness: 400, damping: 12 },
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 14,
                    delay: i * 0.08,
                  }}
                  className="inline-block text-white cursor-pointer"
                >
                  {item.text}
                </motion.span>
              );
            })}
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed max-w-2xl mb-8"
        >
          We help startups find customers, grow faster, and build the right partnerships.
        </motion.p>

        {/* Pillars from Logo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono tracking-wider text-neutral-300 mb-10 pb-6 border-b border-white/10 w-full max-w-2xl"
        >
          <span className="text-white font-bold">Find Customers</span>
          <span className="text-neutral-600">•</span>
          <span className="text-white font-bold">Grow Faster</span>
          <span className="text-neutral-600">•</span>
          <span className="text-white font-bold">Build Partnerships</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={onExploreMore}
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-100 transition-all text-xs uppercase tracking-wider flex items-center gap-2.5 cursor-pointer shadow-xl shadow-white/10 hover:shadow-white/20 group"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Core Thesis Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full max-w-2xl p-6 rounded-2xl border border-white/10 bg-[#0f0f0f] relative overflow-hidden mb-10 shadow-xl"
        >
          <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 font-mono">
            The Core Thesis
          </div>
          <p className="text-sm font-light italic leading-relaxed text-neutral-300">
            &quot;Most startups fail not because they lack a great product, but because they lack a{' '}
            <span className="text-white border-b border-white/30 font-medium">
              repeatable commercial system
            </span>{' '}
            to sell it.&quot;
          </p>
        </motion.div>

        {/* Minimal Proof Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-neutral-500 font-mono"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
            <span>Zero-Fluff Execution</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
            <span>Founder-Focused Playbooks</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
            <span>Embedded Co-Pilot</span>
          </span>
        </motion.div>

      </div>
    </section>
  );
};


