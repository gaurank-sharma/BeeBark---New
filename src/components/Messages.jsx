// components/Messages.jsx
import React from 'react';
import { Phone, Video, Info, Image, Paperclip, Send } from 'lucide-react';

const ChatSidebar = () => (
  <div className="w-80 border-r border-white/5 flex flex-col h-[calc(100vh-140px)]">
    <div className="p-4">
      <input className="w-full bg-brand-input rounded-lg px-4 py-2 text-sm mb-4" placeholder="Search in messages..." />
      
      {/* Contact List */}
      <div className="space-y-1 overflow-y-auto h-full">
        {[1,2,3,4].map(i => (
          <div key={i} className={`flex gap-3 p-3 rounded-lg cursor-pointer hover:bg-white/5 ${i===2 ? 'bg-white/10' : ''}`}>
            <img src={`https://i.pravatar.cc/150?img=${20+i}`} className="w-10 h-10 rounded-full" />
            <div>
              <h4 className="text-sm font-bold text-gray-200">Name XYZ</h4>
              <p className="text-xs text-brand-muted truncate w-40">Can't wait for the project!</p>
            </div>
            <span className="text-xs text-brand-muted ml-auto">15m</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ChatArea = () => (
  <div className="flex-1 flex flex-col h-[calc(100vh-140px)] bg-[#1a130e]">
    {/* Chat Header */}
    <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-brand-card">
      <div className="flex items-center gap-3">
        <img src="https://i.pravatar.cc/150?img=22" className="w-8 h-8 rounded-full" />
        <div>
          <h3 className="font-bold text-sm">Arjun</h3>
          <span className="text-xs text-green-500">● Online now</span>
        </div>
      </div>
      <div className="flex gap-4 text-brand-muted">
         <Phone size={20} className="hover:text-brand-yellow cursor-pointer" />
         <Video size={20} className="hover:text-brand-yellow cursor-pointer" />
         <Info size={20} className="hover:text-brand-yellow cursor-pointer" />
      </div>
    </div>

    {/* Messages */}
    <div className="flex-1 p-6 overflow-y-auto space-y-4">
       <div className="flex justify-start">
         <div className="bg-brand-card p-3 rounded-xl rounded-tl-none max-w-sm text-sm text-gray-300">
           I'm reviewing the designs but the software is glitching.
         </div>
       </div>
       <div className="flex justify-end">
         <div className="bg-brand-yellow text-brand-bg font-medium p-3 rounded-xl rounded-tr-none max-w-sm text-sm">
           Stay focused! You'll get through it.
         </div>
       </div>
    </div>

    {/* Input Area */}
    <div className="p-4 bg-brand-card border-t border-white/5 flex gap-3 items-center">
      <button className="text-brand-muted hover:text-white"><Image size={20} /></button>
      <button className="text-brand-muted hover:text-white"><Paperclip size={20} /></button>
      <input className="flex-1 bg-brand-input rounded-lg px-4 py-2.5 text-sm outline-none" placeholder="Type your message..." />
      <button className="p-2 bg-brand-yellow rounded-lg text-brand-bg hover:opacity-90"><Send size={18} /></button>
    </div>
  </div>
);

export default function MessagesPage() {
  return (
    <div className="flex border border-white/5 rounded-xl overflow-hidden h-full">
      <ChatSidebar />
      <ChatArea />
    </div>
  );
}