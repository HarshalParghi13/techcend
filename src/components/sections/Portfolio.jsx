import React from 'react';
import { ArrowRight } from 'lucide-react';
import RevealSection from '../ui/RevealSection';
import TiltCard from '../ui/TiltCard';
import { PORTFOLIO } from '../../data/constants';

const Portfolio = () => {
  return (
    <section id="work" className="py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <RevealSection>
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="text-cyan-500 font-mono text-sm mb-4">/// SELECTED WORKS</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">Digital Landmarks</h3>
            <p className="text-slate-400 max-w-xl text-lg">We build applications that define categories and set new standards.</p>
          </div>
        </RevealSection>

        <div className="space-y-32">
          {PORTFOLIO.map((project, idx) => (
            <RevealSection key={idx} className="group" animation={idx % 2 === 0 ? "slide-right" : "slide-left"}>
              <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                 <div className="w-full md:w-3/5">
                    <TiltCard>
                       <div className={`aspect-[4/3] w-full rounded-3xl overflow-hidden relative shadow-2xl ${project.color}`}>
                          <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-all duration-700"></div>
                          <div className="absolute inset-4 bg-slate-900 rounded-xl border border-white/5 p-4 opacity-80 group-hover:opacity-100 transition-opacity">
                             <div className="w-full h-full bg-slate-800 rounded-lg animate-pulse"></div>
                          </div>
                       </div>
                    </TiltCard>
                 </div>
                 
                 <div className="w-full md:w-2/5 space-y-6">
                    <div className="text-cyan-400 font-mono text-xs tracking-widest uppercase">{project.category}</div>
                    <h4 className="text-4xl font-bold text-white">{project.title}</h4>
                    <p className="text-slate-400 leading-relaxed text-lg">A cutting-edge platform designed to revolutionize the way users interact with data.</p>
                    <div className="flex gap-2 flex-wrap">
                       {project.tags.map((tag, t) => (
                          <span key={t} className="px-3 py-1 rounded-full border border-white/10 text-xs text-white bg-white/5">{tag}</span>
                       ))}
                    </div>
                    <button className="flex items-center gap-3 text-white font-bold group-hover:gap-6 transition-all pt-4">
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