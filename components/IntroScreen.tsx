
import React, { useState, useEffect } from 'react';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLaunch = () => {
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onComplete, 800);
            return 100;
          }
          return prev + 4;
        });
      }, 40);
      return () => clearInterval(interval);
    }
  }, [loading, onComplete]);

  const stats = [
    { label: 'IDENTITY_REF', value: 'WILL BADILLO', color: 'text-blue-500' },
    { label: 'ROLE_CLASS', value: 'CS_STUDENT', color: 'text-emerald-500' },
    { label: 'REGION_LOC', value: 'PHILIPPINES 🇵🇭', color: 'text-amber-500' },
    { label: 'INTEL_LEVEL', value: 'ACTIVE_QUEST', color: 'text-red-500' },
  ];

  return (
    <div className={`fixed inset-0 z-[100] bg-[#030712] flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden transition-all duration-700 ${loading && progress > 90 ? 'scale-150 opacity-0' : ''}`}>
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      
      <div className="absolute top-0 left-0 right-0 p-4 border-b border-blue-500/20 flex justify-between items-center mono text-[10px] text-blue-500/60 uppercase tracking-widest">
        <div className="flex gap-4">
          <span>ID_BLOCK: 0xWILL_B</span>
          <span className="hidden sm:inline">LOC: SE_ASIA_PH</span>
        </div>
        <div className="flex gap-4 italic font-bold">
          <span>{currentTime}</span>
          <span className="text-emerald-500 animate-pulse">● SIGNAL_STRONG</span>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="relative mb-6 group">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10 p-2 border-2 border-blue-500/30 rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}profile-photo.jpg?v=1`}
                alt="Will Badillo"
                className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-xl filter contrast-125 brightness-90 group-hover:brightness-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent h-1/2 w-full animate-[scan_3s_linear_infinite] pointer-events-none" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-md uppercase shadow-lg">
              Identity Verified
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic mb-2 uppercase">
            <span className="glitch-text block">WILL BADILLO_</span>
            <span className="text-blue-500 text-2xl md:text-3xl">OPERATIVE_CS</span>
          </h1>
          <p className="text-gray-500 mono text-xs md:text-sm tracking-tighter uppercase opacity-80 mt-2">
            Protocol: Transforming complex logic into digital reality. 📡
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4 w-full">
          {stats.map((stat, i) => (
            <div key={i} className="bg-gray-900/40 border border-gray-800 p-4 rounded-xl flex flex-col justify-between hover:border-blue-500/50 transition-colors group">
              <span className="text-[10px] text-gray-500 mono font-bold group-hover:text-blue-400 transition-colors">{stat.label}</span>
              <span className={`text-xl md:text-2xl font-black ${stat.color} tracking-tight`}>{stat.value}</span>
            </div>
          ))}

          <div className="col-span-2 mt-4 space-y-6">
            {!loading ? (
              <button 
                onClick={handleLaunch}
                className="w-full group relative py-6 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.3em] overflow-hidden transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)] active:scale-[0.98] rounded-xl"
              >
                <span className="relative z-10 text-lg">ACCESS PORTFOLIO 🔑</span>
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform skew-x-12" />
              </button>
            ) : (
              <div className="space-y-3">
                <div className="w-full h-3 bg-gray-900 border border-gray-800 rounded-full overflow-hidden p-0.5">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-75 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between mono text-[10px] text-blue-500 font-bold uppercase tracking-widest">
                  <span className="animate-pulse">Loading_Will_Badillo_Assets...</span>
                  <span>{progress}%</span>
                </div>
              </div>
            )}
            
            <div className="p-4 border border-blue-500/20 bg-blue-500/5 rounded-lg">
              <p className="mono text-[10px] text-blue-400 leading-tight">
                {'>'} CONTACT_UPLINK: willuworkx@gmail.com | 09770621676 | Manila, PH <br/>
                {'>'} IDENTITY_VERIFIED: Student Explorer, ready for new challenges. ✨
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center opacity-20 mono text-[10px] uppercase tracking-[0.5em]">
        Identity Decrypted | System Ready
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
