import React, { useEffect, useRef } from 'react';
import { Instagram as Telegram, ArrowRight } from 'lucide-react';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  // Initialize particles animation
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('absolute', 'rounded-full', 'bg-white', 'opacity-70');
      
      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration between 10s and 25s
      const duration = Math.random() * 15 + 10;
      particle.style.animation = `float ${duration}s linear infinite`;
      
      particlesRef.current?.appendChild(particle);
      
      // Remove particle after animation completes to prevent memory issues
      setTimeout(() => {
        if (particle.parentNode === particlesRef.current) {
          particlesRef.current?.removeChild(particle);
        }
      }, duration * 1000);
    };
    
    // Create initial batch of particles
    for (let i = 0; i < 20; i++) {
      createParticle();
    }
    
    // Create new particles periodically
    const interval = setInterval(() => {
      if (particlesRef.current?.childNodes.length && particlesRef.current.childNodes.length < 30) {
        createParticle();
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-950 overflow-hidden pt-16">
      {/* Animated particles background */}
      <div ref={particlesRef} className="absolute inset-0 z-0 overflow-hidden"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-950/80 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center pt-10 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Highlight badge */}
          <div className="bg-gradient-to-r from-purple-600/20 to-teal-600/20 backdrop-blur-sm px-6 py-2 rounded-full border border-teal-500/30 mb-8 animate-pulse">
            <span className="text-teal-400 font-medium">🚀 The #1 Color Prediction Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            <span className="relative">
              Predict Colors,
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
            </span>
            <span className="block mt-2">Win Real Money</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
            Join thousands of players winning daily through our Telegram-based color prediction game. Simple to play, instant payouts, and massive rewards!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-2 mb-10">
            <a 
              href="https://t.me/+a5I17V5hUJs1ZTZl"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 rounded-full flex items-center justify-center text-lg font-medium transform hover:scale-105 transition-all shadow-lg hover:shadow-teal-500/30"
            >
              <Telegram className="h-5 w-5 mr-2" />
              Join on Telegram
            </a>
            <a 
              href="#how-it-works"
              className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm text-white border border-gray-700 px-8 py-4 rounded-full flex items-center justify-center text-lg font-medium hover:border-teal-500/50 transition-all"
            >
              How It Works
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </div>
          
          {/* Live stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mt-8">
            <div className="bg-purple-800/30 backdrop-blur-sm border border-purple-600/20 rounded-xl p-4 flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-1">10K+</span>
              <span className="text-gray-300 text-sm">Active Players</span>
            </div>
            <div className="bg-purple-800/30 backdrop-blur-sm border border-purple-600/20 rounded-xl p-4 flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-1">99%</span>
              <span className="text-gray-300 text-sm">Payout Rate</span>
            </div>
            <div className="bg-purple-800/30 backdrop-blur-sm border border-purple-600/20 rounded-xl p-4 flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-1">24/7</span>
              <span className="text-gray-300 text-sm">Support</span>
            </div>
            <div className="bg-purple-800/30 backdrop-blur-sm border border-purple-600/20 rounded-xl p-4 flex flex-col items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 text-transparent bg-clip-text mb-1">$10M+</span>
              <span className="text-gray-300 text-sm">Paid Out</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 overflow-hidden z-10">
        <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#111827" 
            fillOpacity="1" 
            d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      {/* CSS for particle animation */}
      <style >{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;