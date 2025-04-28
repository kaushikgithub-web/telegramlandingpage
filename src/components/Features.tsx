import React from 'react';
import { Zap, Award, Coins, Shield, Clock, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-teal-400" />,
      title: "Instant Payouts",
      description: "Win and receive your earnings directly to your account within minutes. No delays, no waiting."
    },
    {
      icon: <Award className="h-10 w-10 text-teal-400" />,
      title: "High Win Rates",
      description: "Our prediction system offers higher chances of winning compared to other platforms on the market."
    },
    {
      icon: <Coins className="h-10 w-10 text-teal-400" />,
      title: "Massive Rewards",
      description: "Play for huge multipliers and bonuses that can turn a small bet into a fortune in seconds."
    },
    {
      icon: <Shield className="h-10 w-10 text-teal-400" />,
      title: "100% Secure",
      description: "Our platform uses advanced encryption and secure payment methods to protect your data and funds."
    },
    {
      icon: <Clock className="h-10 w-10 text-teal-400" />,
      title: "24/7 Availability",
      description: "Play anytime, anywhere. Our prediction game never sleeps, allowing you to win around the clock."
    },
    {
      icon: <Users className="h-10 w-10 text-teal-400" />,
      title: "Active Community",
      description: "Join thousands of players in our Telegram community for tips, strategies, and exclusive bonuses."
    }
  ];

  return (
    <section id="features" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Platform?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the best color prediction platform with these amazing features designed for your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-teal-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 group"
            >
              <div className="mb-6 p-4 inline-block rounded-lg bg-gray-900/60 group-hover:bg-teal-500/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://t.me/+a5I17V5hUJs1ZTZl"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 rounded-full inline-flex items-center justify-center text-lg font-medium transform hover:scale-105 transition-all shadow-lg"
          >
            Start Winning Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;