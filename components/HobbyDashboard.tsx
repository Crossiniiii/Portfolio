
import React from 'react';

const HobbyDashboard: React.FC = () => {
  const hobbies = [
    { name: 'Motorbikes', icon: '🏍️', level: 'Lv. 25', desc: 'Exploring the open roads of the Philippines on two wheels.' },
    { name: 'AI', icon: '🤖', level: 'Lv. 32', desc: 'Experimenting with LLMs and neural networks to solve complex logic.' },
    { name: 'Car Photography', icon: '🏎️', level: 'Lv. 18', desc: 'Capturing the raw engineering beauty of automotive designs.' },
    { name: 'Story Driven Games', icon: '🎮', level: 'Lv. 99', desc: 'Deeply immersed in narrative-rich digital worlds and lore.' },
    { name: 'Cooking', icon: '🍳', level: 'Lv. 12', desc: 'Applying engineering precision to the culinary arts.' },
    { name: 'Pets', icon: '🐾', level: 'Lv. 50', desc: 'Dedicated caretaker and companion to my non-human operatives.' },
    { name: 'Open Source', icon: '💾', level: 'Lv. 28', desc: 'Building tools for the community and contributing to the ecosystem.' },
    { name: 'Nature', icon: '🌿', level: 'Lv. 40', desc: 'Recharging my biological sensors in the wild landscapes.' }
  ];

  return (
    <section id="hobbies" className="py-24 px-6 bg-blue-950/20 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-end">
          <div className="h-px flex-1 bg-gradient-to-l from-indigo-500 to-transparent opacity-30" />
          <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white tracking-tighter">
            INVENTORY: <span className="text-indigo-500">INTERESTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, i) => (
            <div 
              key={i} 
              className="group relative bg-gray-900/60 border border-gray-800 p-6 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-gray-900/80"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                  {hobby.icon}
                </div>
                <div className="text-[10px] mono font-bold bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded border border-indigo-500/20">
                  {hobby.level}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                {hobby.name}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {hobby.desc}
              </p>

              {/* Decorative Corner Label */}
              <div className="absolute -bottom-1 -right-1 opacity-10 group-hover:opacity-100 transition-opacity">
                <span className="text-[40px] font-black text-indigo-500 pointer-events-none select-none italic">
                  {i + 1}
                </span>
              </div>
              
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent h-1 w-full animate-[scan_4s_linear_infinite] opacity-0 group-hover:opacity-100 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
      `}</style>
    </section>
  );
};

export default HobbyDashboard;
