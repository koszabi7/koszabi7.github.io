import React from 'react';
import { profileData } from './data';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 py-12 px-4 font-sans text-slate-200">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-16">
        
        {/* HERO SECTION */}
        <header className="w-full flex flex-col md:flex-row items-center gap-10 bg-slate-900/40 p-10 rounded-3xl shadow-2xl border border-slate-800 backdrop-blur-md">
          <div className="relative shrink-0">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-30 animate-pulse"></div>
            <img 
              src={profileData.profilePicture} 
              alt={profileData.name} 
              className="relative w-44 h-44 rounded-full object-cover border-4 border-slate-900 shadow-2xl"
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

        <footer className="w-full text-center py-10 text-slate-600 text-sm border-t border-slate-900">
          Built with React, TypeScript & Tailwind CSS • 2024
        </footer>
      </div>
    </div>
  );
};

export default App;