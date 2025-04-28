import React from 'react';
import { Smartphone, Dice1 as Dice, Clock3, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Smartphone className="h-12 w-12 text-teal-400" />,
      title: "Join Our Telegram",
      description: "Connect with our official Telegram bot to get started. It only takes a few seconds to join.",
      number: "01"
    },
    {
      icon: <Dice className="h-12 w-12 text-teal-400" />,
      title: "Predict Colors",
      description: "Choose your color (Red, Green, or Blue) and place your bet amount for the upcoming round.",
      number: "02"
    },
    {
      icon: <Clock3 className="h-12 w-12 text-teal-400" />,
      title: "Wait for Results",
      description: "Each round lasts only 60 seconds. Watch live as the winning color is revealed.",
      number: "03"
    },
    {
      icon: <CreditCard className="h-12 w-12 text-teal-400" />,
      title: "Collect Winnings",
      description: "If your prediction is correct, winnings are instantly credited to your account balance.",
      number: "04"
    }
  ];

  return (
    <section id="how-it-works" className="bg-gray-900 py-20 relative">
      {/* Diagonal gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-teal-500 to-blue-600"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Getting started is simple. Follow these easy steps to begin winning immediately
          </p>
        </div>

        <div className="relative">
          {/* Connected line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500/30 to-blue-600/30 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-gray-800 rounded-xl p-8 border border-gray-700 group hover:border-teal-500/30 transition-all hover:shadow-lg hover:shadow-teal-500/10"
              >
                {/* Step number badge */}
                <div className="absolute -top-5 right-8 bg-gray-900 text-teal-400 font-bold text-xl px-4 py-2 rounded-full border border-teal-500/30">
                  {step.number}
                </div>
                
                <div className="mb-6 p-4 inline-block rounded-lg bg-gray-900/60 group-hover:bg-teal-500/10 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Game Preview */}
        <div className="mt-20 max-w-4xl mx-auto bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-4 flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">Round #28491</h3>
            <div className="flex items-center bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
              <span className="text-white text-sm">Live</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between mb-6">
              <div className="text-center">
                <div className="h-20 w-20 rounded-xl bg-red-500 mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg">
                  Red
                </div>
                <p className="text-gray-400">2x</p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 rounded-xl bg-green-500 mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg">
                  Green
                </div>
                <p className="text-gray-400">3x</p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 rounded-xl bg-blue-500 mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg">
                  Blue
                </div>
                <p className="text-gray-400">2x</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 mb-1">Time Remaining</p>
                <div className="text-2xl font-bold text-white">00:42</div>
              </div>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium">
                Place Bet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;