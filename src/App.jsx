import React from 'react';

// Components
import './components/ui/custom.css';
import SpotlightEffect from './components/ui/SpotlightEffect';

// Sections
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import InfiniteMarquee from './components/sections/InfiniteMarquee';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const App = () => {
  return (
    <div className="font-sans antialiased bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-white overflow-x-hidden cursor-default">
      <SpotlightEffect />
      <Navbar />
      <Hero />
      <InfiniteMarquee />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
