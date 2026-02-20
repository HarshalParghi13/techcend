import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'work' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={(e) => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            e.preventDefault();
          }}
          className="text-2xl font-bold flex items-center gap-2 cursor-pointer z-50"
        >
          <div className="relative group">
             <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
             <div className="relative w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700/50">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-black text-xl">N</span>
             </div>
          </div>
          <span className="text-white tracking-tight font-display">Nova<span className="text-cyan-400">Tech</span></span>
        </div>

        <div className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1 rounded-full border border-white/5 backdrop-blur-sm">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="px-6 py-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
           <a 
             href="#contact" 
             onClick={(e) => scrollToSection(e, 'contact')}
             className="group relative px-6 py-2.5 rounded-full overflow-hidden bg-white text-slate-950 font-bold text-sm transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
           >
             <span className="relative z-10">Let's Talk</span>
             <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
           </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50 p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-950 z-40 flex flex-col items-center justify-center gap-8 animate-in slide-in-from-top-10 fade-in duration-300">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={`#${item.id}`} 
              onClick={(e) => scrollToSection(e, item.id)} 
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 hover:to-cyan-400 transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;