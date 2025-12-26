import React from 'react';
import { Calendar } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2"><Calendar /> Upcoming Events</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {[1,2,3,4].map(i => (
          <div key={i} className="bg-brand-card p-6 rounded-xl border border-white/5 flex gap-4">
            <div className="bg-brand-yellow/10 text-brand-yellow w-16 h-16 rounded-lg flex flex-col items-center justify-center font-bold">
              <span className="text-xl">2{i}</span>
              <span className="text-xs uppercase">Sep</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Architecture Expo 2025</h3>
              <p className="text-brand-muted text-sm mb-3">New York City Center • 10:00 AM</p>
              <button className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1 rounded text-white">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}