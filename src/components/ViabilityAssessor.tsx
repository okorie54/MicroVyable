import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DiagnosticInput, DiagnosticResult } from '../types';
import { Sparkles, Activity, CheckCircle, ArrowRight, Loader2, RefreshCw, AlertCircle, BarChart, ShieldCheck } from 'lucide-react';

interface ViabilityAssessorProps {
  onOpenBookingWithData?: (data: { score: number; diagnosis: string }) => void;
}

export const ViabilityAssessor: React.FC<ViabilityAssessorProps> = ({ onOpenBookingWithData }) => {
  const [formData, setFormData] = useState<DiagnosticInput>({
    stage: 'Seed / Series A',
    focus: 'Sales Execution & Outbound',
    challenges: 'Inconsistent pipeline velocity & long deal cycles',
    mrr: '$20k - $50k MRR',
    teamSize: '5-15 employees',
    customGoal: 'Transition from founder-led sales to a repeatable AE team and partner co-sell engine.'
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to compute commercial diagnostic.');
      }

      const data: DiagnosticResult = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError('An error occurred generating your diagnostic. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
  };

  return (
    <section id="assessor" className="py-20 md:py-32 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-mono uppercase tracking-widest text-neutral-700 dark:text-neutral-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>AI Commercial Viability Assessor</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-3">
            Audit Your Revenue Engine in 60 Seconds
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-300 font-sans">
            Our diagnostic model analyzes your current stage, sales bottlenecks, and ecosystem positioning to generate a tailored GTM roadmap.
          </p>
        </div>

        {/* Main Assessor Layout */}
        {!result ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 md:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-2xl max-w-4xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Stage */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                    Startup Funding / Growth Stage
                  </label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm font-medium focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white outline-none transition-all"
                  >
                    <option value="Pre-Seed / Angel ($0-$10k MRR)">Pre-Seed / Angel ($0-$10k MRR)</option>
                    <option value="Seed / Series A ($20k-$50k MRR)">Seed / Series A ($20k-$50k MRR)</option>
                    <option value="Series A+ ($100k-$250k MRR)">Series A+ ($100k-$250k MRR)</option>
                    <option value="Bootstrapped Profitable ($500k+ ARR)">Bootstrapped Profitable ($500k+ ARR)</option>
                  </select>
                </div>

                {/* Primary Focus */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                    Primary Commercial Focus
                  </label>
                  <select
                    value={formData.focus}
                    onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm font-medium focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white outline-none transition-all"
                  >
                    <option value="Sales Execution & Outbound">Sales Execution & Outbound Playbooks</option>
                    <option value="Strategic Partnerships & Co-Selling">Strategic Partnerships & Co-Selling</option>
                    <option value="Monetization, Pricing & ACV Expansion">Monetization, Pricing & ACV Expansion</option>
                    <option value="Founder Sales Hand-off & AE Hiring">Founder Sales Hand-off & AE Hiring</option>
                  </select>
                </div>

                {/* Primary Challenge */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                    Primary Commercial Challenge / Bottleneck
                  </label>
                  <input
                    type="text"
                    value={formData.challenges}
                    onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                    placeholder="e.g. Lengthy sales cycles, low contract value, founder bandwidth cap"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white outline-none transition-all"
                  />
                </div>

                {/* Current MRR */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                    Current Monthly Revenue Range
                  </label>
                  <select
                    value={formData.mrr}
                    onChange={(e) => setFormData({ ...formData, mrr: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm font-medium focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white outline-none transition-all"
                  >
                    <option value="Under $10k MRR">Under $10k MRR</option>
                    <option value="$10k - $30k MRR">$10k - $30k MRR</option>
                    <option value="$30k - $100k MRR">$30k - $100k MRR</option>
                    <option value="$100k - $250k MRR">$100k - $250k MRR</option>
                    <option value="$250k+ MRR">$250k+ MRR</option>
                  </select>
                </div>
              </div>

              {/* Goal Note */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                  Key Founder Goal for the Next 6 Months
                </label>
                <textarea
                  rows={2}
                  value={formData.customGoal}
                  onChange={(e) => setFormData({ ...formData, customGoal: e.target.value })}
                  placeholder="Describe where you want your commercial engine to be..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white outline-none transition-all resize-none"
                />
              </div>

              {error && (
                <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 font-semibold text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
                    <span>Analyzing Revenue Engine & Benchmark Data...</span>
                  </>
                ) : (
                  <>
                    <Activity className="w-4 h-4" />
                    <span>Generate Commercial Viability Diagnosis</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          /* Results View */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 md:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-2xl space-y-8"
          >
            {/* Header Score & Stage */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-neutral-200 dark:border-neutral-800 gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {result.viabilityStage}
                </span>
                <h3 className="text-2xl font-extrabold text-neutral-950 dark:text-white mt-2">
                  GTM Engine Diagnostic Summary
                </h3>
              </div>

              <div className="flex items-center gap-4 bg-neutral-100 dark:bg-neutral-900 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <div className="text-center">
                  <span className="text-xs font-mono uppercase text-neutral-500 block">Viability Index</span>
                  <span className="text-4xl font-extrabold font-mono text-neutral-950 dark:text-white">
                    {result.overallScore}
                  </span>
                  <span className="text-xs text-neutral-500">/100</span>
                </div>
              </div>
            </div>

            {/* Key Diagnosis Box */}
            <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Executive Diagnostic Assessment</span>
              </h4>
              <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
                "{result.keyDiagnosis}"
              </p>
            </div>

            {/* 4 Pillars Breakdown */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
                Pillar Breakdown & Action Insights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(result.pillars).map(([key, pillar]: [string, any]) => (
                  <div key={key} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950/60">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase font-mono">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                        {pillar.score}/100 ({pillar.status})
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {pillar.insight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Action Plan */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
                Recommended 4-Phase Execution Roadmap
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {result.actionPlan.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40">
                    <span className="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
                      {step.phase}
                    </span>
                    <h5 className="font-bold text-xs text-neutral-900 dark:text-neutral-100 mb-1">
                      {step.title}
                    </h5>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-normal">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions Footer */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleReset}
                className="px-4 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Re-run Assessment</span>
              </button>

              <button
                onClick={() => {
                  if (onOpenBookingWithData) {
                    onOpenBookingWithData({ score: result.overallScore, diagnosis: result.keyDiagnosis });
                  }
                }}
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold rounded-xl bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Book Discovery Call to Review This Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
