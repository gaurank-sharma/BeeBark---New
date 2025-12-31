import React from 'react';
import { Search, ChevronRight, FileText, MessageCircle, Briefcase, Wallet } from 'lucide-react';

const SupportPage = () => {
  const categories = [
    { icon: <FileText />, title: "Getting Started", desc: "Setting up your profile" },
    { icon: <MessageCircle />, title: "Messages & Chat", desc: "Troubleshooting chats" },
    { icon: <Briefcase />, title: "Jobs & Bidding", desc: "How coins work" },
    { icon: <Wallet />, title: "Wallet & Payments", desc: "Refunds and withdrawals" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto pb-20">
      
      <div className="text-center mb-12 py-10">
        <h1 className="text-3xl font-bold text-[#221912] dark:text-white mb-4">How can we help you?</h1>
        <div className="max-w-xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Search for answers (e.g., 'How to buy coins')" 
            className="w-full pl-12 pr-4 py-4 rounded-2xl shadow-lg border-none outline-none text-[#221912] bg-white dark:bg-[#2c241e] dark:text-white placeholder-gray-400"
          />
          <Search className="absolute left-4 top-4 text-gray-400" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white dark:bg-[#2c241e] p-6 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-brand-yellow dark:hover:border-brand-yellow transition group cursor-pointer flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-xl flex items-center justify-center text-[#221912] dark:text-white group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                {cat.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#221912] dark:text-white">{cat.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cat.desc}</p>
              </div>
            </div>
            <ChevronRight className="text-gray-300 group-hover:text-brand-yellow" />
          </div>
        ))}
      </div>

      <div className="bg-[#221912] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Still need help?</h2>
          <p className="text-gray-400">Our team is available Mon-Sat, 9am - 6pm</p>
        </div>
        <div className="flex gap-4 relative z-10">
          <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition shadow-lg">
            Chat with Support
          </button>
          <button className="px-6 py-3 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition">
            Email Us
          </button>
        </div>
      </div>

    </div>
  );
};

export default SupportPage;