
import React, { useState, useEffect } from 'react';
import EditableText from './EditableText';

type Tab = 'bio' | 'equipment' | 'log';

const ProfileSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('bio');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  
  const [profileData, setProfileData] = useState({
    missionTitle: "OPERATIVE_INTEL",
    bioP1: "I'm Will Badillo, a Computer Science student based in the Philippines. I view the tech industry not as a ladder to climb, but as a vast wilderness to explore. Every line of code is a footprint on an uncharted map.",
    bioP2: "Focusing on software engineering, I specialize in building robust enterprise solutions and AI-integrated systems. My mission is to merge security, performance, and accessibility into every digital artifact I build.",
    profileImageUrl: "/profile-photo.jpg"
  });

  const updateProfile = (key: keyof typeof profileData, val: string) => {
    setProfileData(prev => ({ ...prev, [key]: val }));
  };

  const logs = [
    "> sudo connect --user 'Will_Badillo'",
    "> status: scouting_territory... [PH_RESOURCES] 🔭",
    "> email: willuworkx@gmail.com",
    "> uplink: +63 977 062 1676",
    "> location: Manila, Philippines",
    "> status: actively_curious 🌱",
    "> progress: [####--------] 33% Mastered"
  ];

  useEffect(() => {
    if (activeTab === 'log' && terminalLines.length === 0) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < logs.length) {
          setTerminalLines(prev => [...prev, logs[i]]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 400);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  const stats = [
    { label: 'CONTACT_UPLINK', value: 'willuworkx@gmail.com' },
    { label: 'COMMS_LINE', value: '09770621676' },
    { label: 'SECTOR_LOC', value: 'PH 🇵🇭' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'bio':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-end gap-4">
               <h3 className="text-3xl font-black text-blue-400 uppercase tracking-tighter">
                <EditableText value={profileData.missionTitle} onChange={(val) => updateProfile('missionTitle', val)} />
              </h3>
              <div className="text-emerald-500 mono text-xs mb-1 animate-pulse">[ IDENTITY_VERIFIED ]</div>
            </div>
            
            <div className="text-gray-400 text-lg leading-relaxed">
              <EditableText multiline value={profileData.bioP1} onChange={(val) => updateProfile('bioP1', val)} />
            </div>
            <div className="text-gray-400 text-lg leading-relaxed">
              <EditableText multiline value={profileData.bioP2} onChange={(val) => updateProfile('bioP2', val)} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="group/stat p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500/30 transition-all">
                  <div className="text-xs font-black text-blue-500 mono mb-1 opacity-60 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-sm font-bold text-white group-hover/stat:text-blue-400 transition-colors truncate">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'equipment':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {[
              { category: 'PRIMARY', gear: 'TypeScript / React', desc: 'Main navigation tools' },
              { category: 'POWER', gear: 'Java / Laravel', desc: 'Heavy lifting machinery' },
              { category: 'SIGHT', gear: 'Python / AI', desc: 'Vision and scanning' },
              { category: 'NETWORK', gear: 'Cisco / VLANs', desc: 'Secure infrastructure' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 border border-gray-800 rounded-xl bg-gray-900/30 group hover:border-blue-500/50 transition-colors">
                <span className="text-[10px] text-blue-500 mono font-black">{item.category}</span>
                <h4 className="text-lg font-bold text-white mb-1">{item.gear}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        );
      case 'log':
        return (
          <div className="bg-black rounded-xl border border-gray-800 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-gray-800">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
              <span className="ml-2 text-[10px] text-gray-500 font-mono italic">expedition_log.sh</span>
            </div>
            <div className="p-6 font-mono text-xs md:text-sm min-h-[220px] space-y-1">
              {terminalLines.map((line, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="text-blue-500">➜</span>
                  <span className="text-gray-300">{line}</span>
                </div>
              ))}
              <div className="flex gap-2">
                <span className="text-blue-500">➜</span>
                <span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="about" className="py-24 px-6 relative z-10 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">OPERATIVE_FILE: WILL_B</h2>
            <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-[10px] font-bold text-blue-400 animate-pulse">
              STATUS: PHILIPPINES_ORIGIN
            </div>
          </div>
          
          <div className="flex bg-gray-900/80 p-1 rounded-xl border border-gray-800 backdrop-blur-sm self-center md:self-auto">
            {(['bio', 'equipment', 'log'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === tab 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                  : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-2 border border-blue-500/20 rounded-2xl pointer-events-none group-hover:border-blue-500/40 transition-colors" />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/60 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/60 rounded-br-xl" />
              
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-gray-900 border border-gray-800 shadow-2xl">
                <img 
                  src={`${import.meta.env.BASE_URL}profile-photo.jpg?v=1`} 
                  alt="Will Badillo operative photo" 
                  className="w-full h-full object-cover group-hover:contrast-125 group-hover:brightness-110 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent h-1/4 w-full animate-[scan_3s_linear_infinite] pointer-events-none" />
                
                <div className="absolute top-4 left-4 flex flex-col gap-1">
                  <div className="text-[8px] mono font-bold text-blue-400 bg-black/60 px-2 py-0.5 rounded border border-blue-500/20 uppercase tracking-widest">
                    TARGET_LOCKED
                  </div>
                  <div className="text-[8px] mono font-bold text-emerald-400 bg-black/60 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-widest">
                    BIO_SYNC: 98%
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1">
                  <div className="text-[8px] mono font-bold text-gray-400 bg-black/40 px-2 py-0.5 rounded uppercase">
                    LOC: 14.5995° N
                  </div>
                </div>

                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                   <div className="border-2 border-blue-400 p-4 rotate-[-15deg] animate-pulse">
                      <span className="text-2xl font-black text-blue-400 uppercase tracking-tighter">AUTHORIZED</span>
                   </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center px-2">
                <span className="text-[10px] mono text-gray-500 font-bold uppercase tracking-[0.2em]">VISUAL_INTEL_01</span>
                <span className="text-[10px] mono text-blue-500 font-bold animate-pulse">● LIVE_FEED</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative h-full bg-gray-900/20 border border-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden shadow-inner">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[80px] -z-10" />
              
              {renderTabContent()}
              
              <div className="mt-12 flex items-center justify-between opacity-30 mono text-[10px] uppercase border-t border-gray-800 pt-6">
                <span>Operative_ID: BADILLO_W</span>
                <span>Uplink: STABLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
      `}</style>
    </section>
  );
};

export default ProfileSection;
