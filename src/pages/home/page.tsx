import { useEffect, useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import IntegrationsSection from './components/IntegrationsSection';
import ImplementationSection from './components/ImplementationSection';
import CTASection from './components/CTASection';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <IntegrationsSection />
      <ImplementationSection />
      <CTASection />
      <Footer />
    </div>
  );
}
