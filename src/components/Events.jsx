import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function EventsPage() {
  
  // Dummy Data for better visualization
  const events = [
    { id: 1, day: '21', month: 'Sep', title: 'Architecture Expo 2025', location: 'New Delhi Center', time: '10:00 AM' },
    { id: 2, day: '24', month: 'Sep', title: 'Green Building Summit', location: 'Online Webinar', time: '02:00 PM' },
    { id: 3, day: '28', month: 'Oct', title: 'Urban Design Hackathon', location: 'Mumbai Hub', time: '09:00 AM' },
    { id: 4, day: '05', month: 'Nov', title: 'Future City Workshop', location: 'Bangalore Tech Park', time: '11:00 AM' },
  ];

  return (
    <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
      
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-[#221912] dark:text-white">
        <div className="p-2 rounded-lg bg-brand-yellow text-black">
          <Calendar size={24} />
        </div>
        Upcoming Events
      </h1>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {events.map((evt) => (
          <div key={evt.id} className="p-5 rounded-xl border shadow-sm transition-all hover:shadow-md group
            bg-white border-gray-200
            dark:bg-[#2c241e] dark:border-white/5">
            
            <div className="flex gap-5">
              
              {/* Date Badge */}
              <div className="w-16 h-16 rounded-xl flex flex-col items-center justify-center font-bold shrink-0 transition-colors
                bg-gray-100 text-[#221912] group-hover:bg-brand-yellow group-hover:text-black
                dark:bg-brand-yellow/10 dark:text-brand-yellow dark:group-hover:bg-brand-yellow dark:group-hover:text-black">
                <span className="text-2xl leading-none">{evt.day}</span>
                <span className="text-xs uppercase font-bold opacity-70">{evt.month}</span>
              </div>

              {/* Event Details */}
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 leading-tight transition-colors
                  text-[#221912] group-hover:text-brand-yellow
                  dark:text-gray-100 dark:group-hover:text-brand-yellow">
                  {evt.title}
                </h3>
                
                <div className="flex flex-col gap-1.5 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} /> {evt.location}
                  </div>
                  <div className="flex items-center gap-2">
                     <Clock size={14} /> {evt.time}
                  </div>
                </div>

                <button className="text-xs font-bold px-4 py-2 rounded-lg transition-colors
                  bg-[#221912] text-white hover:bg-black
                  dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}