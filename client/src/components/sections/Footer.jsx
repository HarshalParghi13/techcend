import React from 'react';
import { Mail, Phone } from 'lucide-react';
import logoImage from '../../assets/logo1.svg'; 

const Footer = () => {
  // Added smooth scroll function for the "Home" link
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 pt-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
              {/* The logo image container */}
              <div 
                className="mb-6 cursor-pointer w-fit" 
                onClick={scrollToTop}
              >
                <img 
                  src={logoImage} 
                  alt="Techcend Logo" 
                  className="transition-transform hover:scale-105 duration-300" 
                  width={150}
                />
              </div>
            <p className="text-slate-500 max-w-sm mb-8">
              We define the future of digital experiences through innovation, engineering, and design.
            </p>
            
            {/* NEW EMAIL AND PHONE SECTION */}
            <div className="flex flex-col gap-4 mt-2">
              <a href="mailto:info@techcend.com" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors w-fit">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium tracking-wide">info@techcend.com</span>
              </a>
              <a href="tel:+918160087428" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors w-fit">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium tracking-wide">+91 8160087428</span>
              </a>
            </div>

          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Sitemap</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {/* Updated links to smoothly scroll to their respective sections */}
              <li><a href="#top" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#services" onClick={(e) => smoothScroll(e, 'services')} className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#work" onClick={(e) => smoothScroll(e, 'work')} className="hover:text-cyan-400 transition-colors">Solutions</a></li>
              <li><a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="hover:text-cyan-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* REPLACED "LEGAL" WITH "SOCIALS" */}
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">X (Twitter)</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Techcend Agency. All rights reserved.</p>
          <p>Designed & Built in Ahmedabad, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;