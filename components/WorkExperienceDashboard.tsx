
import React from 'react';

interface Experience {
  company: string;
  role: string;
  period: string;
  type: 'INTERNSHIP' | 'FULL-TIME' | 'FREELANCE';
  description: string;
  objectives: string[];
  stack: string[];
}

const WorkExperienceDashboard: React.FC = () => {
  const experiences: Experience[] = [
    {
      company: 'Advanced Infinit Solutions',
      role: 'Software Engineer Intern',
      period: 'Sept 10 - Dec 6',
      type: 'INTERNSHIP',
      description: 'Tactical web development deployment for local tourism infrastructure.',
      objectives: [
        'Redesigned and developed a comprehensive booking website for a camping resort in Bukidnon',
        'Streamlined the reservation flow to improve user conversion and experience',
        'Implemented responsive UI patterns compatible with mobile and desktop explorers'
      ],
      stack: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Tailwind CSS']
    }
  ];

  return (
    <section id="work" className="py-24 px-6 relative z-10 bg-gray-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter italic">
              MISSION_<span className="text-blue-500">REPORTS</span>
            </h2>
            <p className="text-gray-500 mono text-xs uppercase tracking-[0.4em]">Field Experience & Operational History</p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="group relative bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-500 overflow-hidden"
            >
              {/* Tactical ID */}
              <div className="absolute top-0 right-0 p-4 mono text-[10px] text-gray-700 font-bold group-hover:text-blue-500/40 transition-colors">
                REF_ID: 0x{idx}FC2
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-widest uppercase">
                      {exp.type}
                    </span>
                    <span className="text-gray-500 mono text-[10px]">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-blue-500/80 font-bold mono text-sm uppercase">{exp.company}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 text-sm mb-4 italic border-l-2 border-gray-800 pl-4">
                    "{exp.description}"
                  </p>
                  <div className="space-y-3">
                    {exp.objectives.map((obj, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:animate-ping" />
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <span className="text-[10px] mono font-bold text-gray-600 uppercase tracking-widest mb-3 block">Equipped_Tools</span>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map(tool => (
                      <span key={tool} className="px-3 py-1 bg-black/40 border border-gray-800 rounded-full text-xs text-gray-500 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scanning bar effect */}
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}

          {/* Mystery / Locked Quest Slot */}
          <div className="relative group bg-black/40 border-2 border-dashed border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[350px] transition-all duration-500 hover:border-blue-500/50 overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
            
            <div className="relative z-10 flex flex-col items-center gap-6 text-center">
              <div className="w-20 h-20 rounded-full border-4 border-gray-800 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                <span className="text-5xl font-black text-gray-700 group-hover:text-blue-500 animate-bounce group-hover:animate-none">?</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-black text-gray-600 group-hover:text-white transition-colors uppercase tracking-widest">
                  NEW_MISSION_AVAILABLE
                </h3>
                <p className="text-xs text-gray-700 mono group-hover:text-blue-400 transition-colors uppercase">
                  Requirement: Encounter with Innovative Recruiter
                </p>
              </div>

              <div className="px-6 py-2 border border-gray-800 rounded text-[10px] font-black text-gray-700 group-hover:border-blue-500/30 group-hover:text-blue-500 transition-all cursor-default uppercase tracking-[0.2em]">
                Status: Awaiting_Deployment
              </div>
            </div>

            {/* Tactical Grid Background Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceDashboard;
