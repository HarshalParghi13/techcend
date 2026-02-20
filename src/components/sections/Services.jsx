import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import RevealSection from '../ui/RevealSection';
import TiltCard from '../ui/TiltCard';
import { SERVICES } from '../../data/constants';

const Services = () => {
  return (
    <section id="services" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        <RevealSection>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/5 pb-8">
            <div className="max-w-3xl">
              <h2 className="text-cyan-500 font-mono text-sm mb-4">/// OUR EXPERTISE</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                High-End Engineering <br />
                <span className="text-slate-600">For Modern Brands.</span>
              </h3>
            </div>
            <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group">
               <span>View All Services</span>
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <RevealSection key={index} delay={index * 100} animation="fade-up">
              <TiltCard className="h-full">
                <div className="group h-full relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/50 hover:to-blue-600/50 transition-all duration-500">
                   <div className="h-full bg-slate-900 rounded-[23px] p-8 flex flex-col relative overflow-hidden">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                         {service.icon}
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors relative z-10">{service.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">{service.desc}</p>
                      
                      <div className="flex items-center text-xs font-bold text-white opacity-40 group-hover:opacity-100 uppercase tracking-widest transition-all relative z-10">
                         Explore <ChevronRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                   </div>
                </div>
              </TiltCard>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;