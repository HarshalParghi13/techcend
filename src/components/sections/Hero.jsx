import React from 'react';
import { ArrowRight, Database, Cloud, Terminal, Shield, Zap } from 'lucide-react';
import RevealSection from '../ui/RevealSection';
import TiltCard from '../ui/TiltCard';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('[https://grainy-gradients.vercel.app/noise.svg](https://grainy-gradients.vercel.app/noise.svg)')] opacity-20 brightness-100 contrast-150"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <RevealSection animation="slide-right">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/50 border border-white/10 text-cyan-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-xl shadow-cyan-900/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Redefining Digital Agencies
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter">
                We Build <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  Digital Scale.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-cyan-500 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                Award-winning development studio merging creative aesthetics with engineering excellence.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10">Start Project</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('work')}
                  className="px-8 py-4 bg-slate-900/50 border border-white/10 text-white hover:bg-slate-800 rounded-full font-semibold transition-all backdrop-blur-md"
                >
                  View Case Studies
                </button>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={200} className="hidden lg:block perspective-1000">
             <TiltCard className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
                
                <div className="relative h-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
                   <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>
                   
                   <div className="flex items-center justify-between border-b border-white/5 pb-6">
                      <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                         <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                         <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-slate-800/50 text-xs font-mono text-cyan-400 border border-white/5">v2.0.4 Deploying...</div>
                   </div>

                   <div className="space-y-6 relative z-10">
                      <div className="flex gap-4 items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                         <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400"><Database className="w-6 h-6" /></div>
                         <div>
                            <div className="text-sm font-bold text-white">Database Cluster</div>
                            <div className="text-xs text-slate-400">US-East-1 • Healthy</div>
                         </div>
                         <div className="ml-auto text-emerald-400 text-xs font-mono">99.9%</div>
                      </div>
                      
                      <div className="flex gap-4 items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                         <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400"><Cloud className="w-6 h-6" /></div>
                         <div>
                            <div className="text-sm font-bold text-white">CDN Edge</div>
                            <div className="text-xs text-slate-400">Global Mesh • Active</div>
                         </div>
                         <div className="ml-auto text-emerald-400 text-xs font-mono">24ms</div>
                      </div>
                   </div>

                   <div className="mt-6 p-4 rounded-xl bg-slate-950/50 border border-white/5 font-mono text-xs text-slate-400 overflow-hidden relative">
                      <div className="absolute top-0 right-0 p-2 text-slate-600"><Terminal className="w-4 h-4" /></div>
                      <p><span className="text-purple-400">const</span> <span className="text-blue-400">future</span> = <span className="text-yellow-400">await</span> build();</p>
                      <p className="mt-1"><span className="text-purple-400">return</span> scale(future);</p>
                   </div>
                </div>

                <div className="absolute -right-8 top-20 bg-slate-800 p-4 rounded-2xl border border-slate-700 shadow-xl animate-bounce duration-[4000ms] flex items-center gap-3">
                   <Shield className="text-emerald-400 w-5 h-5" />
                   <span className="text-xs font-bold text-white">Secure</span>
                </div>
                <div className="absolute -left-4 bottom-20 bg-slate-800 p-4 rounded-2xl border border-slate-700 shadow-xl animate-bounce duration-[5000ms] delay-1000 flex items-center gap-3">
                   <Zap className="text-amber-400 w-5 h-5" />
                   <span className="text-xs font-bold text-white">Fast</span>
                </div>
             </TiltCard>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;