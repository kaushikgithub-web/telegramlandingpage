import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WinUpdates from './components/WinUpdates';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  // Update page title on mount
  useEffect(() => {
    document.title = "Color Prediction Bot | Win Real Money on Telegram";
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && !anchor.href.includes('://')) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <WinUpdates />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;