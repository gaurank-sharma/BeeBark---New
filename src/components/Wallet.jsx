import React, { useState } from 'react';
import { RefreshCw, Zap, Lock, Award, TrendingUp, ShoppingBag, ArrowRight } from 'lucide-react';

// --- 1. Coin Card Component ---
const CoinCard = ({ symbol, name, amount, subtext, isHard }) => (
  <div className={`relative p-6 rounded-2xl border transition-colors shadow-sm
    ${isHard 
      ? 'bg-brand-yellow/10 border-brand-yellow/50' 
      : 'bg-white border-gray-200 dark:bg-[#2c241e] dark:border-white/5'
    }`}>
    
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className={`text-sm font-bold mb-1 ${isHard ? 'text-brand-yellow dark:text-brand-yellow' : 'text-gray-500 dark:text-gray-400'}`}>
          {name}
        </p>
        <h2 className="text-4xl font-extrabold text-[#221912] dark:text-white">{amount}</h2>
        <p className="text-xs opacity-60 mt-1 text-gray-600 dark:text-gray-400">{subtext}</p>
      </div>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-sm
        ${isHard 
          ? 'bg-brand-yellow text-black shadow-yellow-400/30' 
          : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
        }`}>
        {symbol}
      </div>
    </div>
    
    {isHard ? (
      <button className="w-full bg-brand-yellow text-black font-bold py-2 rounded-lg text-sm hover:opacity-90 transition-opacity shadow-md">
        Redeem Rewards
      </button>
    ) : (
      <button className="w-full font-bold py-2 rounded-lg text-sm transition-colors
        bg-gray-100 text-[#221912] hover:bg-gray-200
        dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
        View History
      </button>
    )}
  </div>
);

// --- 2. Earning Row Component ---
const EarningRow = ({ action, reward, proReward, note }) => (
  <div className="grid grid-cols-12 gap-4 py-4 border-b items-center transition-colors px-2 rounded-lg
    border-gray-100 hover:bg-gray-50
    dark:border-white/5 dark:hover:bg-white/5">
    
    <div className="col-span-4 text-sm font-bold text-[#221912] dark:text-white">{action}</div>
    <div className="col-span-2 text-sm text-gray-500 dark:text-gray-400">{reward}</div>
    <div className="col-span-2 text-sm text-brand-yellow font-bold flex items-center gap-1">
      {proReward} <Zap size={12} fill="currentColor" />
    </div>
    <div className="col-span-4 text-xs text-gray-400 dark:text-gray-500">{note}</div>
  </div>
);

// --- 3. Main Wallet Page ---
export default function WalletPage() {
  const [exchangeAmount, setExchangeAmount] = useState(100);

  return (
    <div className="max-w-6xl mx-auto pb-20 px-4 md:px-0">
      
      {/* 1. HEADER & EXCHANGE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <CoinCard symbol="CC" name="Connection Coins" amount="2,450" subtext="Soft Currency (Activity)" isHard={false} />
        
        {/* Exchange Center */}
        <div className="rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden border shadow-sm
          bg-white border-gray-200
          dark:bg-[#2c241e] dark:border-white/5">
          
          <div className="absolute top-0 right-0 p-3 opacity-5 dark:opacity-10 text-[#221912] dark:text-white">
            <RefreshCw size={100} />
          </div>
          <h3 className="font-bold text-[#221912] dark:text-white mb-6 relative z-10">Currency Exchange</h3>
          
          <div className="flex items-center justify-between rounded-xl p-4 mb-4 border relative z-10
            bg-gray-50 border-gray-200
            dark:bg-black/40 dark:border-white/5">
            
            <div className="text-left">
              <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Convert</span>
              <input 
                type="number" 
                value={exchangeAmount}
                onChange={(e) => setExchangeAmount(e.target.value)}
                className="bg-transparent text-2xl font-bold w-24 outline-none text-[#221912] dark:text-white" 
              />
              <span className="text-xs font-bold text-gray-400">CC</span>
            </div>
            
            <ArrowRight className="text-gray-400" />
            
            <div className="text-right">
              <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Receive</span>
              <span className="text-2xl font-bold text-brand-yellow">{Math.floor(exchangeAmount / 100)}</span>
              <span className="text-xs font-bold text-brand-yellow block">XC</span>
            </div>
          </div>
          
          <button className="w-full font-bold py-3 rounded-xl transition shadow-md relative z-10
            bg-[#221912] text-white hover:bg-black
            dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Convert Coins
          </button>
          <p className="text-xs text-center mt-3 text-gray-500 dark:text-gray-400">Rate: 100 CC = 1 XC</p>
        </div>

        <CoinCard symbol="XC" name="Collab Coins" amount="12" subtext="Hard Currency (Value)" isHard={true} />
      </div>

      {/* 2. THE PRO ADVANTAGE (Visualizing 2.4) */}
      <div className="bg-gradient-to-r from-brand-yellow to-yellow-600 rounded-3xl p-8 mb-12 text-black relative overflow-hidden shadow-lg">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="bg-black text-brand-yellow px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block shadow-md">
              Pro Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#221912]">Hoard Value. Earn Faster.</h2>
            <p className="font-medium opacity-80 mb-6 text-lg text-[#221912]">
              Pro users generate Collab Coins 5x-10x faster by bypassing the exchange grind.
            </p>
            <div className="flex gap-4">
               <button className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition shadow-lg">
                 Upgrade to Pro
               </button>
               <button className="bg-white/30 text-black border border-black/10 px-6 py-3 rounded-xl font-bold hover:bg-white/40 transition">
                 Read Strategy
               </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white/90 p-4 rounded-xl shadow-lg backdrop-blur-sm">
               <Lock className="mb-2 opacity-50" size={24} />
               <h4 className="font-bold text-lg text-[#221912]">Free Unlocks</h4>
               <p className="text-xs opacity-70 leading-tight text-[#221912]">No CC tax on viewing profiles. Save your coins.</p>
             </div>
             <div className="bg-white/90 p-4 rounded-xl shadow-lg backdrop-blur-sm">
               <TrendingUp className="mb-2 opacity-50" size={24} />
               <h4 className="font-bold text-lg text-[#221912]">2x Speed</h4>
               <p className="text-xs opacity-70 leading-tight text-[#221912]">Double earnings on every like and comment.</p>
             </div>
             <div className="bg-black text-white p-4 rounded-xl shadow-lg col-span-2 flex items-center justify-between">
               <div>
                 <h4 className="font-bold text-lg text-brand-yellow">Direct Earning</h4>
                 <p className="text-xs opacity-70">Earn XC directly for collabs.</p>
               </div>
               <Award className="text-brand-yellow" size={32} />
             </div>
          </div>
        </div>
      </div>

      {/* 3. EARNING STRATEGY MATRIX (Visualizing 2.2) */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left: Earning Table */}
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#221912] dark:text-white">
            <TrendingUp /> Earning Strategy
          </h3>
          <div className="rounded-2xl p-6 border shadow-sm
            bg-white border-gray-200
            dark:bg-[#2c241e] dark:border-white/5">
            
            <div className="grid grid-cols-12 gap-4 text-xs font-bold uppercase tracking-wider mb-4 px-2
              text-gray-500 dark:text-gray-400">
              <div className="col-span-4">User Action</div>
              <div className="col-span-2">Free Reward</div>
              <div className="col-span-2 text-brand-yellow">Pro Reward</div>
              <div className="col-span-4">Notes</div>
            </div>
            
            <EarningRow action="Like a Post" reward="1 CC" proReward="2 CC" note="Capped at 20/day" />
            <EarningRow action="Comment (>5 words)" reward="1.5 CC" proReward="3 CC" note="Spam filter applied" />
            <EarningRow action="Collab Request" reward="1.5 CC" proReward="3 CC" note="Initial request sent" />
            <EarningRow action="Partnership Req" reward="2 CC" proReward="4 CC" note="Initiating discussion" />
            <EarningRow action="User Referral" reward="100 CC" proReward="5 XC" note="Direct XC for Pros" />
            <EarningRow action="Confirmed Collab" reward="N/A" proReward="1 XC" note="Pro Exclusive Reward" />
          </div>
        </div>

        {/* Right: Spending Utility */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#221912] dark:text-white">
            <ShoppingBag /> Spend Coins
          </h3>
          <div className="space-y-4">
             
             {/* Item 1 */}
             <div className="p-4 rounded-xl border flex justify-between items-center group cursor-pointer transition
               bg-white border-gray-200 hover:border-brand-yellow
               dark:bg-[#2c241e] dark:border-white/5 dark:hover:border-brand-yellow">
               <div>
                 <h4 className="font-bold text-sm text-[#221912] dark:text-white">Unlock Profile</h4>
                 <p className="text-xs text-gray-500 dark:text-gray-400">View contact details</p>
               </div>
               <div className="px-3 py-1 rounded text-xs font-bold transition
                 bg-gray-200 text-gray-700 group-hover:bg-brand-yellow group-hover:text-black
                 dark:bg-gray-800 dark:text-gray-300 dark:group-hover:bg-brand-yellow dark:group-hover:text-black">
                 50 CC
               </div>
             </div>
             
             {/* Item 2 */}
             <div className="p-4 rounded-xl border flex justify-between items-center group cursor-pointer transition
               bg-white border-gray-200 hover:border-brand-yellow
               dark:bg-[#2c241e] dark:border-white/5 dark:hover:border-brand-yellow">
               <div>
                 <h4 className="font-bold text-sm text-[#221912] dark:text-white">Highlight Message</h4>
                 <p className="text-xs text-gray-500 dark:text-gray-400">Pin for 1 hour</p>
               </div>
               <div className="px-3 py-1 rounded text-xs font-bold transition
                 bg-gray-200 text-gray-700 group-hover:bg-brand-yellow group-hover:text-black
                 dark:bg-gray-800 dark:text-gray-300 dark:group-hover:bg-brand-yellow dark:group-hover:text-black">
                 100 CC
               </div>
             </div>

             {/* Item 3 (Hard Currency) */}
             <div className="p-4 rounded-xl border flex justify-between items-center group cursor-pointer transition
               bg-brand-yellow/5 border-brand-yellow/30 hover:bg-brand-yellow/10
               dark:bg-brand-yellow/5 dark:border-brand-yellow/20 dark:hover:bg-brand-yellow/10">
               <div>
                 <h4 className="font-bold text-sm text-brand-yellow dark:text-brand-yellow">Project Bidding</h4>
                 <p className="text-xs text-gray-500 dark:text-gray-400">Bid on Premium Leads</p>
               </div>
               <div className="bg-brand-yellow px-3 py-1 rounded text-xs font-bold text-black shadow-sm">1 XC</div>
             </div>

             {/* Item 4 (Hard Currency) */}
             <div className="p-4 rounded-xl border flex justify-between items-center group cursor-pointer transition
               bg-brand-yellow/5 border-brand-yellow/30 hover:bg-brand-yellow/10
               dark:bg-brand-yellow/5 dark:border-brand-yellow/20 dark:hover:bg-brand-yellow/10">
               <div>
                 <h4 className="font-bold text-sm text-brand-yellow dark:text-brand-yellow">Urgent SOS</h4>
                 <p className="text-xs text-gray-500 dark:text-gray-400">Broadcast request</p>
               </div>
               <div className="bg-brand-yellow px-3 py-1 rounded text-xs font-bold text-black shadow-sm">3 XC</div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}