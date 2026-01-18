
import React, { useEffect, useState } from 'react';
import { PROJECTS, Icons } from './constants';
import ExplosionEffect from './components/ExplosionEffect';
import ProjectCard from './components/ProjectCard';
import SkillsHexagon from './components/SkillsHexagon';
import ProfileSection from './components/ProfileSection';
import IntroScreen from './components/IntroScreen';
import EditableText from './components/EditableText';
import AIAssistant from './components/AIAssistant';
import EducationDashboard from './components/EducationDashboard';
import HobbyDashboard from './components/HobbyDashboard';
import WorkExperienceDashboard from './components/WorkExperienceDashboard';
import ResumeDashboard from './components/ResumeDashboard';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [showResume, setShowResume] = useState(false);
  
  const [content, setContent] = useState({
    heroBadge: "🧭 WILL BADILLO // CS EXPLORER",
    heroTitleTop: "ENGINEERING",
    heroTitleBottom: "THE FUTURE. 🔭",
    heroDescription: "A Computer Science student from the Philippines mapping out complex solutions and discovering new ways to build a better digital world, one line of code at a time. 🗺️",
    skillsHeader: "Technical Loadout 🎒",
    projectsHeader: "Artifacts & Builds 🏺",
    projectsSub: "Digital systems uncovered and developed through rigorous exploration.",
    contactHeader: "Ready for the next mission? 🤝",
    contactSub: "Whether you're looking for an operative or a fellow builder, let's establish a connection."
  });

  const updateContent = (key: keyof typeof content, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (showIntro) {
    return <IntroScreen onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="relative min-h-screen animate-in fade-in duration-1000">
      <ExplosionEffect />
      <AIAssistant />

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md bg-black/20 border-b border-white/5">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-black tracking-tighter text-blue-500 hover:scale-110 transition-transform cursor-pointer"
        >
          WILL<span className="text-white">_BADILLO</span>
        </div>
        <div className="hidden lg:flex gap-8 text-sm font-medium tracking-widest uppercase">
          {['About', 'Skills', 'Work', 'Education', 'Projects', 'Hobbies', 'Contact'].map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="hover:text-blue-500 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>
        <button 
          onClick={() => setShowResume(true)}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-xs font-bold uppercase transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] active:scale-95"
        >
          Resume
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        <div 
          className="absolute text-[12vw] font-black opacity-5 select-none pointer-events-none whitespace-nowrap uppercase"
          style={{ transform: `translateX(${-scrollY * 0.5}px)` }}
        >
          BADILLO WILL BADILLO WILL BADILLO WILL
        </div>

        <div className="z-10 text-center space-y-6 max-w-4xl">
          <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest animate-pulse">
            <EditableText value={content.heroBadge} onChange={(val) => updateContent('heroBadge', val)} />
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tightest leading-tight">
            <EditableText value={content.heroTitleTop} onChange={(val) => updateContent('heroTitleTop', val)} /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 glitch-text uppercase">
              <EditableText value={content.heroTitleBottom} onChange={(val) => updateContent('heroTitleBottom', val)} />
            </span>
          </h1>

          <div className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light">
            <EditableText multiline value={content.heroDescription} onChange={(val) => updateContent('heroDescription', val)} />
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <button 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-white/20"
            >
              Access Files 📚
            </button>
            <button 
              onClick={(e) => scrollToSection(e, 'about')}
              className="px-8 py-4 border border-white/20 font-bold rounded-lg hover:bg-white/5 transition-all active:scale-95"
            >
              The File 🌱
            </button>
          </div>
        </div>
      </section>

      <ProfileSection />

      <section id="skills" className="py-24 px-6 bg-gray-950/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white">
              <EditableText value={content.skillsHeader} onChange={(val) => updateContent('skillsHeader', val)} />
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500 to-transparent opacity-30" />
          </div>
          <SkillsHexagon />
        </div>
      </section>

      <WorkExperienceDashboard />

      <EducationDashboard />

      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase text-white">
                 <EditableText value={content.projectsHeader} onChange={(val) => updateContent('projectsHeader', val)} />
              </h2>
              <div className="text-gray-400 max-w-md">
                <EditableText multiline value={content.projectsSub} onChange={(val) => updateContent('projectsSub', val)} />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <HobbyDashboard />

      <footer id="contact" className="py-24 px-6 bg-black relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-8">
            <h2 className="text-5xl font-black leading-tight">
              <EditableText multiline value={content.contactHeader} onChange={(val) => updateContent('contactHeader', val)} />
            </h2>
            <div className="text-gray-400 text-lg">
              <EditableText multiline value={content.contactSub} onChange={(val) => updateContent('contactSub', val)} />
            </div>
            <div className="flex gap-6 italic mono text-xs text-blue-500 bg-blue-500/5 p-4 rounded-lg border border-blue-500/20">
               WILL BADILLO // willuworkx@gmail.com // +63 977 062 1676
            </div>
            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors scale-125"><Icons.Github /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors scale-125">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Signal received! Thanks for reaching out! 👋"); }}>
            <div className="grid grid-cols-2 gap-4">
              <input required type="text" placeholder="Name" className="bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500 transition-all text-white" />
              <input required type="email" placeholder="Email" className="bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500 transition-all text-white" />
            </div>
            <textarea required placeholder="Write your message... ✨" rows={4} className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500 transition-all text-white" />
            <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 font-bold rounded-xl transition-all shadow-xl active:scale-[0.98]">
              Transmit Message 📡
            </button>
          </form>
        </div>

        <div className="mt-24 text-center text-gray-600 text-sm mono">
          &copy; {new Date().getFullYear()} WILL_BADILLO. PHILIPPINES_ORIGIN. ✨
        </div>
      </footer>
      {showResume && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl border border-blue-500/40 shadow-[0_0_40px_rgba(37,99,235,0.6)]">
            <ResumeDashboard onBack={() => setShowResume(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
