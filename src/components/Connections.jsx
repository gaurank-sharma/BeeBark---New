import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SmartNetworkCard from './SmartNetworkCard'; // Import the new compact card

// (Keep your standard "ConnectionCard" component code here if you still want the list below, 
//  otherwise we can remove it. For now, I assume you keep it for the "All Connections" list at the bottom.)
// ...

export default function ConnectionsPage() {
  const [activeTab, setActiveTab] = useState('All');

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
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Network & Growth</h1>
          <p className="text-brand-muted text-sm">AI-curated partners for your projects.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
          <input type="text" placeholder="Search connections..." className="bg-brand-input pl-9 pr-4 py-2 rounded-lg text-sm border border-white/10 focus:border-brand-yellow outline-none w-64" />
        </div>
      </div>

      {/* 1. SMART GRID (The new "4 cards" layout) */}
      <h2 className="text-lg font-bold mb-4 text-white">Recommended for you</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mb-12">
        {recommendations.map((rec) => (
          <SmartNetworkCard key={rec.id} {...rec} />
        ))}
      </div>

      {/* 2. Standard Connection List (The "Not Pro" list) */}
      <div className="flex gap-8 mb-6 text-sm font-medium text-brand-muted border-b border-white/5 pb-1">
        {['All Connections', 'Pending Requests', 'Following'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 transition ${activeTab === tab ? 'text-brand-yellow border-b-2 border-brand-yellow' : 'hover:text-white'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* (Placeholder for the standard list you already have) */}
      <div className="text-center py-10 text-brand-muted bg-white/5 rounded-xl border border-dashed border-white/10">
        Standard list content goes here...
      </div>
    </div>
  );
}