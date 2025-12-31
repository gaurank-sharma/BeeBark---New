import React, { useState } from 'react';
import { Lightbulb, Send, CheckCircle, Zap } from 'lucide-react';

const FeedbackPage = () => {
  const [suggestion, setSuggestion] = useState('');

  return (
    <div className="w-full max-w-4xl mx-auto pb-20">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#221912] to-black rounded-3xl p-8 md:p-12 text-center text-white mb-10 relative overflow-hidden shadow-xl">
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10">
          <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-brand-yellow/30">
            <Lightbulb className="text-brand-yellow" size={32} />
          </div>
          <h1 className="text-3xl font-bold mb-3">Help Us Build BeeBark</h1>
          <p className="text-gray-300 max-w-lg mx-auto mb-6">
            Found a bug? Have a brilliant feature idea? Tell us! 
            If our team implements your suggestion, you earn direct coins.
          </p>
          <div className="inline-flex items-center gap-2 bg-brand-yellow text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg shadow-yellow-500/20">
            <Zap size={16} fill="currentColor" /> Earn 500 - 2000 CC per accepted idea
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* FORM SIDE */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-[#221912] dark:text-white mb-4">Submit Suggestion</h2>
          <div className="bg-white dark:bg-[#2c241e] border border-gray-200 dark:border-white/5 p-6 rounded-2xl shadow-sm">
            <div className="mb-4">
              <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Topic</label>
              <div className="flex gap-2 flex-wrap">
                {['New Feature', 'Bug Report', 'Design', 'Other'].map(type => (
                  <button key={type} className="px-4 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-sm font-medium hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition dark:text-gray-300 dark:hover:text-black">
                    {type}
                  </button>
                ))}
              </div>
            </div>
            
            <textarea 
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder="Describe your idea in detail..."
              className="w-full h-40 p-4 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-brand-yellow/50 resize-none mb-4 dark:text-white"
            ></textarea>
            
            <button className="w-full py-3 bg-[#221912] dark:bg-white text-white dark:text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition shadow-md">
              <Send size={18} /> Submit Idea
            </button>
          </div>
        </div>

        {/* HALL OF FAME SIDE */}
        <div>
          <h2 className="text-xl font-bold text-[#221912] dark:text-white mb-4">Recent Rewards</h2>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white dark:bg-[#2c241e] p-4 rounded-xl border border-gray-200 dark:border-white/5 flex gap-3 items-start hover:border-brand-yellow/30 transition">
                <img src={`https://i.pravatar.cc/150?img=${i+30}`} className="w-10 h-10 rounded-lg bg-gray-200" alt="user" />
                <div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400">User {i} suggested:</p>
                  <p className="text-sm font-medium text-[#221912] dark:text-white line-clamp-2 italic">"Add dark mode support for the invoice generator"</p>
                  <div className="mt-2 flex items-center gap-1 text-green-600 dark:text-green-400 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded w-fit">
                     <CheckCircle size={12} /> Accepted (+1000 CC)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeedbackPage;