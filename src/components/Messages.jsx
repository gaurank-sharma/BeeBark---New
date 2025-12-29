import React from 'react';
import { Phone, Video, Info, Image, Paperclip, Send, Search, MoreVertical } from 'lucide-react';

// --- 1. Chat Sidebar (Contacts) ---
const ChatSidebar = () => (
  <div className="w-full md:w-80 border-r flex flex-col h-full transition-colors
    bg-white border-gray-200
    dark:bg-[#2c241e] dark:border-white/5">
    
    <div className="p-4">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input 
          className="w-full rounded-lg pl-10 pr-4 py-2 text-sm outline-none transition-all
            bg-gray-100 text-[#221912] focus:ring-1 focus:ring-brand-yellow
            dark:bg-black/20 dark:text-gray-200 dark:placeholder-gray-500" 
          placeholder="Search in messages..." 
        />
      </div>
      
      {/* Contact List */}
      <div className="space-y-1 overflow-y-auto h-[calc(100vh-220px)] custom-scrollbar">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`flex gap-3 p-3 rounded-lg cursor-pointer transition-colors group
            ${i === 2 
              ? 'bg-brand-yellow/10 dark:bg-white/10' // Active state
              : 'hover:bg-gray-50 dark:hover:bg-white/5' // Hover state
            }`}>
            
            <div className="relative">
              <img src={`https://i.pravatar.cc/150?img=${20+i}`} className="w-10 h-10 rounded-full bg-gray-300 object-cover" alt="User" />
              {i === 2 && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-[#2c241e] rounded-full"></span>}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h4 className={`text-sm font-bold truncate ${i === 2 ? 'text-[#221912] dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                  Arjun Singh
                </h4>
                <span className="text-xs text-gray-400">15m</span>
              </div>
              <p className={`text-xs truncate ${i === 2 ? 'text-[#221912] font-medium dark:text-gray-300' : 'text-gray-500 dark:text-gray-500'}`}>
                Can't wait for the project updates!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 2. Main Chat Area ---
const ChatArea = () => (
  <div className="flex-1 flex flex-col h-full relative transition-colors
    bg-gray-50 
    dark:bg-[#221912]"> 
    {/* Light mode uses gray-50 to distinguish from sidebar white */}

    {/* Chat Header */}
    <div className="h-16 border-b flex items-center justify-between px-4 md:px-6 shadow-sm z-10
      bg-white border-gray-200
      dark:bg-[#2c241e] dark:border-white/5">
      
      <div className="flex items-center gap-3">
        <img src="https://i.pravatar.cc/150?img=22" className="w-9 h-9 rounded-full bg-gray-300" alt="Arjun" />
        <div>
          <h3 className="font-bold text-sm text-[#221912] dark:text-gray-100">Arjun</h3>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Online now</span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 text-gray-400 dark:text-gray-400">
         <Phone size={20} className="hover:text-brand-yellow cursor-pointer transition-colors" />
         <Video size={20} className="hover:text-brand-yellow cursor-pointer transition-colors" />
         <Info size={20} className="hover:text-brand-yellow cursor-pointer transition-colors" />
      </div>
    </div>

    {/* Messages Feed */}
    <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4 custom-scrollbar bg-slate-50/50 dark:bg-transparent">
        
        {/* Received Message */}
        <div className="flex justify-start">
          <div className="p-3.5 rounded-2xl rounded-tl-none max-w-sm text-sm shadow-sm border border-transparent
            bg-white text-gray-700
            dark:bg-[#2c241e] dark:text-gray-300 dark:border-white/5">
            I'm reviewing the designs but the software is glitching a bit. Can you check the Revit file?
          </div>
        </div>
        
        {/* Sent Message */}
        <div className="flex justify-end">
          <div className="p-3.5 rounded-2xl rounded-tr-none max-w-sm text-sm font-medium shadow-sm
            bg-brand-yellow text-[#221912]"> 
            {/* Always yellow/black for sent messages for brand consistency */}
            Stay focused! You'll get through it. I'm sending the updated file now.
          </div>
        </div>

        {/* Received Message */}
        <div className="flex justify-start">
          <div className="p-3.5 rounded-2xl rounded-tl-none max-w-sm text-sm shadow-sm
            bg-white text-gray-700
            dark:bg-[#2c241e] dark:text-gray-300">
            Got it, thanks!
          </div>
        </div>
    </div>

    {/* Input Area */}
    <div className="p-4 border-t flex gap-3 items-center
      bg-white border-gray-200
      dark:bg-[#2c241e] dark:border-white/5">
      
      <button className="text-gray-400 hover:text-brand-yellow transition">
        <Image size={20} />
      </button>
      <button className="text-gray-400 hover:text-brand-yellow transition">
        <Paperclip size={20} />
      </button>
      
      <input 
        className="flex-1 rounded-lg px-4 py-2.5 text-sm outline-none transition-all
          bg-gray-100 text-[#221912] placeholder-gray-400 focus:bg-white focus:ring-1 focus:ring-brand-yellow
          dark:bg-black/20 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:border-brand-yellow" 
        placeholder="Type your message..." 
      />
      
      <button className="p-2.5 rounded-lg shadow-md hover:opacity-90 transition-opacity bg-brand-yellow text-[#221912]">
        <Send size={18} className="ml-0.5" />
      </button>
    </div>
  </div>
);

// --- 3. Page Layout ---
export default function MessagesPage() {
  return (
    <div className="flex border rounded-xl overflow-hidden h-[calc(100vh-100px)] shadow-sm
      border-gray-200 bg-white
      dark:border-white/5 dark:bg-[#221912]">
      
      {/* Responsive Behavior: 
        - On mobile (hidden md:block), only showing ChatArea (assuming a chat is selected).
        - To make this fully functional on mobile, you'd toggle classes based on a 'selectedChat' state.
        - For this UI demo, we show sidebar on desktop and chat area everywhere.
      */}
      <div className="hidden md:block h-full">
        <ChatSidebar />
      </div>
      
      <ChatArea />
    </div>
  );
}