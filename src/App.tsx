import React from 'react';
import { profileData } from './data';
import { Github, Linkedin, Mail, FileText, ExternalLink, Brain, Layout } from 'lucide-react';
import { useState } from 'react';

const App: React.FC = () => {
  const [isImageOpen, setIsImageOpen] = useState(false); // Állapot a nagyításhoz

  return (
    <div className="min-h-screen w-full bg-slate-950 py-12 px-4 font-sans text-slate-200">

      {/* MODÁLIS ABLAK - Akkor jelenik meg, ha isImageOpen === true */}
      {isImageOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md cursor-zoom-out p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <img 
            src={profileData.profilePicture} 
            alt={profileData.name} 
            className="max-w-[90%] max-h-[90vh] rounded-2xl shadow-2xl border-2 border-slate-800 transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()} // Megakadályozza a bezárást, ha magára a képre kattintasz
          />
          <button className="absolute top-5 right-5 text-white text-4xl hover:text-blue-400 transition-colors">&times;</button>
        </div>
      )}

      {/* HÁTTÉR RÉTEGEK */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.07]" 
        style={{ 
          backgroundImage: `url('/smooth_tall_background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
      </div>

      {/* TARTALOM */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center space-y-16 py-12 px-4">
        
        {/* HERO SECTION */}
        <header className="w-full flex flex-col md:flex-row items-center gap-10 bg-slate-900/40 p-10 rounded-3xl shadow-2xl border border-slate-800 backdrop-blur-md">
          
          {/* PROFILKÉP - Itt adtuk hozzá az onClick eseményt */}
          <div 
            className="relative shrink-0 cursor-zoom-in group" 
            onClick={() => setIsImageOpen(true)}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-30 animate-pulse group-hover:opacity-50 transition-opacity"></div>
            <img 
              src={profileData.profilePicture} 
              alt={profileData.name} 
              className="relative w-44 h-44 rounded-full object-cover border-4 border-slate-900 shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="text-center md:text-left space-y-6">
            <div>
              <h1 className="text-5xl font-black tracking-tight text-white">{profileData.name}</h1>
              <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
                {profileData.title}
              </p>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-2xl text-lg italic">"{profileData.shortBio}"</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href={profileData.social.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 hover:bg-blue-600 rounded-xl transition-all border border-slate-700 hover:border-blue-400">
                <Github size={24} />
              </a>
              <a href={profileData.social.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 hover:bg-blue-600 rounded-xl transition-all border border-slate-700 hover:border-blue-400">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${profileData.social.email}`} className="p-3 bg-slate-800 hover:bg-blue-600 rounded-xl transition-all border border-slate-700 hover:border-blue-400">
                <Mail size={24} />
              </a>
              <a href="/cv.pdf" download className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-white transition-all shadow-lg shadow-blue-900/40">
                <FileText size={20} /> Download CV
              </a>
            </div>
          </div>
        </header>

        {/* PROFESSIONAL EXPERIENCE SECTION */}
        <section className="w-full space-y-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-white mb-2">Professional Experience</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          </div>

          <div className="space-y-10"> {/* Megnövelt távolság a kártyák között a méretezés miatt */}
            
            {/* Nokia - Innovation & Automation */}
            <div className="relative pl-8 border-l-2 border-blue-600/30 pb-2">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
              
              <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 backdrop-blur-md transition-all duration-300 ease-out 
                              hover:scale-[1.05] hover:bg-slate-800/60 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.2)] group cursor-default">
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">Nokia</h3>
                    <p className="text-lg text-blue-400 font-semibold italic">Innovation & Automation Trainee (Full-time)</p>
                  </div>
                  <span className="px-4 py-1.5 bg-blue-600/20 text-blue-400 text-sm font-bold rounded-full border border-blue-600/30 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    2025-11 – Present
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors">
                    Driving organizational growth through cutting-edge technology and creative problem-solving.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "Full-stack Innovation Prototyping",
                      "AI Development & Integration",
                      "Strategic Thinking & Brainstorming",
                      "Organizational Development"
                    ].map((task) => (
                      <li key={task} className="flex items-center gap-2 text-slate-400 text-sm italic tracking-tight group-hover:text-slate-200 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div> 
                        {task}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["AI", "Full Stack", "Innovation Strategy", "Automation"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase rounded-md border border-blue-500/20 group-hover:border-blue-400/50 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Idomsoft - System Engineering */}
            <div className="relative pl-8 border-l-2 border-slate-800">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700"></div>
              
              <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 transition-all duration-300 ease-out 
                              hover:scale-[1.05] hover:bg-slate-800/60 hover:border-slate-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group cursor-default">
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-300 group-hover:text-white transition-colors">Idomsoft</h3>
                    <p className="text-lg text-slate-400 font-semibold italic">System Engineer Intern (Full-time)</p>
                  </div>
                  <span className="px-4 py-1.5 bg-slate-800 text-slate-500 text-sm font-bold rounded-full border border-slate-700 group-hover:border-slate-500 group-hover:text-slate-300 transition-all">
                    2024-03 – 2025-11
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
                    Managed mission-critical infrastructure and ensured high availability through proactive maintenance.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "Linux Systems Maintenance",
                      "Monitoring & Performance Analysis",
                      "Docker Environment Management",
                      "OS Updates & Reporting",
                      "Technical Training & Education"
                    ].map((task) => (
                      <li key={task} className="flex items-center gap-2 text-slate-500 text-sm italic tracking-tight group-hover:text-slate-300 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div> 
                        {task}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Linux", "Docker", "Monitoring", "System Administration"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-500 text-[10px] font-bold uppercase rounded-md border border-slate-700 group-hover:border-slate-500 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHER EDUCATION SECTION */}
        <section className="w-full space-y-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-white mb-2">Higher Education</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"></div>
          </div>

          <div className="space-y-10">
            {/* MSc Tanulmányok (Folyamatban) */}
            <div className="relative pl-8 border-l-2 border-blue-600/30 pb-2">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
              
              <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800 backdrop-blur-sm transition-all duration-300 ease-out 
                              hover:scale-[1.05] hover:bg-slate-800/60 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] group cursor-default">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">Budapest University of Technology and Economics (BME)</h3>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm font-bold rounded-full border border-blue-600/30 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    2026 – Present
                  </span>
                </div>
                <p className="text-lg text-slate-200 font-medium group-hover:text-white transition-colors">Computer Science Engineering, MSc</p>
              </div>
            </div>

            {/* BSc Tanulmányok */}
            <div className="relative pl-8 border-l-2 border-slate-800">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700"></div>
              
              <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800 transition-all duration-300 ease-out 
                              hover:scale-[1.05] hover:bg-slate-800/60 hover:border-slate-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group cursor-default">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">Budapest University of Technology and Economics (BME)</h3>
                  <span className="px-3 py-1 bg-slate-800 text-slate-400 text-sm font-bold rounded-full border border-slate-700 group-hover:border-slate-400 group-hover:text-slate-200 transition-all">
                    2022 – 2026
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg text-slate-200 font-medium group-hover:text-white transition-colors">Computer Science Engineering, BSc</p>
                    <p className="text-blue-400 font-semibold mt-1 group-hover:text-blue-300 transition-colors">Specialization: Machine Learning and Data Science</p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-800/50 flex flex-col md:flex-row items-start md:items-center gap-4">
                    <p className="text-slate-400 text-sm italic group-hover:text-slate-300 transition-colors">Thesis Topic: Integrating AI Agents on a Workflow Automation Platform</p>
                    <a 
                      href="/szakdolgozat.pdf" 
                      download 
                      className="flex items-center gap-2 px-5 py-2 bg-slate-800 hover:bg-blue-600 rounded-xl text-white text-sm font-bold border border-slate-700 hover:border-blue-400 transition-all active:scale-95 shadow-lg"
                    >
                      <FileText size={16} /> Download Thesis (PDF)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS GRID */}
        <section className="w-full space-y-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-white mb-2">Technical Expertise</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.skillGroups.map((group) => (
              <div key={group.title} className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-800/50 rounded-lg text-xs font-medium text-slate-300 border border-slate-700/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="w-full space-y-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="grid gap-8">
            {profileData.projects.map((proj) => (
              <div key={proj.name} className="group bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all shadow-xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{proj.name}</h3>
                    <p className="text-slate-400 text-lg max-w-2xl">{proj.desc}</p>
                  </div>
                  <a href={proj.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-blue-400 font-bold border border-slate-700 transition-all">
                    View Project <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section className="w-full space-y-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-white mb-2">Achievements</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* TDK Achievement */}
            <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-blue-500/30 transition-all group">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                    <Brain size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Scientific Students' Associations (TDK)</h3>
                </div>
                <p className="text-blue-400 font-semibold mb-2">2nd Place</p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Awarded 2nd place for my research and paper presented in 2025 November.
                </p>
              </div>
              <a href="/TDK.pdf" download className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 rounded-2xl text-white font-bold border border-slate-700 transition-all active:scale-95">
                <FileText size={18} /> Download Paper (PDF)
              </a>
            </div>

            {/* Udemy Certificate */}
            <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-blue-500/30 transition-all group">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-600/20 rounded-lg text-orange-400 group-hover:scale-110 transition-transform">
                    <Layout size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Udemy Certificate</h3>
                </div>
                <h4 className="text-slate-200 font-semibold mb-2">AI automation</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Completed an intensive professional course on Udemy, mastering AI automation with n8n workflows.
                </p>
              </div>
              <a href="/udemy_certificate.pdf" download className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 rounded-2xl text-white font-bold border border-slate-700 transition-all active:scale-95">
                <ExternalLink size={18} /> Download Certificate
              </a>
            </div>
          </div>
        </section>

        <footer className="w-full text-center py-10 text-slate-600 text-sm border-t border-slate-900">
          Built with React, TypeScript & Tailwind CSS • 2025
        </footer>
      </div>
    </div>
  );
};

export default App;