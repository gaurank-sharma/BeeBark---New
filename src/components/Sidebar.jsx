import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, MessageSquare, User, Users, Calendar, Layers, Wallet, Image as ImageIcon } from 'lucide-react';

// Make sure to save your logo image in your project (e.g., src/assets/logo.png)
// import logo from '../assets/logo.png'; 

const Sidebar = ({ isOpen, closeSidebar }) => {
  const baseClass = "w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all font-medium mb-1";
  const activeClass = "bg-brand-yellow text-brand-bg font-bold shadow-[0_0_15px_rgba(253,224,71,0.3)]";
  const inactiveClass = "text-brand-muted hover:text-brand-text hover:bg-white/5";

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={closeSidebar}></div>}

      <aside className={`fixed md:sticky top-0 h-screen z-30 w-64 bg-brand-bg border-r border-white/5 flex flex-col p-4 overflow-y-auto custom-scrollbar transform transition-transform duration-200 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        
        {/* --- LOGO SECTION (UPDATED) --- */}
        <div className="mb-10 pl-2">
          {/* We use a white background container so the Black/Yellow logo pops */}
          <div className="bg-[#8d7e70] w-full max-w-[160px] py-2 px-4 rounded-lg flex items-center gap-2 shadow-lg">
             {/* Replace this URL with your actual local logo path */}
             <img 
               src="/image.png" 
               alt="BeeBark Logo" 
               className="w-8 h-8 object-contain" // Adjust size as needed
             />
             <span className="font-extrabold text-xl text-black tracking-tight">BeeBark</span>
          </div>
        </div>
        
        {/* Main Menu */}
        <nav className="space-y-1 mb-8">
          <NavLink to="/" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <Home size={20} /> Dashboard
          </NavLink>
          <NavLink to="/messages" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <MessageSquare size={20} /> Messages
          </NavLink>
          <NavLink to="/connections" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <Users size={20} /> Connections
          </NavLink>
          <NavLink to="/feed" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <Layers size={20} /> Feed
          </NavLink>
          <NavLink to="/jobs" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <Briefcase size={20} /> Jobs
          </NavLink>
          <NavLink to="/events" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <Calendar size={20} /> Events
          </NavLink>
          <NavLink to="/memories" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <ImageIcon size={20} /> Memories
          </NavLink>

          <NavLink to="/wallet" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <Wallet size={20} /> Wallet & Economy
          </NavLink>
        </nav>

        {/* Groups Section */}
        <div className="mb-4 px-4">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Groups</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm text-gray-300 hover:text-brand-yellow cursor-pointer">
              <div className="w-6 h-6 rounded bg-blue-900 flex items-center justify-center">🏠</div>
              Design Enthusiasts
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300 hover:text-brand-yellow cursor-pointer">
              <div className="w-6 h-6 rounded bg-green-900 flex items-center justify-center">🏗️</div>
              Future Builders
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300 hover:text-brand-yellow cursor-pointer">
              <div className="w-6 h-6 rounded bg-purple-900 flex items-center justify-center">🌍</div>
              Urban Explorers
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300 hover:text-brand-yellow cursor-pointer">
              <div className="w-6 h-6 rounded bg-red-900 flex items-center justify-center">🎨</div>
              Design Memes
            </li>
          </ul>
        </div>

        {/* Bottom Profile Link */}
        <div className="mt-auto pt-4 border-t border-white/5">
           <NavLink to="/profile" className={`${baseClass} ${inactiveClass}`}>
             <User size={20} /> Profile
           </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;