import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  SlidersHorizontal,
  Sparkles,
  ArrowRight,
  Maximize2,
  RefreshCw,
  Eye,
  Columns
} from 'lucide-react';
import { BEFORE_AFTER_PAIRS, BeforeAfterPair } from '../data/content';

interface BeforeAfterProps {
  onSelectService: (serviceTitle: string) => void;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ onSelectService }) => {
  const [selectedPairIndex, setSelectedPairIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const currentPair: BeforeAfterPair = BEFORE_AFTER_PAIRS[selectedPairIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(clamped);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, handleMove]);

  return (
    <section id="before-after" className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      {/* Subtle atmospheric glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Interactive Visual Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            See the Difference
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            See how Vision Editz transforms ordinary images into professional creative visuals.
            Drag the slider horizontally to reveal the before and after transformation.
          </p>
        </div>

        {/* Preset Selector Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 bg-zinc-900/90 p-1.5 rounded-xl border border-zinc-800">
            {BEFORE_AFTER_PAIRS.map((pair, index) => (
              <button
                key={pair.id}
                type="button"
                onClick={() => {
                  setSelectedPairIndex(index);
                  setSliderPosition(50);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedPairIndex === index
                    ? 'bg-cyan-500 text-zinc-950 shadow-md font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {pair.title.split('&')[0].trim()}
              </button>
            ))}
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setViewMode(viewMode === 'slider' ? 'sideBySide' : 'slider')}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors cursor-pointer"
            >
              {viewMode === 'slider' ? (
                <>
                  <Columns className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Side-by-Side View</span>
                </>
              ) : (
                <>
                  <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Slider View</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setSliderPosition(50)}
              title="Reset slider position"
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Active Item Description Kicker */}
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-zinc-300">
          <div>
            <span className="font-bold text-white">{currentPair.title}</span>
            <span className="mx-2 text-zinc-600">·</span>
            <span className="text-zinc-400">{currentPair.category}</span>
          </div>
          <p className="text-xs text-zinc-400">{currentPair.description}</p>
        </div>

        {/* COMPARISON DISPLAY */}
        {viewMode === 'slider' ? (
          /* Interactive Split Slider Container */
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[580px] rounded-2xl overflow-hidden border border-zinc-800 select-none shadow-2xl bg-zinc-950 cursor-ew-resize group"
          >
            {/* AFTER Image (Full background) */}
            <img
              src={currentPair.afterImage}
              alt="Vision Editz After Transformation"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentPair.beforeImage}
                alt="Before Edit Original"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                }}
              />
              {/* Optional overlay filter for vintage before feel */}
              {selectedPairIndex === 0 && (
                <div className="absolute inset-0 bg-amber-950/20 mix-blend-color pointer-events-none" />
              )}
            </div>

            {/* Labels overlay */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950/85 backdrop-blur-md border border-zinc-800 text-xs font-semibold text-zinc-300 shadow-md">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span>BEFORE: {currentPair.beforeLabel}</span>
              </span>
            </div>

            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/90 backdrop-blur-md border border-cyan-500/40 text-xs font-semibold text-cyan-300 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>AFTER: {currentPair.afterLabel}</span>
              </span>
            </div>

            {/* Draggable Divider Line & Knob */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Vertical line */}
              <div className="w-[3px] h-full bg-gradient-to-b from-cyan-400 via-white to-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

              {/* Center thumb knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-zinc-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-xl shadow-cyan-500/40 backdrop-blur-md group-hover:scale-110 transition-transform">
                <SlidersHorizontal className="w-5 h-5 rotate-90" />
              </div>
            </div>

            {/* Bottom helper prompt */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
              <div className="px-3.5 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[11px] text-zinc-300 flex items-center gap-2">
                <span>◀ Drag left or right to compare ▶</span>
              </div>
            </div>
          </div>
        ) : (
          /* Side-by-side view */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <img
                src={currentPair.beforeImage}
                alt="Before Edit"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-zinc-950/85 backdrop-blur-md border border-zinc-800 rounded-lg px-3 py-1.5 text-xs font-semibold text-zinc-300">
                BEFORE: {currentPair.beforeLabel}
              </div>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-cyan-500/40 bg-zinc-950 shadow-lg shadow-cyan-950/30">
              <img
                src={currentPair.afterImage}
                alt="Vision Editz Enhanced After"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-cyan-950/90 backdrop-blur-md border border-cyan-500/50 rounded-lg px-3 py-1.5 text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                AFTER: {currentPair.afterLabel}
              </div>
            </div>
          </div>
        )}

        {/* CTA prompt below slider */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
          <div className="text-left">
            <p className="text-sm font-semibold text-white">
              Have an old, damaged or raw photo you need perfected?
            </p>
            <p className="text-xs text-zinc-400 mt-0.5">
              Send us your file via WhatsApp or form for a free quality assessment and instant preview quote.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('AI Photo Editing')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-400/20 transition-all cursor-pointer shrink-0"
          >
            <span>Restore / Retouch My Photo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
