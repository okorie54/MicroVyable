import React from 'react';
import { MicroVyableLogo } from './MicroVyableLogo';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (id: string) => void;
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenBooking }) => {
  return (
    <footer className="bg-[#050505] text-neutral-400 border-t border-white/10 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-2 max-w-md">
            <MicroVyableLogo size="md" showPillars={false} />
            <p className="text-sm text-neutral-400 font-sans">
              Helping Startups Become Commercially Viable
            </p>
          </div>

          {/* Nav Links + Prominent Footer CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest font-mono text-neutral-300">
              <button
                onClick={() => onNavigateSection('services')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Services
              </button>

              <button
                onClick={() => onNavigateSection('process')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                How We Work
              </button>

              <button
                onClick={() => onNavigateSection('about')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                About
              </button>

              <button
                onClick={onOpenBooking}
                className="hover:text-emerald-400 transition-colors cursor-pointer text-emerald-400 font-semibold font-mono"
              >
                MICROVYABLE@GMAIL.COM
              </button>
            </div>

            {/* Prominent Footer Button */}
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md group"
            >
              <span>Book a Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} MicroVyable. All rights reserved.
          </div>
          <div>
            Helping Startups Become Commercially Viable
          </div>
        </div>
      </div>
    </footer>
  );
};
