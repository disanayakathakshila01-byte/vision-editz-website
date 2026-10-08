import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Read sample feedback from businesses, creators, and individuals who trusted Vision Editz
            with their creative designs and photo editing projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star rating & quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-5 h-5 text-zinc-600" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author / Client Info (Unboxed text metadata) */}
              <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-zinc-700"
                />
                <div className="text-left">
                  <p className="text-sm font-bold text-white leading-tight font-heading">
                    {item.name}
                  </p>
                  <p className="text-xs text-cyan-400 mt-0.5">
                    {item.projectType}
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small note about placeholder reviews per instructions */}
        <div className="mt-8 text-center text-xs text-zinc-400">
          Sample client reviews shown for preview. Can be personalized with ongoing client feedback.
        </div>
      </div>
    </section>
  );
};
