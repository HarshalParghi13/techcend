import React from 'react';
import { ArrowRight, BarChart, ShoppingCart, MapPin, Search, Layout } from 'lucide-react';

// --- INLINE FALLBACKS TO RESOLVE COMPILATION ERRORS ---
const RevealSection = ({ children, className = "" }) => <div className={className}>{children}</div>;
const TiltCard = ({ children }) => <div className="w-full">{children}</div>;

const PORTFOLIO = [
  {
    title: "FinTech Dashboard",
    category: "Web App",
    color: "bg-blue-900/20 border-blue-500/30",
    tags: ["React", "Node", "Finance"]
  },
  {
    title: "EcoStore Shop",
    category: "E-Commerce",
    color: "bg-emerald-900/20 border-emerald-500/30",
    tags: ["Shopify", "UI/UX", "Green"]
  },
  {
    title: "Urban Realty",
    category: "Marketplace",
    color: "bg-purple-900/20 border-purple-500/30",
    tags: ["SEO", "PPC", "Lead Gen"]
  }
];
// ------------------------------------------------------

// --- CUSTOM UI MOCKUPS ---
// These dynamically render abstract representations of the apps based on the project title
const ProjectMockup = ({ title }) => {
  if (title === "FinTech Dashboard") {
    return (
      <div className="w-full h-full bg-slate-950 rounded-xl flex overflow-hidden border border-slate-800 relative shadow-inner">
         <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full pointer-events-none"></div>
         {/* Sidebar */}
         <div className="w-1/4 h-full bg-slate-900 border-r border-slate-800 p-3 flex flex-col gap-4 z-10">
           <div className="flex items-center gap-2 mb-2">
             <Layout className="w-4 h-4 text-blue-500" />
             <div className="h-2 w-10 bg-slate-700 rounded-full"></div>
           </div>
           <div className="space-y-3 mt-4">
             {[1, 2, 3, 4].map(i => (
               <div key={i} className={`h-2 w-full rounded-full ${i === 1 ? 'bg-blue-500/50' : 'bg-slate-800'}`}></div>
             ))}
           </div>
         </div>
         {/* Main Area */}
         <div className="flex-1 p-4 flex flex-col gap-4 z-10">
           {/* Nav */}
           <div className="flex justify-between items-center">
             <div className="h-2 w-16 bg-slate-700 rounded-full"></div>
             <div className="flex gap-2">
               <div className="w-4 h-4 rounded-full bg-slate-800"></div>
               <div className="w-4 h-4 rounded-full bg-slate-800"></div>
             </div>
           </div>
           {/* Stat Cards */}
           <div className="grid grid-cols-3 gap-3">
             {[1, 2, 3].map(i => (
               <div key={i} className="bg-slate-900 border border-slate-800 rounded-lg p-3">
                 <div className="h-1.5 w-8 bg-slate-600 rounded-full mb-3"></div>
                 <div className="h-3 w-12 bg-blue-400 rounded-full"></div>
               </div>
             ))}
           </div>
           {/* Main Chart */}
           <div className="flex-1 bg-slate-900 border border-slate-800 rounded-lg p-3 flex items-end gap-2 overflow-hidden">
             {[40, 70, 45, 90, 65, 80, 50, 100, 60].map((h, i) => (
               <div key={i} className="flex-1 bg-gradient-to-t from-blue-600/40 to-cyan-400 rounded-t-sm opacity-80" style={{ height: `${h}%` }}></div>
             ))}
           </div>
         </div>
      </div>
    );
  }

  if (title === "EcoStore Shop") {
    return (
      <div className="w-full h-full bg-slate-950 rounded-xl flex flex-col overflow-hidden border border-slate-800 relative shadow-inner">
         <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>
         {/* Top Nav */}
         <div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 z-10">
           <div className="h-2 w-16 bg-emerald-500/80 rounded-full"></div>
           <div className="flex gap-4 items-center">
              <div className="h-1.5 w-6 bg-slate-700 rounded-full hidden sm:block"></div>
              <div className="h-1.5 w-6 bg-slate-700 rounded-full hidden sm:block"></div>
              <ShoppingCart className="w-3.5 h-3.5 text-slate-400" />
           </div>
         </div>
         {/* Hero Banner */}
         <div className="h-20 mx-4 mt-4 bg-gradient-to-r from-emerald-900/40 to-emerald-800/20 rounded-xl border border-emerald-500/20 flex flex-col justify-center items-center gap-2 z-10">
           <div className="h-2.5 w-24 bg-emerald-400/80 rounded-full"></div>
           <div className="h-1.5 w-32 bg-slate-500/60 rounded-full"></div>
         </div>
         {/* Product Grid */}
         <div className="flex-1 p-4 grid grid-cols-3 gap-3 z-10">
           {[1, 2, 3].map(i => (
             <div key={i} className="bg-slate-900 border border-slate-800 rounded-lg p-2 flex flex-col gap-2">
               <div className="flex-1 bg-slate-800/80 rounded-md"></div>
               <div className="h-1.5 w-12 bg-slate-600 rounded-full mt-1"></div>
               <div className="h-1.5 w-8 bg-emerald-500/80 rounded-full"></div>
             </div>
           ))}
         </div>
      </div>
    );
  }

  if (title === "Urban Realty") {
    return (
      <div className="w-full h-full bg-slate-950 rounded-xl flex flex-col overflow-hidden border border-slate-800 relative shadow-inner">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/10 blur-3xl rounded-full pointer-events-none z-0"></div>
         {/* Map Hero */}
         <div className="h-28 bg-slate-900 relative border-b border-slate-800 z-10">
           {/* Abstract map elements */}
           <div className="absolute inset-0 opacity-20">
             <div className="absolute top-4 left-8 w-16 h-12 bg-slate-700 rounded-lg transform rotate-12"></div>
             <div className="absolute top-8 right-12 w-20 h-16 bg-slate-700 rounded-lg transform -rotate-6"></div>
             <div className="absolute bottom-2 left-1/3 w-12 h-10 bg-slate-700 rounded-lg transform rotate-3"></div>
           </div>
           {/* Search overlay */}
           <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-slate-950/80 backdrop-blur-sm rounded-full border border-purple-500/30 shadow-lg shadow-purple-900/20 flex items-center px-3 gap-2">
             <Search className="w-3 h-3 text-purple-400" />
             <div className="h-1.5 w-20 bg-slate-600 rounded-full"></div>
           </div>
         </div>
         {/* Listing Cards */}
         <div className="flex-1 p-4 flex flex-col gap-3 z-10">
           <div className="flex items-center gap-2 mb-1">
             <MapPin className="w-3.5 h-3.5 text-purple-500" />
             <div className="h-2 w-24 bg-slate-400 rounded-full"></div>
           </div>
           {[1, 2].map(i => (
             <div key={i} className="flex-1 bg-slate-900 border border-slate-800 rounded-lg p-2 flex gap-3">
               <div className="w-16 h-full bg-slate-800 rounded-md"></div>
               <div className="flex flex-col justify-center flex-1 gap-2">
                 <div className="h-2 w-3/4 bg-slate-300 rounded-full"></div>
                 <div className="h-1.5 w-1/2 bg-slate-600 rounded-full"></div>
                 <div className="h-2 w-12 bg-purple-400 rounded-full mt-1"></div>
               </div>
             </div>
           ))}
         </div>
      </div>
    );
  }

  // Fallback if title doesn't match
  return (
    <div className="w-full h-full bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center">
      <Layout className="w-12 h-12 text-slate-800" />
    </div>
  );
};


const Portfolio = () => {
  return (
    <section id="work" className="py-32 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <RevealSection>
          <div className="flex flex-col items-center text-center mb-24 relative">
            <h2 className="text-cyan-500 font-mono text-sm mb-4 tracking-widest uppercase">/// Selected Works</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 relative z-10">Digital Landmarks</h3>
            <p className="text-slate-400 max-w-xl text-lg relative z-10">We build applications that define categories and set new standards.</p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          </div>
        </RevealSection>

        <div className="space-y-32">
          {PORTFOLIO.map((project, idx) => (
            <RevealSection key={idx} className="group">
              <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                 
                 {/* VISUAL MOCKUP AREA */}
                 <div className="w-full md:w-3/5 relative">
                    <TiltCard>
                       <div className={`aspect-[4/3] w-full rounded-[2rem] overflow-hidden relative shadow-2xl border ${project.color} bg-slate-950`}>
                          {/* Inner container scales slightly and becomes fully opaque on hover */}
                          <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/0 transition-all duration-700"></div>
                          <div className="absolute inset-4 sm:inset-6 bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/5 p-2 opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-[1.02] group-hover:shadow-2xl">
                             {/* Calling our new custom UI generator based on the project title! */}
                             <ProjectMockup title={project.title} />
                          </div>
                       </div>
                    </TiltCard>
                 </div>
                 
                 {/* TEXT DETAILS AREA */}
                 <div className="w-full md:w-2/5 space-y-6">
                    <div className="text-cyan-400 font-mono text-xs tracking-widest uppercase flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-cyan-400/50"></span>
                      {project.category}
                    </div>
                    <h4 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h4>
                    <p className="text-slate-400 leading-relaxed text-lg">A cutting-edge platform designed to revolutionize the way users interact with data, increasing conversion and retention.</p>
                    <div className="flex gap-2 flex-wrap pt-2">
                       {project.tags.map((tag, t) => (
                          <span key={t} className="px-4 py-1.5 rounded-full border border-white/10 text-xs text-slate-300 bg-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                            {tag}
                          </span>
                       ))}
                    </div>
                    <button className="flex items-center gap-3 text-white font-bold group-hover:gap-6 transition-all pt-6 hover:text-cyan-400">
                       View Case Study <ArrowRight className="w-5 h-5" />
                    </button>
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