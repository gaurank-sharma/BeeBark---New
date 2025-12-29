import React, { useState } from 'react';
import { Search, MapPin, Calendar, Gauge, ArrowUpRight, Zap, Lock, Eye, Phone } from 'lucide-react';

// --- Dummy Data with Coin Logic ---
const listings = [
  { 
    id: 1, 
    title: "JCB 3DX Excavator (2021)", 
    type: "RENT", 
    price: 12000, 
    period: "day", 
    location: "Noida Sec 62", 
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=600&q=80", 
    specs: "2500 hrs", 
    availability: "Immediate",
    ccReward: 50, // Earn 50 CC for contacting
    isPremium: false 
  },
  { 
    id: 2, 
    title: "Commercial Plot (200 Sq Yd)", 
    type: "SELL", 
    price: "45 Lakhs", 
    location: "Greater Noida", 
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80", 
    specs: "Corner Plot", 
    availability: "Ready to Move",
    ccReward: 100, // High reward for real estate lead
    isPremium: true // Requires CC to view contact
  },
  { 
    id: 3, 
    title: "Tower Crane 60m", 
    type: "RENT", 
    price: 85000, 
    period: "month", 
    location: "Gurugram", 
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80", 
    specs: "6 Ton Cap", 
    availability: "From Dec 20",
    ccReward: 40,
    isPremium: false
  },
  { 
    id: 4, 
    title: "Caterpillar Dozer D6", 
    type: "SELL", 
    price: "1.2 Cr", 
    location: "Manesar", 
    image: "https://images.unsplash.com/photo-1579414277789-0f666b6c0709?auto=format&fit=crop&w=600&q=80", 
    specs: "Heavy Duty", 
    availability: "In Stock",
    ccReward: 0,
    isPremium: true,
    ccCost: 20 // Cost to unlock details
  },
];

const RentAndSell = () => {
  const [viewType, setViewType] = useState("ALL");
  const [userBalance, setUserBalance] = useState(2450); // Simulating User Wallet

  // Function to simulate spending/earning
  const handleContact = (reward, isPremium, cost) => {
    if (isPremium) {
      if (userBalance >= cost) {
        setUserBalance(prev => prev - cost);
        alert(`Unlocked! You spent ${cost} CC.`);
      } else {
        alert("Insufficient CC Balance!");
      }
    } else {
      setUserBalance(prev => prev + reward);
      alert(`Lead Sent! You earned ${reward} CC.`);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto pb-20">
      
      {/* --- 1. WALLET STRIP (Sticky Top for Mobile) --- */}
      <div className="sticky top-0 z-20 bg-white/80 dark:bg-[#221912]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5 py-3 px-4 mb-6 flex justify-between items-center rounded-b-xl shadow-sm">
        <h1 className="text-lg font-bold text-[#221912] dark:text-white hidden md:block">BeeBark's Marketplace</h1>
        
        <div className="flex items-center gap-3 ml-auto">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Your Balance:</span>
          <div className="flex items-center gap-2 bg-black text-brand-yellow px-3 py-1.5 rounded-full shadow-lg border border-brand-yellow/20">
            <Zap size={16} fill="currentColor" />
            <span className="font-bold text-sm">{userBalance} CC</span>
          </div>
        </div>
      </div>

      {/* --- 2. FILTERS & SEARCH --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="p-1 bg-gray-100 dark:bg-white/5 rounded-xl flex gap-1 border border-gray-200 dark:border-white/5">
          {['ALL', 'RENT', 'SELL'].map((type) => (
            <button
              key={type}
              onClick={() => setViewType(type)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all
                ${viewType === type 
                  ? 'bg-white dark:bg-[#221912] text-[#221912] dark:text-white shadow-sm' 
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400'}`}
            >
              {type === 'ALL' ? 'All' : type === 'RENT' ? 'Rent' : 'Buy'}
            </button>
          ))}
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <input 
              type="text" 
              placeholder="Find equipment..." 
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2c241e] text-sm focus:ring-2 focus:ring-brand-yellow/50 outline-none"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <button className="px-4 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2c241e] text-sm font-medium flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5">
            <MapPin size={16} />
          </button>
        </div>
      </div>

      {/* --- 3. LISTINGS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {listings
          .filter(l => viewType === 'ALL' || l.type === viewType)
          .map((item) => (
          <div key={item.id} className="flex flex-col bg-white dark:bg-[#2c241e] rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden hover:shadow-lg transition-all group relative">
            
            {/* Image Section */}
            <div className="h-56 relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className={`w-full h-full object-cover transition-transform duration-700 ${item.isPremium ? 'blur-sm group-hover:blur-none' : 'group-hover:scale-105'}`} 
              />
              
              {/* Premium Lock Overlay */}
              {item.isPremium && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 backdrop-blur-[2px] group-hover:hidden transition-all">
                  <div className="bg-black/80 text-brand-yellow px-4 py-2 rounded-full flex items-center gap-2 border border-brand-yellow/30 shadow-xl">
                    <Lock size={14} />
                    <span className="text-xs font-bold uppercase tracking-wider">Verified Premium</span>
                  </div>
                </div>
              )}

              {/* Type Badge */}
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-bold tracking-wide shadow-sm
                ${item.type === 'RENT' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/80 dark:text-green-100' 
                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900/80 dark:text-blue-100'}`}>
                {item.type}
              </div>
            </div>

            {/* Info Section */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-[#221912] dark:text-gray-100 leading-tight line-clamp-1">{item.title}</h3>
                <button className="text-gray-400 hover:text-brand-yellow transition">
                  <ArrowUpRight size={20} />
                </button>
              </div>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-1">
                <MapPin size={12} /> {item.location}
              </p>

              {/* Specs */}
              <div className="flex gap-2 mb-4">
                 <span className="text-xs bg-gray-100 dark:bg-white/5 px-2 py-1 rounded text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/5">
                    <Gauge size={12} className="inline mr-1"/> {item.specs}
                 </span>
                 <span className="text-xs bg-gray-100 dark:bg-white/5 px-2 py-1 rounded text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/5">
                    <Calendar size={12} className="inline mr-1"/> {item.availability}
                 </span>
              </div>

              {/* Price & Coin Action Area */}
              <div className="mt-auto border-t border-dashed border-gray-200 dark:border-white/10 pt-4">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <span className="block text-xs text-gray-400 uppercase font-bold">Price</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-extrabold text-[#221912] dark:text-white">₹{item.price}</span>
                      {item.period && <span className="text-xs text-gray-500 font-medium">/{item.period}</span>}
                    </div>
                  </div>
                </div>

                {/* THE COIN BUTTONS */}
                {item.isPremium ? (
                  // Case 1: Premium Listing (Spend CC)
                  <button 
                    onClick={() => handleContact(0, true, item.ccCost)}
                    className="w-full py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2
                    bg-gray-100 text-gray-600 hover:bg-brand-yellow hover:text-black hover:shadow-md
                    dark:bg-white/5 dark:text-gray-300 dark:hover:bg-brand-yellow dark:hover:text-black"
                  >
                    <Eye size={16} />
                    <span>Unlock Details</span>
                    <span className="bg-black/10 px-1.5 py-0.5 rounded text-xs ml-1 dark:bg-white/10">-{item.ccCost} CC</span>
                  </button>
                ) : (
                  // Case 2: Standard Listing (Earn CC)
                  <button 
                    onClick={() => handleContact(item.ccReward, false, 0)}
                    className="w-full py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm
                    bg-[#221912] text-white hover:bg-black
                    dark:bg-white dark:text-[#221912] dark:hover:bg-gray-200"
                  >
                    <Phone size={16} />
                    <span>Contact Owner</span>
                    {/* UPDATED BADGE: Light mode = Transparent/Yellow, Dark mode = Dark/Yellow */}
                    <span className="bg-brand-yellow/20 text-brand-yellow px-1.5 py-0.5 rounded text-xs ml-1 flex items-center gap-0.5
                      dark:bg-[#221912] dark:text-brand-yellow">
                      <Zap size={10} fill="currentColor" /> +{item.ccReward}
                    </span>
                  </button>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RentAndSell;