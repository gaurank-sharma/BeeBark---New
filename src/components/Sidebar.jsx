import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Briefcase, MessageSquare, User, Users, Calendar, 
  Layers, Wallet, Image as ImageIcon, ShoppingBag, KeyRound, Hammer, Lightbulb, LifeBuoy, Film
} from 'lucide-react';

const Sidebar = ({ isOpen, closeSidebar }) => {
  // --- Styling Classes ---
  
  // 1. Link Base Style
  const baseClass = "w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all font-medium mb-1";
  
  // 2. Active Link: Yellow bg, Black text
  const activeClass = "bg-brand-yellow text-black font-bold shadow-md shadow-yellow-400/20";
  
  // 3. Inactive Link
  const inactiveClass = "text-[#221912] hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-white/5";

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" 
          onClick={closeSidebar}
        ></div>
      )}

      <aside className={`fixed md:sticky top-0 h-screen z-50 w-64 flex flex-col p-4 overflow-y-auto custom-scrollbar transform transition-transform duration-300
        bg-white border-r border-gray-200
        dark:bg-[#221912] dark:border-white/5
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        
        {/* --- LOGO SECTION --- */}
        <div className="mb-10 pl-2">
           <div className="w-full max-w-[160px] py-2 px-4 rounded-lg flex items-center gap-2 transition-all
             bg-transparent shadow-none 
             dark:bg-[#8d7e70] dark:shadow-lg">
             
             <img 
               src="/image.png" 
               alt="BeeBark Logo" 
               className="w-8 h-8 object-contain" 
             />
             
             <span className="font-extrabold text-xl tracking-tight transition-colors
               text-[#221912] 
               dark:text-black">
               BeeBark
             </span>
           </div>
        </div>
        
        {/* Main Menu */}
        <nav className="space-y-1 mb-8">
          <NavLink to="/" onClick={closeSidebar} className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <Home size={20} /> Dashboard
          </NavLink>
          <NavLink to="/messages" onClick={closeSidebar} className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <MessageSquare size={20} /> Messages
          </NavLink>
          <NavLink to="/connections" onClick={closeSidebar} className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <Users size={20} /> Connections
          </NavLink>
          <NavLink to="/feed" onClick={closeSidebar} className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <Layers size={20} /> Feed
          </NavLink>
          <NavLink to="/reels" onClick={closeSidebar} className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <Film size={20} /> Reels
          </NavLink>
          <NavLink to="/projects" onClick={closeSidebar} className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <Hammer size={20} /> Projects Center
          </NavLink>
          <NavLink to="/jobs" onClick={closeSidebar} className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <Briefcase size={20} /> Jobs
          </NavLink>

            <NavLink to="/ecommerce" onClick={closeSidebar} className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <ShoppingBag size={20} /> Store
          </NavLink>
          <NavLink to="/rent-sell" onClick={closeSidebar} className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <KeyRound size={20} /> Rent & Sell
          </NavLink>
          <NavLink to="/events" onClick={closeSidebar} className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <Calendar size={20} /> Events
          </NavLink>
          <NavLink to="/memories" onClick={closeSidebar} className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <ImageIcon size={20} /> Memories
          </NavLink>
        
          <NavLink to="/wallet" onClick={closeSidebar} className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            <Wallet size={20} /> Wallet & Economy
          </NavLink>

           <div className="pt-4 mt-4 border-t border-gray-100 dark:border-white/5">
            <NavLink to="/feedback" onClick={closeSidebar} className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
              <Lightbulb size={20} /> Suggest & Earn
            </NavLink>
            <NavLink to="/support" onClick={closeSidebar} className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
              <LifeBuoy size={20} /> Help & Support
            </NavLink>
          </div>
     
        </nav>
        
       
        {/* Groups Section */}
        <div className="mb-4 px-4">
          <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-500 dark:text-gray-600">Groups</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm font-medium cursor-pointer transition text-[#221912] dark:text-gray-300 hover:text-brand-yellow">
              <div className="w-6 h-6 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 flex items-center justify-center">🏠</div>
              Design Enthusiasts
            </li>
            <li className="flex items-center gap-3 text-sm font-medium cursor-pointer transition text-[#221912] dark:text-gray-300 hover:text-brand-yellow">
              <div className="w-6 h-6 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 flex items-center justify-center">🏗️</div>
              Future Builders
            </li>
            {/* Add more groups as needed */}
          </ul>
        </div>

        {/* Bottom Profile Link */}
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-white/5">
           <NavLink to="/profile" onClick={closeSidebar} className={`${baseClass} ${inactiveClass}`}>
             <User size={20} /> Profile
           </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;