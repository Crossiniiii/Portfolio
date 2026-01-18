
import React from 'react';
import { SKILLS } from '../constants';

const SkillsHexagon: React.FC = () => {
  const lockedSlots = [
    { tier: 'Legendary', id: 1 },
    { tier: 'Epic', id: 2 },
    { tier: 'Mythic', id: 3 },
    { tier: 'God-Tier', id: 4 }
  ];

  const totalXP = SKILLS.reduce((acc, curr) => acc + curr.level, 0);

  return (
    <div className="relative">
      <div className="flex justify-between items-end mb-8 px-4">
        <div className="space-y-1">
          <span className="text-[10px] mono font-black text-blue-500 uppercase tracking-widest">Global_Proficiency_Rating</span>
          <div className="text-3xl font-black italic text-white">XP: {totalXP} <span className="text-sm text-gray-600 font-normal">/ {SKILLS.length * 100 + 400}</span></div>
        </div>
        <div className="hidden md:block text-right">
          <span className="text-[10px] mono font-black text-emerald-500 uppercase tracking-widest animate-pulse">● CORE_SYSTEM_STABLE</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto py-4 relative z-10">
        {SKILLS.map((skill, index) => (
          <div 
            key={skill.name}
            className="relative group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 animate-in fade-in zoom-in"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
          >
            <div className="flex justify-between items-end mb-2">
              <span className="font-bold text-lg uppercase tracking-tighter">{skill.name}</span>
              <span className="text-blue-500 text-xs mono font-black">{skill.level}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-700/30 rounded-full overflow-hidden border border-white/5">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <div className="absolute inset-0 bg-blue-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            
            <div className="mt-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`h-1 flex-1 rounded-sm ${i < (skill.level/20) ? 'bg-blue-500/40' : 'bg-gray-800'}`} />
              ))}
            </div>
          </div>
        ))}

        {lockedSlots.map((slot, i) => (
          <div 
            key={`locked-${slot.id}`}
            className="relative group p-6 bg-black/40 border border-dashed border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-500 flex flex-col items-center justify-center min-h-[140px] overflow-hidden animate-in fade-in zoom-in"
            style={{ 
              animationDelay: `${(SKILLS.length + i) * 150}ms`,
              animationFillMode: 'both' 
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent opacity-50 group-hover:animate-pulse" />
            
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="text-3xl font-black text-gray-700 group-hover:text-blue-500 transition-colors animate-bounce">
                ?
              </div>
              <div className="px-2 py-0.5 bg-gray-800/50 text-[8px] font-black text-gray-600 rounded uppercase tracking-widest group-hover:bg-blue-900 group-hover:text-blue-200 transition-all">
                Locked_Slot
              </div>
            </div>

            <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
              <span className="text-[10px] mono font-bold text-blue-400 text-center px-4 leading-tight uppercase tracking-tighter mb-1">
                Insufficient XP
              </span>
              <span className="text-[8px] text-gray-500 uppercase font-black">
                Unlock {slot.tier} Skill
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsHexagon;
