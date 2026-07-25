import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, User, Mail, Building, ShieldCheck } from 'lucide-react';

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  attachedData?: { score: number; diagnosis: string } | null;
}

export const DiscoveryModal: React.FC<DiscoveryModalProps> = ({ isOpen, onClose, attachedData }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    arrRange: '$20k - $50k MRR',
    primaryGoal: 'Build Predictable Outbound & AE Playbook',
    selectedDate: '2026-07-28',
    selectedTime: '10:00 AM EST'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const dates = [
    { label: 'Tue, Jul 28', val: '2026-07-28' },
    { label: 'Wed, Jul 29', val: '2026-07-29' },
    { label: 'Thu, Jul 30', val: '2026-07-30' },
    { label: 'Fri, Jul 31', val: '2026-07-31' }
  ];

  const times = ['09:00 AM EST', '10:30 AM EST', '01:00 PM EST', '03:30 PM EST'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 max-w-xl w-full shadow-2xl relative overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Commercial Strategy Session</span>
            </div>
            <h2 className="text-2xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-2">
              Book a 30-Min Discovery Call
            </h2>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-6 font-sans">
              Directly with MicroVyable partners. We review your current GTM bottlenecks, outbound unit economics, and partner co-sell potential.
            </p>

            {attachedData && (
              <div className="mb-6 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300">
                <span className="font-bold">Attached Diagnostic:</span> GTM Viability Score {attachedData.score}/100.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 dark:text-neutral-400 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 dark:text-neutral-400 mb-1">
                      Work Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@yourstartup.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 dark:text-neutral-400 mb-1">
                      Company / Startup Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nexus AI"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 dark:text-neutral-400 mb-1">
                      Current MRR / Revenue Stage
                    </label>
                    <select
                      value={formData.arrRange}
                      onChange={(e) => setFormData({ ...formData, arrRange: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white outline-none"
                    >
                      <option value="Under $10k MRR">Under $10k MRR</option>
                      <option value="$10k - $50k MRR">$10k - $50k MRR</option>
                      <option value="$50k - $150k MRR">$50k - $150k MRR</option>
                      <option value="$150k+ MRR">$150k+ MRR</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (formData.name && formData.email) setStep(2);
                    }}
                    className="w-full py-3 mt-2 rounded-xl bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 font-semibold text-xs hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Select Time Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 dark:text-neutral-400 mb-2">
                      Select Date
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {dates.map((d) => (
                        <button
                          key={d.val}
                          type="button"
                          onClick={() => setFormData({ ...formData, selectedDate: d.val })}
                          className={`p-2.5 text-xs font-mono rounded-xl border transition-all ${
                            formData.selectedDate === d.val
                              ? 'bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 border-neutral-950 dark:border-white'
                              : 'bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800'
                          }`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 dark:text-neutral-400 mb-2">
                      Select Time Slot
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {times.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setFormData({ ...formData, selectedTime: t })}
                          className={`p-2.5 text-xs font-mono rounded-xl border transition-all ${
                            formData.selectedTime === t
                              ? 'bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 border-neutral-950 dark:border-white'
                              : 'bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3 rounded-xl border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium text-xs hover:bg-neutral-100 dark:hover:bg-neutral-900"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="w-2/3 py-3 rounded-xl bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 font-semibold text-xs hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Confirm Discovery Booking</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center mb-4 border border-emerald-500/20">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-950 dark:text-white tracking-tight mb-2">
              Discovery Call Confirmed
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 max-w-md mx-auto mb-6">
              Calendar invite and video meeting link sent to <strong className="text-neutral-950 dark:text-white">{formData.email}</strong> for {formData.selectedDate} at {formData.selectedTime}.
            </p>

            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-xs text-neutral-500 font-mono text-left mb-6">
              <div>HOST: MicroVyable Principal Partner</div>
              <div>COMPANY: {formData.company || 'Startup'}</div>
              <div>AGENDA: Commercial Viability & Outbound Engine Blueprint</div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-semibold rounded-xl bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950"
            >
              Done
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
