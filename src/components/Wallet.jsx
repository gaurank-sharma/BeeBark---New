import React, { useState } from 'react';
import { RefreshCw, Zap, Lock, Award, TrendingUp, ShoppingBag, ArrowRight } from 'lucide-react';

const CoinCard = ({ symbol, name, amount, subtext, isHard }) => (
  <div className={`relative p-6 rounded-2xl border ${isHard ? 'bg-brand-yellow/10 border-brand-yellow/50' : 'bg-brand-card border-white/5'}`}>
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className={`text-sm font-bold mb-1 ${isHard ? 'text-brand-yellow' : 'text-brand-muted'}`}>{name}</p>
        <h2 className="text-4xl font-extrabold text-white">{amount}</h2>
        <p className="text-xs opacity-60 mt-1">{subtext}</p>
      </div>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${isHard ? 'bg-brand-yellow text-black shadow-[0_0_15px_rgba(253,224,71,0.5)]' : 'bg-gray-700 text-gray-300'}`}>
        {symbol}
      </div>
    </div>
    {isHard && <button className="w-full bg-brand-yellow text-black font-bold py-2 rounded-lg text-sm hover:opacity-90">Redeem Rewards</button>}
    {!isHard && <button className="w-full bg-white/10 text-white font-bold py-2 rounded-lg text-sm hover:bg-white/20">View History</button>}
  </div>
);

const EarningRow = ({ action, reward, proReward, note }) => (
  <div className="grid grid-cols-12 gap-4 py-4 border-b border-white/5 items-center hover:bg-white/5 transition px-2 rounded-lg">
    <div className="col-span-4 text-sm font-bold text-white">{action}</div>
    <div className="col-span-2 text-sm text-brand-muted">{reward}</div>
    <div className="col-span-2 text-sm text-brand-yellow font-bold flex items-center gap-1">
      {proReward} <Zap size={12} />
    </div>
    <div className="col-span-4 text-xs text-brand-muted">{note}</div>
  </div>
);

export default function WalletPage() {
  const [exchangeAmount, setExchangeAmount] = useState(100);

  return (
    <div className="max-w-6xl mx-auto pb-20">
      
      {/* 1. HEADER & EXCHANGE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <CoinCard symbol="CC" name="Connection Coins" amount="2,450" subtext="Soft Currency (Activity)" isHard={false} />
        
        {/* Exchange Center */}
        <div className="bg-brand-card border border-white/5 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10"><RefreshCw size={100} /></div>
          <h3 className="font-bold text-white mb-6 relative z-10">Currency Exchange</h3>
          
          <div className="flex items-center justify-between bg-black/40 rounded-xl p-4 mb-4 border border-white/5">
            <div className="text-left">
              <span className="text-xs text-brand-muted block mb-1">Convert</span>
              <input 
                type="number" 
                value={exchangeAmount}
                onChange={(e) => setExchangeAmount(e.target.value)}
                className="bg-transparent text-2xl font-bold text-white w-24 outline-none" 
              />
              <span className="text-xs font-bold text-gray-400">CC</span>
            </div>
            <ArrowRight className="text-brand-muted" />
            <div className="text-right">
              <span className="text-xs text-brand-muted block mb-1">Receive</span>
              <span className="text-2xl font-bold text-brand-yellow">{Math.floor(exchangeAmount / 100)}</span>
              <span className="text-xs font-bold text-brand-yellow block">XC</span>
            </div>
          </div>
          
          <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition relative z-10">
            Convert Coins
          </button>
          <p className="text-xs text-center mt-3 text-brand-muted">Rate: 100 CC = 1 XC</p>
        </div>

        <CoinCard symbol="XC" name="Collab Coins" amount="12" subtext="Hard Currency (Value)" isHard={true} />
      </div>

      {/* 2. THE PRO ADVANTAGE (Visualizing 2.4) */}
      <div className="bg-gradient-to-r from-brand-yellow to-yellow-600 rounded-3xl p-8 mb-12 text-black relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="bg-black text-brand-yellow px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Pro Advantage</span>
            <h2 className="text-4xl font-extrabold mb-4">Hoard Value. Earn Faster.</h2>
            <p className="font-medium opacity-80 mb-6 text-lg">Pro users generate Collab Coins 5x-10x faster by bypassing the exchange grind.</p>
            <div className="flex gap-4">
               <button className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition">Upgrade to Pro</button>
               <button className="bg-white/20 text-black border border-black/10 px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition">Read Strategy</button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white/90 p-4 rounded-xl shadow-lg">
               <Lock className="mb-2 opacity-50" size={24} />
               <h4 className="font-bold text-lg">Free Unlocks</h4>
               <p className="text-xs opacity-70 leading-tight">No CC tax on viewing profiles. Save your coins.</p>
             </div>
             <div className="bg-white/90 p-4 rounded-xl shadow-lg">
               <TrendingUp className="mb-2 opacity-50" size={24} />
               <h4 className="font-bold text-lg">2x Speed</h4>
               <p className="text-xs opacity-70 leading-tight">Double earnings on every like and comment.</p>
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
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><TrendingUp /> Earning Strategy</h3>
          <div className="bg-brand-card rounded-2xl p-6 border border-white/5">
            <div className="grid grid-cols-12 gap-4 text-xs font-bold text-brand-muted uppercase tracking-wider mb-4 px-2">
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
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><ShoppingBag /> Spend Coins</h3>
          <div className="space-y-4">
             {/* Item 1 */}
             <div className="bg-brand-card p-4 rounded-xl border border-white/5 flex justify-between items-center group cursor-pointer hover:border-brand-yellow transition">
               <div>
                 <h4 className="font-bold text-white text-sm">Unlock Profile</h4>
                 <p className="text-xs text-brand-muted">View contact details</p>
               </div>
               <div className="bg-gray-800 px-3 py-1 rounded text-xs font-bold text-gray-300 group-hover:bg-brand-yellow group-hover:text-black transition">50 CC</div>
             </div>
             
             {/* Item 2 */}
             <div className="bg-brand-card p-4 rounded-xl border border-white/5 flex justify-between items-center group cursor-pointer hover:border-brand-yellow transition">
               <div>
                 <h4 className="font-bold text-white text-sm">Highlight Message</h4>
                 <p className="text-xs text-brand-muted">Pin for 1 hour</p>
               </div>
               <div className="bg-gray-800 px-3 py-1 rounded text-xs font-bold text-gray-300 group-hover:bg-brand-yellow group-hover:text-black transition">100 CC</div>
             </div>

             {/* Item 3 (Hard Currency) */}
             <div className="bg-brand-card p-4 rounded-xl border border-brand-yellow/20 flex justify-between items-center group cursor-pointer hover:bg-brand-yellow/10 transition">
               <div>
                 <h4 className="font-bold text-brand-yellow text-sm">Project Bidding</h4>
                 <p className="text-xs text-brand-muted">Bid on Premium Leads</p>
               </div>
               <div className="bg-brand-yellow px-3 py-1 rounded text-xs font-bold text-black">1 XC</div>
             </div>

             {/* Item 4 (Hard Currency) */}
             <div className="bg-brand-card p-4 rounded-xl border border-brand-yellow/20 flex justify-between items-center group cursor-pointer hover:bg-brand-yellow/10 transition">
               <div>
                 <h4 className="font-bold text-brand-yellow text-sm">Urgent SOS</h4>
                 <p className="text-xs text-brand-muted">Broadcast request</p>
               </div>
               <div className="bg-brand-yellow px-3 py-1 rounded text-xs font-bold text-black">3 XC</div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}