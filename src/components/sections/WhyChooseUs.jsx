import React from 'react';
import { CheckCircle, Layers, Zap, Shield } from 'lucide-react';
import RevealSection from '../ui/RevealSection';

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
           <div className="lg:col-span-1">
              <RevealSection className="sticky top-32">
                 <h2 className="text-cyan-500 font-mono text-sm mb-4">/// WHY CHOOSE US</h2>
                 <h3 className="text-4xl font-bold text-white mb-6">Designed for <br />Growth & Scale.</h3>
                 <p className="text-slate-400 leading-relaxed mb-8">
                    We don't just write code. We analyze your business model to create digital solutions that solve real problems.
                 </p>
                 <div className="flex flex-col gap-4">
                    {['Agile Methodology', 'Cloud Native', '24/7 Support'].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 text-white font-medium border-l-2 border-slate-800 pl-4 py-1">
                          <CheckCircle className="w-5 h-5 text-cyan-500" /> {item}
                       </div>
                    ))}
                 </div>
              </RevealSection>
           </div>

           <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <RevealSection delay={100} className="md:col-span-2">
                 <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-all">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full group-hover:bg-blue-600/30 transition-colors"></div>
                    <Layers className="w-10 h-10 text-blue-400 mb-6" />
                    <h4 className="text-2xl font-bold text-white mb-2">Full-Stack Capability</h4>
                    <p className="text-slate-400 max-w-md">From database architecture to frontend animations, we handle the entire stack with unified excellence.</p>
                 </div>
              </RevealSection>

              <RevealSection delay={200}>
                 <div className="h-full bg-slate-900/50 border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-all">
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <Zap className="w-8 h-8 text-amber-400 mb-6" />
                    <h4 className="text-xl font-bold text-white mb-2">Blazing Fast</h4>
                    <p className="text-slate-400 text-sm">99/100 Google PageSpeed scores guaranteed.</p>
                 </div>
              </RevealSection>

              <RevealSection delay={300}>
                 <div className="h-full bg-slate-900/50 border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-all">
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <Shield className="w-8 h-8 text-emerald-400 mb-6" />
                    <h4 className="text-xl font-bold text-white mb-2">Enterprise Security</h4>
                    <p className="text-slate-400 text-sm">Bank-grade encryption and data protection.</p>
                 </div>
              </RevealSection>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;