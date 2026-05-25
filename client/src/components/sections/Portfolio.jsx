import React from 'react';
import { ArrowRight, Database, BrainCircuit, LayoutTemplate, MessageSquare, Bot, Search, ShieldCheck, Zap, Sparkles, LineChart } from 'lucide-react';
import { PORTFOLIO } from '../../data/constants';

// --- INLINE FALLBACKS TO RESOLVE COMPILATION ERRORS ---
const RevealSection = ({ children, className = "" }) => <div className={className}>{children}</div>;
const TiltCard = ({ children }) => <div className="w-full">{children}</div>;


// --- ARCHITECTURAL DIAGRAM COMPONENTS ---
const ArchitectureDiagram = ({ title }) => {
  if (title === "AI-Powered Retail Storefront") {
    return (
      <div className="w-full h-full bg-[#0a0f1c] rounded-xl flex flex-col justify-center items-center overflow-hidden border border-slate-800/60 relative p-6">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Diagram Wrapper */}
        <div className="relative z-10 w-full max-w-sm flex items-center justify-between gap-4">
          
          {/* Node 1: Web Interface */}
          <div className="w-16 h-20 rounded-xl bg-slate-900/80 border border-slate-700 flex flex-col items-center justify-center relative shadow-lg shadow-blue-900/20 gap-2">
             <div className="absolute -top-2 px-2 bg-slate-800 text-[8px] font-mono text-slate-300 rounded border border-slate-600">STOREFRONT</div>
             <LayoutTemplate className="w-6 h-6 text-slate-400" />
             <div className="w-8 h-1 bg-blue-500/50 rounded-full"></div>
          </div>

          {/* Connection Line */}
          <div className="flex-1 h-[2px] bg-gradient-to-r from-slate-700 to-blue-500 relative">
             <div className="absolute top-1/2 -translate-y-1/2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-[ping_2s_infinite]"></div>
             <div className="absolute top-1/2 -translate-y-1/2 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-[ping_2s_infinite_1s]"></div>
          </div>

          {/* Node 2: AI Brain (Semantic Search) */}
          <div className="w-20 h-20 rounded-full bg-blue-950/80 border border-blue-400/50 flex flex-col items-center justify-center relative shadow-[0_0_30px_rgba(59,130,246,0.3)]">
             <div className="absolute -bottom-3 px-2 bg-blue-900/90 text-[8px] font-mono text-blue-200 rounded border border-blue-400/30">AI_SEARCH</div>
             <Sparkles className="w-8 h-8 text-blue-400 mb-1" />
          </div>

          {/* Connection Line */}
          <div className="flex-1 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 relative">
             <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-2 h-2 bg-cyan-300 rounded-full animate-[ping_2s_infinite_500ms]"></div>
          </div>

          {/* Node 3: Product DB */}
          <div className="w-16 h-16 rounded-xl bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center relative shadow-[0_0_20px_rgba(34,211,238,0.2)]">
             <div className="absolute -top-2 px-2 bg-cyan-900/80 text-[8px] font-mono text-cyan-300 rounded border border-cyan-500/30">PRODUCTS</div>
             <Database className="w-6 h-6 text-cyan-400" />
          </div>

        </div>
      </div>
    );
  }

  if (title === "SaaS Dashboard with AI Copilot") {
    return (
      <div className="w-full h-full bg-[#0a0f1c] rounded-xl flex items-center justify-center overflow-hidden border border-slate-800/60 relative p-6">
        {/* Background Radar Effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-48 h-48 rounded-full border border-purple-500/30"></div>
          <div className="absolute w-32 h-32 rounded-full border border-purple-500/40"></div>
          <div className="absolute w-16 h-16 rounded-full border border-purple-500/60"></div>
        </div>

        <div className="relative z-10 w-full max-w-sm bg-slate-900/60 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl">
           {/* Mock Dashboard UI */}
           <div className="flex justify-between items-center border-b border-slate-700/50 pb-3 mb-4">
              <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                 <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              </div>
              <div className="w-20 h-2 bg-slate-700 rounded-full"></div>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              {/* Data Card */}
              <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700 flex flex-col gap-2">
                 <LineChart className="w-5 h-5 text-slate-400" />
                 <div className="w-12 h-1.5 bg-slate-600 rounded-full mt-2"></div>
                 <div className="w-full h-1 bg-slate-700 rounded-full"></div>
              </div>
              
              {/* The AI Copilot Floating Over the UI */}
              <div className="relative bg-purple-950/40 rounded-xl p-3 border border-purple-500/50 flex flex-col items-center justify-center text-center shadow-[0_0_25px_rgba(168,85,247,0.2)]">
                 <div className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-purple-500 animate-pulse"></div>
                 <Bot className="w-8 h-8 text-purple-400 mb-2" />
                 <div className="text-[9px] font-mono text-purple-300">COPILOT ACTIVE</div>
              </div>
           </div>
           
           <div className="mt-4 bg-slate-800/50 rounded-xl p-3 border border-slate-700 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <div className="w-full h-1.5 bg-gradient-to-r from-purple-500/50 to-slate-700 rounded-full"></div>
           </div>
        </div>
      </div>
    );
  }

  if (title === "Smart Customer Support Portal") {
    return (
      <div className="w-full h-full bg-[#0a0f1c] rounded-xl flex items-center justify-center overflow-hidden border border-slate-800/60 relative p-8">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         
         <div className="w-full max-w-sm flex justify-between items-center gap-2 relative z-10 h-32">
            
            {/* User Input (Ticket) */}
            <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center relative z-10">
               <MessageSquare className="w-5 h-5 text-slate-300" />
               <div className="absolute -bottom-4 text-[8px] font-mono text-slate-400">USER_QUERY</div>
            </div>

            {/* RAG Processing Logic */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
               <div className="w-full h-[1px] bg-emerald-500/30 absolute top-1/2 -translate-y-1/2"></div>
               
               <div className="flex justify-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                     <Search className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="w-10 h-10 rounded bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                     <Database className="w-4 h-4 text-emerald-400" />
                  </div>
               </div>
               <div className="mt-2 text-[8px] font-mono text-emerald-400 bg-emerald-900/30 px-2 py-0.5 rounded-full border border-emerald-500/20">KNOWLEDGE_RETRIEVAL</div>
            </div>

            {/* AI Output Generation */}
            <div className="w-14 h-14 rounded-full bg-emerald-900/80 border border-emerald-400 flex items-center justify-center relative z-10 shadow-[0_0_25px_rgba(52,211,153,0.4)]">
               <BrainCircuit className="w-6 h-6 text-emerald-300" />
               <div className="absolute -bottom-4 text-[8px] font-mono text-emerald-300">RESOLUTION</div>
            </div>
         </div>

         {/* Faded connecting lines in background */}
         <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" />
         </svg>
      </div>
    );
  }

  return <div className="w-full h-full bg-slate-900 rounded-xl"></div>;
};


const Portfolio = () => {
  return (
    <section id="work" className="py-32 bg-slate-950 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <RevealSection>
          <div className="flex flex-col items-center text-center mb-24 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6">
              <Sparkles className="w-4 h-4" /> Real Business Solutions
            </div>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Web Apps</span></h3>
            <p className="text-slate-400 max-w-2xl text-lg">
              We build beautifully designed, modern web applications supercharged with bespoke AI features to automate workflows, engage customers, and directly drive revenue.
            </p>
          </div>
        </RevealSection>

        <div className="space-y-32">
          {PORTFOLIO.map((project, idx) => (
            <RevealSection key={idx} className="group">
              <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                 
                 {/* ARCHITECTURE DIAGRAM AREA */}
                 <div className="w-full md:w-3/5 relative">
                    <TiltCard>
                       <div className={`aspect-[16/10] w-full rounded-[2rem] overflow-hidden relative shadow-2xl border ${project.color} bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6`}>
                          
                          {/* Background Glow */}
                          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[100px] rounded-full opacity-30 pointer-events-none ${project.glow}`}></div>
                          
                          {/* Diagram Component */}
                          <div className="w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                             <ArchitectureDiagram title={project.title} />
                          </div>
                          
                       </div>
                    </TiltCard>
                 </div>
                 
                 {/* TECHNICAL DETAILS AREA */}
                 <div className="w-full md:w-2/5 space-y-6">
                    <div className="text-slate-500 font-mono text-xs tracking-widest uppercase flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-slate-600"></span>
                      {project.category}
                    </div>
                    
                    <h4 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h4>
                    
                    <p className="text-slate-400 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    <div className="flex gap-2 flex-wrap pt-4 border-t border-white/5">
                       {project.tags.map((tag, t) => (
                          <span key={t} className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 shadow-sm">
                            {tag}
                          </span>
                       ))}
                    </div>
                    
                    <a href="#contact" onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }} className="inline-flex items-center gap-3 text-white font-bold group-hover:gap-6 transition-all pt-6 group/btn w-fit">
                       Discuss Implementation 
                       <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-slate-950 transition-colors">
                         <ArrowRight className="w-4 h-4" />
                       </div>
                    </a>
                 </div>
                 
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;