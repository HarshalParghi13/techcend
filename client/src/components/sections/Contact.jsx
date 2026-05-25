import React, { useState } from 'react';
import { Mail, MapPin, ArrowRight, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';

// Inline fallback for the RevealSection to resolve the compilation issue
const RevealSection = ({ children }) => <div className="w-full">{children}</div>;
const WEB3FORMS_URL = import.meta.env.VITE_WEB3FORMS_URL;
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  
  // States for our custom dropdown
  const [selectedService, setSelectedService] = useState('Web Development');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const servicesList = ['Web Development', 'Product Design', 'Marketing'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // 1. Get form data
    const formData = new FormData(e.target);
    
    if (!WEB3FORMS_URL || !WEB3FORMS_ACCESS_KEY) {
      console.error('Web3Forms environment variables are not configured.');
      setStatus('error');
      return;
    }

    formData.append("access_key", WEB3FORMS_ACCESS_KEY); 

    try {
      // 3. Send the email
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        e.target.reset(); // Clear the form
        setSelectedService('Web Development'); // Reset dropdown
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Error", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Fetch Error", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <RevealSection>
          <div className="bg-slate-900 rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-20 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-gradient-to-b from-blue-600/20 to-transparent rounded-full blur-[80px] md:blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
              <div>
                <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 lg:mb-8 tracking-tight">Let's create <br />the <span className="text-cyan-400">future.</span></h3>
                <p className="text-slate-400 text-lg sm:text-xl mb-10 lg:mb-12 max-w-md">
                  Ready to transform your digital presence? We're currently accepting new projects.
                </p>
                
                <div className="space-y-6 lg:space-y-8">
                  <a href="mailto:info@techcend.com" className="flex items-center gap-4 sm:gap-6 group cursor-pointer w-fit">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all duration-300">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-slate-500 font-mono uppercase tracking-wider mb-1">Email Us</p>
                      <p className="text-lg sm:text-2xl font-bold text-white truncate">info@techcend.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 sm:gap-6 group w-fit">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all duration-300">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-500 font-mono uppercase tracking-wider mb-1">Visit Us</p>
                      <p className="text-lg sm:text-2xl font-bold text-white">Ahmedabad, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4 sm:space-y-6 bg-white/5 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-white/5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">Name</label>
                    <input type="text" name="name" required className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">Email</label>
                    <input type="email" name="email" required className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
                  </div>
                </div>
                
                {/* --- CUSTOM DROPDOWN IMPLEMENTATION --- */}
                <div className="space-y-2 relative">
                  <label className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">Service</label>
                  
                  {/* Hidden input to ensure Web3Forms still receives the selected value */}
                  <input type="hidden" name="service" value={selectedService} />
                  
                  {/* Dropdown Trigger */}
                  <div 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 text-sm sm:text-base text-slate-300 focus:outline-none focus:border-cyan-500 transition-all cursor-pointer flex items-center justify-between hover:border-white/20"
                  >
                    <span>{selectedService}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <>
                      {/* Invisible overlay to close dropdown when clicking outside */}
                      <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
                      
                      <div className="absolute z-50 w-full mt-2 bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                        {servicesList.map((service) => (
                          <div
                            key={service}
                            onClick={() => {
                              setSelectedService(service);
                              setIsDropdownOpen(false);
                            }}
                            className={`px-4 py-3 sm:py-4 cursor-pointer transition-colors text-sm sm:text-base ${
                              selectedService === service 
                                ? 'bg-cyan-500/10 text-cyan-400 font-medium' 
                                : 'text-slate-300 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            {service}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                {/* --- END CUSTOM DROPDOWN --- */}
                
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">Details</label>
                  <textarea name="message" rows="4" required className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-cyan-500 transition-all"></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-white text-black font-bold py-4 sm:py-5 text-sm sm:text-base rounded-xl transition-all transform hover:scale-[1.01] hover:shadow-2xl flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'idle' && <>Send Inquiry <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" /></>}
                  {status === 'submitting' && 'Sending...'}
                  {status === 'success' && <><CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" /> Sent Successfully!</>}
                  {status === 'error' && <><AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" /> Error. Try Again.</>}
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
