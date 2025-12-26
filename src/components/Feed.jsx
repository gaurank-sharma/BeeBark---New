import React from 'react';
import { MoreHorizontal, Heart, MessageCircle, Share2, Image, Paperclip, MapPin } from 'lucide-react';
import RightPanel from './RightPanel'; // Import the panel we just created

// ... (ReelStrip and Post components from previous turn remain the same, I will include them briefly for context)

const ReelStrip = () => (
  <div className="flex gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide">
    <div className="min-w-[100px] h-40 bg-brand-card rounded-xl flex flex-col items-center justify-center border border-dashed border-brand-muted cursor-pointer hover:border-brand-yellow transition">
      <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-brand-bg font-bold text-xl">+</div>
      <span className="text-xs mt-2 text-brand-muted">Add Story</span>
    </div>
    {[1,2,3,4].map((i) => (
      <div key={i} className="min-w-[100px] h-40 bg-gray-800 rounded-xl relative overflow-hidden group cursor-pointer border border-white/5">
        <img src={`https://picsum.photos/200/300?random=${i}`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition" />
        <div className="absolute bottom-2 left-2 text-xs font-bold shadow-black drop-shadow-md">User {i}</div>
      </div>
    ))}
  </div>
);

const Post = ({ name, role, time, content, image }) => (
  <div className="bg-brand-card rounded-xl p-5 mb-6 border border-white/5 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-3">
        <img src={`https://i.pravatar.cc/150?u=${name}`} className="w-10 h-10 rounded-lg bg-gray-600" />
        <div>
          <h3 className="font-bold text-sm text-gray-100">{name}</h3>
          <p className="text-xs text-brand-muted">{role} • {time}</p>
        </div>
      </div>
      <MoreHorizontal className="text-brand-muted cursor-pointer" />
    </div>
    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{content}</p>
    {image && <img src={image} className="w-full h-64 object-cover rounded-lg mb-4 border border-white/5" />}
    <div className="flex gap-6 border-t border-white/5 pt-4">
      <button className="flex items-center gap-2 text-sm text-brand-muted hover:text-brand-yellow transition"><Heart size={18} /> Like</button>
      <button className="flex items-center gap-2 text-sm text-brand-muted hover:text-white transition"><MessageCircle size={18} /> Comment</button>
      <button className="flex items-center gap-2 text-sm text-brand-muted hover:text-white transition ml-auto"><Share2 size={18} /> Share</button>
    </div>
  </div>
);

export default function FeedPage() {
  return (
    <div className="flex gap-8">
      {/* CENTER COLUMN (Feed) */}
      <div className="flex-1 min-w-0">
        <ReelStrip />
        
        {/* Create Post Input */}
        <div className="bg-brand-card p-4 rounded-xl mb-8 border border-white/5">
           <div className="flex gap-3 mb-3">
             <img src="https://i.pravatar.cc/150?img=11" className="w-10 h-10 rounded-lg" />
             <input className="bg-brand-input flex-1 rounded-lg px-4 text-sm outline-none focus:ring-1 focus:ring-brand-yellow" placeholder="What's your latest project?" />
           </div>
           <div className="flex justify-between items-center pl-14">
             <div className="flex gap-4 text-brand-muted">
               <Image size={18} className="hover:text-brand-yellow cursor-pointer" />
               <Paperclip size={18} className="hover:text-brand-yellow cursor-pointer" />
               <MapPin size={18} className="hover:text-brand-yellow cursor-pointer" />
             </div>
             <button className="bg-white text-brand-bg px-4 py-1.5 rounded-lg font-bold text-xs hover:bg-brand-yellow transition">Share</button>
           </div>
        </div>

        <Post 
          name="Renu" 
          role="Sustainable Designer" 
          time="5 min ago" 
          content="I just completed a project on sustainable design principles and can't wait to share my insights with everyone. Here are some highlights from the recent workshop."
          image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
        />
        <Post 
          name="Somya" 
          role="Architect" 
          time="2h ago" 
          content="Looking for collaborators on a new architecture blueprint project! Who is available for a quick sync?"
        />
      </div>

      {/* RIGHT COLUMN (Webinars, etc.) */}
      <RightPanel />
    </div>
  );
}