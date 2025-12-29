import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SmartNetworkCard from '../components/SmartNetworkCard'; 

export default function ConnectionsPage() {
  const [activeTab, setActiveTab] = useState('All Connections');

  // Data for the "Smart Recommendations" (Yellow Cards)
  const recommendations = [
    {
      id: 1,
      isPro: true,
      person: { name: "Nishant", role: "Senior Architect", img: "https://i.pravatar.cc/150?img=1" },
      company: { name: "Horizon Structures", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=150&q=80" },
      mutuals: { count: 12, avatars: ["https://i.pravatar.cc/150?img=3", "https://i.pravatar.cc/150?img=4"] }
    },
    {
      id: 2,
      isPro: false,
      person: { name: "Prateek", role: "Urban Planner", img: "https://i.pravatar.cc/150?img=11" },
      company: { name: "City Flow Inc", logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=150&q=80" },
      mutuals: { count: 8, avatars: ["https://i.pravatar.cc/150?img=12", "https://i.pravatar.cc/150?img=8"] }
    },
    {
      id: 3,
      isPro: true,
      person: { name: "Sakshi", role: "Interior Lead", img: "https://i.pravatar.cc/150?img=5" },
      company: { name: "Studio 9", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=150&q=80" },
      mutuals: { count: 24, avatars: ["https://i.pravatar.cc/150?img=9", "https://i.pravatar.cc/150?img=10"] }
    },
    {
      id: 4,
      isPro: false,
      person: { name: "Eesh", role: "Site Manager", img: "https://i.pravatar.cc/150?img=13" },
      company: { name: "BuildCorp", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=150&q=80" },
      mutuals: { count: 5, avatars: ["https://i.pravatar.cc/150?img=14", "https://i.pravatar.cc/150?img=15"] }
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-0">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-8 gap-4 md:gap-0">
        <div>
          <h1 className="text-2xl font-bold mb-1 text-[#221912] dark:text-white">Network & Growth</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">AI-curated partners for your projects.</p>
        </div>
        
        {/* Search */}
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search connections..." 
            className="w-full md:w-64 pl-9 pr-4 py-2 rounded-lg text-sm outline-none transition-all
              bg-gray-100 text-[#221912] border border-transparent focus:bg-white focus:ring-1 focus:ring-brand-yellow
              dark:bg-black/20 dark:text-gray-200 dark:border-white/10 dark:focus:border-brand-yellow" 
          />
        </div>
      </div>

      {/* 1. SMART GRID (The new "4 cards" layout) */}
      <h2 className="text-lg font-bold mb-4 text-[#221912] dark:text-white">Recommended for you</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mb-12">
        {recommendations.map((rec) => (
          <SmartNetworkCard key={rec.id} {...rec} />
        ))}
      </div>

      {/* 2. Tabs for Standard List */}
      <div className="flex gap-6 mb-6 text-sm font-medium overflow-x-auto pb-1 border-b
        border-gray-200 text-gray-500
        dark:border-white/5 dark:text-gray-400">
        
        {['All Connections', 'Pending Requests', 'Following'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 whitespace-nowrap transition-colors border-b-2
              ${activeTab === tab 
                ? 'text-[#221912] border-brand-yellow font-bold dark:text-brand-yellow' 
                : 'border-transparent hover:text-black dark:hover:text-white'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3. Standard List Placeholder */}
      <div className="text-center py-10 rounded-xl border border-dashed transition-colors
        bg-gray-50 border-gray-300 text-gray-400
        dark:bg-white/5 dark:border-white/10 dark:text-gray-500">
        
        <p>No {activeTab.toLowerCase()} found at the moment.</p>
        <button className="mt-4 px-4 py-2 bg-brand-yellow text-black font-bold rounded-lg text-sm hover:opacity-90">
          Find more people
        </button>
      </div>
    </div>
  );
}