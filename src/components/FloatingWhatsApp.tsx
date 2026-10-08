import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const directWhatsAppUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    STUDIO_INFO.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech card */}
      {showTooltip && (
        <div className="mb-3 p-3.5 rounded-2xl bg-zinc-900 border border-emerald-500/40 shadow-2xl text-left max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-zinc-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white">Vision Editz Support</span>
            </div>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-zinc-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-zinc-300 mt-2">
            Need a fast photo edit, AI restoration or graphic design? Message us directly on WhatsApp!
          </p>
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 block text-center py-1.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-colors"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative group">
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Chat with Vision Editz on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
          <MessageCircle className="w-7 h-7 fill-current relative z-10" />
        </a>

        {/* Hover tag badge */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-xs font-semibold text-white whitespace-nowrap shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
          Chat on WhatsApp
        </div>
      </div>
    </div>
  );
};
