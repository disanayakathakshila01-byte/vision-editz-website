import React, { useState, useRef, useEffect } from 'react';
import {
  MessageCircle,
  Mail,
  Send,
  UploadCloud,
  FileCheck,
  X,
  Phone,
  CheckCircle2,
  Clock,
  Sparkles,
  Share2
} from 'lucide-react';
import { STUDIO_INFO, SERVICES_DATA } from '../data/content';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [name, setName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [service, setService] = useState(preselectedService || 'AI Photo Editing');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
    if (selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setFilePreview(reader.result as string);
      reader.readAsDataURL(selectedFile);
    } else {
      setFilePreview(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const clearFile = () => {
    setFile(null);
    setFilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const buildWhatsAppText = () => {
    let text = `Hello Vision Editz! I'd like to request a design service.\n\n`;
    text += `*Name:* ${name || 'Prospective Client'}\n`;
    if (whatsappNumber) text += `*My WhatsApp:* ${whatsappNumber}\n`;
    text += `*Service Required:* ${service}\n`;
    if (message) text += `*Project Details:* ${message}\n`;
    if (file) text += `*Attachment Attached:* ${file.name} (${(file.size / 1024 / 1024).toFixed(1)}MB)\n`;
    text += `\nPlease let me know your availability and quote!`;
    return encodeURIComponent(text);
  };

  const directWhatsAppUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    STUDIO_INFO.whatsappMessage
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 800);
  };

  const handleOpenWhatsAppFromForm = () => {
    const customText = buildWhatsAppText();
    const url = `https://wa.me/${STUDIO_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${customText}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Start Your Project</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Let’s Create Something Amazing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Have a photo, design or business project in mind? Contact Vision Editz today.
            We are ready to bring your ideas to life.
          </p>
        </div>

        {/* PROMINENT WHATSAPP BANNER (High Visibility Requirement) */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-zinc-900 to-zinc-900 border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/40 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-left w-full lg:w-auto">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-zinc-950 shrink-0 shadow-lg shadow-emerald-500/30">
              <MessageCircle className="w-9 h-9 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Fastest Response Channel (Average reply &lt; 15 mins)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading mt-1">
                Chat Directly with Vision Editz on WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                Send your photos directly for quick assessment and instant quote: {STUDIO_INFO.whatsappDisplay}
              </p>
            </div>
          </div>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-zinc-950 bg-emerald-400 hover:bg-emerald-300 shadow-xl shadow-emerald-400/25 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Open WhatsApp Chat Now</span>
          </a>
        </div>

        {/* 2-Column Layout: Direct Channels + Interactive Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Channels & Socials */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Direct Contact Options
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Choose your preferred way to talk with our lead designer. We serve clients across
                Sri Lanka and globally with seamless remote workflows.
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp Button */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">WhatsApp</p>
                      <p className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {STUDIO_INFO.whatsappDisplay}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold">Message &rarr;</span>
                </a>

                {/* Email Button */}
                <a
                  href={`mailto:${STUDIO_INFO.email}?subject=Design%20Inquiry%20-%20Vision%20Editz`}
                  className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 hover:bg-zinc-800/80 border border-zinc-800 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">Email Address</p>
                      <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {STUDIO_INFO.email}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-400 group-hover:text-cyan-400 font-semibold">Email &rarr;</span>
                </a>

                {/* Facebook Button */}
                <a
                  href={STUDIO_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 hover:bg-zinc-800/80 border border-zinc-800 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                      f
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">Facebook Page</p>
                      <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                        facebook.com/visioneditz
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-400 group-hover:text-blue-400 font-semibold">Visit &rarr;</span>
                </a>
              </div>

              {/* Working hours / Turnaround note */}
              <div className="pt-4 border-t border-zinc-800 flex items-center gap-3 text-xs text-zinc-400">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Active 7 Days a Week • Fast turnaround on urgent orders</span>
              </div>
            </div>

            {/* Social Media Channels Box */}
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Follow Vision Editz on Social Media
              </h4>
              <p className="text-xs text-zinc-400">
                Catch our latest before-and-after reels, design drops, and creative speed-art videos.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={STUDIO_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-950 hover:bg-blue-950/40 border border-zinc-800 hover:border-blue-500/40 text-xs font-semibold text-zinc-300 hover:text-blue-400 transition-colors"
                >
                  <span className="w-6 h-6 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                    f
                  </span>
                  <span>Facebook</span>
                </a>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-950 hover:bg-emerald-950/40 border border-zinc-800 hover:border-emerald-500/40 text-xs font-semibold text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  <span className="w-6 h-6 rounded-md bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </span>
                  <span>WhatsApp</span>
                </a>

                <a
                  href={STUDIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-950 hover:bg-pink-950/40 border border-zinc-800 hover:border-pink-500/40 text-xs font-semibold text-zinc-300 hover:text-pink-400 transition-colors"
                >
                  <span className="w-6 h-6 rounded-md bg-pink-600/20 text-pink-400 flex items-center justify-center font-bold text-xs">
                    ig
                  </span>
                  <span>Instagram</span>
                </a>

                <a
                  href={STUDIO_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-950 hover:bg-cyan-950/40 border border-zinc-800 hover:border-cyan-500/40 text-xs font-semibold text-zinc-300 hover:text-cyan-400 transition-colors"
                >
                  <span className="w-6 h-6 rounded-md bg-cyan-600/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                    tt
                  </span>
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 shadow-2xl text-left">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white font-heading">
                  Submit a Project Request
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Fill in your project details and attach your photo or assets. We will review and respond promptly.
                </p>
              </div>

              {submitSuccess ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading">
                    Request Received Successfully!
                  </h4>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{name || 'there'}</strong>. We have logged your request for{' '}
                    <strong className="text-cyan-400">{service}</strong>.
                  </p>
                  <p className="text-xs text-zinc-400">
                    For faster processing, you can also forward this brief straight to our WhatsApp:
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleOpenWhatsAppFromForm}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-950 bg-emerald-400 hover:bg-emerald-300 flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-400/20"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Forward to WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitSuccess(false);
                        setName('');
                        setWhatsappNumber('');
                        setMessage('');
                        clearFile();
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Your Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Kasun Fernando"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-zinc-500 outline-hidden transition-colors"
                    />
                  </div>

                  {/* WhatsApp Number field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      WhatsApp Number <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="e.g. +94 77 123 4567"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-zinc-500 outline-hidden transition-colors"
                    />
                  </div>

                  {/* Service Required dropdown */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Service Required <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white outline-hidden transition-colors cursor-pointer"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-zinc-900 text-white">
                          {srv.title}
                        </option>
                      ))}
                      <option value="Custom Project" className="bg-zinc-900 text-white">
                        Custom Design / Multiple Services
                      </option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Project Details & Instructions
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe what you need, any text to include, preferred colors, dimensions, or deadlines..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-zinc-500 outline-hidden transition-colors resize-none"
                    />
                  </div>

                  {/* Upload Image / File Dropzone */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Upload Image / File (Optional)
                    </label>
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onClick={() => fileInputRef.current?.click()}
                      className={`relative border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors ${
                        isDragging
                          ? 'border-cyan-400 bg-cyan-950/20'
                          : file
                          ? 'border-emerald-500/50 bg-emerald-950/10'
                          : 'border-zinc-800 hover:border-zinc-700 bg-zinc-950/50'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*,.pdf,.psd,.ai,.zip"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            handleFileChange(e.target.files[0]);
                          }
                        }}
                      />

                      {file ? (
                        <div className="flex items-center justify-between gap-3 text-left">
                          <div className="flex items-center gap-3 overflow-hidden">
                            {filePreview ? (
                              <img
                                src={filePreview}
                                alt="Uploaded preview"
                                className="w-12 h-12 rounded-lg object-cover border border-zinc-700 shrink-0"
                              />
                            ) : (
                              <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-cyan-400 shrink-0">
                                <FileCheck className="w-6 h-6" />
                              </div>
                            )}
                            <div className="truncate">
                              <p className="text-xs font-semibold text-white truncate">{file.name}</p>
                              <p className="text-[11px] text-zinc-400">
                                {(file.size / 1024 / 1024).toFixed(2)} MB · Ready to send
                              </p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              clearFile();
                            }}
                            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-1.5 pointer-events-none">
                          <UploadCloud className="w-7 h-7 mx-auto text-zinc-500" />
                          <p className="text-xs font-semibold text-zinc-300">
                            Drop photo here or click to browse
                          </p>
                          <p className="text-[11px] text-zinc-500">
                            Supports JPG, PNG, WEBP, PSD, PDF (Up to 25MB)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons: Submit Request & Direct WhatsApp */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:opacity-95 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending Request...' : 'Submit Request'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleOpenWhatsAppFromForm}
                      className="py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm text-emerald-300 bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-500/40 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                      title="Directly send this brief to WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Send to WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
