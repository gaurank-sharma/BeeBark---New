import React from 'react';
import { Calendar, Video, Lightbulb, TrendingUp, UserPlus, ArrowRight } from 'lucide-react';

const Card = ({ title, children }) => (
  <div className="bg-brand-card rounded-xl p-4 mb-4 border border-white/5 shadow-sm">
    {title && <h3 className="font-bold text-gray-200 mb-4 text-sm">{title}</h3>}
    {children}
  </div>
);

const WebinarItem = ({ icon: Icon, title, date, location }) => (
  <div className="flex gap-3 mb-4 items-start last:mb-0">
    <div className="bg-white/5 p-2 rounded-lg text-brand-yellow">
      <Icon size={18} />
    </div>
    <div>
      <h4 className="font-bold text-sm text-gray-200 hover:text-brand-yellow cursor-pointer transition">{title}</h4>
      <p className="text-xs text-brand-muted">{date}, {location}</p>
    </div>
  </div>
);

const ConnectItem = ({ name, img }) => (
  <div className="flex items-center justify-between mb-3 last:mb-0">
    <div className="flex items-center gap-2">
      <img src={img} alt={name} className="w-8 h-8 rounded-full bg-gray-600" />
      <span className="text-sm font-medium text-gray-300">{name}</span>
    </div>
    <button className="text-brand-muted hover:text-brand-yellow transition">
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
        <div className="flex gap-3 mb-3">
          <img src="https://i.pravatar.cc/150?img=32" className="w-10 h-10 rounded-lg" />
          <div>
            <h4 className="font-bold text-sm">Rohini</h4>
            <p className="text-xs text-brand-muted">Launching new project</p>
          </div>
        </div>
        <div className="flex gap-3">
          <img src="https://i.pravatar.cc/150?img=12" className="w-10 h-10 rounded-lg" />
          <div>
            <h4 className="font-bold text-sm">Vishal</h4>
            <p className="text-xs text-brand-muted">Completed certification</p>
          </div>
        </div>
      </Card>

      {/* 3. Announcements */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 mb-4 border border-white/5 relative overflow-hidden group cursor-pointer">
        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-yellow/10 rounded-full blur-xl -mr-10 -mt-10"></div>
        <h3 className="font-bold text-gray-100 mb-1 relative z-10">New features coming soon!</h3>
        <p className="text-xs text-brand-muted mb-3 relative z-10">Enhance your profile and connect better.</p>
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