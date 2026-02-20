import React from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import RevealSection from '../ui/RevealSection';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <RevealSection>
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-600/20 to-transparent rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            
            <div className="grid lg:grid-cols-2 gap-20 relative z-10">
              <div>
                <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">Let's create <br />the <span className="text-cyan-400">future.</span></h3>
                <p className="text-slate-400 text-xl mb-12 max-w-md">
                  Ready to transform your digital presence? We're currently accepting new projects for Q4.
                </p>
                
                <div className="space-y-8">
                  <a href="mailto:hello@novatech.com" className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-1">Email Us</p>
                      <p className="text-2xl font-bold text-white">hello@novatech.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all duration-300">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-mono uppercase tracking-wider mb-1">Visit Us</p>
                      <p className="text-2xl font-bold text-white">Silicon Valley, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-6 bg-white/5 p-10 rounded-3xl backdrop-blur-sm border border-white/5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase tracking-wider">Name</label>
                    <input type="text" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase tracking-wider">Email</label>
                    <input type="email" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white uppercase tracking-wider">Service</label>
                  <select className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-slate-300 focus:outline-none focus:border-cyan-500 transition-all">
                    <option>Web Development</option>
                    <option>Product Design</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white uppercase tracking-wider">Details</label>
                  <textarea rows="4" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all"></textarea>
                </div>
                <button className="w-full bg-white text-black font-bold py-5 rounded-xl transition-all transform hover:scale-[1.01] hover:shadow-2xl flex justify-center items-center gap-2">
                  Send Inquiry <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default Contact;