import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { GetDesignModal } from './components/GetDesignModal';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState('AI Photo Editing');
  const [contactPreselectedService, setContactPreselectedService] = useState('AI Photo Editing');

  const handleOpenOrderModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setModalDefaultService(serviceTitle);
    }
    setIsOrderModalOpen(true);
  };

  const handleSelectServiceFromSection = (serviceTitle: string) => {
    setContactPreselectedService(serviceTitle);
    setModalDefaultService(serviceTitle);

    // Smooth scroll down to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsOrderModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Navigation */}
      <Navbar onOpenOrderModal={() => handleOpenOrderModal()} />

      <main>
        {/* Hero Section */}
        <Hero onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* About Section */}
        <About onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* Services Section */}
        <Services onSelectService={handleSelectServiceFromSection} />

        {/* Before & After Section */}
        <BeforeAfter onSelectService={handleSelectServiceFromSection} />

        {/* Portfolio Section */}
        <Portfolio onSelectService={handleSelectServiceFromSection} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Process Section */}
        <Process onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Section */}
        <Contact preselectedService={contactPreselectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Get a Design Modal */}
      <GetDesignModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        defaultService={modalDefaultService}
      />
    </div>
  );
}
