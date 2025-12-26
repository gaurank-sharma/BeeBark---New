import React from 'react';
import { Image } from 'lucide-react';

export default function MemoriesPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2"><Image /> Your Memories</h1>
      <p className="text-brand-muted mb-8">Look back on your projects from 1 year ago.</p>
      
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer">
            <img src={`https://picsum.photos/400/${300 + (i * 50)}`} className="w-full object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <span className="text-white font-bold text-sm">Project Alpha {i}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}