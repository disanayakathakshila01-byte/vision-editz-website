import React from 'react';
import {
  Wand2,
  Camera,
  Sparkles,
  Layers,
  Brush,
  Share2,
  FileText,
  Palette,
  Check,
  ArrowRight,
  Clock
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/content';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wand2':
        return Wand2;
      case 'Camera':
        return Camera;
      case 'Sparkles':
        return Sparkles;
      case 'Layers':
        return Layers;
      case 'Brush':
        return Brush;
      case 'Share2':
        return Share2;
      case 'FileText':
        return FileText;
      case 'Palette':
        return Palette;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Creative Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Our Professional Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            From artificial intelligence photo restoration to corporate brand identities, we deliver
            meticulously crafted design solutions tailored to your unique objectives.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border transition-all duration-300 flex flex-col justify-between p-6 ${
                  service.highlight
                    ? 'border-cyan-500/40 shadow-lg shadow-cyan-950/40'
                    : 'border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div>
                  {/* Top bar of card */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                        service.highlight
                          ? 'bg-cyan-500/20 text-cyan-300'
                          : 'bg-zinc-800 text-zinc-300 group-hover:text-cyan-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Turnaround clean unboxed text metadata */}
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{service.turnaround}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white font-heading tracking-tight group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed min-h-[56px]">
                    {service.description}
                  </p>

                  {/* Bullet features list */}
                  <div className="mt-5 pt-4 border-t border-zinc-800/80 space-y-2.5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="mt-6 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wide text-zinc-200 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-all flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Custom Order Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
              Need a completely custom creative project or bulk bundle?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              Tell us your exact dimensions, style preferences, and deadline. We provide custom quotes
              tailored to your budget with lightning-fast turnaround.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('Custom Design Project')}
            className="shrink-0 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-95 shadow-md shadow-cyan-500/20 cursor-pointer"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};
