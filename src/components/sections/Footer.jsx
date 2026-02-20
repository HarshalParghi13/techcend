import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="border-b border-white/5 pb-20 mb-20">
           <h2 className="text-[12vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent text-center tracking-tighter select-none">
              NOVATECH
           </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold flex items-center gap-2 mb-6">
               <span className="text-white tracking-tight">Nova<span className="text-cyan-400">Tech</span></span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8">
              We define the future of digital experiences through innovation, engineering, and design.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'Github'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Sitemap</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Agency</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2024 NovaTech Agency. All rights reserved.</p>
          <p>Designed & Built in Silicon Valley</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;