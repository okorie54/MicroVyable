/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { EmailModal } from './components/EmailModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingOpen(true);
  };

  const handleNavigateSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans antialiased bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
        {/* Navigation Bar */}
        <Navbar
          onOpenBooking={handleOpenBooking}
          onNavigateSection={handleNavigateSection}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Main Hero Stage - Featuring the beloved heading */}
          <Hero
            onOpenBooking={handleOpenBooking}
            onExploreMore={() => handleNavigateSection('about')}
          />

          {/* About Section */}
          <AboutSection onOpenBooking={handleOpenBooking} />

          {/* Services Section */}
          <ServicesSection onOpenBooking={handleOpenBooking} />

          {/* How We Work Process Section */}
          <ProcessSection onOpenBooking={handleOpenBooking} />

          {/* Why Choose MicroVyable Section */}
          <WhyChooseUsSection onOpenBooking={handleOpenBooking} />

          {/* Final CTA Section */}
          <CTASection onOpenBooking={handleOpenBooking} />
        </main>

        {/* Minimal Sleek Footer */}
        <Footer
          onNavigateSection={handleNavigateSection}
          onOpenBooking={handleOpenBooking}
        />

        {/* Discovery Call / Contact Email Modal */}
        <EmailModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

