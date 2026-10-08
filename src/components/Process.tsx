import React from 'react';
import { MessageSquare, UploadCloud, Wand2, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

interface ProcessProps {
  onOpenOrderModal: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenOrderModal }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return MessageSquare;
      case 1:
        return UploadCloud;
      case 2:
        return Wand2;
      case 3:
        return CheckCircle2;
      default:
        return MessageSquare;
    }
  };

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Simple 4-Step Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Getting your photos edited and designs created is straightforward and stress-free.
            Here is how your idea goes from initial concept to high-res reality.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = getStepIcon(idx);
            return (
              <div
                key={step.step}
                className="group relative rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step indicator header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/15 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Stage Text */}
                <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs text-zinc-400 font-medium">
                  {step.tag}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:opacity-95 shadow-lg shadow-cyan-500/20 cursor-pointer"
          >
            <span>Start Step 01: Contact Us Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
