import React, { useState } from 'react';

interface ResumeDashboardProps {
  onBack: () => void;
}

const ResumeDashboard: React.FC<ResumeDashboardProps> = ({ onBack }) => {
  const [page, setPage] = useState<1 | 2>(1);
  const handleDownloadAll = () => {
    const base = import.meta.env.BASE_URL;
    const files = ['resume-page1.png', 'resume-page2.png'];
    files.forEach((file) => {
      const link = document.createElement('a');
      link.href = `${base}${file}`;
      link.download = file;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden">
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.15),_transparent_55%)]" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md bg-black/40">
        <button
          onClick={onBack}
          className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 hover:text-white transition-colors"
        >
          ↩ Back to portfolio
        </button>
        <div className="flex items-center gap-4">
          <div className="text-[11px] mono text-blue-400 tracking-[0.3em] uppercase">
            Resume_Console // v1.0
          </div>
          <div className="flex items-center gap-2 text-[11px] mono uppercase">
            <button
              onClick={() => setPage(1)}
              className={`px-3 py-1 rounded-full border transition-all ${
                page === 1
                  ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                  : 'border-white/10 text-gray-400 hover:border-blue-400 hover:text-blue-200'
              }`}
            >
              Page 1
            </button>
            <button
              onClick={() => setPage(2)}
              className={`px-3 py-1 rounded-full border transition-all ${
                page === 2
                  ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                  : 'border-white/10 text-gray-400 hover:border-blue-400 hover:text-blue-200'
              }`}
            >
              Page 2
            </button>
            <button
              onClick={handleDownloadAll}
              className="ml-2 px-3 py-1 rounded-full border border-emerald-500 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all"
            >
              Download PNGs
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <section className="lg:col-span-2 bg-black/50 border border-blue-500/30 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(37,99,235,0.4)]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight uppercase">
                Will Badillo
              </h1>
              <p className="text-blue-400 font-semibold mt-1 tracking-[0.25em] text-[11px] uppercase">
                Computer Science Student • Software Engineer in Training
              </p>
            </div>
          </div>

          <div className="space-y-8 text-sm md:text-base text-gray-300 pr-1 md:pr-2 overflow-y-auto max-h-[65vh]">
            {page === 1 ? (
              <>
                <section>
                  <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-2">
                    Profile
                  </h2>
                  <p>
                    I am currently pursuing a Bachelor of Science in Computer Science, focusing on software
                    engineering and systems design. I enjoy building interfaces that feel intentional, pairing them
                    with solid backend logic and security-aware decisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-2">
                    Technical Skills
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                      <div className="text-[10px] text-gray-400 uppercase tracking-[0.25em]">
                        Languages
                      </div>
                      <div className="font-semibold text-sm mt-1">
                        Java, TypeScript, Python, C
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                      <div className="text-[10px] text-gray-400 uppercase tracking-[0.25em]">
                        Frontend
                      </div>
                      <div className="font-semibold text-sm mt-1">
                        React, HTML, CSS, Tailwind
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                      <div className="text-[10px] text-gray-400 uppercase tracking-[0.25em]">
                        Backend
                      </div>
                      <div className="font-semibold text-sm mt-1">
                        Node, REST APIs, databases
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                      <div className="text-[10px] text-gray-400 uppercase tracking-[0.25em]">
                        Tools
                      </div>
                      <div className="font-semibold text-sm mt-1">
                        Git, Linux, Docker basics
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                      <div className="text-[10px] text-gray-400 uppercase tracking-[0.25em]">
                        AI & LLMs
                      </div>
                      <div className="font-semibold text-sm mt-1">
                        Prompting, automation, AI-assisted coding
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-2">
                    School Projects
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">
                        Smart School Attendance System (QAttendance)
                      </p>
                      <p className="text-[11px] text-gray-400 mb-1">
                        2024 • Software Engineering
                      </p>
                      <p className="text-gray-400 text-sm">
                        Built a smart attendance tracker for students with a focus on reliability and clear teacher
                        workflows.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        AI-Powered Teacher Evaluation
                      </p>
                      <p className="text-[11px] text-gray-400 mb-1">
                        2025–2026
                      </p>
                      <p className="text-gray-400 text-sm">
                        Designed a tool that summarizes student feedback and surfaces insights so teachers can quickly
                        understand strengths and areas to improve.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        Smart Scheduler (inSync)
                      </p>
                      <p className="text-[11px] text-gray-400 mb-1">
                        2024
                      </p>
                      <p className="text-gray-400 text-sm">
                        Helped design a scheduling assistant that reduces conflicts and gives students a clearer view of
                        their time.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        AI Voice Recognition Project
                      </p>
                      <p className="text-[11px] text-gray-400 mb-1">
                        2024 • Artificial Intelligence
                      </p>
                      <p className="text-gray-400 text-sm">
                        Explored voice recognition and model integration as part of an introductory AI course.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-2">
                    Work Experience
                  </h2>
                  <p className="font-semibold">
                    Advanced Infinit Solutions (Intern)
                  </p>
                  <p className="text-[11px] text-gray-400 mb-1">
                    Sept–Dec
                  </p>
                  <p className="text-gray-400 text-sm">
                    Supported development and testing of an internal web application, collaborating with senior engineers
                    and learning production workflows.
                  </p>
                </section>
              </>
            ) : (
              <>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                  <img
                    src={`${import.meta.env.BASE_URL}resume-page2.png`}
                    alt="Resume page 2"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <section>
                  <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-2">
                    School / Self Projects
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">
                        Restaurant Ordering System | Java | AI Tools
                      </p>
                      <p className="text-gray-400 text-sm">
                        Designed an ordering system that streamlines waiter workflow and improves customer experience on
                        mobile and tablet devices.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        E‑commerce Website | Enterprise Java
                      </p>
                      <p className="text-gray-400 text-sm">
                        Built a commerce site for GPU and monitor sales, mirroring real marketplace features like product
                        listings and cart flows.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        VLAN Configuration Project | Cisco Packet Tracer
                      </p>
                      <p className="text-gray-400 text-sm">
                        Configured VLANs across multiple routers to demonstrate real-world network segmentation and
                        security.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        Inventory System for a Galleria | Firebase | AI Tools
                      </p>
                      <p className="text-gray-400 text-sm">
                        Implemented an inventory tracker with analytics and simple dashboards for staff and management.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        Clinical Record System | AI Analysis | Java
                      </p>
                      <p className="text-gray-400 text-sm">
                        Prototyped a record management system that uses AI summarization to assist medical staff with
                        faster reviews.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        Web‑based Hotel Website | Java | AI Tools
                      </p>
                      <p className="text-gray-400 text-sm">
                        Created an informational hotel site with focus on clarity of pricing, benefits, and booking
                        details.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-2">
                    Education
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">
                        Bachelor of Science in Computer Science
                      </p>
                      <p className="text-[11px] text-gray-400">
                        2022–2026 • School of Computing | IACADEMY
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        Bachelor of Science in Medical Technology
                      </p>
                      <p className="text-[11px] text-gray-400">
                        2020–2021 • Dona Remedios Trinidad Romualdez Medical Foundation
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-2">
                    Character Reference
                  </h2>
                  <p className="font-semibold">
                    Jarek Isolo Gabutan
                  </p>
                  <p className="text-gray-400 text-sm">
                    Professor, adviser, and industry mentor available on request.
                  </p>
                </section>
              </>
            )}
          </div>
        </section>

        <aside className="space-y-6">
          <div className="bg-black/60 border border-blue-500/30 rounded-3xl p-6">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-2">
              Contact Uplink
            </h3>
            <p className="text-sm text-gray-300">
              Manila, Philippines
            </p>
            <p className="text-sm text-gray-300 mt-1">
              willuworkx@gmail.com
            </p>
            <p className="text-sm text-gray-300 mt-1">
              +63 977 062 1676
            </p>
          </div>

          <div className="bg-black/60 border border-emerald-500/30 rounded-3xl p-6">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400 mb-2">
              Focus Areas
            </h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Frontend engineering with React and TypeScript</li>
              <li>API and service design with reliability in mind</li>
              <li>Integrating AI systems into usable tools</li>
              <li>Security-aware, maintainable implementations</li>
            </ul>
          </div>

          <div className="bg-black/60 border border-indigo-500/30 rounded-3xl p-6 text-xs text-gray-400 mono space-y-2">
            <div className="flex items-center justify-between">
              <span>OPERATIVE_ID</span>
              <span className="text-blue-400 font-bold">BADILLO_W</span>
            </div>
            <div className="flex items-center justify-between">
              <span>STATUS</span>
              <span className="text-emerald-400 font-bold">ACTIVE_QUEST</span>
            </div>
            <div className="flex items-center justify-between">
              <span>SECTOR</span>
              <span className="font-bold">PH 🇵🇭</span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default ResumeDashboard;
