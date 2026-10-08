import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, Layers, CheckCircle2, Wand2, ShieldCheck, Zap } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const whatsappHref = `https://wa.me/${STUDIO_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    STUDIO_INFO.whatsappMessage
  )}`;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Studio Visual Mesh & Atmospheric Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ambient radial glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-violet-600/15 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-600/10 blur-[120px] rounded-full" />

        {/* Abstract creative grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Diagonal aesthetic studio lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/40 to-zinc-950" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value & Pitch */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            {/* Studio Badge / Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-cyan-400">Vision Editz Studio</span>
              <span className="text-zinc-500">|</span>
              <span className="text-zinc-400">Available for New Projects</span>
            </div>

            {/* Main Brand Title & Tagline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                <span className="block font-heading">Vision Editz</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400 font-heading mt-1">
                  Bringing Your Ideas to Life
                </span>
              </h1>
              <p className="text-base sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed pt-2">
                {STUDIO_INFO.subheading}
              </p>
            </div>

            {/* Highlights bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>AI Photo Restoration</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Studio Retouching</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Branding & Banners</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollTo('portfolio')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-zinc-950 bg-white hover:bg-zinc-100 transition-all shadow-xl shadow-white/10 hover:shadow-white/20 active:scale-95 cursor-pointer"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 transition-all active:scale-95 cursor-pointer"
              >
                <span>Contact Us</span>
              </button>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/50 hover:bg-emerald-950/80 border border-emerald-500/40 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-heading">500+</p>
                <p className="text-xs text-zinc-400 mt-0.5">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-heading">24h</p>
                <p className="text-xs text-zinc-400 mt-0.5">Fast Turnaround</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-violet-400 font-heading">100%</p>
                <p className="text-xs text-zinc-400 mt-0.5">Tailored Quality</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 rounded-3xl blur-xl opacity-35 animate-pulse" />

              {/* Main Visual Glass Card */}
              <div className="relative rounded-2xl bg-zinc-900/90 border border-zinc-800 p-3 sm:p-4 shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* Header bar of the creative canvas */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    VisionEditz_Canvas_8K.psd
                  </div>
                  <div className="text-[11px] font-semibold text-cyan-400">100% Master</div>
                </div>

                {/* Hero Creative Showcase Composite Image */}
                <div className="relative mt-3 rounded-xl overflow-hidden group aspect-[4/3] bg-zinc-950">
                  <img
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85"
                    alt="Creative Design Showcase by Vision Editz"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  {/* Floating Micro-Badge Top Left */}
                  <div className="absolute top-3 left-3 bg-zinc-950/85 backdrop-blur-md border border-zinc-800 rounded-lg px-2.5 py-1 flex items-center gap-1.5 text-[11px] text-zinc-200">
                    <Wand2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Neural AI Detail Engine</span>
                  </div>

                  {/* Bottom Caption inside visual */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800/90 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">Creative Digital Retouch</p>
                      <p className="text-[10px] text-zinc-400">Color Harmonized & Super Resolution</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => scrollTo('before-after')}
                      className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                    >
                      Compare
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Two miniature feature cards below */}
                <div className="grid grid-cols-2 gap-2.5 mt-3">
                  <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-2.5">
                    <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-200">Express Delivery</p>
                      <p className="text-[10px] text-zinc-400">Same-day turnaround</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-2.5">
                    <div className="p-2 rounded-lg bg-violet-950/60 border border-violet-500/20 text-violet-400 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-200">Print-Ready 300DPI</p>
                      <p className="text-[10px] text-zinc-400">High-res export files</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
