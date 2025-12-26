// components/Profile.jsx
import React from 'react';

export default function ProfilePage() {
  return (
    <div>
      {/* Cover Image */}
      <div className="h-48 w-full bg-gray-700 rounded-t-xl overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" />
      </div>
      
      {/* Profile Header Info */}
      <div className="bg-brand-card px-8 pb-6 rounded-b-xl mb-8 relative">
        <div className="flex justify-between items-end -mt-10 mb-4">
           <div className="w-24 h-24 rounded-xl border-4 border-brand-card overflow-hidden">
             <img src="https://i.pravatar.cc/150?img=11" className="w-full h-full object-cover" />
           </div>
           <div className="flex gap-3 mb-2">
             <button className="bg-brand-yellow text-brand-bg px-6 py-2 rounded-lg font-bold shadow-lg hover:brightness-110">Connect</button>
             <button className="border border-white/20 px-6 py-2 rounded-lg font-medium hover:bg-white/5">Message</button>
           </div>
        </div>
        
        <h1 className="text-2xl font-bold">Alex Morgan</h1>
        <p className="text-brand-muted">Architect • 250 connections</p>
        
        {/* Profile Tabs */}
        <div className="flex gap-6 mt-8 border-b border-white/10 pb-1 text-sm font-medium text-brand-muted">
           <span className="text-brand-yellow border-b-2 border-brand-yellow pb-4 cursor-pointer">Portfolio</span>
           <span className="hover:text-white cursor-pointer transition">About</span>
           <span className="hover:text-white cursor-pointer transition">Projects</span>
           <span className="hover:text-white cursor-pointer transition">Partners</span>
        </div>
      </div>
    </div>
  );
}