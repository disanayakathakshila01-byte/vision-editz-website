import React from 'react';
import { Wand2, Award, Palette, Zap, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wand2':
        return Wand2;
      case 'Award':
        return Award;
      case 'Palette':
        return Palette;
      case 'Zap':
        return Zap;
      default:
        return Award;
    }
  };

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Studio Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Why Choose Vision Editz
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            We hold ourselves to obsessive aesthetic standards. Here is why businesses, creators, and
            individuals trust us with their most important visual assets.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((item) => {
            const Icon = getIcon(item.iconName);
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon with subtle gradient glow */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/15 group-hover:text-cyan-300 transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom check tag */}
                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
