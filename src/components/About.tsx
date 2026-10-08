import React from 'react';
import {
  Wand2,
  Camera,
  Layers,
  Palette,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  FolderHeart,
  Share2
} from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

interface AboutProps {
  onOpenOrderModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenOrderModal }) => {
  const pillars = [
    {
      title: 'Creative Design',
      description:
        'Distinctive concepts engineered from scratch to make your brand identity, promotions, and milestone events truly stand out.',
      icon: Palette,
      tag: 'Original Art',
    },
    {
      title: 'Professional Photo Editing',
      description:
        'High-end studio grade retouching, skin frequency separation, clean background isolation, and precise color grading.',
      icon: Camera,
      tag: 'Studio Retouching',
    },
    {
      title: 'AI-Enhanced Photo Restoration',
      description:
        'Cutting-edge neural upscaling and colorization bringing faded, torn, blurry, or vintage family photos back to vivid life.',
      icon: Wand2,
      tag: 'Neural Restoration',
    },
    {
      title: 'Social Media Content',
      description:
        'Attention-grabbing Instagram feeds, carousels, and high-CTR promotional Facebook banners designed to maximize viral engagement.',
      icon: Share2,
      tag: 'Viral Formats',
    },
    {
      title: 'Business Designs',
      description:
        'Market-ready product labels, corporate flyers, modern CVs, and promotional collateral built to drive commercial sales.',
      icon: Layers,
      tag: 'Commercial Grade',
    },
    {
      title: 'Custom Designs to Your Needs',
      description:
        'Every project is 100% tailor-made to your vision and exact technical specifications. We never force rigid generic templates.',
      icon: FolderHeart,
      tag: 'Tailored Execution',
    },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            About Vision Editz
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Vision Editz is a premier creative digital design and photo editing studio dedicated to
            transforming ordinary photos, raw concepts, and business goals into attractive, high-impact,
            and professional visual content.
          </p>
        </div>

        {/* Studio Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Main Story Narrative */}
          <div className="lg:col-span-6 space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p>
              Founded on a passion for visual perfection, <strong className="text-white">Vision Editz</strong> combines
              artistic intuition with state-of-the-art digital craftsmanship. Whether you need a cherished vintage family
              photograph restored to crystal clarity, a head-turning social media campaign, or an executive CV that opens
              doors, we tailor every single pixel to your exact requirements.
            </p>
            <p>
              We believe great design isn't just about applying simple filters. It requires nuanced understanding of
              light, color balance, typography, composition, and emotional resonance. Our workflow integrates advanced
              industry-standard tools with next-generation AI enhancement algorithms to produce output that exceeds
              expectations.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-zinc-200">
                  <strong className="text-white">Customer-Centric Approach:</strong> We listen to your brief, review your
                  ideas, and refine each detail until you are thrilled.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                <span className="text-zinc-200">
                  <strong className="text-white">Next-Gen Hybrid Workflow:</strong> Traditional manual retouching paired
                  with cutting-edge neural AI clarity tools for 8K resolution.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-zinc-200">
                  <strong className="text-white">Seamless Communication:</strong> Rapid direct messaging via WhatsApp,
                  transparent progress updates, and prompt turnaround times.
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-95 transition-opacity shadow-lg shadow-cyan-500/20"
              >
                <span>Start a Project With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Visual Showcase Card with Studio Workspace details */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">Creative Capabilities</h3>
                  <p className="text-xs text-zinc-400 mt-0.5">Comprehensive Digital Solutions</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                  Studio Precision
                </div>
              </div>

              {/* Progress / Skills Metrics */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-medium text-zinc-300 mb-1.5">
                    <span>AI Detail Enhancement & Micro-Sharpening</span>
                    <span className="text-cyan-400">99%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" style={{ width: '99%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-zinc-300 mb-1.5">
                    <span>Professional Studio Retouching & Compositing</span>
                    <span className="text-violet-400">98%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-violet-500 to-violet-400 rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-zinc-300 mb-1.5">
                    <span>Brand Identity, Logos & Advertising Banners</span>
                    <span className="text-amber-400">97%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" style={{ width: '97%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-zinc-300 mb-1.5">
                    <span>Social Media Marketing & Creative CVs</span>
                    <span className="text-emerald-400">99%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{ width: '99%' }} />
                  </div>
                </div>
              </div>

              {/* Studio Badges / Tools */}
              <div className="pt-4 border-t border-zinc-800/80">
                <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                  Tools & Technology Stack
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800">Adobe Photoshop CC</span>
                  <span className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800">Adobe Lightroom</span>
                  <span className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800">Adobe Illustrator</span>
                  <span className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800">Neural Restoration Models</span>
                  <span className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800">CMYK 300DPI Print Engine</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Craft Pillars (Zero-Pill Discipline compliant) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/90 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Unboxed text metadata */}
                    <span className="text-xs font-medium text-zinc-400">{pillar.tag}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
