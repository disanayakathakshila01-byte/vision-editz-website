import React from 'react';
import { STUDIO_INFO } from '../data/content';
import { Sparkles, MessageCircle, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directWhatsAppUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    STUDIO_INFO.whatsappMessage
  )}`;

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-violet-600 p-[1.5px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                    V
                  </span>
                </div>
              </div>
              <div>
                <span className="font-heading font-bold text-xl tracking-tight text-white block">
                  {STUDIO_INFO.name}
                </span>
                <span className="text-xs text-cyan-400 font-medium">
                  “{STUDIO_INFO.tagline}”
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Professional digital creative studio specializing in photo editing, AI photo
              restoration, graphic design, branding, and promotional social media content.
            </p>

            <div className="pt-2 text-xs text-zinc-400 space-y-1">
              <p>Serving clients in Sri Lanka & worldwide via remote studio delivery.</p>
              <p>Email: <a href={`mailto:${STUDIO_INFO.email}`} className="text-zinc-300 hover:text-white">{STUDIO_INFO.email}</a></p>
              <p>WhatsApp: <a href={directWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">{STUDIO_INFO.whatsappDisplay}</a></p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 text-left space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('home')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('about')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('portfolio')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('before-after')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Before & After
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-4 text-left space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-heading">
              Our Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              <span className="text-zinc-300">Photo Editing</span>
              <span className="text-zinc-300">AI Editing</span>
              <span className="text-zinc-300">Logo Design</span>
              <span className="text-zinc-300">Banner Design</span>
              <span className="text-zinc-300">Social Media Design</span>
              <span className="text-zinc-300">CV Design</span>
              <span className="text-zinc-300">Birthday Designs</span>
              <span className="text-zinc-300">Business Designs</span>
            </div>

            <div className="pt-4">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold hover:bg-emerald-950 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Quick WhatsApp Help</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 Vision Editz. All Rights Reserved.</p>

          <p className="flex items-center gap-1.5">
            <span>Crafted for high aesthetic impact</span>
            <span className="text-zinc-700">·</span>
            <span>Sri Lanka & Worldwide</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
