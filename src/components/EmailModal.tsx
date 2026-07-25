import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, ExternalLink, Copy, Check, Sparkles } from 'lucide-react';
import { EMAIL_ADDRESS, openGmailCompose, openNativeMailto, copyEmailToClipboard } from '../utils/email';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const EmailModal: React.FC<EmailModalProps> = ({
  isOpen,
  onClose,
  title = 'Book a Discovery Call'
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    const success = await copyEmailToClipboard();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleGmail = () => {
    openGmailCompose(title);
    onClose();
  };

  const handleNativeMail = () => {
    openNativeMailto(title);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="bg-[#0f0f0f] border border-white/15 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Access</span>
          </div>

          <h3 className="text-2xl font-extrabold tracking-tight mb-2 text-white">
            {title}
          </h3>

          <p className="text-sm text-neutral-300 mb-6 font-sans leading-relaxed">
            Send us a message directly at <span className="font-mono text-emerald-400 font-semibold">{EMAIL_ADDRESS}</span> or choose your preferred email method below:
          </p>

          <div className="space-y-3">
            {/* Option 1: Gmail in New Tab */}
            <button
              onClick={handleGmail}
              className="w-full py-3.5 px-4 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider flex items-center justify-between hover:bg-neutral-200 transition-all cursor-pointer shadow-lg group"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-rose-600" />
                <span>Open in Gmail (New Tab)</span>
              </div>
              <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Option 2: Default Mail Client */}
            <button
              onClick={handleNativeMail}
              className="w-full py-3.5 px-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-between transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Open Default Mail App</span>
              </div>
              <ExternalLink className="w-4 h-4 text-neutral-400" />
            </button>

            {/* Option 3: Copy Email Address */}
            <button
              onClick={handleCopy}
              className="w-full py-3.5 px-4 rounded-xl border border-dashed border-white/20 bg-neutral-900/60 hover:bg-neutral-900 text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center justify-between transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-400" />}
                <span>{copied ? 'Copied to Clipboard!' : `Copy ${EMAIL_ADDRESS}`}</span>
              </div>
              <span className="text-[10px] font-sans text-neutral-500 uppercase">{copied ? 'Done' : 'Click to copy'}</span>
            </button>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-neutral-500 font-sans">
            We respond to all startup inquiries within 24 hours.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
