import React, { useState } from 'react';
import { Search, MapPin, Zap, Clock, CheckCircle, FileText, Briefcase } from 'lucide-react';

// --- 1. Job Card Component ---
const JobCard = ({ title, company, location, budget, match, isEasyApply }) => (
  <div className="rounded-2xl p-6 border shadow-sm transition-all hover:border-brand-yellow/50 group relative overflow-hidden mb-4
    bg-white border-gray-200
    dark:bg-[#2c241e] dark:border-white/5">
    
    {/* Top Row */}
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-bold transition-colors
          text-[#221912] group-hover:text-brand-yellow
          dark:text-white dark:group-hover:text-brand-yellow">
          {title}
        </h3>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{company}</p>
      </div>
      {match && (
        <div className="bg-brand-yellow text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
          <Zap size={12} fill="currentColor" /> {match}% AI Match
        </div>
      )}
    </div>

    {/* Details Row */}
    <div className="flex items-center gap-6 text-xs mb-6 text-gray-500 dark:text-gray-400">
      <span className="flex items-center gap-1.5"><MapPin size={14} /> {location}</span>
      <span className="flex items-center gap-1.5"><Clock size={14} /> Full-Time</span>
      {budget && (
        <span className="font-bold flex items-center gap-1 px-2 py-0.5 rounded
          bg-brand-yellow/20 text-[#221912]
          dark:bg-brand-yellow/10 dark:text-brand-yellow">
            Budget: {budget}
        </span>
      )}
    </div>

    {/* Action Row */}
    <div className="flex justify-end">
      {isEasyApply ? (
        <button className="bg-brand-yellow text-black px-6 py-2 rounded-xl font-bold text-sm hover:scale-105 transition flex items-center gap-2 shadow-lg">
          <Zap size={16} fill="currentColor" /> AI Quick Apply
        </button>
      ) : (
        <button className="px-6 py-2 rounded-xl font-bold text-sm transition-colors border
          bg-gray-100 text-[#221912] hover:bg-gray-200 border-gray-200
          dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:border-transparent">
          View Details
        </button>
      )}
    </div>
  </div>
);

// --- 2. Application Status Component ---
const ApplicationStatus = ({ title, company, status, progress }) => (
  <div className="rounded-2xl p-6 border shadow-sm mb-4 transition-colors
    bg-white border-gray-200
    dark:bg-[#2c241e] dark:border-white/5">
    
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg font-bold text-[#221912] dark:text-white">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
      </div>
      <div className="text-brand-yellow text-xs font-bold flex items-center gap-1">
        <CheckCircle size={14} /> Applied
      </div>
    </div>

    {/* Progress Bar Visual */}
    <div className="relative pt-4 pb-2">
      <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider mb-2 text-gray-400 dark:text-gray-500">
        <span className={progress >= 1 ? 'text-green-600 dark:text-green-500' : ''}>Applied</span>
        <span className={progress >= 2 ? 'text-brand-yellow' : ''}>AI Screening</span>
        <span className={progress >= 3 ? 'text-[#221912] dark:text-white' : ''}>Interview</span>
        <span className={progress >= 4 ? 'text-[#221912] dark:text-white' : ''}>Offer</span>
      </div>
      
      <div className="h-1.5 w-full rounded-full overflow-hidden flex bg-gray-200 dark:bg-gray-800">
        <div className={`h-full ${progress >= 1 ? 'bg-green-500' : 'bg-transparent'} w-1/4`}></div>
        <div className={`h-full ${progress >= 2 ? 'bg-brand-yellow' : 'bg-transparent'} w-1/4 transition-all duration-1000 relative`}>
            {status === 'screening' && <div className="absolute inset-0 bg-white/30 animate-pulse"></div>}
        </div>
        <div className={`h-full ${progress >= 3 ? 'bg-blue-500' : 'bg-transparent'} w-1/4`}></div>
        <div className={`h-full ${progress >= 4 ? 'bg-purple-500' : 'bg-transparent'} w-1/4`}></div>
      </div>
      
      {status === 'screening' && (
        <p className="text-xs mt-3 flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <Zap size={12} className="text-brand-yellow animate-spin" /> 
          Your profile is currently being parsed by the employer's AI agent.
        </p>
      )}
    </div>
  </div>
);

// --- 3. Main Jobs Page ---
export default function JobsPage() {
  const [activeTab, setActiveTab] = useState('Find Jobs');

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-0 pb-20">
      
      {/* 1. Header & AI Search */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-6 text-[#221912] dark:text-white">BeeBark Job Portal</h1>
        
        {/* AI Resume Search Input */}
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute inset-0 bg-brand-yellow/20 rounded-xl blur-lg group-hover:bg-brand-yellow/30 transition opacity-50 dark:opacity-100"></div>
          
          <div className="relative border rounded-xl flex items-center p-2 focus-within:border-brand-yellow transition shadow-sm
            bg-white border-gray-300
            dark:bg-[#1A1A1A] dark:border-white/10">
            
            <Search className="text-gray-400 ml-3" size={20} />
            <input 
              type="text" 
              placeholder="AI Smart Search: Paste resume content to find matches..." 
              className="bg-transparent w-full px-4 py-2 text-sm outline-none placeholder-gray-500
                text-[#221912] dark:text-white"
            />
            <button className="p-2 rounded-lg transition hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500">
               <FileText size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Tabs */}
      <div className="flex gap-8 mb-8 text-sm font-bold border-b justify-center
        border-gray-200 text-gray-500
        dark:border-white/5 dark:text-gray-500">
        
        {['Find Jobs', 'My Applications (3 Active)'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 transition px-4 border-b-2
              ${activeTab === tab 
                ? 'text-[#221912] border-brand-yellow dark:text-brand-yellow' 
                : 'border-transparent hover:text-black dark:hover:text-white'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3. Content Area */}
      {activeTab === 'Find Jobs' ? (
        <div className="space-y-4">
          <JobCard 
            title="Site Supervisor" 
            company="XYZ Construction Co." 
            location="India" 
            budget="2 XC"
            match={95} 
            isEasyApply={true} 
          />
          <JobCard 
            title="Senior Interior Architect" 
            company="Modern Living Studios" 
            location="Remote" 
            budget="5 XC"
            match={88} 
            isEasyApply={false} 
          />
           <JobCard 
            title="AutoCAD Drafter" 
            company="BluePrint Architects" 
            location="Mumbai" 
            budget="3 XC"
            match={72} 
            isEasyApply={true} 
          />
        </div>
      ) : (
        <div className="space-y-4">
          <ApplicationStatus 
            title="Interior Drafter" 
            company="ABC Designs" 
            status="screening"
            progress={2} 
          />
           <ApplicationStatus 
            title="Project Manager" 
            company="BuildRight Inc" 
            status="applied"
            progress={1} 
          />
        </div>
      )}

      {/* Floating "Post a Job" Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-30">
        <button className="bg-brand-yellow text-black px-6 py-3 rounded-full font-bold shadow-lg shadow-yellow-400/30 hover:scale-105 transition flex items-center gap-2">
          <Briefcase size={18} /> Post a Job (Free for Pro)
        </button>
      </div>

    </div>
  );
}