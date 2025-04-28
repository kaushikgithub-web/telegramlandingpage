import React from 'react';
import { Instagram as Telegram, Shield, HelpCircle, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Telegram className="h-8 w-8 text-teal-400 mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                SAJJAN JAAT ColorPrediction
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Join thousands of players winning real money through our exciting color prediction game on Telegram.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/+a5I17V5hUJs1ZTZl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Telegram className="h-5 w-5 text-teal-400" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Support
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://t.me/EarnWithJaat05"
                className="text-gray-400 hover:text-teal-400 transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Join Our Community
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
            </h3>
            <p className="text-gray-400 mb-6">
              Join our Telegram channel to get exclusive bonuses, updates, and connect with other players.
            </p>
            <a 
              href="https://t.me/+a5I17V5hUJs1ZTZl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-teal-500/20 transition-all"
            >
              <Telegram className="h-5 w-5 mr-2" />
              Join on Telegram
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SAJJAN JAAT ColorPrediction. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;