import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I start playing the Color Prediction game?",
      answer: "Starting is simple! Just join our Telegram channel, register with our bot, deposit funds to your account, and start predicting colors. Our interface is user-friendly and intuitive, making it easy for beginners to get started."
    },
    {
      question: "How does the payout system work?",
      answer: "When you correctly predict a color, you'll receive a multiplier of your bet amount. Red and Blue typically pay 2x your bet, while Green pays 3x due to its lower probability. Winnings are instantly credited to your game balance after each round."
    },
    {
      question: "Is it safe to deposit money on the platform?",
      answer: "Absolutely! We use industry-standard encryption and secure payment gateways to ensure all transactions are protected. Your funds are held in secure wallets, and we have a proven track record of reliable payouts to thousands of players."
    },
    {
      question: "How quickly can I withdraw my winnings?",
      answer: "Withdrawals are processed rapidly, typically within 5-10 minutes during business hours. For larger amounts, it may take up to 24 hours for verification purposes. We support multiple payment methods including UPI, bank transfers, and popular e-wallets."
    },
    {
      question: "Are there any strategies to increase my chances of winning?",
      answer: "While Color Prediction involves an element of chance, many players develop strategies based on pattern recognition and bankroll management. Our Telegram community often shares tips and analysis that might help improve your prediction accuracy."
    },
    {
      question: "What should I do if I face any issues or have questions?",
      answer: "Our dedicated support team is available 24/7 through the Telegram channel. Simply message our support bot with your query, and a team member will assist you promptly. For common issues, check our detailed FAQ section in the Telegram channel."
    }
  ];

  return (
    <section id="faq" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Got questions? We've got answers to the most common questions about our platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-700 rounded-xl overflow-hidden hover:border-teal-500/30 transition-colors"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left bg-gray-800 hover:bg-gray-800/80 transition-colors"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-white font-medium text-lg">{faq.question}</span>
                {openIndex === index ? 
                  <Minus className="h-5 w-5 text-teal-400 flex-shrink-0" /> : 
                  <Plus className="h-5 w-5 text-teal-400 flex-shrink-0" />
                }
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 bg-gray-800/50 ${
                  openIndex === index ? 'max-h-96 py-5 px-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a 
            href="https://t.me/EarnWithJaat05" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 px-6 py-3 rounded-lg inline-flex items-center transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;