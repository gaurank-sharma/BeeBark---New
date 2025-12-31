import React, { useState } from 'react';
import { Hammer, Shield, Briefcase, Zap, MapPin, Clock } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Commercial Complex Facade Design",
    budget: "₹50k - ₹1.5L",
    location: "Noida Sec 18",
    status: "Bidding Open",
    bids: 3, // 3 out of 5 slots filled
    deadline: "2 Days left",
    tags: ["Architect", "3D Design"],
    ccCost: 50 // Cost to bid
  },
  {
    id: 2,
    title: "Plumbing Contract - High Rise",
    budget: "₹5L - ₹8L",
    location: "Gurugram",
    status: "Slots Full",
    bids: 5,
    deadline: "Closing soon",
    tags: ["Contractor", "MEP"],
    ccCost: 100
  },
  {
    id: 3,
    title: "Interior Woodwork for Villa",
    budget: "₹2L - ₹4L",
    location: "Delhi, South Ex",
    status: "Bidding Open",
    bids: 1,
    deadline: "5 Days left",
    tags: ["Carpenter", "Interior"],
    ccCost: 40
  }
];

const ProjectsCenter = () => {
  const [activeTab, setActiveTab] = useState('FIND'); 

  return (
    <div className="w-full max-w-6xl mx-auto pb-20">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#221912] dark:text-white flex items-center gap-2">
            <Hammer className="text-brand-yellow" fill="currentColor" /> Project Center
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Premium bidding arena. Only 5 Pros per project.
          </p>
        </div>
        <div className="flex bg-gray-100 dark:bg-white/5 p-1 rounded-xl border border-gray-200 dark:border-white/10">
          <button 
            onClick={() => setActiveTab('FIND')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'FIND' ? 'bg-white dark:bg-[#221912] shadow-sm text-[#221912] dark:text-white' : 'text-gray-500'}`}
          >
            Find Work
          </button>
          <button 
            onClick={() => setActiveTab('POST')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'POST' ? 'bg-white dark:bg-[#221912] shadow-sm text-[#221912] dark:text-white' : 'text-gray-500'}`}
          >
            My Projects
          </button>
        </div>
      </div>

      {/* STATS STRIP */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-brand-yellow/10 border border-brand-yellow/30 p-4 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-brand-yellow text-black rounded-lg"><Shield size={24} /></div>
          <div>
            <h3 className="font-bold text-[#221912] dark:text-white">Verified Leads</h3>
            <p className="text-xs opacity-70 dark:text-gray-300">All projects vetted by BeeBark</p>
          </div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 p-4 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-blue-500 text-white rounded-lg"><Briefcase size={24} /></div>
          <div>
            <h3 className="font-bold text-[#221912] dark:text-white">Low Competition</h3>
            <p className="text-xs opacity-70 dark:text-gray-300">Max 5 Bidders per project</p>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-[#221912] text-white rounded-lg"><Zap size={24} /></div>
          <div>
            <h3 className="font-bold text-[#221912] dark:text-white">Pay with CC</h3>
            <p className="text-xs opacity-70 dark:text-gray-300">Use coins to place premium bids</p>
          </div>
        </div>
      </div>

      {/* PROJECT LIST */}
      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-[#2c241e] border border-gray-200 dark:border-white/5 rounded-2xl p-6 hover:shadow-lg transition-all relative overflow-hidden group">
            
            {/* Project Header */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
              <div>
                <div className="flex gap-2 mb-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[#221912] dark:text-white mb-2">{project.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                   <span className="flex items-center gap-1"><MapPin size={14}/> {project.location}</span>
                   <span className="flex items-center gap-1"><Clock size={14}/> Posted 2h ago</span>
                </div>
              </div>
              <div className="text-left md:text-right bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/5">
                <p className="text-xs text-gray-400 font-bold uppercase">Estimated Budget</p>
                <p className="text-xl font-extrabold text-[#221912] dark:text-white">{project.budget}</p>
              </div>
            </div>

            <hr className="border-gray-100 dark:border-white/5 my-4" />

            {/* Bidding Slots Visualizer */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="flex-1 w-full">
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-gray-500 dark:text-gray-400">Competition Level ({project.bids}/5 Slots Filled)</span>
                  <span className={`${project.bids === 5 ? 'text-red-500' : 'text-green-500'}`}>
                    {project.bids === 5 ? 'Arena Full' : 'Slots Available'}
                  </span>
                </div>
                {/* Progress Bar for 5 Slots */}
                <div className="flex gap-1 h-3">
                  {[1, 2, 3, 4, 5].map(slot => (
                    <div 
                      key={slot} 
                      className={`flex-1 rounded-sm transition-all
                        ${slot <= project.bids 
                          ? 'bg-[#221912] dark:bg-brand-yellow' 
                          : 'bg-gray-200 dark:bg-white/10'}`} 
                    />
                  ))}
                </div>
              </div>

              {/* Action Button */}
              {project.bids < 5 ? (
                <button className="w-full md:w-auto whitespace-nowrap px-6 py-3 bg-brand-yellow text-black font-bold rounded-xl shadow-md hover:scale-105 transition-transform flex items-center justify-center gap-2">
                  <span>Place Bid</span>
                  <span className="bg-black/10 px-2 py-0.5 rounded text-xs border border-black/5">-{project.ccCost} CC</span>
                </button>
              ) : (
                <button disabled className="w-full md:w-auto whitespace-nowrap px-6 py-3 bg-gray-100 dark:bg-white/5 text-gray-400 font-bold rounded-xl cursor-not-allowed border border-gray-200 dark:border-white/5">
                  Bidding Closed
                </button>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCenter;