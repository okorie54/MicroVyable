import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, ShieldCheck, Zap, Share2, ArrowUpRight, TrendingUp, Layers } from 'lucide-react';

export const GrowthVisualizer: React.FC = () => {
  const [activePreset, setActivePreset] = useState<'outbound' | 'partners' | 'expansion'>('outbound');

  const presets = {
    outbound: {
      label: 'Predictable Outbound Engine',
      subtitle: 'Cold Outreach → Qualified Discovery → High-ACV Close',
      metrics: [
        { name: 'Meeting Conversion', val: '18.4%', trend: '+4.2%' },
        { name: 'Win Rate', val: '28.5%', trend: '+9.1%' },
        { name: 'Avg Sales Cycle', val: '34 Days', trend: '-28 Days' },
        { name: 'Pipeline Velocity', val: '$420k/mo', trend: '+140%' }
      ],
      nodes: [
        { id: 'n1', label: 'Tier-1 Account List', type: 'input', status: 'Active (2,400 ICPs)' },
        { id: 'n2', label: 'Multi-Touch Cadence', type: 'process', status: 'Email + LinkedIn + Phone' },
        { id: 'n3', label: 'Executive Discovery', type: 'gate', status: 'MEDDPICC Qualified' },
        { id: 'n4', label: 'Mutual Action Plan', type: 'stage', status: 'ROI Model Validated' },
        { id: 'n5', label: 'Predictable ARR', type: 'output', status: 'Contracted Revenue' }
      ]
    },
    partners: {
      label: 'Strategic Partner Ecosystem',
      subtitle: 'Cloud Alliance → Co-Sell Intro → Zero-CAC Deal',
      metrics: [
        { name: 'Co-Sell Pipeline', val: '$1.8M', trend: '+320%' },
        { name: 'Partner Win Rate', val: '41.2%', trend: '1.8x Direct' },
        { name: 'CAC Efficiency', val: '$0 Ad Spend', trend: 'Infinite ROI' },
        { name: 'Trust Multiplier', val: '94/100', trend: 'High Enterprise Trust' }
      ],
      nodes: [
        { id: 'p1', label: 'Cloud Marketplace Listing', type: 'input', status: 'AWS / GCP Co-Sell' },
        { id: 'p2', label: 'Partner Rep Incentive', type: 'process', status: 'Quota Credit Aligned' },
        { id: 'p3', label: 'Joint Executive Intro', type: 'gate', status: 'Warm Buyer Intro' },
        { id: 'p4', label: 'Accelerated Deal Desk', type: 'stage', status: 'Shortened Procurement' },
        { id: 'p5', label: 'Ecosystem Distribution', type: 'output', status: 'Zero-CAC Scale' }
      ]
    },
    expansion: {
      label: 'Monetization & ACV Expansion',
      subtitle: 'Land Small → Usage Expansion → Enterprise Tier',
      metrics: [
        { name: 'Net Retention (NDR)', val: '138%', trend: '+22%' },
        { name: 'Avg Contract Value', val: '$48,000', trend: '+160%' },
        { name: 'CAC Payback', val: '6.2 Months', trend: '-5.8 Months' },
        { name: 'Expansion ARR Share', val: '42%', trend: 'Compound Growth' }
      ],
      nodes: [
        { id: 'e1', label: 'Land Contract ($15k)', type: 'input', status: 'Core Product Deployment' },
        { id: 'e2', label: 'Usage Triggers Met', type: 'process', status: '85% Capacity Reached' },
        { id: 'e3', label: 'Value Review Milestone', type: 'gate', status: 'Exec ROI Briefing' },
        { id: 'e4', label: 'Enterprise Tier Upgrade', type: 'stage', status: 'Custom Security & SLA' },
        { id: 'e5', label: 'High-LTV Customer', type: 'output', status: '$60k+ Annual Contract' }
      ]
    }
  };

  const current = presets[activePreset];

  return (
    <div className="w-full relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/60 backdrop-blur-xl p-6 md:p-8 overflow-hidden shadow-2xl">
      {/* Background glow and subtle vector grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/40 via-transparent to-neutral-300/30 dark:from-neutral-800/20 dark:via-transparent dark:to-neutral-900/40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-300/20 dark:bg-neutral-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Control Presets Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
            <Activity className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span>Interactive Commercial Engine Simulation</span>
          </div>
          <h3 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
            {current.label}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 bg-neutral-200/80 dark:bg-neutral-800/80 p-1 rounded-xl border border-neutral-300/50 dark:border-neutral-700/50">
          <button
            onClick={() => setActivePreset('outbound')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              activePreset === 'outbound'
                ? 'bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 shadow-sm border border-neutral-300 dark:border-neutral-700'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Outbound</span>
          </button>
          <button
            onClick={() => setActivePreset('partners')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              activePreset === 'partners'
                ? 'bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 shadow-sm border border-neutral-300 dark:border-neutral-700'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Partnerships</span>
          </button>
          <button
            onClick={() => setActivePreset('expansion')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              activePreset === 'expansion'
                ? 'bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 shadow-sm border border-neutral-300 dark:border-neutral-700'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>ACV Expansion</span>
          </button>
        </div>
      </div>

      {/* Abstract Animated Flow Network */}
      <div className="py-8 my-2 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-300 dark:from-neutral-800 via-neutral-600 dark:to-neutral-800 -translate-y-1/2 z-0" />

          {current.nodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative z-10 group"
            >
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-neutral-900/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                    Stage 0{index + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {node.label}
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  {node.status}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live Impact Metric Cards Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-neutral-200 dark:border-neutral-800 relative z-10">
        <AnimatePresence mode="wait">
          {current.metrics.map((metric, idx) => (
            <motion.div
              key={`${activePreset}-${idx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              className="p-3.5 rounded-xl bg-white/60 dark:bg-neutral-950/60 border border-neutral-200/80 dark:border-neutral-800/80"
            >
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                {metric.name}
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-bold font-mono text-neutral-900 dark:text-neutral-100">
                  {metric.val}
                </span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 flex items-center gap-0.5">
                  <ArrowUpRight className="w-3 h-3" />
                  {metric.trend}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
