import React from 'react';
import { Search, Bell, Menu, Coins, Zap, Wallet } from 'lucide-react'; // Added Wallet icon
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center h-16 mb-6 px-4 md:px-0 bg-brand-bg md:bg-transparent sticky top-0 z-40">
      {/* Mobile: Hamburger Menu & Logo */}
      <div className="flex items-center gap-3 md:hidden">
        <button onClick={toggleSidebar} className="text-brand-text">
          <Menu size={24} />
        </button>
        <span className="font-bold text-lg text-brand-yellow">BeeBark</span>
      </div>

      {/* Desktop: Search Bar */}
      <div className="hidden md:block relative w-96">
        <Search className="absolute left-3 top-2.5 text-brand-muted" size={18} />
        <input 
          type="text" 
          placeholder="Search projects, jobs, or partners..." 
          className="w-full bg-brand-input text-brand-text pl-10 pr-4 py-2 rounded-lg border border-white/10 focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4 ml-auto">
        
        {/* --- NEW: ECONOMY WIDGET --- */}
        <Link to="/wallet">
          <div className="hidden sm:flex items-center gap-3 bg-brand-card border border-white/10 px-4 py-1.5 rounded-full hover:border-brand-yellow cursor-pointer transition group shadow-sm">
             {/* CC Coin (Soft) */}
             <div className="flex items-center gap-1.5">
               <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center text-[10px] font-bold text-gray-300 border border-gray-600">C</div>
               <span className="text-sm font-bold text-gray-300 group-hover:text-white transition">2,450</span>
             </div>
             
             <div className="w-px h-4 bg-white/10 mx-1"></div>
             
             {/* XC Coin (Hard) */}
             <div className="flex items-center gap-1.5">
               <div className="w-5 h-5 rounded-full bg-brand-yellow flex items-center justify-center text-[10px] font-bold text-black shadow-[0_0_10px_rgba(253,224,71,0.4)]">X</div>
               <span className="text-sm font-bold text-brand-yellow">12</span>
             </div>
          </div>
        </Link>
        {/* --------------------------- */}

        <button className="relative p-2 rounded-lg text-brand-muted hover:bg-white/5 hover:text-brand-yellow transition">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-brand-bg"></span>
        </button>
        
        <Link to="/profile" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-brand-text">Gaurank Sharma</p>
            <p className="text-xs text-brand-muted">Architect • <span className="text-brand-yellow font-bold">PRO</span></p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gray-600 overflow-hidden border border-white/10">
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;