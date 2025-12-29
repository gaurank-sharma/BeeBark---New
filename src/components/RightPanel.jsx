import React from 'react';
import { Calendar, Video, Lightbulb, TrendingUp, UserPlus, ArrowRight } from 'lucide-react';

// Reusable Card with Dark/Light Mode Classes
const Card = ({ title, children }) => (
  <div className="rounded-xl p-4 mb-4 border shadow-sm transition-colors
    bg-white border-gray-200
    dark:bg-[#2c241e] dark:border-white/5">
    {title && <h3 className="font-bold text-sm mb-4 text-[#221912] dark:text-gray-200">{title}</h3>}
    {children}
  </div>
);

// Webinar Item
const WebinarItem = ({ icon: Icon, title, date, location }) => (
  <div className="flex gap-3 mb-4 items-start last:mb-0 group">
    <div className="p-2 rounded-lg text-brand-yellow transition-colors
      bg-gray-100 dark:bg-white/5">
      <Icon size={18} />
    </div>
    <div>
      <h4 className="font-bold text-sm cursor-pointer transition-colors
        text-[#221912] group-hover:text-brand-yellow
        dark:text-gray-200 dark:group-hover:text-brand-yellow">
        {title}
      </h4>
      <p className="text-xs text-gray-500 dark:text-gray-400">{date}, {location}</p>
    </div>
  </div>
);

// Connect Item
const ConnectItem = ({ name, img }) => (
  <div className="flex items-center justify-between mb-3 last:mb-0">
    <div className="flex items-center gap-2">
      <img src={img} alt={name} className="w-8 h-8 rounded-full bg-gray-200 object-cover" />
      <span className="text-sm font-medium text-[#221912] dark:text-gray-300">{name}</span>
    </div>
    <button className="transition-colors
      text-gray-400 hover:text-brand-yellow">
      <UserPlus size={16} />
    </button>
  </div>
);

export default function RightPanel() {
  return (
    <div className="w-80 hidden xl:block flex-shrink-0">
      
      {/* 1. Upcoming Webinars */}
      <Card title="Upcoming Webinars">
        <WebinarItem icon={Calendar} title="Design Workshop" date="Wed 20 Sept" location="Online" />
        <WebinarItem icon={Video} title="Collaboration Forum" date="Fri 22 Sept" location="Main Hall" />
        <WebinarItem icon={Lightbulb} title="Sustainable Arch." date="Mon 25 Sept" location="Conf. Room" />
        <WebinarItem icon={TrendingUp} title="Tech in Architecture" date="Thu 28 Sept" location="Online" />
      </Card>

      {/* 2. Projects (Short List) */}
      <Card title="Active Projects">
        <div className="flex gap-3 mb-3 group cursor-pointer">
          <img src="https://i.pravatar.cc/150?img=32" className="w-10 h-10 rounded-lg object-cover bg-gray-200" alt="Rohini" />
          <div>
            <h4 className="font-bold text-sm transition-colors text-[#221912] group-hover:text-brand-yellow dark:text-gray-200">Rohini</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Launching new project</p>
          </div>
        </div>
        <div className="flex gap-3 group cursor-pointer">
          <img src="https://i.pravatar.cc/150?img=12" className="w-10 h-10 rounded-lg object-cover bg-gray-200" alt="Vishal" />
          <div>
            <h4 className="font-bold text-sm transition-colors text-[#221912] group-hover:text-brand-yellow dark:text-gray-200">Vishal</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Completed certification</p>
          </div>
        </div>
      </Card>

      {/* 3. Announcements (Always Dark/Gradient to stand out) */}
      <div className="rounded-xl p-4 mb-4 border relative overflow-hidden group cursor-pointer shadow-md transition-all hover:scale-[1.02]
        bg-gradient-to-br from-[#221912] to-black border-transparent
        dark:border-white/5">
        
        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-yellow/10 rounded-full blur-xl -mr-10 -mt-10"></div>
        <h3 className="font-bold text-white mb-1 relative z-10">New features coming soon!</h3>
        <p className="text-xs text-gray-400 mb-3 relative z-10">Enhance your profile and connect better.</p>
        <div className="text-brand-yellow text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn More <ArrowRight size={12} />
        </div>
      </div>

      {/* 4. Connect With */}
      <Card title="Connect with">
        <ConnectItem name="Rohan" img="https://i.pravatar.cc/150?img=60" />
        <ConnectItem name="Vaishali" img="https://i.pravatar.cc/150?img=44" />
        <ConnectItem name="Arjun" img="https://i.pravatar.cc/150?img=33" />
        <ConnectItem name="Sunidhi" img="https://i.pravatar.cc/150?img=25" />
      </Card>
      
    </div>
  );
}