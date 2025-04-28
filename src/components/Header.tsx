import React, { useState, useEffect } from 'react';
import { Instagram as Telegram, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-purple-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Telegram className="h-8 w-8 text-teal-400 mr-2" />
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
            SAJJAN COLOR PREDICTION
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white hover:text-teal-400 transition-colors">Features</a>
          <a href="#how-it-works" className="text-white hover:text-teal-400 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-white hover:text-teal-400 transition-colors">Testimonials</a>
          <a href="#faq" className="text-white hover:text-teal-400 transition-colors">FAQ</a>
          <a 
            href="https://t.me/+a5I17V5hUJs1ZTZl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-full flex items-center hover:shadow-lg hover:shadow-teal-500/20 transition-all"
          >
            <Telegram className="h-5 w-5 mr-2" />
            Join Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`absolute top-full left-0 right-0 bg-purple-900/95 backdrop-blur-md md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-white hover:text-teal-400 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-white hover:text-teal-400 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#testimonials" 
            className="text-white hover:text-teal-400 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="text-white hover:text-teal-400 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="https://t.me/+a5I17V5hUJs1ZTZl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-teal-500/20 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            <Telegram className="h-5 w-5 mr-2" />
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;