import React, { useState } from 'react';
import { 
  Users, Briefcase, TrendingUp, Globe, 
  Crown, Check, ArrowRight, Zap, Hammer, Star, Gem, Layout, BarChart3, ShieldCheck
} from 'lucide-react';

// --- 1. STATISTICS WIDGETS ---
const StatsCard = ({ icon: Icon, label, value, trend }) => (
  <div className="p-6 rounded-2xl bg-white dark:bg-[#2c241e] border border-gray-200 dark:border-white/5 transition-all hover:shadow-lg group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
      <Icon size={64} className="text-[#221912] dark:text-white" />
    </div>
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 group-hover:bg-brand-yellow group-hover:text-black transition-colors">
          <Icon size={24} className="text-[#221912] dark:text-brand-yellow group-hover:text-black" />
        </div>
        {trend && (
          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full flex items-center">
            <TrendingUp size={12} className="mr-1" /> {trend}
          </span>
        )}
      </div>
      <h3 className="text-3xl font-extrabold mb-1 text-[#221912] dark:text-white">{value}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</p>
    </div>
  </div>
);

// --- 2. PREMIUM PLAN CARD (Combined Value) ---
const PlanCard = ({ title, price, subtitle, features, isPopular, buttonText, icon: PlanIcon }) => (
  <div className={`relative p-1 rounded-3xl transition-all duration-300 hover:-translate-y-2 group
    ${isPopular ? 'bg-gradient-to-b from-brand-yellow to-[#b48d00] shadow-2xl shadow-yellow-900/20' : 'bg-transparent border border-gray-200 dark:border-white/10'}`}>
    
    <div className="h-full bg-white dark:bg-[#221912] rounded-[22px] p-8 flex flex-col relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 dark:bg-white/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>

      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-yellow text-black text-[10px] font-black px-3 py-1 rounded-b-lg uppercase tracking-widest">
          Most Chosen
        </div>
      )}

      <div className="mb-6 relative z-10">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg
          ${isPopular ? 'bg-brand-yellow text-black' : 'bg-[#221912] dark:bg-white/10'}`}>
          <PlanIcon size={24} />
        </div>
        <h3 className="text-xl font-extrabold uppercase tracking-wide text-[#221912] dark:text-white">
          {title}
        </h3>
        <p className="text-xs font-bold text-brand-yellow uppercase tracking-wider mt-1">Combined Value Pack</p>
        
        <div className="flex items-baseline gap-1 mt-4">
          <span className="text-4xl font-black text-[#221912] dark:text-white">{price}</span>
        </div>
        <p className="text-xs mt-3 opacity-70 leading-relaxed font-medium">{subtitle}</p>
      </div>

      <div className="flex-1 mb-8 relative z-10">
        <div className="h-px w-full bg-gray-100 dark:bg-white/10 mb-4"></div>
        <ul className="space-y-4">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm">
              <div className={`mt-0.5 p-0.5 rounded-full ${isPopular ? 'bg-brand-yellow text-black' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>
                <Check size={10} strokeWidth={4} />
              </div>
              <span className="opacity-90 font-medium text-[#221912] dark:text-gray-300">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg relative z-10
        ${isPopular 
          ? 'bg-brand-yellow text-black hover:bg-black hover:text-brand-yellow' 
          : 'bg-[#221912] text-white hover:bg-black dark:bg-white dark:text-[#221912]'
        }`}>
        {buttonText}
      </button>
    </div>
  </div>
);

// --- 3. MAIN DASHBOARD ---
const DashboardPage = () => {
  const [showPlans, setShowPlans] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto pb-20">
      
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-[#221912] dark:text-white tracking-tight">
          Command Center
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">
          Manage your network, projects, and digital presence.
        </p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatsCard icon={Users} label="Profile Views" value="1,240" trend="+12%" />
        <StatsCard icon={Briefcase} label="Active Bids" value="8" />
        <StatsCard icon={Zap} label="Wallet Balance" value="2,450 CC" />
        <StatsCard icon={Globe} label="Website Traffic" value="3.2k" />
      </div>

      {/* --- THE "AGENCY PORTAL" (Upgraded Visuals) --- */}
      <div className="relative group cursor-pointer mb-16" onClick={() => window.open('https://agency.thebeebark.com', '_blank')}>
        {/* The Card Container */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-brand-yellow/20 hover:scale-[1.01]">
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[120px] group-hover:bg-brand-yellow/10 transition-all duration-700"></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-14 gap-10">
            
            {/* Left Content */}
            <div className="max-w-2xl relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></div>
                <span className="text-brand-yellow font-bold tracking-[0.2em] text-xs uppercase">The Agency Portal</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Design. Build. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-yellow-200 to-white">
                  Dominate.
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
                Access our elite design team. We craft high-performance websites and marketing funnels specifically for the construction industry.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                <button 
                  onClick={(e) => { e.stopPropagation(); setShowPlans(!showPlans); }}
                  className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-brand-yellow transition-colors shadow-lg shadow-white/10 flex items-center justify-center gap-2"
                >
                  View Bundle Packs <ArrowRight size={18} />
                </button>
                
                {/* --- UPDATED: TRUSTED FIRMS (Logos) --- */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {/* LOGO 1 PLACEHOLDER */}
                    <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-white flex items-center justify-center overflow-hidden">
                      <img src="https://i.pravatar.cc/150?u=firm1" alt="Logo 1" className="w-full h-full object-cover" />
                    </div>
                    {/* LOGO 2 PLACEHOLDER */}
                    <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-white flex items-center justify-center overflow-hidden">
                       <img src="https://i.pravatar.cc/150?u=firm2" alt="Logo 2" className="w-full h-full object-cover" />
                    </div>
                    {/* LOGO 3 PLACEHOLDER */}
                    <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-white flex items-center justify-center overflow-hidden">
                       <img src="https://i.pravatar.cc/150?u=firm3" alt="Logo 3" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    <span className="text-white font-bold block">120+</span>
                    Firms Trusted
                  </div>
                </div>
              </div>
            </div>

            {/* --- UPDATED: RIGHT VISUAL (3D Website Mockup) --- */}
            <div className="relative w-full md:w-auto flex justify-center perspective-1000">
              {/* Floating Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-yellow/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* The "Device" */}
              <div className="relative w-72 h-96 bg-gray-900 border border-gray-700/50 rounded-[2rem] shadow-2xl transform rotate-y-12 rotate-z-6 hover:rotate-0 hover:scale-105 transition-all duration-700 overflow-hidden flex flex-col">
                
                {/* Mockup Header */}
                <div className="h-14 bg-gray-800/50 backdrop-blur-md border-b border-white/5 flex items-center px-4 justify-between">
                   <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                   </div>
                   <div className="w-20 h-2 bg-gray-700 rounded-full opacity-30"></div>
                </div>

                {/* Mockup Screen Content */}
                <div className="flex-1 bg-gradient-to-br from-gray-900 to-black p-4 relative">
                   {/* Abstract Construction Image/Hero */}
                   <div className="w-full h-32 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 mb-4 overflow-hidden relative">
                      <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=300&q=80')] bg-cover bg-center"></div>
                      <div className="absolute bottom-3 left-3 w-16 h-2 bg-brand-yellow rounded-full"></div>
                      <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm"></div>
                   </div>
                   
                   {/* Mockup Text Lines */}
                   <div className="space-y-2 mb-6">
                      <div className="w-3/4 h-3 bg-gray-800 rounded"></div>
                      <div className="w-1/2 h-3 bg-gray-800 rounded"></div>
                      <div className="w-full h-2 bg-gray-800/50 rounded mt-2"></div>
                      <div className="w-full h-2 bg-gray-800/50 rounded"></div>
                   </div>

                   {/* Mockup Floating Elements (The "Not Simple" Part) */}
                   <div className="absolute bottom-6 left-4 right-4 p-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl flex items-center gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                        <BarChart3 size={16} />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400 uppercase font-bold">Leads Generated</div>
                        <div className="text-sm font-bold text-white">+240% Growth</div>
                      </div>
                   </div>

                   {/* Verified Badge */}
                   <div className="absolute top-36 right-4 bg-brand-yellow text-black p-1.5 rounded-full shadow-lg z-10">
                      <ShieldCheck size={16} />
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- PLANS SECTION (Combined Value Packs) --- */}
      {showPlans && (
        <div id="plans" className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#221912] dark:text-white flex items-center justify-center gap-3">
              <Crown className="text-brand-yellow fill-brand-yellow" size={32} /> 
              Unlock Your Growth Potential
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">Choose a pack that combines platform power with agency expertise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* PLAN 1: PLATFORM ONLY */}
            <PlanCard 
              title="BeeBark Pro"
              price="₹999"
              subtitle="Maximize your networking on the platform."
              buttonText="Upgrade Account"
              icon={Zap}
              features={[
                "Unlimited Connections",
                "Apply to 50 Jobs/month",
                "Verified 'Pro' Badge",
                "See Who Viewed Profile",
                "5x Faster Coin Earning"
              ]}
            />

            {/* PLAN 2: PLATFORM + WEBSITE (The Best Value) */}
            <PlanCard 
              title="Digital Builder"
              price="₹24,999"
              subtitle="Platform Premium + Your Custom Website."
              isPopular={true}
              buttonText="Start Building"
              icon={Layout}
              features={[
                "Everything in Pro (1 Year)",
                "Custom 5-Page Website (Worth ₹20k)",
                "Revamp or New Build",
                "1 Month Maintenance Included",
                "Free Hosting & Domain (1 Yr)",
                "Premium 'Agency Partner' Badge"
              ]}
            />

            {/* PLAN 3: PLATFORM + WEBSITE + MARKETING */}
            <PlanCard 
              title="Market Leader"
              price="₹49,999"
              subtitle="Full-scale tech and marketing domination."
              buttonText="Partner with Agency"
              icon={Gem}
              features={[
                "Everything in Digital Builder",
                "Google & FB Ads Management",
                "Social Media Content (12 Posts)",
                "Dedicated Account Manager",
                "Priority Support Line",
                "Monthly ROI Report"
              ]}
            />

          </div>
        </div>
      )}

      {/* ACTIVE BIDS MINI-VIEW */}
      <div className="bg-white dark:bg-[#2c241e] rounded-3xl border border-gray-200 dark:border-white/5 p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-xl text-[#221912] dark:text-white">Your Active Bids</h3>
          <button className="text-sm font-bold text-brand-yellow hover:underline flex items-center gap-1">
            View Projects Center <ArrowRight size={14} />
          </button>
        </div>
        
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between p-5 bg-gray-50 dark:bg-white/5 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition cursor-pointer group">
              <div className="flex items-center gap-5">
                <div className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                  <Hammer size={24} className="text-[#221912] dark:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#221912] dark:text-white text-base">Commercial Complex Plumbing</h4>
                  <p className="text-sm text-gray-500 font-medium">Bid Amount: ₹5.5 Lakhs</p>
                </div>
              </div>
              <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full uppercase tracking-wider">
                Pending
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;