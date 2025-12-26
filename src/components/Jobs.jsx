import React, { useState } from 'react';
import { Search, MapPin, Zap, Clock, CheckCircle, FileText, Briefcase } from 'lucide-react';

const JobCard = ({ title, company, location, budget, match, isEasyApply }) => (
  <div className="bg-brand-card p-6 rounded-2xl border border-white/5 mb-4 hover:border-brand-yellow/30 transition group relative overflow-hidden">
    
    {/* Top Row */}
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-brand-yellow transition">{title}</h3>
        <p className="text-brand-muted text-sm font-medium">{company}</p>
      </div>
      {match && (
        <div className="bg-brand-yellow text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-[0_0_10px_rgba(253,224,71,0.4)]">
          <Zap size={12} fill="currentColor" /> {match}% AI Match
        </div>
      )}
    </div>

    {/* Details Row */}
    <div className="flex items-center gap-6 text-xs text-brand-muted mb-6">
      <span className="flex items-center gap-1.5"><MapPin size={14} /> {location}</span>
      <span className="flex items-center gap-1.5"><Clock size={14} /> Full-Time</span>
      {budget && (
        <span className="text-brand-yellow font-bold flex items-center gap-1 bg-brand-yellow/10 px-2 py-0.5 rounded">
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
        <button className="bg-white/10 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-white/20 transition">
          View Details
        </button>
      )}
    </div>
  </div>
);

const ApplicationStatus = ({ title, company, status, progress }) => (
  <div className="bg-brand-card p-6 rounded-2xl border border-white/5 mb-4">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-brand-muted text-sm">{company}</p>
      </div>
      <div className="text-brand-yellow text-xs font-bold flex items-center gap-1">
        <CheckCircle size={14} /> Applied
      </div>
    </div>

    {/* Progress Bar Visual */}
    <div className="relative pt-4 pb-2">
      <div className="flex justify-between text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-2">
        <span className={progress >= 1 ? 'text-green-500' : ''}>Applied</span>
        <span className={progress >= 2 ? 'text-brand-yellow' : ''}>AI Screening</span>
        <span className={progress >= 3 ? 'text-white' : ''}>Interview</span>
        <span className={progress >= 4 ? 'text-white' : ''}>Offer</span>
      </div>
      <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden flex">
        <div className={`h-full ${progress >= 1 ? 'bg-green-500' : 'bg-gray-800'} w-1/4`}></div>
        <div className={`h-full ${progress >= 2 ? 'bg-brand-yellow' : 'bg-gray-800'} w-1/4 transition-all duration-1000 relative`}>
            {status === 'screening' && <div className="absolute inset-0 bg-white/30 animate-pulse"></div>}
        </div>
        <div className={`h-full ${progress >= 3 ? 'bg-blue-500' : 'bg-gray-800'} w-1/4`}></div>
        <div className={`h-full ${progress >= 4 ? 'bg-purple-500' : 'bg-gray-800'} w-1/4`}></div>
      </div>
      {status === 'screening' && (
        <p className="text-xs text-brand-muted mt-3 flex items-center gap-2">
          <Zap size={12} className="text-brand-yellow animate-spin" /> 
          Your profile is currently being parsed by the employer's AI agent.
        </p>
      )}
    </div>
  </div>
);

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState('Find Jobs');

  return (
    <div className="max-w-4xl mx-auto">
      
      {/* 1. Header & AI Search */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-6">BeeBark Job Portal</h1>
        
        {/* AI Resume Search Input */}
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute inset-0 bg-brand-yellow/20 rounded-xl blur-lg group-hover:bg-brand-yellow/30 transition"></div>
          <div className="relative bg-[#1A1A1A] border border-white/10 rounded-xl flex items-center p-2 focus-within:border-brand-yellow transition">
            <Search className="text-brand-muted ml-3" size={20} />
            <input 
              type="text" 
              placeholder="AI Smart Search: Paste resume content to find matches..." 
              className="bg-transparent w-full px-4 py-2 text-sm text-white outline-none placeholder-gray-500"
            />
            <button className="bg-brand-card hover:bg-white/10 text-brand-muted p-2 rounded-lg transition">
               <FileText size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Tabs */}
      <div className="flex gap-8 mb-8 text-sm font-bold text-brand-muted border-b border-white/5 pb-1 justify-center">
        {['Find Jobs', 'My Applications (3 Active)'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 transition px-4 ${activeTab === tab ? 'text-brand-yellow border-b-2 border-brand-yellow' : 'hover:text-white'}`}
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
      <div className="fixed bottom-8 right-8">
        <button className="bg-brand-yellow text-black px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(253,224,71,0.3)] hover:scale-105 transition flex items-center gap-2">
          <Briefcase size={18} /> Post a Job (Free for Pro)
        </button>
      </div>

    </div>
  );
}