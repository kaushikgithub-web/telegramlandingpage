import React, { useState, useEffect } from 'react';
import { TrendingUp, Award } from 'lucide-react';

// Sample data for demonstration
const initialWinners = [
  { id: 1, username: "Alex389", amount: "₹12,500", time: "2 mins ago", color: "red" },
  { id: 2, username: "Priya777", amount: "₹8,750", time: "5 mins ago", color: "green" },
  { id: 3, username: "WinMaster", amount: "₹21,000", time: "8 mins ago", color: "blue" },
  { id: 4, username: "Lucky_One", amount: "₹5,200", time: "12 mins ago", color: "green" },
  { id: 5, username: "ColorKing", amount: "₹18,300", time: "15 mins ago", color: "red" },
  { id: 6, username: "GameChanger", amount: "₹7,600", time: "18 mins ago", color: "blue" },
  { id: 7, username: "BetWinner", amount: "₹14,900", time: "22 mins ago", color: "red" },
  { id: 8, username: "RichPlayer", amount: "₹25,000", time: "25 mins ago", color: "green" }
];

const WinUpdates = () => {
  const [winners, setWinners] = useState(initialWinners);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerData, setBannerData] = useState({ username: "", amount: "" });

  // Simulate new winners periodically
  useEffect(() => {
    const newWinnerInterval = setInterval(() => {
      const randomAmount = Math.floor(Math.random() * 30000) + 5000;
      const formattedAmount = "₹" + randomAmount.toLocaleString('en-IN');
      const userNumber = Math.floor(Math.random() * 900) + 100;
      const colors = ["red", "green", "blue"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      const newWinner = {
        id: Date.now(),
        username: `User${userNumber}`,
        amount: formattedAmount,
        time: "Just now",
        color: randomColor
      };
      
      setWinners(prev => [newWinner, ...prev.slice(0, 7)]);
      
      // Show banner notification
      setBannerData({ username: newWinner.username, amount: newWinner.amount });
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 3000);
    }, 15000);
    
    return () => clearInterval(newWinnerInterval);
  }, []);

  // Update time ago labels
  useEffect(() => {
    const updateTimeInterval = setInterval(() => {
      setWinners(prev => 
        prev.map(winner => {
          if (winner.time === "Just now") {
            return { ...winner, time: "1 min ago" };
          } else if (winner.time.includes("min")) {
            const currentMins = parseInt(winner.time.split(" ")[0]);
            return { ...winner, time: `${currentMins + 1} mins ago` };
          }
          return winner;
        })
      );
    }, 60000);
    
    return () => clearInterval(updateTimeInterval);
  }, []);

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recent Winners</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our players are winning big every minute. You could be next!
          </p>
        </div>
        
        {/* Winner toast notification */}
        <div 
          className={`fixed top-24 right-4 md:right-8 bg-gradient-to-r from-purple-700 to-indigo-800 text-white px-4 py-3 rounded-lg shadow-2xl z-50 flex items-center transform transition-all duration-500 ${
            showBanner ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <Award className="h-5 w-5 text-yellow-400 mr-3" />
          <div>
            <p className="font-medium">{bannerData.username} just won</p>
            <p className="text-yellow-400 font-bold">{bannerData.amount}!</p>
          </div>
        </div>
        
        {/* Live winners board */}
        <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-teal-400 mr-2" />
              <h3 className="text-xl font-bold text-white">Live Winnings</h3>
            </div>
            <div className="flex items-center bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
              <span className="text-white text-sm">Live Updates</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900/50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Username</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Prediction</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount Won</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {winners.map((winner) => (
                  <tr key={winner.id} className="hover:bg-gray-700/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-white">{winner.username}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span 
                        className={`inline-block h-4 w-4 rounded-full mr-2 ${
                          winner.color === 'red' 
                            ? 'bg-red-500' 
                            : winner.color === 'green' 
                              ? 'bg-green-500' 
                              : 'bg-blue-500'
                        }`}
                      ></span>
                      <span className="text-gray-300 capitalize">{winner.color}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-yellow-400 font-bold">{winner.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-400">{winner.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300 mb-6">Ready to join our winners? Start playing now!</p>
          <a 
            href="https://t.me/+a5I17V5hUJs1ZTZl"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-4 rounded-full inline-flex items-center justify-center text-lg font-medium transform hover:scale-105 transition-all shadow-lg"
          >
            Start Winning
          </a>
        </div>
      </div>
    </section>
  );
};

export default WinUpdates;