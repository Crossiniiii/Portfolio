
import React from 'react';

const EducationDashboard: React.FC = () => {
  const milestones = [
    {
      year: '2022 - 2026',
      title: 'B.S. Major in Software Engineering',
      institution: 'iACADEMY',
      status: 'ACTIVE_QUEST',
      color: 'blue',
      achievements: [
        'Specializing in Advanced Software Architecture',
        'Full-Stack Development Focus',
        'Mobile Application Design & Implementation',
        'Software Quality Assurance & Testing'
      ]
    },
    {
      isMini: true,
      year: '2023 - 2024',
      title: 'Certification Mini-Quests',
      platform: 'Professional Buffs Acquired',
      status: 'BUFF_ACQUIRED',
      color: 'cyan',
      skills: [
        'Professional Networking for Career Starters',
        'Cybersecurity Foundations',
        'Cybersecurity Terminology',
        'Learning Spelunk',
        'Learning Eclipse',
        'Wireshark Essential Training',
        'Introduction to Product Security'
      ]
    },
    {
      year: '2021 - 2022',
      title: 'B.S. in Medical Technology',
      institution: 'Remedios Trinidad Romualdez Medical Foundation',
      status: 'QUEST_SIDED',
      color: 'amber',
      achievements: [
        'Clinical Laboratory Science Foundations',
        'Microbiology & Parasitology Research',
        'Clinical Chemistry & Hematology Analysis',
        'Laboratory Safety & Protocol Mastery'
      ]
    },
    {
      year: '2018 - 2020',
      title: 'Senior High School',
      institution: 'Trinity University of Asia',
      status: 'QUEST_COMPLETED',
      color: 'purple',
      achievements: [
        'Robotics Engineering Fundamentals',
        'Science, Technology, Engineering, and Mathematics (STEM)',
        'Academic Excellence Awardee',
        'Early Programming Explorations'
      ]
    }
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'ACTIVE_QUEST':
        return 'text-blue-400 border-blue-500/30 bg-blue-500/5 shadow-[0_0_10px_rgba(59,130,246,0.2)]';
      case 'QUEST_SIDED':
        return 'text-amber-400 border-amber-500/30 bg-amber-500/5 shadow-[0_0_10px_rgba(245,158,11,0.2)]';
      case 'BUFF_ACQUIRED':
        return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5 shadow-[0_0_10px_rgba(34,211,238,0.2)]';
      default:
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5';
    }
  };

  const getNodeColor = (status: string) => {
    switch (status) {
      case 'ACTIVE_QUEST': return 'bg-blue-500 border-blue-500/50';
      case 'QUEST_SIDED': return 'bg-amber-500 border-amber-500/50';
      case 'BUFF_ACQUIRED': return 'bg-cyan-500 border-cyan-500/50';
      default: return 'bg-emerald-500 border-emerald-500/50';
    }
  };

  return (
    <section id="education" className="py-32 px-6 relative z-10 bg-black/40">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col mb-20">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white tracking-tighter">
              QUEST_<span className="text-blue-500">HISTORY</span>
            </h2>
            <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-[10px] font-bold text-blue-400 animate-pulse">
              SYNC_READY
            </div>
          </div>
          <p className="text-gray-500 mono text-xs mt-2 uppercase tracking-[0.3em]">Educational Progression Path // 0xAF23</p>
        </div>

        <div className="relative">
          {/* The Main Glowing Track */}
          <div className="absolute left-[23px] md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-400 via-amber-500 to-emerald-600 opacity-20" />
          
          {/* Moving Pulse Effect */}
          <div className="absolute left-[22px] md:left-1/2 md:-ml-[1.5px] top-0 h-32 w-[3px] bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-[flow_4s_linear_infinite]" />

          <div className="space-y-16 relative">
            {milestones.map((m: any, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Central Node */}
                <div className={`absolute left-0 md:left-1/2 md:-ml-${m.isMini ? '3' : '6'} top-0 md:top-1/2 md:-mt-${m.isMini ? '3' : '6'} ${m.isMini ? 'w-6 h-6' : 'w-12 h-12'} flex items-center justify-center z-20`}>
                  <div className={`absolute inset-0 rounded-${m.isMini ? 'lg' : 'xl'} rotate-45 border-2 ${getNodeColor(m.status)} animate-pulse shadow-[0_0_20px_rgba(0,0,0,0.5)]`} />
                  <div className={`w-${m.isMini ? '1.5' : '3'} h-${m.isMini ? '1.5' : '3'} rounded-sm rotate-45 ${m.status === 'ACTIVE_QUEST' ? 'bg-blue-500 shadow-[0_0_15px_#3b82f6]' : m.status === 'QUEST_SIDED' ? 'bg-amber-500 shadow-[0_0_15px_#f59e0b]' : m.status === 'BUFF_ACQUIRED' ? 'bg-cyan-400 shadow-[0_0_15px_#22d3ee]' : 'bg-emerald-500 shadow-[0_0_15px_#10b981]'} z-10`} />
                </div>

                {/* Content Card */}
                <div className={`${m.isMini ? 'w-full md:w-[40%] opacity-90' : 'w-full md:w-[45%]'} pl-16 md:pl-0 group animate-in fade-in slide-in-from-${idx % 2 === 0 ? 'left' : 'right'}-8 duration-700`} style={{ animationDelay: `${idx * 200}ms` }}>
                  <div className={`bg-gray-900/40 border border-gray-800 p-${m.isMini ? '5' : '8'} rounded-2xl transition-all duration-500 relative overflow-hidden ${m.status === 'QUEST_SIDED' ? 'hover:border-amber-500/30' : m.status === 'BUFF_ACQUIRED' ? 'hover:border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.1)]' : 'hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]'}`}>
                    
                    {/* Background ID text */}
                    {!m.isMini && (
                      <div className="absolute top-2 right-4 text-[40px] font-black text-white/[0.03] select-none pointer-events-none mono">
                        0{idx + 1}
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] mono font-bold uppercase tracking-widest px-2 py-1 rounded ${m.status === 'QUEST_SIDED' ? 'text-amber-500/80 bg-amber-500/5' : m.status === 'BUFF_ACQUIRED' ? 'text-cyan-400/80 bg-cyan-500/5' : 'text-blue-500/80 bg-blue-500/5'}`}>
                        {m.year}
                      </span>
                      <div className={`text-[9px] font-black px-2 py-0.5 rounded border transition-colors ${getStatusStyles(m.status)}`}>
                        {m.status}
                      </div>
                    </div>

                    <h3 className={`${m.isMini ? 'text-lg' : 'text-xl md:text-2xl'} font-black text-white transition-colors uppercase tracking-tighter leading-tight ${m.status === 'QUEST_SIDED' ? 'group-hover:text-amber-400' : m.status === 'BUFF_ACQUIRED' ? 'group-hover:text-cyan-400' : 'group-hover:text-blue-400'}`}>
                      {m.title}
                    </h3>
                    <p className={`${m.status === 'ACTIVE_QUEST' ? 'text-blue-400' : m.status === 'QUEST_SIDED' ? 'text-amber-400' : m.status === 'BUFF_ACQUIRED' ? 'text-cyan-400' : 'text-emerald-400'} font-bold mb-4 text-sm`}>
                      {m.institution || m.platform}
                    </p>

                    <div className={`grid ${m.isMini ? 'grid-cols-1' : 'grid-cols-1'} gap-2`}>
                      {(m.achievements || m.skills).map((ach: string, i: number) => (
                        <div key={i} className={`flex items-center gap-3 ${m.isMini ? 'text-[10px]' : 'text-xs'} text-gray-500 bg-black/40 p-${m.isMini ? '2' : '3'} rounded-xl border border-gray-800/50 hover:bg-gray-800/50 transition-colors`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${m.status === 'ACTIVE_QUEST' ? 'bg-blue-500' : m.status === 'QUEST_SIDED' ? 'bg-amber-500' : m.status === 'BUFF_ACQUIRED' ? 'bg-cyan-400' : 'bg-emerald-500'}`} />
                          <span className="truncate">{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Scanning corner effect */}
                    <div className={`absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r ${m.status === 'QUEST_SIDED' ? 'from-amber-500' : m.status === 'BUFF_ACQUIRED' ? 'from-cyan-400' : 'from-blue-500'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                </div>

                {/* Empty spacer for MD desktop layout */}
                <div className={`hidden md:block ${m.isMini ? 'w-[40%]' : 'w-[45%]'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes flow {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(1000%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default EducationDashboard;
