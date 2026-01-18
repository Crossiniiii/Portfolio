
import React, { useState } from 'react';
import { Project } from '../types';
import { askGemini } from '../services/geminiService';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [briefing, setBriefing] = useState<string | null>(null);
  const [isLoadingBrief, setIsLoadingBrief] = useState(false);

  const handleGetBriefing = async () => {
    if (briefing || isLoadingBrief) return;
    setIsLoadingBrief(true);
    const prompt = `Act as a high-tech military AI. Give a 1-sentence "tactical briefing" summary for this software project: ${project.title} - ${project.description}. Keep it under 20 words and use cool tech jargon.`;
    const response = await askGemini(prompt);
    setBriefing(response);
    setIsLoadingBrief(false);
  };

  const MysteryButton = ({ label }: { label: string }) => (
    <div className="relative group/btn cursor-help">
      <div className="w-10 h-10 rounded-lg border border-blue-500/30 bg-blue-500/5 flex items-center justify-center text-blue-500 font-black transition-all group-hover/btn:border-blue-400 group-hover/btn:bg-blue-500/20 group-hover/btn:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        ?
      </div>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 bg-black border border-blue-500/50 rounded text-[9px] font-black text-blue-400 whitespace-nowrap uppercase tracking-widest opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-20">
        <span className="animate-pulse">[ {label}_LOCKED ]</span>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black border-b border-r border-blue-500/50 rotate-45" />
      </div>
    </div>
  );

  return (
    <div 
      className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
        
        <button 
          onClick={handleGetBriefing}
          className="absolute top-4 right-4 z-20 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/40 p-2 rounded-lg backdrop-blur-md transition-all group/brief"
        >
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-black text-blue-400 uppercase tracking-tighter">
              {isLoadingBrief ? 'ANALYZING...' : briefing ? 'BRIEF_COMPLETE' : 'AI_BRIEF'}
            </span>
            <div className={`w-2 h-2 rounded-full ${isLoadingBrief ? 'bg-blue-400 animate-ping' : 'bg-blue-600'}`} />
          </div>
        </button>

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          <span className="text-[10px] mono font-bold text-blue-400 uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded border border-blue-500/20">
            SYNCING_DATA...
          </span>
        </div>
      </div>

      <div className="p-6 relative">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-[10px] font-black uppercase tracking-widest bg-blue-500/5 text-blue-500/80 border border-blue-500/10 rounded group-hover:border-blue-500/30 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-black mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
          {project.title}
        </h3>

        {briefing ? (
          <div className="mb-8 p-3 bg-blue-500/5 border-l-2 border-blue-500 rounded-r-lg animate-in slide-in-from-left duration-500">
            <p className="text-xs mono text-blue-400 italic">
              AI: {briefing}
            </p>
          </div>
        ) : (
          <p className="text-gray-500 text-sm leading-relaxed mb-8 italic">
            "{project.description}"
          </p>
        )}

        <div className="flex items-center gap-6 pt-4 border-t border-gray-800/50">
          <div className="flex items-center gap-3">
            <span className="text-[9px] mono font-bold text-gray-600 uppercase tracking-widest">Source_Code</span>
            <MysteryButton label="REPO" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[9px] mono font-bold text-gray-600 uppercase tracking-widest">Live_Demo</span>
            <MysteryButton label="BUILD" />
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:10px_10px]" />
    </div>
  );
};

export default ProjectCard;
