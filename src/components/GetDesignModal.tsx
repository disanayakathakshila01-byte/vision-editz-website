import React, { useState, useEffect } from 'react';
import { X, Sparkles, MessageCircle, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA, STUDIO_INFO } from '../data/content';

interface GetDesignModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const GetDesignModal: React.FC<GetDesignModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [selectedService, setSelectedService] = useState(defaultService || 'AI Photo Editing');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [notes, setNotes] = useState('');
  const [urgency, setUrgency] = useState<'standard' | 'express'>('standard');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const buildWhatsAppUrl = () => {
    let msg = `*New Design Request - Vision Editz*\n\n`;
    msg += `*Name:* ${name || 'Prospective Client'}\n`;
    if (whatsapp) msg += `*WhatsApp:* ${whatsapp}\n`;
    msg += `*Service:* ${selectedService}\n`;
    msg += `*Turnaround:* ${urgency === 'express' ? 'Rush Express (12-24h)' : 'Standard (24-48h)'}\n`;
    if (notes) msg += `*Project Brief:* ${notes}\n`;
    msg += `\nI would like to get started with Vision Editz!`;

    const encoded = encodeURIComponent(msg);
    return `https://wa.me/${STUDIO_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encoded}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    window.open(buildWhatsAppUrl(), '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-900/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-heading">
                Get a Design with Vision Editz
              </h3>
              <p className="text-xs text-zinc-400">
                Custom photo edits & graphic design tailored to your vision
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white font-heading">
                Design Inquiry Received!
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-sm mx-auto">
                Thank you, <strong className="text-white">{name}</strong>. We have logged your request for{' '}
                <strong className="text-cyan-400">{selectedService}</strong>.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-zinc-950 bg-emerald-400 hover:bg-emerald-300 inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-400/20"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send to WhatsApp Now</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Service */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Select Design Service <span className="text-cyan-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                  {SERVICES_DATA.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.title)}
                      className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                        selectedService === s.title
                          ? 'border-cyan-400 bg-cyan-950/40 text-cyan-200'
                          : 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div className="font-semibold">{s.title}</div>
                      <div className="text-[10px] text-zinc-400">{s.turnaround}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Turnaround Speed Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Turnaround Speed
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setUrgency('standard')}
                    className={`p-2.5 rounded-xl text-xs border text-left cursor-pointer ${
                      urgency === 'standard'
                        ? 'border-cyan-500 bg-cyan-950/30 text-white'
                        : 'border-zinc-800 bg-zinc-950 text-zinc-400'
                    }`}
                  >
                    <span className="font-semibold block text-white">Standard Delivery</span>
                    <span className="text-[10px] text-zinc-400">24 – 48 Hours</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setUrgency('express')}
                    className={`p-2.5 rounded-xl text-xs border text-left cursor-pointer ${
                      urgency === 'express'
                        ? 'border-violet-500 bg-violet-950/30 text-white'
                        : 'border-zinc-800 bg-zinc-950 text-zinc-400'
                    }`}
                  >
                    <span className="font-semibold block text-white">Rush Express</span>
                    <span className="text-[10px] text-zinc-400">Same-Day / 12 – 24 Hours</span>
                  </button>
                </div>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Kasun Fernando"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-cyan-500 outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                    WhatsApp Number <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+94 77 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-cyan-500 outline-hidden"
                  />
                </div>
              </div>

              {/* Brief */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                  Project Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us any special requests, dimensions, or styling cues..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-cyan-500 outline-hidden resize-none"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:opacity-95 cursor-pointer shadow-lg shadow-cyan-500/20"
                >
                  Submit Order Request
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="py-3 px-4 rounded-xl font-semibold text-xs text-emerald-300 bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-500/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
