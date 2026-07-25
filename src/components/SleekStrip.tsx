import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Sparkles, Sliders, ShieldCheck } from 'lucide-react';

interface SleekStripProps {
  onOpenBooking: () => void;
  onOpenBookingWithData?: (data: { score: number; diagnosis: string }) => void;
}

export const SleekStrip: React.FC<SleekStripProps> = ({ onOpenBooking, onOpenBookingWithData }) => {
  // Column 1 state: active expertise pillar
  const [activeExpertise, setActiveExpertise] = useState<number>(0);
  const expertiseItems = [
    {
      id: '01',
      title: 'Sales Strategy',
      desc: 'Predictable outbound cadences, executive discovery scripts, and MEDDPICC qualification frameworks.',
      tags: ['Cold Outbound', 'AE Playbooks', 'Deal Desk']
    },
    {
      id: '02',
      title: 'Growth Optimization',
      desc: 'Unit economics tuning, ACV expansion strategies, and automated funnel conversion architecture.',
      tags: ['CAC Payback', 'NDR Expansion', 'Pricing Tiers']
    },
    {
      id: '03',
      title: 'Strategic Partnerships',
      desc: 'AWS/GCP cloud marketplace listings, co-sell incentive models, and ecosystem distribution pipelines.',
      tags: ['Cloud Marketplace', 'Co-Sell Alignment', 'Zero-CAC']
    }
  ];

  // Column 2 state: active execution phase
  const [activePhase, setActivePhase] = useState<number>(0);
  const phases = [
    { name: 'Discover', time: 'Weeks 1-2', details: 'Audit current pipeline, outbound conversion, and founder-led sales bottlenecks.' },
    { name: 'Design', time: 'Weeks 3-4', details: 'Architect outbound cadences, account target lists, and partner co-sell collateral.' },
    { name: 'Execute', time: 'Weeks 5-8', details: 'Roll out live multi-touch outreach, train sales reps, and conduct live deal reviews.' },
    { name: 'Scale', time: 'Month 3+', details: 'Institutionalize playbooks, automate metrics reporting, and expand partner channels.' }
  ];

  // Column 3 state: Quick viability calculator
  const [acv, setAcv] = useState<number>(25); // in $k
  const [outboundReps, setOutboundReps] = useState<number>(2);
  const [winRate, setWinRate] = useState<number>(20); // in %

  const calculatedPipeline = Math.round((acv * outboundReps * (winRate / 100) * 8)); // estimated quarterly pipeline
  const viabilityScore = Math.min(98, Math.max(35, Math.round((acv * 0.8) + (winRate * 1.5) + (outboundReps * 5))));

  return (
    <section className="bg-[#0f0f0f] text-white border-t border-white/10 py-12 md:py-16 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Expertise Pillars */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                  Core Expertise
                </span>
                <span className="text-[10px] font-mono text-neutral-400">01 / 03</span>
              </div>

              <div className="space-y-3 mb-6">
                {expertiseItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveExpertise(idx)}
                    className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      activeExpertise === idx
                        ? 'bg-white/10 border-white/30 text-white shadow-sm'
                        : 'bg-transparent border-white/5 text-neutral-400 hover:text-neutral-200 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium tracking-tight">{item.title}</span>
                      <span className="text-[10px] font-mono opacity-60">{item.id}</span>
                    </div>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExpertise}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300 space-y-3"
                >
                  <p className="leading-relaxed">{expertiseItems[activeExpertise].desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {expertiseItems[activeExpertise].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>High-ACV B2B Focus</span>
              <span className="text-white">100% Founder Aligned</span>
            </div>
          </div>

          {/* Column 2: Execution Framework */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                  Execution Framework
                </span>
                <span className="text-[10px] font-mono text-emerald-400">4-Step Sprint</span>
              </div>

              {/* Progress Stage Tracker */}
              <div className="grid grid-cols-4 gap-1 mb-6">
                {phases.map((phase, idx) => (
                  <button
                    key={phase.name}
                    onClick={() => setActivePhase(idx)}
                    className="text-left cursor-pointer group"
                  >
                    <span className="text-[11px] font-semibold block text-neutral-300 group-hover:text-white truncate">
                      {phase.name}
                    </span>
                    <div
                      className={`h-[3px] w-full mt-1.5 rounded-full transition-all ${
                        activePhase === idx ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'bg-neutral-800'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 text-xs space-y-3"
                >
                  <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400">
                    <span className="text-white font-bold uppercase">{phases[activePhase].name} Phase</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {phases[activePhase].time}
                    </span>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">{phases[activePhase].details}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-mono">Sprint Timeline</span>
              <span className="text-xs font-mono text-emerald-400">4-Week Structured Execution</span>
            </div>
          </div>

          {/* Column 3: Viability Calculator */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                  Commercial Viability Score
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Live Calculator
                </span>
              </div>

              <div className="space-y-3 mb-5">
                <div>
                  <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                    <span>Average Contract Value (ACV)</span>
                    <span className="text-white font-bold">${acv}k / year</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    step="5"
                    value={acv}
                    onChange={(e) => setAcv(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                    <span>Outbound Sales Reps</span>
                    <span className="text-white font-bold">{outboundReps} Reps</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={outboundReps}
                    onChange={(e) => setOutboundReps(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                    <span>Target Win Rate</span>
                    <span className="text-white font-bold">{winRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={winRate}
                    onChange={(e) => setWinRate(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between mb-4">
                <div>
                  <div className="text-[10px] font-mono uppercase text-neutral-400">Quarterly Pipeline Model</div>
                  <div className="text-lg font-bold font-mono text-white">${calculatedPipeline}k ARR</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono uppercase text-neutral-400">Viability Index</div>
                  <div className="text-lg font-bold font-mono text-emerald-400">{viabilityScore}/100</div>
                </div>
              </div>
            </div>

            <div className="w-full py-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-[11px] font-mono text-center uppercase tracking-wider">
              <span>Interactive Pipeline Simulation</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
