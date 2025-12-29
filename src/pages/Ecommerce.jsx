import React, { useState } from 'react';
import { Search, ShoppingCart, Filter, Star, Heart, CheckCircle, Zap } from 'lucide-react';

// --- Product Data with High CC Rewards ---
const products = [
  { 
    id: 1, 
    name: "UltraTech Cement (50kg)", 
    category: "Raw Materials", 
    price: 420, 
    rating: 4.8, 
    reviews: 120, 
    vendor: "Sharma Traders", 
    image: "https://5.imimg.com/data5/LU/KD/MY-53176023/ultratech-cement.jpg",
    ccReward: 15 // Reward for buying
  },
  { 
    id: 2, 
    name: "Bosch Professional Drill", 
    category: "Tools", 
    price: 4500, 
    rating: 4.9, 
    reviews: 85, 
    vendor: "Tool World", 
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=500&q=80",
    ccReward: 150 // High reward for expensive tool
  },
  { 
    id: 3, 
    name: "Safety Helmet (Yellow)", 
    category: "Safety Gear", 
    price: 250, 
    rating: 4.5, 
    reviews: 200, 
    vendor: "SafeBuild", 
    image: "https://m.media-amazon.com/images/I/51M9AqXi45L.jpg",
    ccReward: 10
  },
  { 
    id: 4, 
    name: "Steel Rebar (TMT Bars)", 
    category: "Raw Materials", 
    price: 58000, 
    unit: "ton", 
    rating: 4.7, 
    reviews: 45, 
    vendor: "Jindal Steel", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpmRpm8RSTXmzxXW9ZGsMngaWrZ8yBeuFHQ&s",
    ccReward: 1000 // Massive reward for bulk purchase
  },
  { 
    id: 5, 
    name: "Red Bricks (Class 1)", 
    category: "Raw Materials", 
    price: 8, 
    unit: "pc", 
    rating: 4.2, 
    reviews: 310, 
    vendor: "RK Kiln", 
    image: "https://ssvconstructions.in/wp-content/uploads/2024/09/bricks1.jpg",
    ccReward: 2 // Per piece (stackable)
  },
  { 
    id: 6, 
    name: "Measuring Tape 50m", 
    category: "Tools", 
    price: 850, 
    rating: 4.6, 
    reviews: 90, 
    vendor: "BuildEquip", 
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=500&q=80",
    ccReward: 30
  },
];

const categories = ["All", "Raw Materials", "Tools", "Safety Gear", "Electrical", "Plumbing", "Finishing"];

const Ecommerce = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [userBalance, setUserBalance] = useState(2450); // Simulating User Wallet

  // Simulate Add to Cart / Buy
  const handleAddToCart = (reward, itemName) => {
    setUserBalance(prev => prev + reward);
    alert(`Added ${itemName} to cart! Earned +${reward} CC.`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto pb-20">
      
      {/* --- 1. WALLET STRIP (Sticky Top) --- */}
      <div className="sticky top-0 z-20 bg-white/80 dark:bg-[#221912]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5 py-3 px-4 mb-6 flex justify-between items-center rounded-b-xl shadow-sm">
        <h1 className="text-lg font-bold text-[#221912] dark:text-white hidden md:block">BeeBark Store</h1>
        
        <div className="flex items-center gap-3 ml-auto">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Your Balance:</span>
          <div className="flex items-center gap-2 bg-black text-brand-yellow px-3 py-1.5 rounded-full shadow-lg border border-brand-yellow/20">
            <Zap size={16} fill="currentColor" />
            <span className="font-bold text-sm">{userBalance} CC</span>
          </div>
        </div>
      </div>

      {/* --- 2. HEADER & SEARCH --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#221912] dark:text-white">Construction Materials</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Buying earns 10x more coins than social actions</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative flex-1 md:w-64">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2c241e] text-sm focus:ring-2 focus:ring-brand-yellow/50 outline-none transition"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <button className="p-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2c241e] hover:bg-gray-50 dark:hover:bg-white/5 transition">
            <Filter size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-2.5 rounded-xl bg-[#221912] text-white hover:bg-black transition relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center font-bold">2</span>
          </button>
        </div>
      </div>

      {/* --- 3. CATEGORIES STRIP --- */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border
              ${activeCategory === cat 
                ? 'bg-brand-yellow text-black border-brand-yellow shadow-md' 
                : 'bg-white dark:bg-[#2c241e] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-brand-yellow'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- 4. PRODUCT GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group bg-white dark:bg-[#2c241e] rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden hover:shadow-xl transition-all duration-300">
            
            {/* Image Area */}
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-400 hover:text-red-500 transition">
                <Heart size={16} />
              </button>
              
              {/* Coin Badge on Image (Optional) */}
              <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-brand-yellow text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                 <Zap size={10} fill="currentColor" /> +{product.ccReward} CC
              </div>

              {product.category === "Tools" && (
                <span className="absolute top-3 left-3 bg-brand-yellow text-black text-[10px] font-bold px-2 py-1 rounded">
                  BESTSELLER
                </span>
              )}
            </div>

            {/* Content Area */}
            <div className="p-4">
              {/* Vendor Info */}
              <div className="flex items-center gap-1 mb-2 text-xs text-gray-500 dark:text-gray-400">
                <span className="font-medium">{product.vendor}</span>
                <CheckCircle size={12} className="text-blue-500" fill="currentColor" />
              </div>

              <h3 className="font-bold text-[#221912] dark:text-gray-100 mb-1 line-clamp-1">{product.name}</h3>
              
              <div className="flex items-center gap-1 mb-3">
                <Star size={14} className="text-brand-yellow fill-brand-yellow" />
                <span className="text-xs font-bold">{product.rating}</span>
                <span className="text-xs text-gray-400">({product.reviews})</span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-lg font-bold text-[#221912] dark:text-white">₹{product.price}</span>
                  {product.unit && <span className="text-xs text-gray-500"> / {product.unit}</span>}
                </div>
                
                {/* BUY BUTTON WITH COINS */}
                <button 
                  onClick={() => handleAddToCart(product.ccReward, product.name)}
                  className="px-4 py-2 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-sm
                  bg-[#221912] text-white hover:bg-black
                  dark:bg-white dark:text-[#221912] dark:hover:bg-gray-200"
                >
                  <span>Add +</span>
                  {/* Coin Badge: Light=Transparent, Dark=DarkBackground to contrast with white button */}
                  <span className="bg-brand-yellow/20 text-brand-yellow px-1.5 py-0.5 rounded text-[10px] flex items-center gap-0.5
                    dark:bg-[#221912] dark:text-brand-yellow">
                    <Zap size={10} fill="currentColor" /> {product.ccReward}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Ecommerce;