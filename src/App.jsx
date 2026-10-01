import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

/**
 * Main Application Component:
 * Unifies all sections into an elegant, high-end one-page website.
 * Smoothly coordinates service selection with the contact form.
 */
export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <Services onSelectService={handleSelectService} />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <Contact selectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}
