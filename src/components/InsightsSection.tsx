import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INSIGHTS_ARTICLES } from '../data/content';
import { InsightArticle } from '../types';
import { BookOpen, Clock, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const categories = ['All', 'Sales Engineering', 'Strategic Partnerships', 'GTM Acceleration', 'Founder Playbooks'];

  const filteredArticles = selectedCategory === 'All'
    ? INSIGHTS_ARTICLES
    : INSIGHTS_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <section id="insights" className="py-20 md:py-28 relative bg-[#0a0a0a] text-white border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
              Founder Frameworks & Insights
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              Commercial Engineering Playbooks
            </h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md font-sans">
            Tested strategies, outbound architectures, and partnership blueprints curated for technical founders and revenue leaders.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-neutral-200 dark:border-neutral-800 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white bg-neutral-100/60 dark:bg-neutral-900/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveArticle(article)}
              className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all cursor-pointer shadow-xs group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-4">
                  <span className="px-2.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 uppercase text-[10px]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-950 dark:text-white tracking-tight mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80 text-xs font-semibold text-neutral-900 dark:text-neutral-100 group-hover:translate-x-1 transition-transform">
                <span>Read Full Framework</span>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Modal Reader */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase mb-3">
                <span>{activeArticle.category}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-6">
                {activeArticle.title}
              </h2>

              <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
                {activeArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-900 dark:text-neutral-100 font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  <span>Key Founder Takeaways</span>
                </h4>
                <ul className="space-y-2">
                  {activeArticle.keyTakeaways.map((t, idx) => (
                    <li key={idx} className="text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950"
                >
                  Close Framework
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
