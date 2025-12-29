import React, { useState } from 'react';
import { 
  MoreHorizontal, Heart, MessageCircle, Share2, Image, Paperclip, MapPin, Plus, 
  Repeat, Bookmark, Briefcase, Handshake, FileText, Users 
} from 'lucide-react';

// NOTE: Ensure you have this component or remove this import if testing in isolation
// If you don't have this file yet, simply comment out the <RightPanel /> line at the bottom.
import RightPanel from '../components/RightPanel'; 

// --- 1. Story/Reel Strip Component ---
const ReelStrip = () => (
  <div className="flex gap-3 md:gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide px-1">
    
    {/* "Add Story" Card */}
    <div className="min-w-[90px] md:min-w-[100px] h-36 md:h-40 rounded-xl flex flex-col items-center justify-center border-2 border-dashed cursor-pointer transition flex-shrink-0
      bg-gray-50 border-gray-300 hover:border-brand-yellow
      dark:bg-[#2c241e] dark:border-white/10 dark:hover:border-brand-yellow">
      
      <div className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-xl mb-2 bg-brand-yellow shadow-md">
        <Plus size={20} />
      </div>
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Add Story</span>
    </div>

    {/* User Stories */}
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="min-w-[90px] md:min-w-[100px] h-36 md:h-40 rounded-xl relative overflow-hidden group cursor-pointer flex-shrink-0 border transition-all
        border-transparent hover:scale-105
        shadow-sm hover:shadow-md">
        
        <img 
          src={`https://picsum.photos/200/300?random=${i + 10}`} 
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
          alt="Story"
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-2 left-2 right-2 text-xs font-bold text-white truncate">
          User {i}
        </div>
        
        {/* Unseen Story Ring Indicator */}
        <div className="absolute top-2 left-2 w-8 h-8 rounded-full border-2 border-brand-yellow p-0.5 bg-black/20 backdrop-blur-sm">
           <img src={`https://i.pravatar.cc/150?img=${i + 20}`} className="w-full h-full rounded-full object-cover" alt="User" />
        </div>
      </div>
    ))}
  </div>
);

// --- 2. Create Post Component ---
const CreatePost = () => (
  <div className="p-4 rounded-xl mb-6 border shadow-sm transition-colors
    bg-white border-gray-200
    dark:bg-[#2c241e] dark:border-white/5">
    
    <div className="flex gap-3 mb-3">
      <img src="https://i.pravatar.cc/150?img=11" className="w-10 h-10 rounded-lg object-cover bg-gray-200" alt="Me" />
      <input 
        className="flex-1 rounded-lg px-4 text-sm outline-none transition-all
          bg-gray-100 text-[#221912] placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-brand-yellow/50
          dark:bg-black/20 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:ring-brand-yellow/50" 
        placeholder="What's your latest project, Gaurank?" 
      />
    </div>
    
    <div className="flex justify-between items-center pl-1 pt-2">
      <div className="flex gap-3 md:gap-5 text-gray-400 dark:text-gray-500">
        <Image size={20} className="hover:text-brand-yellow cursor-pointer transition-colors" />
        <Paperclip size={20} className="hover:text-brand-yellow cursor-pointer transition-colors" />
        <MapPin size={20} className="hover:text-brand-yellow cursor-pointer transition-colors" />
      </div>
      <button className="px-5 py-1.5 rounded-lg font-bold text-sm transition-all shadow-md hover:shadow-lg
        bg-[#221912] text-white hover:bg-black
        dark:bg-white dark:text-[#221912] dark:hover:bg-gray-200">
        Share
      </button>
    </div>
  </div>
);

// --- 3. Single Post Component (Responsive Actions) ---
const Post = ({ name, role, time, content, image, avatarId }) => {
  const [showBusinessOptions, setShowBusinessOptions] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="rounded-xl p-4 md:p-5 mb-6 border shadow-sm transition-colors relative
      bg-white border-gray-200
      dark:bg-[#2c241e] dark:border-white/5">
      
      {/* --- Header --- */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3">
          <img 
            src={`https://i.pravatar.cc/150?u=${avatarId || name}`} 
            className="w-10 h-10 rounded-lg bg-gray-200 object-cover border border-gray-100 dark:border-white/10" 
            alt={name} 
          />
          <div>
            <h3 className="font-bold text-sm text-[#221912] dark:text-gray-100">{name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{role} • {time}</p>
          </div>
        </div>

        {/* Top Right: Only More Menu (Clean look) */}
        <button className="p-2 text-gray-400 hover:text-[#221912] hover:bg-gray-100 rounded-full dark:hover:bg-white/5 dark:hover:text-white transition">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* --- Content --- */}
      <p className="text-sm mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
        {content}
      </p>

      {image && (
        <div className="rounded-lg overflow-hidden mb-4 border border-gray-100 dark:border-white/5">
          <img src={image} className="w-full h-auto max-h-[500px] object-cover" alt="Post content" />
        </div>
      )}

      {/* --- BUSINESS ACTIONS (Collapsible) --- */}
      <div className="mb-4">
        <button 
          onClick={() => setShowBusinessOptions(!showBusinessOptions)}
          className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all
            ${showBusinessOptions 
              ? 'bg-brand-yellow/10 text-brand-yellow ring-1 ring-brand-yellow/50' 
              : 'bg-gray-50 text-gray-500 hover:bg-gray-100 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10'
            }`}
        >
          <span className="flex items-center gap-2">
            <Briefcase size={14} />
            Business Actions
          </span>
          <span className="text-[10px] opacity-70">
            {showBusinessOptions ? "Close Options" : "Inquire / Partner / Collab"}
          </span>
        </button>

        {showBusinessOptions && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Inquiry */}
            <button className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition group dark:border-white/5 dark:hover:bg-blue-900/20">
              <FileText size={18} className="text-blue-500 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Send Inquiry</span>
            </button>
            {/* Partnership */}
            <button className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-100 hover:border-purple-200 hover:bg-purple-50/50 transition group dark:border-white/5 dark:hover:bg-purple-900/20">
              <Handshake size={18} className="text-purple-500 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Partnership</span>
            </button>
            {/* Collab */}
            <button className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition group dark:border-white/5 dark:hover:bg-green-900/20">
              <Users size={18} className="text-green-500 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Collab</span>
            </button>
          </div>
        )}
      </div>

      {/* --- SOCIAL ACTIONS FOOTER --- */}
      <div className="flex items-center justify-between border-t pt-3 mt-2 border-gray-100 dark:border-white/5">
        
        {/* Left Side: Like, Comment, Repost */}
        {/* 'gap-2' on mobile, 'gap-6' on desktop to fit all icons */}
        <div className="flex gap-2 sm:gap-6">
          <ActionButton icon={Heart} label="Like" colorClass="hover:text-red-500" />
          <ActionButton icon={MessageCircle} label="Comment" colorClass="hover:text-blue-500" />
          <ActionButton icon={Repeat} label="Repost" colorClass="hover:text-green-500" />
        </div>

        {/* Right Side: Save & Share */}
        <div className="flex gap-2 sm:gap-4">
          {/* Custom Save Button logic */}
          <button 
            onClick={() => setIsSaved(!isSaved)}
            className={`flex items-center gap-1.5 text-sm font-medium transition group
            ${isSaved ? 'text-brand-yellow' : 'text-gray-500 dark:text-gray-400 hover:text-brand-yellow'}`}
          >
             <div className="p-1.5 rounded-full group-hover:bg-gray-50 dark:group-hover:bg-white/5 transition-colors">
               <Bookmark size={18} className={`group-hover:scale-110 transition-transform ${isSaved ? "fill-current" : ""}`} />
             </div>
             {/* Text Hidden on Mobile */}
             <span className="hidden sm:inline">{isSaved ? "Saved" : "Save"}</span>
          </button>
          
          <ActionButton icon={Share2} label="Share" colorClass="hover:text-brand-yellow" />
        </div>

      </div>
    </div>
  );
};

// Helper for Footer Buttons (Responsive Text)
// Uses 'hidden sm:inline' to hide text on mobile screens (<640px) and show icons only
const ActionButton = ({ icon: Icon, label, colorClass }) => (
  <button className={`flex items-center gap-1.5 text-sm font-medium transition group text-gray-500 dark:text-gray-400 ${colorClass}`}>
    <div className="p-1.5 rounded-full group-hover:bg-gray-50 dark:group-hover:bg-white/5 transition-colors">
      <Icon size={18} className="group-hover:scale-110 transition-transform" />
    </div>
    <span className="hidden sm:inline">{label}</span>
  </button>
);

// --- 4. Main Feed Page Layout ---
export default function FeedPage() {
  return (
    <div className="flex w-full gap-6 md:gap-8 justify-center">
      
      {/* CENTER COLUMN (Feed) */}
      <div className="flex-1 min-w-0 max-w-2xl">
        <ReelStrip />
        
        <CreatePost />

        {/* Post 1 */}
        <Post 
          name="Renu" 
          avatarId="renu"
          role="Sustainable Designer" 
          time="5 min ago" 
          content="I just completed a project on sustainable design principles and can't wait to share my insights with everyone. Here are some highlights from the recent workshop."
          image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
        />
        
        {/* Post 2 */}
        <Post 
          name="Somya" 
          avatarId="somya"
          role="Architect" 
          time="2h ago" 
          content="Looking for collaborators on a new architecture blueprint project! Who is available for a quick sync later today? We need someone with strong Revit skills."
        />

        {/* Post 3 */}
        <Post 
          name="Arjun Singh" 
          avatarId="arju"
          role="Civil Engineer" 
          time="4h ago" 
          content="Just visited the site at Sector 62. Progress is looking solid despite the rains. Check out the foundation work."
          image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
        />
      </div>

      {/* RIGHT COLUMN (Webinars, etc.) */}
      {/* Hidden on mobile (hidden), visible on large screens (lg:block) */}
      <div className="hidden lg:block w-80 flex-shrink-0">
        <RightPanel />
      </div>
    </div>
  );
}