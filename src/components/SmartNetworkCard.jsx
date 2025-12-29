import React from 'react';
import { UserPlus, MessageSquare, ArrowRight } from 'lucide-react';

const NodeLine = ({ className }) => (
  <div className={`absolute bg-black/10 ${className}`} />
);

export default function SmartNetworkCard({ person, company, mutuals, isPro }) {
  return (
    <div className="bg-[#FDE047] rounded-2xl p-5 relative overflow-hidden text-black shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 h-full min-h-[260px]">
      
      {/* "PRO" Badge */}
      {isPro && (
        <div className="absolute top-0 left-0 bg-black text-[#FDE047] text-[10px] font-bold px-2 py-1 rounded-br-lg z-20 shadow-md">
          PRO MATCH
        </div>
      )}

      {/* --- TOP ROW: Person & Company --- */}
      <div className="flex justify-between items-start relative z-10 mb-6">
        
        {/* Person (Left) */}
        <div className="flex flex-col items-start gap-1">
           <div className="relative">
             <img src={person.img} className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" alt={person.name} />
             <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
               <div className="w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></div>
             </div>
           </div>
           <div className="mt-1">
             <h3 className="font-bold text-sm leading-tight">{person.name}</h3>
             <p className="text-[10px] font-medium opacity-70 leading-tight">{person.role}</p>
           </div>
        </div>

        {/* Connecting Line (Horizontal) */}
        <NodeLine className="top-6 left-14 right-14 h-0.5" />

        {/* Company (Right) */}
        <div className="flex flex-col items-end gap-1">
           <img src={company.logo} className="w-10 h-10 rounded-lg border-2 border-white shadow-sm object-cover bg-white" alt={company.name} />
           <div className="text-right mt-1">
             <h3 className="font-bold text-xs leading-tight">{company.name}</h3>
             <button className="mt-1 bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold hover:opacity-80 transition-opacity">
               + Follow
             </button>
           </div>
        </div>
      </div>

      {/* --- MIDDLE: Connection Logic --- */}
      {/* Vertical Line from Person down to Mutuals */}
      <NodeLine className="top-12 left-6 w-0.5 h-20" />
      <NodeLine className="top-[8rem] left-6 w-6 h-0.5" />

      {/* --- BOTTOM: Mutuals Bubble --- */}
      <div className="bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/50 relative z-10 ml-10 mt-2 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2 opacity-60">
          {mutuals.count} Mutual Connections
        </p>
        <div className="flex items-center justify-between gap-2">
          <div className="flex -space-x-2">
            {mutuals.avatars.map((img, i) => (
              <img key={i} src={img} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 object-cover" alt="mutual" />
            ))}
          </div>
          <button className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center hover:scale-110 transition">
            <ArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* --- ACTION BUTTONS (Bottom) --- */}
      <div className="mt-4 flex gap-2">
        <button className="flex-1 bg-white/80 hover:bg-white py-2 rounded-lg font-bold text-xs shadow-sm flex items-center justify-center gap-1 transition-colors text-black">
          <UserPlus size={14} /> Connect
        </button>
        <button className="flex-1 bg-black text-[#FDE047] py-2 rounded-lg font-bold text-xs shadow-md flex items-center justify-center gap-1 hover:opacity-80 transition-opacity">
          <MessageSquare size={14} /> Message
        </button>
      </div>

    </div>
  );
}