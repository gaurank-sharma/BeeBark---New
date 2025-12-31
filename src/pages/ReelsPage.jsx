import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, MessageCircle, Share2, MoreHorizontal, MapPin, 
  ShoppingBag, Hammer, Volume2, VolumeX 
} from 'lucide-react';

const reelsData = [
  {
    id: 1,
    user: "CivilEng_Amit",
    avatar: "https://i.pravatar.cc/150?img=12",
    description: "Pouring the foundation slab for the new Sector 62 complex! Check out the finish. 🏗️ #Concrete #Construction",
    videoBg: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    likes: "12.5k",
    comments: 450,
    isHirable: true,
    materials: [{ name: "UltraTech Cement", price: "₹420" }],
    project: "Noida Commercial Hub"
  },
  {
    id: 2,
    user: "DesignStudio_X",
    avatar: "https://i.pravatar.cc/150?img=32",
    description: "3D Walkthrough of the new Villa project in Jaipur. SketchUp + Lumion rendering. 🎨 #Architecture #Design",
    videoBg: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
    likes: "8.2k",
    comments: 210,
    isHirable: true,
    materials: [],
    project: "Jaipur Villa 2025"
  },
  {
    id: 3,
    user: "HeavyMachinery_Co",
    avatar: "https://i.pravatar.cc/150?img=5",
    description: "Testing the hydraulics on the new JCB 3DX. Available for rent next week! 🚜 #HeavyEquipment",
    videoBg: "https://images.tractorjunction.com/Infrajunction-prod/small_jcb_3dx_backhoe_loader1686911730_2b5e36e8a3.jpg?format=webp&quality=40",
    likes: "30k",
    comments: 890,
    isHirable: false,
    materials: [{ name: "JCB 3DX Rental", price: "₹12k/day" }],
    project: "Equipment Showcase"
  },
  {
    id: 4,
    user: "SolarTech_India",
    avatar: "https://i.pravatar.cc/150?img=8",
    description: "Installing 50kW Solar Panels on a factory roof. Clean energy for the win! ☀️ #Solar #GreenEnergy",
    videoBg: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    likes: "5.4k",
    comments: 120,
    isHirable: true,
    materials: [{ name: "Solar Panels", price: "₹8k/unit" }],
    project: "Industrial Park"
  }
];

const ReelsPage = () => {
  const [activeReelId, setActiveReelId] = useState(reelsData[0].id);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef(null);

  // Auto-detect which reel is visible to update background
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveReelId(Number(entry.target.dataset.id));
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of reel is visible
    );

    const elements = document.querySelectorAll('.reel-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Find active reel data for the background effect
  const activeReel = reelsData.find(r => r.id === activeReelId) || reelsData[0];

  return (
    <div className="flex justify-center bg-black h-[calc(100vh-64px)] overflow-hidden relative group">
      
      {/* --- DESKTOP: Dynamic Ambient Background --- */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 blur-3xl scale-110 transition-all duration-700 hidden md:block"
        style={{ backgroundImage: `url(${activeReel.videoBg})` }}
      ></div>

      {/* --- SCROLLABLE REEL CONTAINER --- */}
      <div 
        ref={containerRef}
        className="relative w-full md:w-[450px] h-full bg-[#1a1a1a] shadow-2xl md:rounded-xl md:my-4 md:h-[95%] border-gray-800 md:border overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
      >
        
        {reelsData.map((reel) => (
          <div 
            key={reel.id} 
            data-id={reel.id}
            className="reel-item relative w-full h-full snap-start snap-always shrink-0"
          >
            
            {/* 1. Video/Image Layer */}
            <div className="absolute inset-0 bg-gray-900">
              <img 
                src={reel.videoBg} 
                className="w-full h-full object-cover opacity-90"
                alt="Reel content"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90"></div>
            </div>

            {/* 2. Top Controls (Per Reel) */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-20 mt-14 md:mt-0">
              <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 flex items-center gap-1">
                 <MapPin size={10} className="text-brand-yellow" /> {reel.project}
              </div>
              <button onClick={() => setIsMuted(!isMuted)} className="p-2 bg-black/40 rounded-full text-white backdrop-blur-md hover:bg-white/20">
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>

            {/* 3. Right Sidebar (Interactions) */}
            <div className="absolute right-2 bottom-24 flex flex-col gap-5 items-center z-20">
              <div className="flex flex-col items-center gap-1">
                <button className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:text-red-500 transition hover:scale-110 active:scale-95 group">
                  <Heart size={28} className="group-hover:fill-red-500 transition-colors" />
                </button>
                <span className="text-xs font-bold text-white shadow-sm">{reel.likes}</span>
              </div>
              
              <div className="flex flex-col items-center gap-1">
                <button className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:text-blue-400 transition hover:scale-110 active:scale-95">
                  <MessageCircle size={28} />
                </button>
                <span className="text-xs font-bold text-white shadow-sm">{reel.comments}</span>
              </div>

              <button className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:text-green-400 transition hover:scale-110 active:scale-95">
                <Share2 size={28} />
              </button>

              <button className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition mt-2">
                <MoreHorizontal size={24} />
              </button>
            </div>

            {/* 4. Bottom Info Area */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10 pt-20">
              
              {/* User Info */}
              <div className="flex items-center gap-3 mb-3">
                <img src={reel.avatar} className="w-10 h-10 rounded-full border-2 border-white" alt={reel.user} />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-bold text-sm shadow-sm">{reel.user}</h3>
                    <button className="text-[10px] font-bold bg-white text-black px-2 py-0.5 rounded-full hover:bg-brand-yellow transition">
                      Follow
                    </button>
                  </div>
                  {reel.isHirable && (
                     <span className="text-[10px] text-green-400 font-bold flex items-center gap-1">
                       <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> Available for Hire
                     </span>
                  )}
                </div>
              </div>

              {/* Caption */}
              <p className="text-white text-sm leading-relaxed mb-4 line-clamp-2 pr-12">
                {reel.description}
              </p>

              {/* Action Tags */}
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {reel.isHirable && (
                  <button className="flex items-center gap-2 bg-[#221912] border border-brand-yellow/50 text-brand-yellow px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap hover:bg-brand-yellow hover:text-black transition">
                    <Hammer size={12} /> Hire Pro
                  </button>
                )}

                {reel.materials.map((mat, idx) => (
                  <button key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap hover:bg-white hover:text-black transition">
                    <ShoppingBag size={12} /> {mat.name} <span className="opacity-60">| {mat.price}</span>
                  </button>
                ))}
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default ReelsPage;